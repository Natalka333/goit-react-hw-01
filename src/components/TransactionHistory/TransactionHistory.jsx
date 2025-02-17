import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


const TransactionHistory = ({ items }) =>{
    return (
        <div className={css.transactionHistory}>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({ id, type, amount, currency }) => {
                        return (
                            <tr key={id}>
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}



TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    ).isRequired,
};

export default TransactionHistory