import { createBrowserRouter } from 'react-router-dom';
// import App from './App';
import Chat from './pages/chat';
import RankingPage from './pages/RankingPage';
import Challenge from './pages/Challenge';
import BirthInfoForm from './pages/InfoForm';

const router = createBrowserRouter([
  {
    path: '/users',
    element: <BirthInfoForm />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/rank',
    element: <RankingPage />,
  },
  {
    path: '/challenge',
    element: <Challenge />,
  },
]);

export default router;
