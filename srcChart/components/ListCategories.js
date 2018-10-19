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
    title: 'Category Name',
    dataIndex: 'name',
  },
  {
    title: 'Time',
    dataIndex: 'time',
  },
  {
    title: 'Actions',
    dataIndex: 'icons',
  }
   

];

const data = [{
  key: '1',
  name: 'Tea',
  time: '12-12-18 01:21:01',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
  },
  {
  key: '2',
  name: 'Toilet Soap',
  time: '12-12-18 01:21:01',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
  },
  {
  key: '3',
  name: 'Biscuits',
  time: '12-12-18 01:21:01', 
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
  },
  {
  key: '4',
  name: 'Toothbrush',
  time: '12-12-18 01:21:01',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
  },
  {
  key: '5',
  name: 'Marker',
  time: '12-12-18 01:21:01',
  icons:[<button onClick={getEdit} style={{border:0.5}}> <Icon type="edit"  style={{color:'#000'}} /></button>,,<button onClick={getDeleted} style={{border:0.5}}> <Icon type="delete"  style={{color:'#000'}} /></button>]
}
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

export default class ListCategories extends React.Component {
  
  render() {
    const Search = Input.Search;
    
    return (
      <Layout>
      <Search 
      style={{marginLeft: 0}}
        className="zero-margin"
        size='large'
        placeholder="Search for Categories"
        onSearch={value => console.log(value)}
        enterButton
      />
      <br/><br/>
      
        <Table columns={columns} dataSource={data} onChange={onChange} />
      
      </Layout>
    );
  }
}











