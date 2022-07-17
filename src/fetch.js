import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';

export default class FetchEquation extends React.Component{
  
  state = {
    loading: true,
    equation: null,

  }
  
  async componentDidMount() {
    const url = "https://localhost:44310/answer";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({equation: data, loading: false })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.loading || !this.state.equation ? (<div>loading...</div>
        ) : (
        <div className="App-header-fetch"> 
          <div> <code>{this.state.equation.answer}</code> </div> 
        </div>)}
      </div>
    );
  }
}
    

