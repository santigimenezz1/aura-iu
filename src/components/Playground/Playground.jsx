import { useEffect, useState } from "react";
import "../Playground/playground.css";
import ButonToggle from "./BotonToggle/BotonToggle";
import BotonCopy from "./BotonCopy/BotonCopy";
import BotonModoOscuro from "./BotonModoOscuro/BotonModoOscuro";
const Playground = () => {
  const [estado, setEstado] = useState("asdasd"); //ESTADO PRINCIPAL
  const [estadoHTML, setEstadoHtml] = useState(""); //ESTADO PARA PLANTILLA HTML
  const [estadoCSS, setEstadoCSS] = useState(""); //ESTADO PARA LOS ESTILOS CSS
  const [estilos, setEstilos] = useState(true);
  const [darkModeOn, setDarkModeOn] = useState(true);

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

  const actualizarHTML = (event) => {
    //ACTUALIZAMOS LA PLANTILLA HTML EN EL ESTADO
    const texto = event.target.value;
    setEstadoHtml(texto);
    const html = HTML();
    setEstado(html);
  };

  const actualizarCSS = (event) => {
    //ACTUALIZAMOS EL CODIGO CSS Y LO GUARDAMOS EN UN ESTADO PARA SER RECOGIDO POR LA PLANTILLA HTML
    const texto = event.target.value;
    setEstadoCSS(texto);
  };

  useEffect(() => {
    //CADA VEZ QUE HAYA UN CAMBIO EN EL ESTADO DEL CSS, SE VUELVE A SETEAR UNA NUEVA PLANTILLA HTML EN EL ESTADO PRINCIPAL
    const html = HTML();
    setEstado(html);
  }, [estadoCSS]);

  return (
    <div className="container">
      <div className="container__playground">
        <div className="container__playground__areas">
          <section className="container__playground__areas__buttons">
            <div onClick={() => setEstilos(false)}>
              <ButonToggle
                text={"HTML"}
                img={
                  "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1713646230/ASTRO%20IO/html-5_aja4ow.png"
                }
              />
            </div>
            <div onClick={() => setEstilos(true)}>
              <ButonToggle
                text={"CSS"}
                img={
                  "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1713646247/ASTRO%20IO/css-3_y1vgvm.png"
                }
              />
            </div>
          </section>

          <section className="container__playground__areas__textArea">
            <textarea
              className={estilos && "areaOn"}
              placeholder="html"
              onChange={(e) => actualizarHTML(event)}
            ></textarea>
            <textarea
              className={!estilos && "areaOn"}
              placeholder="css"
              onChange={(e) => actualizarCSS(event)}
            ></textarea>
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
