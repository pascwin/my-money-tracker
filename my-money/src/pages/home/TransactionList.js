import { useFirestore } from "../../hooks/useFirestore"

import styles from "./Home.module.css"

const TransactionList = ({ transactions }) => {
    const { deleteDocument } = useFirestore("transaction")
    return (
        <ul className={styles.transactions}>
            {
                transactions.map((transaction) => {
                    return (
                        <li key={transaction.id}>
                            <p className={styles.name}>{transaction.name}</p>
                            <p className={styles.amount}>€ {transaction.amount}</p>
                            <button onClick={() => deleteDocument(transaction.id)}>x</button>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default TransactionList;