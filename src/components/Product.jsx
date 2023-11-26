import styles from "./Products.module.css";

type ProductProps = {
		product : {
				_id : string;
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
	const imageURI = `data:image/png;base64,${base64Image}`;
	    return (
		            <div
		                className={styles.products}>
		    	<a href={`/${props.product.id}`}>
		                <img className={styles.productimage} src={imageURI}/>
		    <p className={styles.productname}>
		      {props.product.name.length > 17
			          ? `${props.product.name.slice(0, 17)}...`
			          : props.product.name}
		    </p>
		    	
		                <p className={styles.productprice}>{props.product.price} ETB</p>
		                <p className={styles.productcolor}>{props.product.color}</p>
		    	       { props.product.isAvailable ?
				                       <button className={styles.detailadd}>Available</button>
				                       :
				                       null
				                       }
		    	</a>
		            </div>
		        )
}

