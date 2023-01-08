
import './App.css';
import NavBar from './components/NavBar/NavBar';

import Layout from './components/Layout/Layout';
import Analytics from './features/Analytics/Analytics';
import Insights from './features/Insights/Insights';
import Page from './components/Page/Page';

function App() {
  return (
    <div className="App">
      <Layout>
        <NavBar />
        <Page>
          <Analytics />
        </Page>
      </Layout>
    </div>
  );
}

export default App;
