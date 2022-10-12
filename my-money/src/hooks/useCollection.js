import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    //to avoid an infintife loop
    //when you compare arrays with same content is must not be true
    //in this case it is false, because the array will be recreated by rerendering
    //and then the reference is different and it will be false 
    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current

    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        if (query) {
            ref = ref.where(...query)
        }

        if (orderBy) {
            ref = ref.orderBy(...orderBy)
        }

        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc) => {
                results.push({...doc.data(), id: doc.id})
            })
            setDocuments(results)
            setError(null)
        }, (error) => {
            console.log(error)
        })
        //unsubscribe on unmount
        return () => {
            unsubscribe()
        }

    }, [collection, query, orderBy])


    return {documents, error}
}