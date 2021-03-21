import React, {  useEffect, useState } from "react";
import StatusBox from './components/StatusBox'
import StatusHistory from './components/StatusHistory'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.name = React.createRef(); 
    this.status = React.createRef();
    this.state = {
      statuses: []
    };
  }


getStatuses () {
  fetch(
    'http://localhost:3001/getStatuses/',
    {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
  )
    .then(res => res.json())
    .then(response => {
      localStorage.setItem('statuses', JSON.stringify(response))
      this.setState({statuses: response})
    })
    .catch(error => console.log(error)
    )
}


componentDidMount() {
  this.getStatuses()
}

handleClick() {
  fetch(
    'http://localhost:3001/newUser/',
    {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    },
    {
      name: this.name.current.value,
      status: this.status.current.value
    }
  )
    .then(res => res.json())
    .then(response => {
      console.log(response);
      this.getStatuses();
    })
    .catch(error => console.log(error));
  
}


  render() {
    return (
    <div className="App">
      <div className="container">
        <StatusBox />
        <input type="text" ref={this.name}/>
        <input type="text" ref={this.status}/>
        <button onClick={this.handleClick}>Submit</button>
        <StatusHistory statuses={this.state.statuses}/>
      </div>
    </div>
    )
}
}

export default App;
