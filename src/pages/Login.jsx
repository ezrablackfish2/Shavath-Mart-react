import React, { useState, useContext, useRef, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import styles from '../components/Signup.module.css';
import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';
import logo from '../public/logo.png'



interface Props {
	  user: string;
	  token: string;
	  formData: {
		      username: string;
		      password: string;
		    };
	  setFormData: any;
	  loggedin: boolean;
	  setlogin: React.Dispatch<React.SetStateAction<boolean>>;
	  response: any;
	  search: any;
	  setSearch: any;
	  setSelectedAbout: any;
	  setSelectedService: any;
	  selectedAbout: any;
	  selectedService: any; 
}

function Login({ user, token, formData, setFormData, loggedin, setlogin, response, search, setSearch, setSelectedAbout, setSelectedService, selectedAbout, selectedService }: Props) {
	  const userRef = useRef(null);
	  const errRef = useRef(null);

	  const [errMsg, setErrMsg] = useState('');
	  const [success, setSuccess] = useState(false);
	  const navigate = useNavigate();

	  useEffect(() => {
		      if (user && token) {
			            setSuccess(true);
			            setlogin(true);
			          }

		      if (userRef.current) {
			            userRef.current.focus();
			          }
		    }, [user, token]);

	  useEffect(() => {
		      setErrMsg('');
		    }, [formData.username, formData.password]);

	  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		      setFormData({
			            ...formData,
			            [e.target.name]: e.target.value,
			          });
		    };

	  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		      e.preventDefault();

		      try {
			            const response = await axios.post('https://api.shavathmart.com/api/auth/login', formData);
			            console.log(response);
			            const token = response?.data?.token;
			            console.log(token);
			            console.log(formData.username);
			            console.log(formData.password);
			            const user = formData.username;
			            const pwd = formData.password;
			            console.log('Login successful:', response.data);
			            localStorage.setItem('user', user);
			            localStorage.setItem('token', token);
			            setSuccess(true);
			            setlogin(true);
			          } catch (err) {
					        if (!err?.response) {
							        setErrMsg('No Server Response');
							      } else if (err.response.status === 400) {
								              setErrMsg('Missing user name or password');
								            } else if (err.response.status === 401) {
										            setErrMsg('Unauthorized');
										          } else {
												          setErrMsg('Login Failed');
												        }
					        if (errRef.current) {
							        errRef.current.focus();
							      }
					      }
		    }

	  function remover() {
		      localStorage.removeItem('user');
		      localStorage.removeItem('token');
		      setSuccess(false);
		      setlogin(false);
		    }
	document.title = "Sign up"
	  return (
		  	    <>
		        <link
		          href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap"
		          rel="stylesheet"
		        />


		        <Header user={user} token={token} setlogin={setlogin} setSuccess={setSuccess} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>

		        {success ? (
				        <div className={styles.login}>
				          <h1 className={styles.logintitle}>You are logged In!</h1>
				          <br />
				          <p>
				            <button onClick={remover} className={styles.loginbutton}>Log Out</button>
					    <a className={styles.loggedlink} href="/"> Go to Home Page </a>
					    <a className={styles.loggedlink} href="/upload">Upload A Product </a>
					    <a className={styles.loggedlink} href="/update-logo"> Update The Logo </a>
				          </p>
				        </div>
				      ) : (
					              <>
					                <div className={styles.login}>
					                  <img className={styles.signupimage} src={logo} alt="Logo" />
					                  <h1 className={styles.logintitle}>Sign In</h1>
					                  <p
					                    className={errMsg ? `${styles.rederror}` : 'offscreen'}
					                    ref={errRef}
					                    aria-live="assertive"
					                  >
					                    <span className={styles.rederror}>{errMsg}</span>
					                  </p>
					                  <form onSubmit={handleSubmit}>
					                    <label className={styles.labeltitle}>Username</label>
					                    <input
					                      className={styles.titleinput}
					                      type="text"
					                      name="username"
					      		placeholder="username"
					                      ref={userRef}
					                      autoComplete="off"
					                      value={formData.username}
					                      onChange={handleChange}
					                    />
					                    <label className={styles.labeltitle}>Password</label>
					                    <input
					                      className={styles.titleinput}
					                      type="password"
					                      name="password"
					      		placeholder="password"
					                      value={formData.password}
					                      onChange={handleChange}
					                    />
					                    <button className={styles.loginbutton} type="submit">
					                      Signin
					                    </button>
					                  </form>
					                </div>
					              </>
					            )}
		      </>
		    );
}

export default Login;
