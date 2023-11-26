import styles from  "./Hero.module.css";

export default function Hero() {
	    return (
		    	<div className={styles.titlephoto}>
		            <div data-text="ShavathMart" className={styles.herotitle}>
		    	ShavathMart
		                <img
		    		alt="this is the main photo"
		    		className={styles.hero}
		    		src="/hero.jpg"/>
		            </div>
		    	</div>
		        )
}

