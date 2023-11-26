import styles from "./Bottom.module.css";


export default function Bottom() {
		return (
				<div className={styles.bottomwhole}>
				<div className={styles.bottomtitle}>
				Are you a Buyer or a Provider?
				</div>
				<div className={styles.bottomcontent}>
				Shavath Mart offers a customized solution for you! You can provide your merchandise to customers without the need for a physical store. We market your goods at our various locations nationwide. Thanks to this collaboration, you have the option to reach your desired customers or distribute your products nationwide
				</div>
				<a href="mailto:hiwimehdi@gmail.com" className={styles.bottombutton}> Contact Us</a>
				</div>


				)
}
