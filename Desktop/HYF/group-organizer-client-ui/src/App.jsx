import './App.css';
import { NavBar } from './components/nav-bar/NavBar';
import { Footer } from './components/footer/Footer';
import { Outlet } from 'react-router';



function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
