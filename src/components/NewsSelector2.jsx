import React, { useState, ChangeEvent } from "react";
import styles from "./CustomDropdown.module.css";

interface Props {
		setSelectedNews: (selected: string) => void;
		selectedNews: string;
}

function NewsSelector({ setSelectedNews, selectedNews }: Props) {
	        const news = ["Latest", "Sales and promotions", "Shipping and returns", "Books", "Customer service", "Company news"]  
		const [isHovered, setIsHovered] = useState(false);

	  function handleOptionChange(event: ChangeEvent<HTMLSelectElement>) {
		      setSelectedNews(event.target.value);
		    }

	  return (
		      <div
		        className={styles.sortall}
		        onMouseEnter={() => setIsHovered(true)}
		        onMouseLeave={() => setIsHovered(false)}
		      >
		        <select className={styles.sorter} id="platform" value={""} onChange={handleOptionChange}>
		          <option value="">{selectedNews}</option>
		          {news.map((option, index) => (
				            <option key={index} value={option}>
				              {option}
				            </option>
				          ))}
		        </select>
		        {isHovered && (
				        <div className={styles.drops}>
				          {news.map((option, index) => (
						              <div key={index} className={styles.dropsItems} onClick={() => setSelectedNews(option)}>
						                {option}
						              </div>
						            ))}
				        </div>
				      )}
		      </div>
		    );
}

export default NewsSelector;
