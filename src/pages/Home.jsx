import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Search from "../components/Search.jsx";
import Products from "../components/Products.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import SearchProduct from "../components/SearchProduct.jsx";
import Bottom from "../components/Bottom.jsx";
import useProducts from "../hooks/useProducts.jsx";
import styles from "../components/Home.module.css";


interface HomeProps {
	  shower: any; // Change 'any' to the specific type you're using
	  remover: any; // Change 'any' to the specific type you're using
	  user: any; // Change 'any' to the specific type you're using
	  token: any; // Change 'any' to the specific type you're using
	  setlogin: any;
	  setSuccess: any;
	  setSearch: () => void;
	  products: any;
	  error: any;
	  isLoading: any;
	  search: any;
	  selectedAbout: any;
	  selectedService: any;
	  setSelectedService: any;
	  setSelectedAbout: any;
}


function Home (  { shower, remover, user, token, setlogin, setSuccess, products, error, isLoading, search, setSearch, setSelectedAbout, setSelectedService, selectedAbout, selectedService }: HomeProps   ) {
	document.title = "Shavath Mart"
	return (
 <>
		      <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />
		      <Header setlogin={setlogin} setSuccess={setSuccess} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>
		      <Hero />
		      <div className="flex justify-center my-10">
		        <SearchProduct search={search} setSearch={setSearch}/>
		      </div>
		      <div className="flex justify-center mb-28">
			{error && <p className={styles.rederror}> Shavath site request error code 404 page not found </p>}
			{isLoading && <img src="/loading.gif" className={styles.loadhome} />}
			{ selectedAbout === "Shavath Mart" ?
						<div className={styles.about}>
						<div className={styles.abouttitle}>Shavath Mart</div>
						<div className={styles.aboutcontent}>
					<p>  6363    Shavath mart is local fashion store.We sell brand, new & original Products only, which are imported from around the world specially from Germany.</p>
					<p> 6363    You will find here Shoes, Bags, Cosmetics, Jewellery & other accessories.</p>

					<p> 6363    6363 We have free delivery service in Addis Ababa but we charged out of Addis Ababa.</p>
						</div>
					</div>
						: selectedAbout === "Location" ?
						<div className={styles.about}>
						<div className={styles.abouttitle}>Location</div>
						<div className={styles.aboutcontent}></div>
					<p>  6363  አድራሻ :-ሲ.ኤም.ሲ ጎልጎታ ህንፃ /ጊብሰን ት/ቤት ፊትለፊት/ምድርቤት  </p>
					<p>  6363  Address:-CMC Golgotha Tower Infront of Gibson school Basemen	 </p>
						</div>
						: selectedAbout === "Contact Us"?
						
						<div className={styles.about}>
						<div className={styles.abouttitle}>Contacts</div>
						<div className={styles.aboutcontent}></div>
					<p>6363  Phone Number = +251913657294</p>
					<p>6363  Phone Number = +251912243671</p>
						</div>
						
						:
					        <Products data={products} search={search} selectedService={selectedService} />
						}
		      </div>
		      <Bottom />
		      <Footer />
		    </>
	);
}

export default Home;
