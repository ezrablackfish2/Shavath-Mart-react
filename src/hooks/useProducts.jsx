import { useState } from "react"; 
import apiClient from "../api/api-client-axios.jsx";
import { useEffect } from "react";

interface Props {
		user: any;
		token: any;
}

function useProducts({user, token}: Props) {
	        const [products, setProducts ] = useState([]);
	        const [error, setError] = useState("");
	        const [isLoading, setLoading] = useState(false);

	        useEffect(() => {
					
					if (!token && !user) {
								setLoading(true);
						                apiClient.get("")
						                        .then(res =>  {
														setProducts(res.data);
														console.log(res.data);
														setLoading(false);
													})
						                        .catch(err =>{
														setError(err.message)
														setLoading(false);
													});
								} else if (token && user) {
									                setLoading(true);
									                apiClient.get("" ,
															{
																                                headers: {
																					                                'Content-Type': 'application/json',
																					                                Authorization: `Bearer ${token}`,
																					                        },
																				})
									                        .then(res =>  {
													                                setProducts(res.data);
																	console.log(res.data);
													                                setLoading(false);
													                        })
									                        .catch(err =>{
													                                setError(err.message)
													                                setLoading(false);
													                        });
											}

			        }, []);
		return {products, error, isLoading};
};

export default useProducts;
