import { useState } from "react"; 
import apiClient from "../api/api-client-hero-axios.jsx";
import { useEffect } from "react";

interface Props {
		user: any;
		token: any;
}

function useHeroes({user, token}: Props) {
	        const [heroes, setHeroes ] = useState([]);
	        const [err, setErr] = useState("");
	        const [isLoad, setLoad] = useState(false);

	        useEffect(() => {
			
		if (!token && !user) {
			setLoad(true);
	                apiClient.get("")
                        .then(res =>  {
				setHeroes(res.data);
				console.log(res.data);
				setLoad(false);
			})
                        .catch(err =>{
				setErr(err.message)
				setLoad(false);
			});
			} else if (token && user) {
		                setLoad(true);
		                apiClient.get("" ,
				{
                                headers: {
                               'Content-Type': 'application/json',
                               Authorization: `Bearer ${token}`,
                        },
		})
                    .then(res =>  {
                               setHeroes(res.data);
				console.log(res.data);
                                setLoad(false);
                        })
                        .catch(err =>{
                               setErr(err.message)
                             setLoad(false);
                        });
		}
			        }, []);
		return {heroes, err, isLoad};
};

export default useHeroes;
