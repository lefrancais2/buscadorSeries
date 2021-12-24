import { GlobalStyle } from "./styles-components/reset";
import {Header,Main,Footer, FormularioSection} from './styles-components/containers';
import Formulario from "./components/Formulario";
import { useState } from "react";
import SeriesCard from "./components/SeriesCard";


const container = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
}

function App() {
  const [data, setData] = useState({});
  //console.log("datos",data);
  return (
    <div style={container}>
      <GlobalStyle/>
      <Header>
        <h1>Buscador de series</h1>
      </Header>
      <Main>
        <FormularioSection>
          <Formulario setData={setData}/>
        </FormularioSection>

        <SeriesCard data={data}/>

      </Main>
      <Footer>
        <p>Página desarrollada por OsGod</p>
      </Footer>
    </div>
  );
}

export default App;
