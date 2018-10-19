import React from 'react';
import { Table, Input, Layout, Icon } from 'antd';
import { Link } from "react-router-dom";
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
    dataIndex: 'code'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: 'Barcode',
    dataIndex: 'barcode'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price.length - b.price.length
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    sorter: (a, b) => a.quantity.length - b.quantity.length
  },
  {
    title: 'Actions',
    dataIndex: 'icons',
  }   

];

const data = [{
  key: '1',
  code: '0001',
  name: 'Colgate Double Action 1 Pack Hard',
  barcode: '123456789',
  price: '120',
  quantity: '200',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<Link to="view_product"><button onClick={getViewed} style={{border:0.5}}> <Icon type="eye"  style={{color:'#000'}} /></button></Link>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
  },
  {
  key: '2',
  code: '0002',
  name: 'Lanshare Children Soft',
  barcode: '123456789',
  price: '130',
  quantity: '240',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<Link to="view_product"><button onClick={getViewed} style={{border:0.5}}> <Icon type="eye"  style={{color:'#000'}} /></button></Link>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
  },
  {
  key: '3',
  code: '0003',
  name: 'Guhwa Pencil',
  barcode: '123456789',
  price: '150',
  quantity: '210',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<Link to="view_product"><button onClick={getViewed} style={{border:0.5}}> <Icon type="eye"  style={{color:'#000'}} /></button></Link>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
  },
  {
  key: '4',
  code: '0004',
  name: 'A1 Book',
  barcode: '123456789',
  price: '170',
  quantity: '280',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<Link to="view_product"><button onClick={getViewed} style={{border:0.5}}> <Icon type="eye"  style={{color:'#000'}} /></button></Link>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
  },
  {
  key: '5',
  code: '0005',
  name: 'D1 Book',
  barcode: '123456789',
  price: '125',
  quantity: '160',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<Link to="view_product"><button onClick={getViewed} style={{border:0.5}}> <Icon type="eye"  style={{color:'#000'}} /></button></Link>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
}
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

export default class ListProducts extends React.Component {
  
  render() {
    const Search = Input.Search;
    
    return (
      <Layout>
      <Search 
      style={{marginLeft: 0}}
        className="zero-margin"
        size='large'
        placeholder="Search for Products"
        onSearch={value => console.log(value)}
        enterButton
      />
      <br/><br/>
      
        <Table columns={columns} dataSource={data} onChange={onChange} />
      
      </Layout>
    );
  }
}











