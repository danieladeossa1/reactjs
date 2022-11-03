
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Grade from "./components/Grade";
export default function App() {
  return (
    <div className="container">
      <Banner></Banner>
      <Navbar></Navbar>
      <Text titulo="Angular" subtitulo="Lenguaje TypeScript" mitexto="Este es el texto para este titulo" valor1="5"valor2="70"></Text>
      <Grade></Grade>
    </div>
  );
}

//export default App;
