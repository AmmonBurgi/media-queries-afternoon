import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dropDown: false
    }
  }
  handleClick =() =>{
    this.setState({dropDown: !this.state.dropDown})
  }
  render(){
  return (
    <div className="App">
      <header className="nav-wrapper">
        <span className='bootstrap'>Start Bootstrap</span>
          <div className='menu-initalize'>
            <span className='drop-menu-logo' onClick={this.handleClick}>
              <p className='menu'>MENU</p>
              <p>&#9776;</p>
            </span>
          </div>

        <div className='header-initalize'>
          <div className='header-info'>
            <span className='serv'>Services</span>
            <span className='port'>Portfolio</span>
            <span className='about'>About</span>
            <span className='team'>Team</span>
            <span className='contact'>Contact</span>
          </div>
        </div>
      </header>
      <div className={this.state.dropDown ? 'dropdown-info initial-drop-info' : 'dropdown-info' }>
        <span className='serv-span'>Services</span>
        <span className='port-span'>Portfolio</span>
        <span className='about-span'>About</span>
        <span className='team-span'>Team</span>
        <span className='contact-span'>Contact</span>
      </div>
      {/* <div className='main-body'>
          <span className='welcome'>Welcome To Our Studio</span>
          <span className='meet'>IT'S NICE TO MEET YOU</span>
          <button className='learn-more'>TELL ME MORE</button>
      </div> */}
    </div>
  )
  }
}

export default App
