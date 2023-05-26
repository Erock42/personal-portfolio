import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      
    // fetching the GET route from the Express server (server.js)
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
  // render/return method that displays the different components of the app (always export at bottom unless defer is used in some cases)
    render() {
      return (
        <div className="App">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
        </div>
      );
    }
}
  
export default App;
