import React from 'react'
import ReactDOM from 'react-dom/client'

import { Layout } from './Layout';
import { Provider } from './hooks/context';

import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <Layout />
      <GlobalStyles />
    </Provider>
  </React.StrictMode>
)
