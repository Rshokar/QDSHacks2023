
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Layout from './components/Layout/Layout';
import Analytics from './features/Analytics/Analytics';
import Insights from './features/Insights/Insights';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

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
