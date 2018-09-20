import React, { Component } from 'react';
import { Input } from 'antd';
import { Button, Radio, Icon } from 'antd';



export default class SearchBar extends Component {

  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  render() {
    const Search = Input.Search;
    const size = this.state.size;

    return (
      <div className="search-main">
        <div id="searchbar">

          <Search
            size='large'
            placeholder="Search for suppliers"
            onSearch={value => console.log(value)}
            enterButton
          />

        </div>
        <Button type="primary" icon="plus" size={size} id='search-btn'>Create a new supplier </Button>
      </div>
    )
  }
}