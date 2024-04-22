import { useEffect, useState } from "react";
import "../Playground/playground.css";
import ButonToggle from "./BotonToggle/BotonToggle";
import BotonCopy from "./BotonCopy/BotonCopy";
import BotonModoOscuro from "./BotonModoOscuro/BotonModoOscuro";
import * as monaco from 'monaco-editor'; // IMPORTAMOS TODO EL MONACO EDITOR
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'; // IMPORTAMOS PARA PODER USAR EL HTML DE MONACO EDITOR 
import { Editor } from "@monaco-editor/react";

const Playground = () => {
  const [estado, setEstado] = useState("asdasd"); //ESTADO PRINCIPAL
  const [estadoHTML, setEstadoHtml] = useState(""); //ESTADO PARA PLANTILLA HTML
  const [estadoCSS, setEstadoCSS] = useState(""); //ESTADO PARA LOS ESTILOS CSS
  const [estilos, setEstilos] = useState(false);
  const [darkModeOn, setDarkModeOn] = useState(true);
  const [focus, setFocus] = useState(false)
  const [focusOn, setFocusOn] = useState(true)


  const HTML = () => {
    //PLANTILLA HTML
    const html = `
      <!doctype html>
      <html lang="en">
        <head>
          <style>
            body {
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            /* Aquí puedes incluir los estilos adicionales que desees */
            ${estadoCSS}
          </style>
        </head>
        <body>
          <div>
            ${estadoHTML}
          </div>
        </body>
      </html>
      `;
    return html;
  };

  const actualizarHTML = (value) => {
    //ACTUALIZAMOS LA PLANTILLA HTML EN EL ESTADO
    const texto = value;
    setEstadoHtml(texto);
  };

  const actualizarCSS = (value) => {
    //ACTUALIZAMOS EL CODIGO CSS Y LO GUARDAMOS EN UN ESTADO PARA SER RECOGIDO POR LA PLANTILLA HTML
    const texto = value;
    setEstadoCSS(texto);
  };



  useEffect(() => {
    //CADA VEZ QUE HAYA UN CAMBIO EN EL ESTADO DEL HTML, SE VUELVE A SETEAR UNA NUEVA PLANTILLA HTML EN EL ESTADO PRINCIPAL
    const html = HTML();
    setEstado(html);
  }, [estadoHTML]);
  
  useEffect(() => {
    //CADA VEZ QUE HAYA UN CAMBIO EN EL ESTADO DEL CSS, SE VUELVE A SETEAR UNA NUEVA PLANTILLA HTML EN EL ESTADO PRINCIPAL
    const html = HTML();
    setEstado(html);
  }, [estadoCSS]);

  const cambiarEstilos = () => {
    setEstilos(false)
    setFocus(false)
    setFocusOn(true)
  }

  const cambiarEstilosOn = () => {
    setEstilos(true)
    setFocusOn(false)
    setFocus(true)
  }

  return (
    <div className="container">
      <div className="container__playground">
        <div className="container__playground__areas">
          <section className="container__playground__areas__buttons">
            <div onClick={() => cambiarEstilos()}>
              <ButonToggle
                text={"HTML"}
                img={
                  "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1713646230/ASTRO%20IO/html-5_aja4ow.png"
                }
                focus={focus}
              />
            </div>
            <div onClick={() => cambiarEstilosOn()}>
              <ButonToggle
                text={"CSS"}
                img={
                  "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1713646247/ASTRO%20IO/css-3_y1vgvm.png"
                }
                focus={focusOn}
              />
            </div>
          </section>

          <section className="container__playground__areas__textArea" >
            <div className={estilos && "areaOn"}> 
            <Editor
                height="500px"
                defaultLanguage="html"
                theme="vs-dark"
                onChange={(value) => actualizarHTML(value)}
                language="html"
                options={{
                  theme: "vs-dark",
                  fontSize: "16px",
                  autoClosingBrackets : "always"   //INVESTIGAR LUEGO COMO ACCEDER A ESA PROPIEDAD DEL OBJETO MONACO Y CERRAR LAS ETIQUETAS 
                }}
              />
            </div>
         
            <div className={!estilos && "areaOn"} >
              <Editor                
                height= "500px"
                className={!estilos && "areaOn"}
                theme="vs-dark"
                defaultLanguage="css" 
                options={{
                  theme: "vs-dark",
                  fontSize: "16px",
                  autoClosingBrackets : "always"   //INVESTIGAR LUEGO COMO ACCEDER A ESA PROPIEDAD DEL OBJETO MONACO Y CERRAR LAS ETIQUETAS 
                }}
                onChange={(value) => actualizarCSS(value)}
              />
            </div>
          </section>
        </div>

        <section
          className={
            darkModeOn
              ? "container__playground__iframe__darkOn"
              : "container__playground__iframe"
          }
        >
          <div
            className={
              darkModeOn
                ? "container__playground__iframe__botonOscuro"
                : "container__playground__iframe__botonOscuro__on"
            }
          >
            {
              !darkModeOn ?
            <h1 className="color">#212121</h1>
            :
            <h1 className="colorOn">#e8e8e8</h1>
            }

            <BotonModoOscuro
              setDarkModeOn={setDarkModeOn}
              darkModeOn={darkModeOn}
            />
          </div>
          <iframe srcDoc={estado}></iframe>
        </section>
      </div>
    </div>
  );
};

export default Playground;
