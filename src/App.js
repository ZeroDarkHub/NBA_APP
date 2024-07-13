
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Error from './components/Error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import useFetch from './useFetch';


function App() {
  // Accessing the API key stored in a React environment variable
  const API_KEY =`${process.env.REACT_APP_API_KEY}`;
  // const key = '9ea1fa7e6f6f4e609978e72a233b54b5';
  const team = "LAL"

  const {data,pending,error} = useFetch(`https://api.sportsdata.io/v3/nba/scores/json/PlayersBasic/${team}?key=${API_KEY}`);
  console.log(data);

  
  
  return (
    <div className="app">
      { pending && <p>Loading Weather...</p>} 
      { error && <p>{error}</p> }
      { data && (
     <div className="container">
      <div className="navigation">
        <Router>
          <Navbar/>
            <Switch>

            <Route exact path='/'>
              <Home data={data}/>
            </Route>

            <Route path='/page1'>
             <Page1/>
            </Route>

            <Route path='/page2'>
              <Page2/>
            </Route>

            <Route path='/page3'>
              <Page3/>
            </Route>

            <Route path='*'>
              <Error/>
            </Route>

          </Switch>
        </Router>
      </div>
     </div>
      )}
    </div>
  );
}

export default App;
