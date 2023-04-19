import './App.css';
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
import localStorageManager from './services/LocalStorageManager';
import CINEMAS from './cinemas';
import MOVIES from './movies';
import { Provider } from 'react-redux';
import store from './store/store';
import delayFunction from './DelayFunction';

function App() {
  localStorageManager.setItem("cinemas", CINEMAS);
  localStorageManager.setItem("movies", MOVIES);
  
  const [movieId, setMovieId] = useState("");
  const [movie, setMovie] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    setInterval(()=>{
      const logged = userManager.isUserLoggedIn();
      setUser(logged);
    },100);
  },[])

  useEffect(() => {
    const getId = async () => {
       await delayFunction(localStorageManager.getItem, ["detailsId"]).then((res) => {
            setMovieId(res);
            console.log(res);
          });
    }
    getId();
  }, []);

  
  useEffect(() => {
      setMovie(MOVIES.find((m) => m.id === movieId));
      console.log(movieId);
    
  }, [movieId]);

  useEffect(() => {
    if(!movie){
      console.log(movie);
    }
  }, [movie]);


  return <>
  <Provider store ={store}>
  {user ? <NavigationLoggedBar/> : <NavigationBar />}
    <Routes>
      <Route index element={<Navigate to={'/home'} />}></Route>
      <Route path="/home" element={<HomePage setMovieId={setMovieId}/>}></Route>      
      <Route path="/cinemas" element={<CinemasPage/>}></Route>    
      <Route path="/program" element={<ProgramPage/>}></Route>  
      <Route path="/tickets" element={<BuyTickets/>}></Route>
      <Route path="/details" element={movie && <DetailsPage movieId={movieId} movie={movie}/>}></Route>  
      <Route path="/seats" element={<CinemaHall cinema={"XXX"} movieName={"Bobo"} date={"06.06"} username={"goshko"}/> }></Route>     
      <Route path="/profile" element={<ProfilePage/>}></Route> 
      <Route path="/login" element={<LoginPage/>}></Route> 
      <Route path="/register" element={<RegisterPage/>}></Route> 

    </Routes>
    <Footer/>
  </Provider> 
  </>;
}

export default App;