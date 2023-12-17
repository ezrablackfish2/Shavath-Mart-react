import styles from "./Bottom.module.css";
import style from "./Header.module.css";
import React, { useState } from 'react';
import styl from "./Signup.module.css";



export default function Bottom( { user, token } ) {


	function remover() {
			localStorage.removeItem('user');
			localStorage.removeItem('token');
			window.location.reload();
		  }

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
		{ 1 > 0 ? (
			  	<>
				<div className={styles.adminlinks}>
		  		<a className={style.whitelink} href="/upload">
		  		<button className={style.upload}>
		  		Upload A Product
		  		</button>
		  		</a>
				</div>
				<div className={styles.adminlinks}>
		  		<a className={style.whitelink} href="/update-logo">
			  	<button className={style.upload}>
		  		Update Logo
		  		</button>
		  		</a>
				</div>
				<div>
			{ user && token ?
				<button onClick={remover} className={styles.logoutbutton}>Log Out</button>
				:
				null
			}
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
