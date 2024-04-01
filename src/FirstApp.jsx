// const newMessage = {
//     message: "Hola Mundo",
//     title: "Gonzalo"
// };

const getResult = () => {
    return 4 + 4;
}

export const FirstApp = () => {

   return (
    <>
        <h1>{ getResult() }</h1>
      {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
      <p>Soy un subtitulo</p>
    </>
    )
  }
  