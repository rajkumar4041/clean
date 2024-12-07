import  { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import './index.css'; // Your global styles (optional)

import { createTheme, MantineProvider } from '@mantine/core'; // Import MantineProvider for theming
import App from './App';

import '@mantine/core/styles.css'; // Updated import for Mantine styles

const theme = createTheme({
  colors: {
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
