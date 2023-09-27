import { UserProvider } from './src/context/UserContext';
import Routes from './src/routes/Routes';

export default function App() {

  return (
      <UserProvider>
        <Routes/>
      </UserProvider>
  );
}