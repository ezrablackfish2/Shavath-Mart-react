import styles from "./Hero.module.css";
import white from "../public/white.jpg";


type HeroProps = {
		hero : {
				id : string;
				name : string;
				img : any;
				};
};
export default function Hero(props: HeroProps) {
	const imageData = props.hero.img.data;
	const uint8Array = new Uint8Array(imageData);
	const binaryString = uint8Array.reduce(
		  (data, byte) => data + String.fromCharCode(byte),
		  ''
	);
	const base64Image = btoa(binaryString);
	let imageURI = `data:image/png;base64,${base64Image}`;
	if (imageData.length < 20) {
		imageURI = white; 
	}
  const heroStyle = {
	backgroundImage: `url(${imageURI})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	width: '100%',
	position: 'relative',
  };


	return (
	   	<div className={styles.titlephoto}>
	        <div data-text="ShavathMart" className={styles.herotitle} style={heroStyle}>
	    	ShavathMart
	        <img
		alt="this is the main photo"
		className={styles.hero}
		src={imageURI}/>
	         </div>
	 	</div>
		        )
}

