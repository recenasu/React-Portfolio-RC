// Import required React libraries
import { Outlet } from 'react-router-dom';

// Import styles and components
import './App.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Define div styles
const styles = {
  appSize: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}


function App() {
  return (
    <div style={styles.appSize}>
      <Header />
      <Navigation />
      {/* Outlet component for conditional swapping of displayed page */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
