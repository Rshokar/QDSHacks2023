
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Layout from './components/Layout/Layout';
import Analytics from './features/Analytics/Analytics';
import Insights from './features/Insights/Insights';

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnalyticsController from './controllers/AnalyticsController';


function App() {

  const anC = new AnalyticsController();
  useEffect(() => {
    const run = async () => {
      const documents = await anC.getData(5, "2022-04-09");
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
