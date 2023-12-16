import React, { useState, useEffect } from 'react';
import Product from "./Product.jsx"
import styles from "./Products.module.css";

interface product {
		id: string;
		name: string;
		price: string;
		color: string;
		img: string;
		category: any;
		isAvailable: any;
		
}
type ProductsProp = {
		data : product[];
		search: any;
		selectedService: any;
}

export default function Products(props: ProductsProp) {
		const [currentPage, setCurrentPage] = useState(1);
		const productsPerPage = 6;
		const filteredProducts = props.data
	  	   .filter((product) => {
				    return props.search.toLowerCase() === ""
				    ? product
				    : product.name.toLowerCase().includes(props.search);
				})
		   .filter((product) => {
				if (props.selectedService == "Services" || props.selectedService == "All") {
					return(product);
				}
				if (product.category == props.selectedService) {
				return(product.category.includes(props.selectedService))
				}
			});
		const totalProducts = filteredProducts.length;
		const totalPages = Math.ceil(totalProducts / productsPerPage);
		const handlePageChange = (page: any) => {
			    		setCurrentPage(page);
			};
		  const handleNextPage = () => {
	      		if (currentPage < totalPages) {
		      		setCurrentPage(currentPage + 1);
				}
		  	};
		  const handlePrevPage = () => {
	      		if (currentPage > 1) {
				setCurrentPage(currentPage - 1);
				}
		  	};
		const startIndex = (currentPage - 1) * productsPerPage;
		const endIndex = Math.min(startIndex + productsPerPage, totalProducts);
		const currentProducts = filteredProducts.slice(startIndex, endIndex);
	    return (
		            <div className={styles.product}>
		                {
			                currentProducts
						.map((product) => (
			                    <Product key={product.id} product={product}/>
				                ))
				            }
		    	<div className={styles.pagination}>
		            {currentPage > 1 && (
				              <button className={styles.prevbutton} onClick={handlePrevPage}>Previous</button>
				            )}
		            {currentPage < totalPages && (
				              <button className={styles.nextbutton} onClick={handleNextPage}>Next</button>
				            )}
		          </div>
	            </div>
		        )
}
