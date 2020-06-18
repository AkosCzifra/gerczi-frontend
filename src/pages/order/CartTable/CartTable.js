import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 12px 0;
`;

const TableHeader = styled.thead`
  text-align: left;
`;

const TableHeaderRow = styled.tr`
  color: #886735;
  font-size: 1.1rem;
  border-bottom: 1.5px solid #908870;
`;

const TableHeaderItem = styled.th`
  padding-bottom: 8px;
  text-align: center;
`;

const TableBodyItem = styled.td`
  font-size: 1.1rem;
  padding: 8px 0;
  vertical-align: center;
  text-align: center;
`;

const CustomTr = styled.tr`
  border-top: 1.5px solid #908870;
`;

const TableTotal = styled(TableBodyItem)`
  font-weight: bold;
`;

const CartTable = ({ cart, getSumPrice }) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderRow>
          <th>Cart Items</th>
          <TableHeaderItem>Quantity</TableHeaderItem>
          <TableHeaderItem>Item Price</TableHeaderItem>
          <TableHeaderItem>Item Total</TableHeaderItem>
        </TableHeaderRow>
      </TableHeader>
      <tbody>
        {cart.map((item) => (
          <tr key={item.productId}>
            <td>{item.name}</td>
            <TableBodyItem>{item.quantity}x</TableBodyItem>
            <TableBodyItem>${item.price}</TableBodyItem>
            <TableBodyItem>${item.quantity * item.price}</TableBodyItem>
          </tr>
        ))}
        <CustomTr>
          <td colSpan={2} />
          <TableBodyItem>Subtotal</TableBodyItem>
          <TableBodyItem>${getSumPrice()}</TableBodyItem>
        </CustomTr>
        <tr>
          <td colSpan={2} />
          <TableBodyItem>Shipping</TableBodyItem>
          <TableBodyItem>$10</TableBodyItem>
        </tr>
        <tr>
          <td colSpan={2} />
          <TableTotal>Total</TableTotal>
          <TableTotal>${getSumPrice() + 10}</TableTotal>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartTable;
