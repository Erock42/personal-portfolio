import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
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
      const response = await fetch('personal-portfolio');
      const body = await response.text();
    
      if (response.status !== 200) {
        throw Error(body);
      }
    
      const data = this.parseJSON(body);
      return data;
    };
    
    parseJSON(body) {
      try {
        const data = JSON.parse(body);
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    };
  
  // render/return method that displays the different components of the app (always export at bottom unless defer is used in some cases)
    render() {
      return (
        <div className="App">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      );
    }
}
  
export default App;
