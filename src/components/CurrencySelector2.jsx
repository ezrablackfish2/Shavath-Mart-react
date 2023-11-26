import React, { useState, ChangeEvent } from "react";
import styles from "./CustomDropdown.module.css";

interface Props {
		setSelectedCurrency: (selected: string) => void;
		selectedCurrency: string;
}

function CurrencySelector({ setSelectedCurrency, selectedCurrency }: Props) {
		const currency = ["ethiopia", "america", "british", "china", "Saudi Arabia", "india"]
		const [isHovered, setIsHovered] = useState(false);

	  function handleOptionChange(event: ChangeEvent<HTMLSelectElement>) {
		      setSelectedCurrency(event.target.value);
		    }

	  return (
		      <div
		        className={styles.sortall}
		        onMouseEnter={() => setIsHovered(true)}
		        onMouseLeave={() => setIsHovered(false)}
		      >
		        <select className={styles.sorter} id="platform" value={""} onChange={handleOptionChange}>
		          <option value="">{selectedCurrency}</option>
		          {currency.map((option, index) => (
				            <option key={index} value={option}>
				              {option}
				            </option>
				          ))}
		        </select>
		        {isHovered && (
				        <div className={styles.drops}>
				          {currency.map((option, index) => (
						              <div key={index} className={styles.dropsItems} onClick={() => setSelectedCurrency(option)}>
						                {option}
						              </div>
						            ))}
				        </div>
				      )}
		      </div>
		    );
}

export default CurrencySelector;

