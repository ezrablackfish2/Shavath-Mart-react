import Button from "./Button.jsx";
import styles from "./Header.module.css";
import search from "../public/eye.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import flag from "../public/flag.png";


import { useState } from "react";


interface Props {
		search: string;
		setSearch: (selected: any) => void;
}
export default function Search( {search, setSearch}: Props ) {

	
		const [searchOn, setSearchOn] = useState(false);


		function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
					setSearch(event.target.value);
				};
	    return (
		    <>
		            <div className={styles.Search}>
		                <input className={styles.searchbar} type="text" placeholder={`Search `} onChange={handleSearch}/>
		    		<div  className={styles.searchIcon}>
				<FontAwesomeIcon color="#757575" icon={faSearch} />
		    		</div>
		    		<div  className={styles.searchIconSmall} onClick={() => setSearchOn(!searchOn)}>
				<FontAwesomeIcon color="#757575" icon={faSearch} />	
		    		</div>
		    		
		    		<span className={styles.searchbuttonlink}>
		                <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		    		</span>
		    <a className={styles.searchlink} href="/search">
		                <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		    		</a>
		            </div>
		    		{
					searchOn && 
		    	    		<input className={styles.dropSearch} type="text" placeholder="Search" onChange={handleSearch} />
				}
		    </>
		        )
}
