// const newMessage = {
//     message: "Hola Mundo",
//     title: "Gonzalo"
// };

// const getResult = () => {
//     return 4 + 4;
// }
import PropTypes from "prop-types";

export const FirstApp = ( {title, subtitle, name} ) => {

  // console.log(props);
 
   return (
    <>
      <h1>{ title }</h1>
      {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
    )
  }  

  FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }

  FirstApp.defaultProps = {
    title: "No hay titulo",
    subtitle: "No hay subtitulo",
    name: "Gonzalo Badiola"
  }