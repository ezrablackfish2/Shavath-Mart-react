import sty from '../components/Home.module.css';
import styles from "../components/Detail.module.css";
import style from "../components/Review.module.css";
import styl from "../components/Upload.module.css";
import { useEffect, useState } from "react";
import white from "../public/white.jpg";
import apiClient from "../api/api-client-hero-axios.jsx";




function UpdateHero( user, token) {

	const [name, setName] = useState('');
	  const [price, setPrice] = useState('');
	  const [image, setImage] = useState(null);
	  const [color, setColor] = useState('');
	  const [description, setDescription] = useState('');
	  const [availability, setAvailability] = useState(false);
	  const [imagePreview, setImagePreview] = useState(null);
	  const [category, setCategory] = useState('All');
	const id = 4;

	function ProductUpdater(formData2: any) {
		console.log(formData2);
		 apiClient.put(`update/${id}` ,
 			formData2,
	                        {
                                 headers: {
                                 'Content-Type': 'multipart/form-data',
                                 Authorization: `Bearer ${token}`,
	                         },
                                 })
				   .then(res =>  {
	   				console.log("successfully update", res.data);
		   			})
		                        .catch(err =>{
					console.log(err.message)
				});
				
	}


	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	      const file = e.target.files?.[0];

	      if (file) {
		            setImage(file);

		            const reader = new FileReader();
		            reader.onload = () => {
				            setImagePreview(reader.result);
				          };
		            reader.readAsDataURL(file);
		          } else {
				        setImage(null);
				        setImagePreview(null);
				      }
	    };

  const handleUpdate = (e: React.FormEvent) => {
	      e.preventDefault();
	      if (user && token) {
		const formData = new FormData();
			            formData.append('name', name != '' ? name: "logo");
				    formData.append('img', image != null ? image:  white);
		            console.log(image);
		            ProductUpdater(formData);
		     	    } else {
				        }
	    };


	document.title = "update cover";
	return (
		<>
				    <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />
      {user && token ? (
			              <>
			      	<div className={styl.uploadbody}>
			            <h1 className={styl.uploadtitle}>Update Data</h1>
			      	<form className={styl.uploadform} onSubmit={handleUpdate}>
			            <label className={styl.labeltitle}>Product Name</label>
			            <input
			              className={styl.titleinput}
			              type="text"
			              value={name}
			              onChange={(e) => setName(e.target.value)}
			              placeholder="Product Name"
			            />
			            <label className={styl.labeltitle}>Product Image</label>
			            <input
			              className={styl.titleinput}
			              type="file"
			              accept="image/*"
			              onChange={handleImageChange}
			              placeholder="Put Image"
			            />
			            {imagePreview && <img src={imagePreview} alt="Image Preview" className={styl.previewImage} />}

			            <button className={styl.uploadupdatebutton} type="submit">
			              Update Product
			            </button>
			          </form>
			      	</div>
			              </>
			            ) : null}
		</>
	);
}


export default UpdateHero;
