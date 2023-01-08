
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Page from './components/Page/Page';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <div className="App">
      <Layout>
        <NavBar />
      </Layout>
    </div>
  );
}

export default App;
