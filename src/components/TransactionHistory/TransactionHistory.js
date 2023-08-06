import PropTypes from 'prop-types';

import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <TableBody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.currency}</TableCell>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
};
// TransactionHistory.propTypes = {
//   transactions: PropTypes.objectOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       type: PropTypes.string,
//       amount: PropTypes.string,
//       currency: PropTypes.string,
//     })
//   ),
// };
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
