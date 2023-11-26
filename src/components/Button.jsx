type ButtonProps = {
	  className: string;
	  bgColor: string;
	  width: string;
	  image: string;
	  imageclass: string;
	  text: string;
};

export default function Button(props: ButtonProps) {
	    return (
		            <button className={props.className} style={{backgroundColor: props.bgColor, width: props.width}}>
		    	<img src={props.image} className={props.imageclass} />
		            </button>
		        )
}
