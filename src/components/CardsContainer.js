import React, { Component } from 'react';
import Card from './Card';
import Loading from './Loading';

class CardsContainer extends Component {

  state = {
    data: undefined
  }


  componentDidMount = () => {

    // console.log('fetch data...');

    fetch('data.json')
      .then( res => res.json())
      .then( json => {
        this.setState({data: json});
      })
      .catch( reason => {
        console.log('Can not fetch data becase of', reason);
      });
  }

  render = () => {
    if (!this.state.data) {
      return <Loading />;
    }

    let items = Object.keys(this.state.data).map(item => {
      return <Card key={item} {...this.state.data[item]} />;
    });

    return <div className="content">{ items }</div>;
  }

}

export default CardsContainer;