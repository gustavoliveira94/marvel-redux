import React, { Component } from 'react';
import './App.css';
import Character from './components/Character';
import { connect } from 'react-redux'
import { requestAPI } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.requestAPI()
  }

  render() {
    console.log(this.props.api)
    const { api } = this.props
    return (
      <div className="App">
        <img className="logo" width="280px" src="https://cdn-store.iseeme.com/skin/frontend/polar/default/images/marvel/category-pages/Marvel-logo.png" alt="Marvel" />
        <div className="container">
          <Character
            detail={api}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ requestApiReducer }) {
  return {
    api: requestApiReducer.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestAPI: () => dispatch(requestAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
