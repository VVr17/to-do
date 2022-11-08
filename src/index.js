import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants/theme';
import { App } from 'components/App/App';
import { persistor, store } from 'redux/store';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* wrap Redux Provider over App */}
      <Provider store={store}>
        {/* wrap PersistGate over App to get to LocalStorage*/}
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
