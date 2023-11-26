import Button from "./Button.jsx";
import styles from "./Header.module.css";

interface Props {
	        search: string;
	        setSearch: (selected: any) => void;
}

export default function SearchProduct({ search, setSearch}: Props) {
	        function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
			                setSearch(event.target.value);
			        };
	    return (
		            <div className={styles.Search}>
		                <input onChange={handleSearch} className={styles.searchbar2} type="text" placeholder="Search Products"/>
		    	<a className={styles.searchbuttonlink}>
		                <Button className={styles.searchbutton} text="Search" image="/search.png" imageclass={styles.searchimage} width="" bgColor=""/>
		    	</a>
		            </div>
		        )
}

