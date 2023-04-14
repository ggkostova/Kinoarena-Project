import './App.css';
// import './App.scss';
import HomePage from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import CinemasPage from './pages/Cinemas';
import ProgramPage from './pages/Program';
import NavigationBar from './components/Navigation';
import NavigationLoggedBar from './components/NavigationLogged';
import Footer from './components/Footer';
import BuyTickets from './pages/Tickets';
import DetailsPage from './pages/Details';
import CinemaHall from './pages/Seats';
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import userManager from './services/UserManager';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    setInterval(()=>{
      const logged = userManager.isUserLoggedIn();
      setUser(logged);
    },100);
  },[])

  // const [cinema, setCinema] = useState('');
  // const [movieName, setMovieName] = useState('');
  // const [date, setDate] = useState('');
  // const [username, setUsername] = useState('');
  // setCinema(tickets.cinema);
  // setMovieName(tickets.movieName);
  // setDate(tickets.date);
  // setUsername(tickets.user);

  return <>
     {user ? <NavigationLoggedBar/> : <NavigationBar />}
    <Routes>
      <Route index element={<Navigate to={'/home'} />}></Route>
      <Route path="/home" element={<HomePage/>}></Route>      
      <Route path="/cinemas" element={<CinemasPage/>}></Route>    
      <Route path="/program" element={<ProgramPage/>}></Route>  
      <Route path="/tickets" element={<BuyTickets/>}></Route>
      <Route path="/details" element={<DetailsPage/>}></Route>  
      <Route path="/seats" element={<CinemaHall cinema={"XXX"} movieName={"Bobo"} date={"06.06"} username={"goshko"}/> }></Route>     
      <Route path="/profile" element={<ProfilePage/>}></Route> 
      <Route path="/login" element={<LoginPage/>}></Route> 
      <Route path="/register" element={<RegisterPage/>}></Route> 

    </Routes>
    <Footer/>
  </>;
}

export default App;