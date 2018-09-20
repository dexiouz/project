import React from 'react';
import { Table, Input, Layout, Icon } from 'antd';
import '../styles/Styles.css';


const getEdit = () => {
  // alert('edited')
}

const getViewed = () => {
  // alert('viewed')
}

const getDeleted = () => {
  // alert('deleted')
}


const columns = [
  {
    title: 'Code',
    dataIndex: 'code',
  },
  {
    title: 'Date Issued',
    dataIndex: 'date',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
  },
  {
    title: 'Total Amount',
    dataIndex: 'amount',
    sorter: (a, b) => a.amount.length - b.amount.length
  },
  {
    title: 'Status',
    dataIndex: 'status',
  }
   

];

const data = [{
  key: '1',
  code: '12333',
  date: 'Sep 19, 2018 1:00:12 PM',
  customer: '',
  amount: '6500',
  status: 'completed'
  },
  {
  key: '2',
  code: '123',
  date: 'Sep 19, 2018 1:00:12 PM',
  customer: '',
  amount: '6100',
  status: 'completed'
  },
  {
  key: '3',
  code: '5466',
  date: 'Sep 19, 2018 1:00:12 PM',
  customer: 'Jane Doe',
  amount: '6400',
  status: 'completed'
  },
  {
  key: '4',
  code: '7666',
  date: 'Sep 19, 2018 1:00:12 PM',
  customer: 'Jane Doe',
  amount: '600',
  status: 'completed'
  },
  {
  key: '5',
  code: '6755',
  date: 'Sep 19, 2018 1:00:12 PM',
  customer: 'John Doe',
  amount: '650',
  status: 'completed'
}
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

export default class ListOrders extends React.Component {
  
  render() {
    const Search = Input.Search;
    
    return (
      <Layout>
      <Search 
      style={{marginLeft: 0}}
        className="zero-margin"
        size='large'
        placeholder="Search for orders"
        onSearch={value => console.log(value)}
        enterButton
      />
      <br/><br/>
      
        <Table columns={columns} dataSource={data} onChange={onChange} />
      
      </Layout>
    );
  }
}











