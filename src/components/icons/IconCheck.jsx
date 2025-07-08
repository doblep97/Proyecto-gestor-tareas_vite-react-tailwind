const IconCheck = ({...props}) => {
  return(
    <svg 
        {...props} //Es un rest-operator con el resto de propiedades
        xmlns="http://www.w3.org/2000/svg" 
        width="11" 
        height="9"
        fill="none" //Color de relleno
        stroke="#FFF" //Color del borde
        strokeWidth="2" >   
        <path 
            d="M1 4.304L3.696 7l6-6"
        />
    </svg>
  )
}

export default IconCheck