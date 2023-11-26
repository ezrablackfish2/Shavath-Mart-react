import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Search from "../components/Search.jsx";
import Products from "../components/Products.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import SearchProduct from "../components/SearchProduct.jsx";
import Bottom from "../components/Bottom.jsx";
import styles from "../components/Detail.module.css";
import style from "../components/Review.module.css";
import useProducts from "../hooks/useProducts.jsx";
import axios from "axios";
import apiClient from "../api/api-client-axios.jsx";
import styl from "../components/Upload.module.css";
import ServiceSelector from "../components/ServiceSelector2.jsx";
import load from '../public/loading.gif';
import sty from '../components/Home.module.css';

interface Props {
		items: any;
		setlogin: any;
		setSuccess: any;
		search: any;
		setSearch: any;
		token: any;
		selectedService: any;
		setSelectedService: any;
		selectedAbout: any;
		setSelectedAbout: any;
		user: any;
}



function ProductDetail (  { items, user, setlogin, setSuccess, search, setSearch, token, setSelectedAbout, setSelectedService, selectedAbout, selectedService }: Props  ) {
	const { id } = useParams();
	const navigate = useNavigate();
	const item = items.find (item => item.id.toString() === id);
	const [review, setReview] = useState('');
	const [reviewFetch, setReviewFetch] = useState([])
	const [name, setName] = useState('');
	  const [price, setPrice] = useState('');
	  const [image, setImage] = useState(null);
	  const [color, setColor] = useState('');
	  const [description, setDescription] = useState('');
	  const [availability, setAvailability] = useState(false);
	  const [imagePreview, setImagePreview] = useState(null);
	  const [category, setCategory] = useState('All');


	  useEffect(() => {
		      const fetchReviews = async () => {
			            try {
					            const response = await axios.get(`https://api.shavathmart.com/api/reviews/`, {
							              headers: {
									                  'Content-Type': 'application/json',
									                  Authorization: `Bearer ${token}`,
									                },
							            });

					            console.log('Review fetched successfully');
					            setReviewFetch(response.data); // Assuming you want to set the response data
					            console.log(response.data);
					          } catch (error) {
							          console.error('Network error:', error);
							          console.log(reviewFetch); // Assuming 'reviewFetch' is defined somewhere
							        }
			          };

		      fetchReviews();
		    }, []);


	    const handleSubmit = (event: any) => {
		            event.preventDefault();
		    	const reviewData = {
						productId: item.id,
						message: review,
					};
		    	try {
					const response = axios.post(`https://api.shavathmart.com/api/review/`, reviewData,
						        		{
														headers: {
																			'Content-Type': 'application/json',
																			Authorization: `Bearer ${token}`,
																		},
													}
								);

						console.log('Review submitted successfully');
						console.log(reviewData);
					} catch (error) {
								console.error('Network error:', error);
								console.log(reviewData);
							}	
		        };
		if (!item) {
				      return (
					      		        <img src={load} className={sty.loadhome} />
					      	      );
				    }
	const imageData = item.img.data;
	const uint8Array = new Uint8Array(imageData);
	const binaryString = uint8Array.reduce(
		  (data, byte) => data + String.fromCharCode(byte),
		  ''
	);
	const base64Image = btoa(binaryString);
	const imageURI = `data:image/png;base64,${base64Image}`;

		const formData = {
				id : item.id,
				name: item.name,
				price: item.price,
		}
	function ProductRemover() {
				 apiClient.post(`delete/` ,
					 			formData,
					                         {
									                                 headers: {
														                                 'Content-Type': 'application/json',
														                                 Authorization: `Bearer ${token}`,
														                         },

									                                 })
					   .then(res =>  {
						   				console.log("successfully deleted", res.data);
						   				navigate("/");
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


	function ProductUpdater(formData2: any) {
			console.log(formData2);
				 apiClient.post(`update/` ,
					 			formData2,
					                         {
									                                 headers: {
														                                 'Content-Type': 'application/json',
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

  const handleUpdate = (e: React.FormEvent) => {
	      e.preventDefault();
	      if (user && token) {
	        const formData2 = {
			        id : item.id ,
			      name: name != '' ? name: item.name,
			      price: price != '' ? price : item.price,
			      img: image != null ? image : item.img,
			      color: color != '' ? color: item.color,
			      category: category != '' ? category : item.category,
			      description: description != '' ? description : item.description,
			      isAvailable: availability,
			        }
		            ProductUpdater(formData2);
		     	    } else {
				        }
	    };
	document.title = item.name;
	return (
 <>
		    <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />

		      <Header setlogin={setlogin} setSuccess={setSuccess} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>

			<div className={styles.productdetail}>
		      <img className={styles.detailimage} src={imageURI} alt={item.name} />
		      <div className={styles.detailinfo}>
		        <h1 className={styles.detailtitle}>{item.name}</h1>
		        <ul className={styles.detaildescription}> Description	
		        </ul>
		        <p className={styles.detailcolor}>{item.description}</p>
		        <p className={styles.detailcolor}>Color: {item.color}</p>
		        <p className={styles.detailprice}>Price: {item.price} ETB</p>
		        {item.isAvailable ? (
				          <button className={styles.detailadd}>Available</button>
				        ) : null}
		      </div>
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
			            <label className={styl.labeltitle}>Product Price</label>
			            <input
			              className={styl.titleinput}
			              type="number"
			              value={price}
			              onChange={(e) => setPrice(e.target.value)}
			              placeholder="Product Price $"
			            />
			      	<label className={styl.labeltitle}>Product Description</label>
			              <input
			              className={styl.titleinput}
			              type="string"
			              value={description}
			              onChange={(e) => setDescription(e.target.value)}
			              placeholder="Product Descrition"
			            />

			      	

			            <label className={styl.labeltitle}>Product Color</label>
			            <input
			              className={styl.titleinput}
			              type="text"
			              value={color}
			              onChange={(e) => setColor(e.target.value)}
			              placeholder="Product Color"
			            />
			      	<label className={styl.labeltitle}>Product Category</label>
			              <div className={styl.titleinput}> <ServiceSelector setSelectedService={setCategory} selectedService={category}/></div>

			      	<label className={styl.labeltitle}>Product Availability</label>
			              <input
			              className={styl.checkbox}
			              type="checkbox"
			              checked={availability}
			              onChange={(e) => setAvailability(e.target.checked)}
			              placeholder="Product Availability"
			            />

			            <button className={styl.uploadupdatebutton} type="submit">
			              Update Product
			            </button>
			                <button className={styl.uploaddeletebutton} onClick={ProductRemover} >Delete Product</button>
			          </form>
			      	</div>
			              </>
			            ) : null}
		      <div className={styles.detailreview}>
		        <h1 className={styles.detailreviewtitle}>Reviews</h1>
		        <div className={styles.detailreviewcontent}>
			{reviewFetch[0] ?
					<ol className={styles.revieworder}>{reviewFetch.map((data: Review) => <li className={styles.reviewlists}> {data.productId == item.id ?<span> 63 {data.message} </span> : null}</li>)}</ol>
					:
				          <div>There are no reviews yet. Be the first to review {item.name} Your email address will not be published. Required fields are marked *</div>
					}
		        </div>
		      </div>
		      <div className={styles.review}> Add Review </div>
		      <div className={style.reviewall}>
		        <h2 className={style.detailreviewtitle}>Your Review</h2>
		        <form onSubmit={handleSubmit}>
		          <textarea
		            className={style.area}
		            value={review}
		            onChange={(e) => setReview(e.target.value)}
		            placeholder="Write your review here"
		            required
		          />
		          <div>
		            <button className={style.reviewbutton} type="submit">Submit</button>
		          </div>
		        </form>
		      </div>
		      <Footer />
		    </div>
		  </>
	)
}
export default ProductDetail;
