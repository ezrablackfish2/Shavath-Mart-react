import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import styles from './App.module.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import useProducts from "./hooks/useProducts.jsx";
import useHeroes from "./hooks/useHeroes.jsx";
import Upload from "./pages/Upload.jsx";
import UploadHero from "./pages/UploadHero.jsx";
import UpdateHero from "./components/UpdateHero.jsx";



interface AppProps {
	  Component: React.ComponentType;
	  pageProps: any; // Change 'any' to the appropriate type if known
}


function App() {
	  const [search, setSearch] = useState("");
	  const [token, setToken] = useState('');
	  const [user, setUser] = useState('');
	  const [loginData, setLoginData] = useState({
		      username: "",
		      password: "",
		    });
	  const [signupData, setSignupData] = useState({
	      username: '',
	      password1: '',
	      password2: '',
	    });
	  const [selectedService, setSelectedService] = useState("Services");
	  const [selectedAbout, setSelectedAbout] = useState("About");

	  const [loggedin, setlogin] = useState(false);
	  const [isAuthenticated, setIsAuthenticated] = useState(false);
	  const [VG, setVG] = useState(null);
	  const [rateOn, setRateOn] = useState(false);
	  const [watchlistOn, setWatchlistOn] = useState(false);
	  const [darkoverlay, setDarkOverlay] = useState(false);
	  const [watchlistSuccess, setWatchlistSuccess] = useState(false);
	  const [watchlist, setWatchlist] = useState(false);
	  const [remover, setRemover] = useState(true);
	  const [shower, setShower] = useState(false);
	useEffect(() => {
	      if (typeof localStorage !== 'undefined') {
		            const storedToken = localStorage.getItem("token");
		            const storedUser = localStorage.getItem("user");
		            const storedIsAuthenticated = localStorage.getItem('token') !== null;

		            if (storedToken) setToken(storedToken);
		            if (storedUser) setUser(storedUser);
		            setIsAuthenticated(storedIsAuthenticated);
		          }
	    }, []);
	const { products, error, isLoading } = useProducts({ user, token });
	const { heroes, err, isLoad } = useHeroes({ user, token });
  return (
	  <>
	  <div className={styles.all}>
	  	  <div className={styles.navigation}>
	  	  </div>
	  	  <div className={styles.main}>
	  	  <Router>
	  	  <Routes>
	  	  	<Route index element={<Home shower={shower} remover={remover} user={user} token={token} formData={loginData} setFormData={setLoginData} loggedin={loggedin} setlogin={setlogin} setToken={setToken} setUser={setUser} products={products} error={error} isLoading={isLoading} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout} heroes={heroes} />} />
	  	  	<Route path="/:id" element={<ProductDetail items={products} shower={shower} remover={remover} user={user} token={token} formData={loginData} setFormData={setLoginData} loggedin={loggedin} setlogin={setlogin} setToken={setToken} setUser={setUser} products={products} error={error} isLoading={isLoading} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>}  />
	  	  	<Route path="/login" element={<Login shower={shower} remover={remover} user={user} token={token} formData={loginData} setFormData={setLoginData} loggedin={loggedin} setlogin={setlogin} setToken={setToken} setUser={setUser} products={products} error={error} isLoading={isLoading} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>} />
	  	  	<Route path="/upload" element={<Upload shower={shower} remover={remover} user={user} token={token} formData={loginData} setFormData={setLoginData} loggedin={loggedin} setlogin={setlogin} setToken={setToken} setUser={setUser} products={products} error={error} isLoading={isLoading} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>} />
	  	  	<Route path="/upload-logo" element={<UploadHero shower={shower} remover={remover} user={user} token={token} formData={loginData} setFormData={setLoginData} loggedin={loggedin} setlogin={setlogin} setToken={setToken} setUser={setUser} products={products} error={error} isLoading={isLoading} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>} />
	  	  	<Route path="/update-logo" element={<UpdateHero shower={shower} remover={remover} user={user} token={token} formData={loginData} setFormData={setLoginData} loggedin={loggedin} setlogin={setlogin} setToken={setToken} setUser={setUser} products={products} error={error} isLoading={isLoading} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>} />
	  	  </Routes>
	  	  </Router>
	  	  </div>
	  	  </div>
	  </>
  );
}

export default App;
