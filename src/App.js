import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state = {
    champions: [
      {name: 'Garry Kasparov'},
      {name: 'Anatoly Karpov'},
      {name: 'Vladimir Kramnik'}
    ]
  };
  nameChangedHandler = (event) => {
    this.setState({
      champions: [
        {name: event.target.value},
        {name: 'Anatoly Karpov'},
        {name: 'Vladimir Kramnik'}
      ]})
    };
    render() {
      return (
        <div className="App">
        <ol>
        <li>
        Create TWO new components: UserInput and UserOutput x
        </li>
        <li>
        UserInput should hold an input element, UserOutput two paragraphs x
        </li>
        <li>
        Output multiple UserOutput components in the App component (any paragraph texts of your choice) x
        </li>
        <li>
        Pass a username (of your choice) to UserOutput via props and display it there x
        </li>
        <li>
        Add state to the App component (=> the username) and pass the username to the UserOutput component x
        </li>
        <li>
        Add a method to manipulate the state (=> an event-handler method) x
        </li>
        <li>
        Pass the event-handler method reference to the UserInput component and bind it to the input-change event x
        </li>
        <li>
        Ensure that the new input entered by the user overwrites the old username passed to UserOutput x
        </li>
        <li>
        Add two-way-binding to your input (in UserInput) to also display the starting username x
        </li>
        <li>
        Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets x
        </li>
        </ol>
        <UserInput changed={this.nameChangedHandler} name={this.state.champions[0].name}/>
        <UserOutput name={this.state.champions[0].name}/>
        <UserOutput name={this.state.champions[1].name}/>
        <UserOutput name={this.state.champions[2].name}/>
        </div>
      );
    }
  }

  export default App;
