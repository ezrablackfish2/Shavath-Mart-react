import React, { useState } from 'react';
import styles from '../components/Upload.module.css';
import style from '../components/Signup.module.css';
import ServiceSelector from '../components/ServiceSelector2';
import { useNavigate } from 'react-router-dom';

interface UploadFormProps {
	  onUpload: (formData: FormData) => void;
	  user: any; // Define the type of user appropriately
	  token: string | null; // Define the type of token appropriately
}

const UploadForm: React.FC<UploadFormProps> = ({ onUpload, user, token }) => {
		const navigate = useNavigate();  
	const [name, setName] = useState('');
	  const [price, setPrice] = useState('');
	  const [image, setImage] = useState(null);
	  const [color, setColor] = useState('');
	  const [category, setCategory] = useState('Category');
	  const [description, setDescription] = useState('');
	  const [availability, setAvailability] = useState(false);
	  const [imagePreview, setImagePreview] = useState(null);
	  const [uploadSuccess, setUploadSuccess] = useState(false)

	  const handleImageChange = (e) => {
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

	  const handleSubmit = (e) => {
		      e.preventDefault();
		      if (user && token) {
			            const formData = new FormData();
			            formData.append('name', name);
			            formData.append('price', parseFloat(price).toFixed(2));
			            if (image) {
					            formData.append('img', image);
					          }
			            formData.append('color', color);
			            formData.append('category', category);
			            formData.append('description', description);
			            formData.append('isAvailable', `${availability}`);
			      	
			      	console.log(category);
			            onUpload(formData);
			            setUploadSuccess(true);
			          } else {
					        navigate('/login');
					      }
		    };

	function remover() {
		    localStorage.removeItem('user');
		    localStorage.removeItem('token');
		    setUploadSuccess(false);
		  }
	if (uploadSuccess == false) {
		  return (
			      <form className={styles.uploadform} onSubmit={handleSubmit}>
			        <label className={styles.labeltitle}>Product Name</label>
			        <input
			          className={styles.titleinput}
			          type="text"
			          value={name}
			          onChange={(e) => setName(e.target.value)}
			          placeholder="Product Name"
			        />
			        <label className={styles.labeltitle}>Product Image</label>
			        <input
			          className={styles.titleinput}
			          type="file"
			          accept="image/*"
			          onChange={handleImageChange}
			          placeholder="Put Image"
			        />
			        {imagePreview && <img src={imagePreview} alt="Image Preview" className={styles.previewImage} />}
			        <label className={styles.labeltitle}>Product Price</label>
			        <input
			          className={styles.titleinput}
			          type="number"
			          value={price}
			          onChange={(e) => setPrice(e.target.value)}
			          placeholder="Product Price $"
			        />
			  	<label className={styles.labeltitle}>Product Description</label>
			          <input
			          className={styles.titleinput}
			          type="string"
			          value={description}
			          onChange={(e) => setDescription(e.target.value)}
			          placeholder="Product Descrition"
			        />

			  	

			        <label className={styles.labeltitle}>Product Color</label>
			        <input
			          className={styles.titleinput}
			          type="text"
			          value={color}
			          onChange={(e) => setColor(e.target.value)}
			          placeholder="Product Color"
			        />
			        
			  	<label className={styles.labeltitle}>Product Category</label>
			  	<div className={styles.titleinput}> <ServiceSelector setSelectedService={setCategory} selectedService={category}/></div>

			  	<label className={styles.labeltitle}>Product Availability</label>
			          <input
			          className={styles.checkbox}
			          type="checkbox"
			          checked={availability}
			          onChange={(e) => setAvailability(e.target.checked)}
			          placeholder="Product Availability"
			        />

			        <button className={styles.uploadbutton} type="submit">
			          Upload Product
			        </button>

			      </form>
			    ); }
	else {
		return (
			        <div className={style.login}>
			          <h1 className={style.logintitle}>Upload Success !</h1>
			          <br />
			          <p>
			            <button onClick={remover} className={style.loginbutton}>Log Out</button>
			            <a className={style.loggedlink} href="/"> Go to Home Page </a>
			            <a className={style.loggedlink} href="/upload"> Upload Another Product </a>
			          </p>
			        </div>
		)
	}
};

export default UploadForm;

