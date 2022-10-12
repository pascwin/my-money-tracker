import { Fragment, useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore"

const TransactionForm = ({ uid }) => {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0)
    const { addDocument, response } = useFirestore("transaction")

    const nameInputHandler = (event) => {
        setName(event.target.value)
    }

    const amountInputHandler = (event) => {
        setAmount(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addDocument({
            uid: uid,
            name: name,
            amount: amount,
        })
    }

    //reset the form fields
    useEffect(() => {
        if(response.success) {
            setName("")
            setAmount("")
        }
    }, [response.success])

    return (
        <Fragment>
            <h3>Add a Transaction</h3>
            <form>
                <label>
                    <span>Transaction name:</span>
                    <input type="text" required onChange={nameInputHandler} value={name} />
                </label>
                <label>
                    <span>Amount (€):</span>
                    <input type="number" required onChange={amountInputHandler} value={amount} />
                </label>
                <button onClick={handleSubmit}>Add Transaction</button>
            </form>
        </Fragment>
    )
}

export default TransactionForm;