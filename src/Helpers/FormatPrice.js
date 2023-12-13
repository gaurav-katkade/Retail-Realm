
const FormatPrice =(props)=>{
    
    return(Intl.NumberFormat('en-IN', { style:"currency",currency:"INR",maximumSignificantDigits: 2 }).format(
        props.price
      ));
}
export default FormatPrice;