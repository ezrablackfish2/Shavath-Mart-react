import styles from "./Products.module.css";
import white from "../public/white.jpg";


type ProductProps = {
		product : {
				id : string;
				name : string;
				price : string;
				color : string;
				img : any;
				isAvailable: boolean;
				};
};
export default function Product(props: ProductProps) {
	const imageData = props.product.img.data;
	const uint8Array = new Uint8Array(imageData);
	const binaryString = uint8Array.reduce(
		  (data, byte) => data + String.fromCharCode(byte),
		  ''
	);
	const base64Image = btoa(binaryString);
	let imageURI = `data:image/png;base64,${base64Image}`;
	if (imageData.length < 20) {
		imageURI = white; 
	}
	    return (
		            <div
		                className={styles.products}>
		    	<a href={`/${props.product.id}`} className={styles.productlink}>
		                <img className={styles.productimage} src={imageURI}/>
		    <p className={styles.productname}>
		       {props.product.name.length > 17
			          ? `${props.product.name.slice(0, 17)}...`
			          : props.product.name}
		    </p>
		    	
		                <p className={styles.productprice}>Price: {props.product.price} ETB</p>
		                <p className={styles.productcolor}>Color: {props.product.color}</p>
		    	       { props.product.isAvailable ?
				                       <button className={styles.detailadd}>Available</button>
				                       :
				                       <div className={styles.detailadd2}></div>
				                       }
		    	</a>
		            </div>
		        )
}

