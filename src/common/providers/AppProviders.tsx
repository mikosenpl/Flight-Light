import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { queryDefaultConfig } from '../api/queryConfig';
import { store } from '../store/store';
import { lightTheme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';

interface AppProvidersProps {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}
const AppProviders = ({ children }: AppProvidersProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: queryDefaultConfig,
    },
  });
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ThemeProvider theme={lightTheme}>
            <>
              <GlobalStyle />
              {children}
            </>
          </ThemeProvider>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default AppProviders;
