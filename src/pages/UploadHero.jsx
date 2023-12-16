import React from 'react';
import UploadHeroPage from '../components/UploadHero.jsx';
import styles from '../components/Upload.module.css';
import Header from '../components/Header.jsx';

interface UploadProps {
	  user: any; 
	  token: any; 
	  setlogin: any;
	  setSuccess: any;
	  search: any;
	  setSearch: any;
	  setSelectedAbout: any;
	  setSelectedService: any;
	  selectedAbout: any;
	  selectedService: any;
}

const Upload: React.FC<UploadProps> = ({ user, token, setSuccess, setlogin, search, setSearch, setSelectedAbout, setSelectedService, selectedAbout, selectedService }) => {
	document.title = "Upload Cover"
	  return (
		      <>
		        <link
		          href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap"
		          rel="stylesheet"
		        />

		        <Header user={user} token={token} setlogin={setlogin} setSuccess={setSuccess} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>


		        <UploadHeroPage user={user} token={token} />
		      </>
		    );
};

export default Upload;

