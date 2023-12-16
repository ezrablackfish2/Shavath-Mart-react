import styles from "./Bottom.module.css";
import style from "./Header.module.css";



export default function Bottom( user, token ) {
		return (
			<>
				<div className={styles.bottomwhole}>
				<div className={styles.bottomtitle}>
				Are you a Buyer or a Provider?
				</div>
				<div className={styles.bottomcontent}>
				Shavath Mart offers a customized solution for you! You can provide your merchandise to customers without the need for a physical store. We market your goods at our various locations nationwide. Thanks to this collaboration, you have the option to reach your desired customers or distribute your products nationwide
				</div>
				<a href="mailto:hiwimehdi@gmail.com" className={styles.bottombutton}> Contact Us</a>
		{ user && token ? (
			  	<>
				<div className={styles.adminlinks}>
		  		<button className={style.upload}>
		  		<a className={style.whitelink} href="/upload">
		  		Upload A Product
		  		</a>
		  		</button>
				</div>
				<div className={styles.adminlinks}>
			  	<button className={style.upload}>
		  		<a className={style.whitelink} href="/update-logo">
		  		Update Logo
		  		</a>
		  		</button>
				</div>
			  	</>
		  )
			  :
			  (
			  null
			  )
		  }
			</div>
			</>



				)
}
