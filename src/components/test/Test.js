import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: 'test'
  };

  componentDidMount() {
    console.log(
      'Component did mount - This is where you make http call to backend'
    );
  }

  componentWillMount() {
    console.log('Component will mount - Runs before ComponentsDidMount');
  }

  componentDidUpdate() {
    console.log(
      'Components Did Update - after components did update i.e on change of state'
    );
  }

  componentWillUpdate() {
    console.log('ComponentsWillUpdate...');
  }

  componentWillReceiveProps(nextProp, nextState) {
    console.log(
      'when your components receive new properties then this is run--------usually used with redux'
    );
  }

  //componentWill* are getting depricated

  static getDerivedStateFromProps(nextProp, nextState) {
    return null;
  }

  getSnapshotBeforeUpdate(nextProp, nextState) {
    console.log('getSnapshotBeforeUpdate...');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
