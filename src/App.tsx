import './App.css';
import AppProviders from './common/providers/AppProviders';
import Routing from './pages/Routes';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Roboto+Mono:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <AppProviders>
        <Routing />
      </AppProviders>
    </>
  );
}

export default App;
