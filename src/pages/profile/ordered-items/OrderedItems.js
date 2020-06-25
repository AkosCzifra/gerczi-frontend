import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from '../../../httpService/axios';

import Arrow from '@material-ui/icons/KeyboardArrowDown';

const NoOrders = styled.h1`
  margin: 8px 0;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  text-align: center;
  color: #8e1717;
`;

const OrderContainer = styled.div`
  width: 100%;
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 12px;
  margin-top: 6px;
  border-radius: 10px;
  background-color: #908870;
  color: #121212;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 0;
  opacity: 0;
  overflow: hidden;
  width: 90%;
  background-color: #f5f5f5;
  border-radius: 0 0 10px 10px;
  transition: 1s ease-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      height: 415px;
    `}
`;

const OpenCloseIcon = styled(Arrow)`
  transition: transform 1s ease !important;

  ${({ isopen }) =>
    isopen === 'true' &&
    css`
      transform: rotate(-180deg);
    `}
`;

const PersonalInfo = styled.div`
  width: 90%;

  h1 {
    font-size: 1.2rem;
    margin-top: 6px;
    margin-bottom: 12px;
    border-bottom: 1px solid #908870;
    color: #886735;
  }

  h2 {
    display: inline-block;
    font-size: 1rem;
    color: #121212;
    margin-bottom: 6px;
    margin-right: 6px;
  }

  p {
    display: inline-block;
  }
`;

const Table = styled.table`
  width: 90%;
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
  padding: 4px 0;
  vertical-align: center;
  text-align: center;
`;

const OrderedItems = () => {
  const [orderedItems, setOrderedItems] = useState();
  useEffect(() => {
    const getOrders = async () => {
      try {
        let result = await axios.get('/order/get-orders');
        if (result.data && result.data.data) {
          result = result.data.data.map((item) => {
            return { ...item, isOpen: false };
          });
        }
        setOrderedItems(result);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${year}.${month}.${day}`;
  };

  const showOrderDetails = (orderId) => {
    const updatedOrder = orderedItems.map((order) => {
      if (order._id === orderId) {
        order.isOpen = !order.isOpen;
      }
      return order;
    });

    setOrderedItems(updatedOrder);
  };

  if (!orderedItems) return 'loading...';

  if (orderedItems.length === 0) return <NoOrders>You have not ordered anything yet!</NoOrders>;

  let counter = 0;
  return (
    <OrderContainer>
      {orderedItems.map((item) => {
        counter++;
        return (
          <OrderWrapper key={item._id}>
            <OrderHeader onClick={() => showOrderDetails(item._id)}>
              <p>#{counter}</p>
              <p>{formatDate(item.date)}</p>
              <div>
                <OpenCloseIcon isopen={item.isOpen.toString()} />
              </div>
            </OrderHeader>
            <OrderInfoContainer isOpen={item.isOpen}>
              <Table>
                <TableHeader>
                  <TableHeaderRow>
                    <th>Name</th>
                    <TableHeaderItem>Quantity</TableHeaderItem>
                    <TableHeaderItem>Price</TableHeaderItem>
                  </TableHeaderRow>
                </TableHeader>
                <tbody>
                  {item.orderedItems.map((ordered) => (
                    <tr key={ordered._id}>
                      <td>{ordered.productName}</td>
                      <TableBodyItem>{ordered.quantity}x</TableBodyItem>
                      <TableBodyItem>${ordered.price}</TableBodyItem>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <PersonalInfo>
                <h1>Contact info</h1>
                <div>
                  <h2>Name: </h2>
                  <p>{`${item.contactInfo.firstName} ${item.contactInfo.lastName}`}</p>
                </div>
                <div>
                  <h2>E-mail: </h2>
                  <p>{`${item.contactInfo.email}`}</p>
                </div>
                <div>
                  <h2>Phone: </h2>
                  <p>{`${item.contactInfo.phoneNumber}`}</p>
                </div>
              </PersonalInfo>
              <PersonalInfo>
                <h1>Shipping info</h1>
                <h2>Address:</h2>
                <p>{`${item.shippingInfo.zip} ${item.shippingInfo.city} ${item.shippingInfo.street}`}</p>
              </PersonalInfo>
            </OrderInfoContainer>
          </OrderWrapper>
        );
      })}
    </OrderContainer>
  );
};

export default OrderedItems;
