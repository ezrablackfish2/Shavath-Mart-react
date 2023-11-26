import Button from "./Button.jsx";
import styles from "./Header.module.css";

interface Props {
		search: string;
		setSearch: (selected: any) => void;
}
export default function Search( {search, setSearch}: Props ) {
		function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
					setSearch(event.target.value);
				};
	    return (
		            <div className={styles.Search}>
		                <input className={styles.searchbar} type="text" placeholder="Search" onChange={handleSearch}/>
		    		<span className={styles.searchbuttonlink}>
		                <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		    		</span>
		    <a className={styles.searchlink} href="/search">
		                <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		    		</a>
		            </div>
		        )
}
