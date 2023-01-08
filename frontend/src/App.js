
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Layout from './components/Layout/Layout';
import Analytics from './features/Analytics/Analytics';
import Insights from './features/Insights/Insights';

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Controller from './controllers/Controller';


function App() {

  const con = new Controller();
  useEffect(() => {
    const run = async () => {
      const documents = await con.getRoutes(1, 7);
      console.log(documents);
    }
    run();
  }, [])

  return (
    <div className="App">
      <Router>
        <Layout>
          <NavBar />
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route exact path="/insights" element={<Insights />} />
          </Routes>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
