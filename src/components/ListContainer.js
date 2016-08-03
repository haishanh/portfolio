import React, { Component } from 'react';
import List from './List';

class ListContainer extends Component {

  state = {
    data: undefined
  }


  componentDidMount = () => {

    console.log('fetch data...');

    fetch('data.json')
      .then( res => res.json())
      .then( json => {
        console.log(json);
        this.setState({data: json});
      })
      .catch( reason => {
        console.log('Can not fetch data becase of', reason);
      });
  }

  render = () => {
    if (!this.state.data) {
      return <strong>No data!</strong>;
    }

    let items = Object.keys(this.state.data).map(item => {
      return <List key={item} {...this.state.data[item]}/>;
    });

    return <div>{ items }</div>;
  }

}

export default ListContainer;