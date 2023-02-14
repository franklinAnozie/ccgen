import Register from '../components/Register';
import Login from '../components/Login';
import { AppProvider } from '../context/regContext';

const Home = () => {
  return (
    <div>
      <AppProvider>
        <Register />
        <Login />
      </AppProvider>
    </div>
  )
}

export default Home