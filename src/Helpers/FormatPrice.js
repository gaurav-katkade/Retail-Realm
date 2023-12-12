
const FormatPrice =(props)=>{
    
    return(Intl.NumberFormat('en-IN', { style:"currency",currency:"INR",maximumSignificantDigits: 3 }).format(
        props.price
      ));
}
export default FormatPrice;