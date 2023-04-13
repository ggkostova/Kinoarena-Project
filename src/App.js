import './App.css';
// import './App.scss';
import HomePage from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import CinemasPage from './pages/Cinemas';
import ProgramPage from './pages/Program';
import NavigationBar from './components/Navigation';
import Footer from './components/Footer';
import TicketsPage from './pages/Tickets';
import DetailsPage from './pages/Details';
import CinemaHall from './pages/Seats';
import ProfilePage from './pages/ProfilePage'

function App() {
  return <>
    <NavigationBar />
    <Routes>
      <Route index element={<Navigate to={'/home'} />}></Route>
      <Route path="/home" element={<HomePage/>}></Route>      
      <Route path="/cinemas" element={<CinemasPage/>}></Route>    
      <Route path="/program" element={<ProgramPage/>}></Route>  
      <Route path="/tickets" element={<TicketsPage/>}></Route>
      <Route path="/details" element={<DetailsPage/>}></Route>  
      <Route path="/seats" element={<CinemaHall/>}></Route>     
      <Route path="/profile" element={<ProfilePage/>}></Route> 
    </Routes>
    <Footer/>
  </>;
}

export default App;