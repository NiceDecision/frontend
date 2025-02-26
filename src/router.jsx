import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Chat from './pages/chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
]);

export default router;
