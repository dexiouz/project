

import React from 'react';
import { Table, Input, Layout, Icon } from 'antd';
import {  Link } from "react-router-dom";
import '../styles/Styles.css';


const getEdit = () =>{
  // alert('edited')
}

const getViewed = () =>{
  // alert('viewed')
}

const getDeleted = () =>{
  // alert('deleted')
}


const columns = [
  {
    title: 'Code',
    dataIndex: 'code',
  },
  {
  title: 'Store Name',
  dataIndex: 'name',
  sorter: (a, b) => a.name.length - b.name.length,
}, 
{
  title: 'Owner',
  dataIndex: 'owner',
  
},
{
  title: 'Address',
  dataIndex: 'address'
},
{
  title: 'Phone number',
  dataIndex: 'phone'
},
{
  title: 'Whatsapp number',
  dataIndex: 'wphone'
},
{
  title: 'City',
  dataIndex: 'city'
},
{
  title: 'Actions',
  dataIndex: 'icons'
}
];

const data = [{
  key: '1',
  name: 'Emma and Emi Store',
  code: 'ABA42',
  owner: 'Kat P',
  phone: '1234567890',
  wphone: '1234567890',
  city: 'Aba',
  address: 'New York No. 1 Lake Park',
  time: '12-12-18 01:21:01',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<Link to="details"><button onClick={getViewed} style={{border:0.5}}> <Icon type="eye"  style={{color:'#000'}} /></button></Link>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
}, {
  key: '2',
  name: 'Emma and Emi Store',
  code: 'ABA43',
  owner: 'Kat P',
  phone: '1234567890',
  wphone: '1234567890',
  city: 'Aba',
  address: 'London No. 1 Lake Park',
  time: '12-12-18 01:21:01',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<Link to="details"><button onClick={getViewed} style={{border:0.5}}> <Icon type="eye"  style={{color:'#000'}} /></button></Link>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
}, {
  key: '3',
  name: 'Emma and Emi store' ,
  code: 'ABA44',
  owner: 'Kat P',
  phone: '1234567890',
  address: 'Sidney No. 1 Lake Park',
  time: '12-12-18 01:21:01'
}, {
  key: '4',
  name: 'Emma and Emi Store',
  code: 'ABA45',
  phone: '1234567890',
  address: 'London No. 2 Lake Park',
  time: '12-12-18 01:21:01'
},
 {
  key: '5',
  name: 'Emma and Emi Store',
  code: 'ABA45',
  phone: '1234567890',
  address: 'London No. 2 Lake Park',
  time: '12-12-18 01:21:01'
}
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

export default class LocationAdd extends React.Component {
  
  render() {
    const Search = Input.Search;
    
    return (
      <Layout>
      <Search 
      style={{marginLeft: 0}}
        className="zero-margin"
        size='large'
        placeholder="Search for Store"
        onSearch={value => console.log(value)}
        enterButton
      />
      <br/><br/>
      
        <Table columns={columns} dataSource={data} onChange={onChange} />
      
      </Layout>
    );
  }
}











