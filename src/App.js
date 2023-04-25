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
  const [loggedIn, setLoggedIn] = useState(false);
  const [detailsId, setDetailsId] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const logged = userManager.isUserLoggedIn();
      setUser(logged);
    }, 100);
  }, [user])

  useEffect(() => {
    const getId = async () => {
      await delayFunction(localStorageManager.getItem, ["detailsId"]).then((res) => {
        setDetailsId(res);
      });
    }
    getId();
  }, []);

  useEffect(() => {
    if (user) {
      handleLogin();
    } else {
      handleLogout();
    }
  }, [user])

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };
  return <>
    <Provider store={store}>
      <div className="app-wrapper">
        {loggedIn ? <NavigationLoggedBar handleLogout={handleLogout} /> : <NavigationBar />}
        <Routes>
          <Route index element={<Navigate to={'/home'} />}></Route>
          <Route path="/home" element={<HomePage movieId={detailsId} setMovieId={(id) => setDetailsId(id)} />}></Route>
          <Route path="/cinemas" element={<CinemasPage />}></Route>
          <Route path="/program" element={<ProgramPage/>}></Route>
          <Route path="/tickets" element={<BuyTickets />}></Route>
          <Route path="/details/:detailsId" element={<DetailsPage detailsId={detailsId} />}></Route>
          <Route path="/seats" element={<CinemaHall cinema={"XXX"} movieName={"Bobo"} date={"06.06"} username={"goshko"} />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/login" element={<LoginPage handleLogin={handleLogin} />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
        <div className="push"></div>
        <Footer />
      </div>
    </Provider>
  </>;
}

export default App;