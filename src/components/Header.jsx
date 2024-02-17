import Search from "./Search.jsx";
import styles from "./Header.module.css";
import ServiceSelector from "./ServiceSelector2.jsx";
import CustomDropdown from './ServiceSelector2.jsx';
import AboutSelector from './AboutSelector2.jsx';
import News from './NewsSelector2.jsx';
import Currency from './CurrencySelector2.jsx';
import React, { useState, useEffect } from 'react';
import social_handles from '../utils/social_handles.jsx'
import gmail from '../public/gmail.png'
import phone from '../public/phone.png'
import logo from '../public/logo.png';
import styl from "./Upload.module.css";
import user from '../public/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import flag from "../public/flag.png";


interface HeaderProps {
	  setlogin: (value: any) => void;
	  setSuccess: (value: any) => void;
	  search: any;
	  setSearch: any;
	  selectedAbout: any;
	  selectedService: any;
	  setSelectedAbout: (value: any) => void;
	  setSelectedService: (value: any) => void;
	  user: any;
	  token: any;
}

export default function Header({ user, token, setlogin, setSuccess, search, setSearch, selectedAbout, selectedService, setSelectedAbout, setSelectedService }: HeaderProps) {
	  const [selectedNews, setSelectedNews] = useState("News");
	  const [selectedCurrency, setSelectedCurrency] = useState("Currency");
	  const [selectOpen, setSelectOpen] = useState(false);
	  const [selectedDrop, setSelectedDrop] = useState("all");
	  const [isSticky, setIsSticky] = useState(false);

	  useEffect(() => {
		      const handleScroll = () => {
			            const scrollTop = window.scrollY;
			            setIsSticky(scrollTop > 140);
			          };

		      window.addEventListener('scroll', handleScroll);

		      return () => {
			            window.removeEventListener('scroll', handleScroll);
			          };
		    }, []);

	  function remover() {
		      localStorage.removeItem("user");
		      localStorage.removeItem("token");
		      window.location.reload()
		    }

	  return (
		      <>
		  	<div className={styles.promotion}>Get discount for many products</div>
		        <div className={styles.header}>
		  	<div className={styles.linkLogo}>
		  	  <a href="/">
		            <img className={styles.logo} src={logo} alt="Logo Image"/>
		          </a>
		  	</div>
		  	    <div className={!isSticky ? styles.dropdowns : styles.dropdownsfixed}>
		          <ServiceSelector
		            selectedService={selectedService}
		            setSelectedService={setSelectedService}
		          />
		          <AboutSelector
		            selectedAbout={selectedAbout}
		            setSelectedAbout={setSelectedAbout}
		          />
		        </div>
		  	<div className={styles.headerdiv}>
		            <button onClick={() => setSelectedAbout("Contact Us")} className={styles.headerphone}>
		              <img
		                className={styles.headerphoneimage}
		                src={phone}
		                alt="Phone Image"
		              />
		            </button>
		          </div>
		          <div className={styles.headerdiv}>
		            <a href="mailto:hiwimehdi@gmail.com" className={styles.headergmail}>
		              <img
		                className={styles.headergmailimage}
		                src={gmail}
		                alt="Gmail Image"
		              />
		            </a>
		          </div>
		  	<a href="/update-logo">
		  	<img src={flag} className={styles.flag} />
		  	</a>
		  { user && token ?
		  	<div style={{ display: "inline", zIndex: 4}} onClick={remover}>
		  	<FontAwesomeIcon className={styles.logoutButton} icon={faRightFromBracket} />
		  	</div>
			  :
			  null
		  }
		  	<div className={styles.navigationbar}> 
		          <Search search={search} setSearch={setSearch} />
		  	<a href="/upload">
			  <FontAwesomeIcon className={styles.loginButton} icon={faUser} />
		  	</a>
		        </div>
		  	
		          
		          <div className={styles.headermedia}>

		  {social_handles.map(({ icon, link }) => (
				                <div className={styles.headeritems} key={link}>
				                  <a className={styles.headerlink} href={link}>
				                    <img
				                      className={styles.headerimages}
				                      src={icon}
				                      alt="Social Media Image"
				                    />
				                  </a>
				                </div>
				              ))}
		          </div>
		        </div>
		        
		        
		      </>
		    );
}
