 import '../Header/header.css'
import ContainerTarjetasFlotantes from './ContainerTarjetasFlotantes/ContainerTarjetasFlotantes'
const Header = () => {

    const Lavarropas = () => {
        const html = `
          <!doctype html>
          <html lang="en">
            <head>
              <style>
              .container{
                display: flex;
                flex-direction: column;
                height: 500px;
                flex-wrap: wrap;
                padding: 10px;
                justify-content: center;
                align-items: center;
                gap: 30px;
            }

            .container1{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
            }
            
      .container2{
        display: flex;
        align-items: center;
        gap: 30px;
      }   

      .container3{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 15px;
      }   
            /* REMASTERED */
            /* RTX-ON */
            /* completely redone toggle and droid */
            
            .bb8-toggle {
              --toggle-size: 16px;
              /* finally I removed the scale now everything depends on the font-size */
              /* --margin-top-for-head: 1.75em; */
              /* it's just in case 👆 */
              --toggle-width: 10.625em;
              --toggle-height: 5.625em;
              --toggle-offset: calc((var(--toggle-height) - var(--bb8-diameter)) / 2);
              --toggle-bg: linear-gradient(#2c4770, #070e2b 35%, #628cac 50% 70%, #a6c5d4)
                no-repeat;
              --bb8-diameter: 4.375em;
              --radius: 99em;
              --transition: 0.4s;
              --accent: #de7d2f;
              --bb8-bg: #fff;
            }
            
            .bb8-toggle,
            .bb8-toggle *,
            .bb8-toggle *::before,
            .bb8-toggle *::after {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }
            
            .bb8-toggle {
              cursor: pointer;
              margin-top: var(--margin-top-for-head);
              font-size: var(--toggle-size);
            }
            
            .bb8-toggle__checkbox {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              display: none;
            }
            
            .bb8-toggle__container {
              width: var(--toggle-width);
              height: var(--toggle-height);
              background: var(--toggle-bg);
              background-size: 100% 11.25em;
              background-position-y: -5.625em;
              border-radius: var(--radius);
              position: relative;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            .bb8 {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              position: absolute;
              top: calc(var(--toggle-offset) - 1.688em + 0.188em);
              left: var(--toggle-offset);
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
              z-index: 2;
            }
            
            .bb8__head-container {
              position: relative;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
              z-index: 2;
              -webkit-transform-origin: 1.25em 3.75em;
              -ms-transform-origin: 1.25em 3.75em;
              transform-origin: 1.25em 3.75em;
            }
            
            .bb8__head {
              overflow: hidden;
              margin-bottom: -0.188em;
              width: 2.5em;
              height: 1.688em;
              background: -o-linear-gradient(
                  transparent 0.063em,
                  dimgray 0.063em 0.313em,
                  transparent 0.313em 0.375em,
                  var(--accent) 0.375em 0.5em,
                  transparent 0.5em 1.313em,
                  silver 1.313em 1.438em,
                  transparent 1.438em
                ),
                -o-linear-gradient(45deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
                      1.25em),
                -o-linear-gradient(135deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
                      1.25em),
                -o-linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
              background: -o-linear-gradient(
                  transparent 0.063em,
                  dimgray 0.063em 0.313em,
                  transparent 0.313em 0.375em,
                  var(--accent) 0.375em 0.5em,
                  transparent 0.5em 1.313em,
                  silver 1.313em 1.438em,
                  transparent 1.438em
                ),
                -o-linear-gradient(45deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
                      1.25em),
                -o-linear-gradient(135deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
                      1.25em),
                -o-linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
              background: -o-linear-gradient(
                  transparent 0.063em,
                  dimgray 0.063em 0.313em,
                  transparent 0.313em 0.375em,
                  var(--accent) 0.375em 0.5em,
                  transparent 0.5em 1.313em,
                  silver 1.313em 1.438em,
                  transparent 1.438em
                ),
                -o-linear-gradient(45deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
                      1.25em),
                -o-linear-gradient(135deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
                      1.25em),
                -o-linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
              background: -o-linear-gradient(
                  transparent 0.063em,
                  dimgray 0.063em 0.313em,
                  transparent 0.313em 0.375em,
                  var(--accent) 0.375em 0.5em,
                  transparent 0.5em 1.313em,
                  silver 1.313em 1.438em,
                  transparent 1.438em
                ),
                -o-linear-gradient(45deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
                      1.25em),
                -o-linear-gradient(135deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
                      1.25em),
                -o-linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
              background: linear-gradient(
                  transparent 0.063em,
                  dimgray 0.063em 0.313em,
                  transparent 0.313em 0.375em,
                  var(--accent) 0.375em 0.5em,
                  transparent 0.5em 1.313em,
                  silver 1.313em 1.438em,
                  transparent 1.438em
                ),
                linear-gradient(
                  45deg,
                  transparent 0.188em,
                  var(--bb8-bg) 0.188em 1.25em,
                  transparent 1.25em
                ),
                linear-gradient(
                  -45deg,
                  transparent 0.188em,
                  var(--bb8-bg) 0.188em 1.25em,
                  transparent 1.25em
                ),
                linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
              border-radius: var(--radius) var(--radius) 0 0;
              position: relative;
              z-index: 1;
              -webkit-filter: drop-shadow(0 0.063em 0.125em gray);
              filter: drop-shadow(0 0.063em 0.125em gray);
            }
            
            .bb8__head::before {
              content: "";
              position: absolute;
              width: 0.563em;
              height: 0.563em;
              background: -o-radial-gradient(
                  0.25em 0.375em,
                  0.125em circle,
                  red,
                  transparent
                ),
                -o-radial-gradient(0.375em 0.188em, 0.063em circle, var(--bb8-bg) 50%, transparent
                      100%),
                -o-linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
              background: -o-radial-gradient(
                  0.25em 0.375em,
                  0.125em circle,
                  red,
                  transparent
                ),
                -o-radial-gradient(0.375em 0.188em, 0.063em circle, var(--bb8-bg) 50%, transparent
                      100%),
                -o-linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
              background: -o-radial-gradient(
                  0.25em 0.375em,
                  0.125em circle,
                  red,
                  transparent
                ),
                -o-radial-gradient(0.375em 0.188em, 0.063em circle, var(--bb8-bg) 50%, transparent
                      100%),
                -o-linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
              background: -o-radial-gradient(
                  0.25em 0.375em,
                  0.125em circle,
                  red,
                  transparent
                ),
                -o-radial-gradient(0.375em 0.188em, 0.063em circle, var(--bb8-bg) 50%, transparent
                      100%),
                -o-linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
              background: radial-gradient(
                  0.125em circle at 0.25em 0.375em,
                  red,
                  transparent
                ),
                radial-gradient(
                  0.063em circle at 0.375em 0.188em,
                  var(--bb8-bg) 50%,
                  transparent 100%
                ),
                linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
              border-radius: var(--radius);
              top: 0.413em;
              left: 50%;
              -webkit-transform: translate(-50%);
              -ms-transform: translate(-50%);
              transform: translate(-50%);
              -webkit-box-shadow: 0 0 0 0.089em lightgray, 0.563em 0.281em 0 -0.148em,
                0.563em 0.281em 0 -0.1em var(--bb8-bg), 0.563em 0.281em 0 -0.063em;
              box-shadow: 0 0 0 0.089em lightgray, 0.563em 0.281em 0 -0.148em,
                0.563em 0.281em 0 -0.1em var(--bb8-bg), 0.563em 0.281em 0 -0.063em;
              z-index: 1;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            .bb8__head::after {
              content: "";
              position: absolute;
              bottom: 0.375em;
              left: 0;
              width: 100%;
              height: 0.188em;
              background: -o-linear-gradient(
                left,
                var(--accent) 0.125em,
                transparent 0.125em 0.188em,
                var(--accent) 0.188em 0.313em,
                transparent 0.313em 0.375em,
                var(--accent) 0.375em 0.938em,
                transparent 0.938em 1em,
                var(--accent) 1em 1.125em,
                transparent 1.125em 1.875em,
                var(--accent) 1.875em 2em,
                transparent 2em 2.063em,
                var(--accent) 2.063em 2.25em,
                transparent 2.25em 2.313em,
                var(--accent) 2.313em 2.375em,
                transparent 2.375em 2.438em,
                var(--accent) 2.438em
              );
              background: -webkit-gradient(
                linear,
                left top,
                right top,
                color-stop(0.125em, var(--accent)),
                color-stop(0.125em, transparent),
                color-stop(0.188em, var(--accent)),
                color-stop(0.313em, transparent),
                color-stop(0.375em, var(--accent)),
                color-stop(0.938em, transparent),
                color-stop(1em, var(--accent)),
                color-stop(1.125em, transparent),
                color-stop(1.875em, var(--accent)),
                color-stop(2em, transparent),
                color-stop(2.063em, var(--accent)),
                color-stop(2.25em, transparent),
                color-stop(2.313em, var(--accent)),
                color-stop(2.375em, transparent),
                color-stop(2.438em, var(--accent))
              );
              background: linear-gradient(
                to right,
                var(--accent) 0.125em,
                transparent 0.125em 0.188em,
                var(--accent) 0.188em 0.313em,
                transparent 0.313em 0.375em,
                var(--accent) 0.375em 0.938em,
                transparent 0.938em 1em,
                var(--accent) 1em 1.125em,
                transparent 1.125em 1.875em,
                var(--accent) 1.875em 2em,
                transparent 2em 2.063em,
                var(--accent) 2.063em 2.25em,
                transparent 2.25em 2.313em,
                var(--accent) 2.313em 2.375em,
                transparent 2.375em 2.438em,
                var(--accent) 2.438em
              );
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            .bb8__antenna {
              position: absolute;
              -webkit-transform: translateY(-90%);
              -ms-transform: translateY(-90%);
              transform: translateY(-90%);
              width: 0.059em;
              border-radius: var(--radius) var(--radius) 0 0;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            .bb8__antenna:nth-child(1) {
              height: 0.938em;
              right: 0.938em;
              background: -o-linear-gradient(#000 0.188em, silver 0.188em);
              background: -webkit-gradient(
                linear,
                left top,
                left bottom,
                color-stop(0.188em, #000),
                color-stop(0.188em, silver)
              );
              background: linear-gradient(#000 0.188em, silver 0.188em);
            }
            
            .bb8__antenna:nth-child(2) {
              height: 0.375em;
              left: 50%;
              -webkit-transform: translate(-50%, -90%);
              -ms-transform: translate(-50%, -90%);
              transform: translate(-50%, -90%);
              background: silver;
            }
            
            .bb8__body {
              width: 4.375em;
              height: 4.375em;
              background: var(--bb8-bg);
              border-radius: var(--radius);
              position: relative;
              overflow: hidden;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
              z-index: 1;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
              background: -webkit-gradient(
                  linear,
                  right top,
                  left top,
                  color-stop(4%, var(--bb8-bg)),
                  color-stop(4%, var(--accent)),
                  color-stop(10%, transparent),
                  color-stop(90%, var(--accent)),
                  color-stop(96%, var(--bb8-bg))
                ),
                -webkit-gradient(linear, left top, left bottom, color-stop(4%, var(--bb8-bg)), color-stop(4%, var(--accent)), color-stop(10%, transparent), color-stop(90%, var(--accent)), color-stop(96%, var(--bb8-bg))),
                -webkit-gradient(linear, left top, right top, color-stop(2.156em, transparent), color-stop(2.156em, silver), color-stop(2.188em, transparent)),
                -webkit-gradient(linear, left top, left bottom, color-stop(2.156em, transparent), color-stop(2.156em, silver), color-stop(2.188em, transparent));
              background: -o-linear-gradient(
                  right,
                  var(--bb8-bg) 4%,
                  var(--accent) 4% 10%,
                  transparent 10% 90%,
                  var(--accent) 90% 96%,
                  var(--bb8-bg) 96%
                ),
                -o-linear-gradient(var(--bb8-bg) 4%, var(--accent) 4% 10%, transparent 10%
                      90%, var(--accent) 90% 96%, var(--bb8-bg) 96%),
                -o-linear-gradient(left, transparent 2.156em, silver 2.156em 2.219em, transparent
                      2.188em),
                -o-linear-gradient(transparent 2.156em, silver 2.156em 2.219em, transparent
                      2.188em);
              background: linear-gradient(
                  -90deg,
                  var(--bb8-bg) 4%,
                  var(--accent) 4% 10%,
                  transparent 10% 90%,
                  var(--accent) 90% 96%,
                  var(--bb8-bg) 96%
                ),
                linear-gradient(
                  var(--bb8-bg) 4%,
                  var(--accent) 4% 10%,
                  transparent 10% 90%,
                  var(--accent) 90% 96%,
                  var(--bb8-bg) 96%
                ),
                linear-gradient(
                  to right,
                  transparent 2.156em,
                  silver 2.156em 2.219em,
                  transparent 2.188em
                ),
                linear-gradient(
                  transparent 2.156em,
                  silver 2.156em 2.219em,
                  transparent 2.188em
                );
              background-color: var(--bb8-bg);
            }
            
            .bb8__body::after {
              content: "";
              bottom: 1.5em;
              left: 0.563em;
              position: absolute;
              width: 0.188em;
              height: 0.188em;
              background: rgb(236, 236, 236);
              color: rgb(236, 236, 236);
              border-radius: 50%;
              -webkit-box-shadow: 0.875em 0.938em, 0 -1.25em, 0.875em -2.125em,
                2.125em -2.125em, 3.063em -1.25em, 3.063em 0, 2.125em 0.938em;
              box-shadow: 0.875em 0.938em, 0 -1.25em, 0.875em -2.125em, 2.125em -2.125em,
                3.063em -1.25em, 3.063em 0, 2.125em 0.938em;
            }
            
            .bb8__body::before {
              content: "";
              width: 2.625em;
              height: 2.625em;
              position: absolute;
              border-radius: 50%;
              z-index: 0.1;
              overflow: hidden;
              top: 50%;
              left: 50%;
              -webkit-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              border: 0.313em solid var(--accent);
              background: -o-radial-gradient(
                  center,
                  1em circle,
                  rgb(236, 236, 236) 50%,
                  transparent 51%
                ),
                -o-radial-gradient(center, 1.25em circle, var(--bb8-bg) 50%, transparent 51%),
                -o-linear-gradient(right, transparent 42%, var(--accent) 42% 58%, transparent
                      58%),
                -o-linear-gradient(var(--bb8-bg) 42%, var(--accent) 42% 58%, var(--bb8-bg)
                      58%);
              background: -o-radial-gradient(
                  center,
                  1em circle,
                  rgb(236, 236, 236) 50%,
                  transparent 51%
                ),
                -o-radial-gradient(center, 1.25em circle, var(--bb8-bg) 50%, transparent 51%),
                -o-linear-gradient(right, transparent 42%, var(--accent) 42% 58%, transparent
                      58%),
                -o-linear-gradient(var(--bb8-bg) 42%, var(--accent) 42% 58%, var(--bb8-bg)
                      58%);
              background: radial-gradient(
                  1em circle at center,
                  rgb(236, 236, 236) 50%,
                  transparent 51%
                ),
                radial-gradient(1.25em circle at center, var(--bb8-bg) 50%, transparent 51%),
                -webkit-gradient(linear, right top, left top, color-stop(42%, transparent), color-stop(42%, var(--accent)), color-stop(58%, transparent)),
                -webkit-gradient(linear, left top, left bottom, color-stop(42%, var(--bb8-bg)), color-stop(42%, var(--accent)), color-stop(58%, var(--bb8-bg)));
              background: radial-gradient(
                  1em circle at center,
                  rgb(236, 236, 236) 50%,
                  transparent 51%
                ),
                radial-gradient(1.25em circle at center, var(--bb8-bg) 50%, transparent 51%),
                linear-gradient(
                  -90deg,
                  transparent 42%,
                  var(--accent) 42% 58%,
                  transparent 58%
                ),
                linear-gradient(var(--bb8-bg) 42%, var(--accent) 42% 58%, var(--bb8-bg) 58%);
            }
            
            .artificial__hidden {
              position: absolute;
              border-radius: inherit;
              inset: 0;
              pointer-events: none;
              overflow: hidden;
            }
            
            .bb8__shadow {
              content: "";
              width: var(--bb8-diameter);
              height: 20%;
              border-radius: 50%;
              background: #3a271c;
              -webkit-box-shadow: 0.313em 0 3.125em #3a271c;
              box-shadow: 0.313em 0 3.125em #3a271c;
              opacity: 0.25;
              position: absolute;
              bottom: 0;
              left: calc(var(--toggle-offset) - 0.938em);
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
              -webkit-transform: skew(-70deg);
              -ms-transform: skew(-70deg);
              transform: skew(-70deg);
              z-index: 1;
            }
            
            .bb8-toggle__scenery {
              width: 100%;
              height: 100%;
              pointer-events: none;
              overflow: hidden;
              position: relative;
              border-radius: inherit;
            }
            
            .bb8-toggle__scenery::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 30%;
              bottom: 0;
              background: #b18d71;
              z-index: 1;
            }
            
            .bb8-toggle__cloud {
              z-index: 1;
              position: absolute;
              border-radius: 50%;
            }
            
            .bb8-toggle__cloud:nth-last-child(1) {
              width: 0.875em;
              height: 0.625em;
              -webkit-filter: blur(0.125em) drop-shadow(0.313em 0.313em #ffffffae)
                drop-shadow(-0.625em 0 #fff) drop-shadow(-0.938em -0.125em #fff);
              filter: blur(0.125em) drop-shadow(0.313em 0.313em #ffffffae)
                drop-shadow(-0.625em 0 #fff) drop-shadow(-0.938em -0.125em #fff);
              right: 1.875em;
              top: 2.813em;
              background: -o-linear-gradient(bottom left, #ffffffae, #ffffffae);
              background: -webkit-gradient(
                linear,
                left bottom,
                right top,
                from(#ffffffae),
                to(#ffffffae)
              );
              background: linear-gradient(to top right, #ffffffae, #ffffffae);
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            .bb8-toggle__cloud:nth-last-child(2) {
              top: 0.625em;
              right: 4.375em;
              width: 0.875em;
              height: 0.375em;
              background: #dfdedeae;
              -webkit-filter: blur(0.125em) drop-shadow(-0.313em -0.188em #e0dfdfae)
                drop-shadow(-0.625em -0.188em #bbbbbbae) drop-shadow(-1em 0.063em #cfcfcfae);
              filter: blur(0.125em) drop-shadow(-0.313em -0.188em #e0dfdfae)
                drop-shadow(-0.625em -0.188em #bbbbbbae) drop-shadow(-1em 0.063em #cfcfcfae);
              -webkit-transition: 0.6s;
              -o-transition: 0.6s;
              transition: 0.6s;
            }
            
            .bb8-toggle__cloud:nth-last-child(3) {
              top: 1.25em;
              right: 0.938em;
              width: 0.875em;
              height: 0.375em;
              background: #ffffffae;
              -webkit-filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
                drop-shadow(-0.625em 0.313em #ffffffae);
              filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
                drop-shadow(-0.625em 0.313em #ffffffae);
              -webkit-transition: 0.8s;
              -o-transition: 0.8s;
              transition: 0.8s;
            }
            
            .gomrassen,
            .hermes,
            .chenini {
              position: absolute;
              border-radius: var(--radius);
              background: -o-linear-gradient(#fff, #6e8ea2);
              background: -webkit-gradient(
                linear,
                left top,
                left bottom,
                from(#fff),
                to(#6e8ea2)
              );
              background: linear-gradient(#fff, #6e8ea2);
              top: 100%;
            }
            
            .gomrassen {
              left: 0.938em;
              width: 1.875em;
              height: 1.875em;
              -webkit-box-shadow: 0 0 0.188em #ffffff52, 0 0 0.188em #6e8ea24b;
              box-shadow: 0 0 0.188em #ffffff52, 0 0 0.188em #6e8ea24b;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            .gomrassen::before,
            .gomrassen::after {
              content: "";
              position: absolute;
              border-radius: inherit;
              -webkit-box-shadow: inset 0 0 0.063em rgb(140, 162, 169);
              box-shadow: inset 0 0 0.063em rgb(140, 162, 169);
              background: rgb(184, 196, 200);
            }
            
            .gomrassen::before {
              left: 0.313em;
              top: 0.313em;
              width: 0.438em;
              height: 0.438em;
            }
            
            .gomrassen::after {
              width: 0.25em;
              height: 0.25em;
              left: 1.25em;
              top: 0.75em;
            }
            
            .hermes {
              left: 3.438em;
              width: 0.625em;
              height: 0.625em;
              -webkit-box-shadow: 0 0 0.125em #ffffff52, 0 0 0.125em #6e8ea24b;
              box-shadow: 0 0 0.125em #ffffff52, 0 0 0.125em #6e8ea24b;
              -webkit-transition: 0.6s;
              -o-transition: 0.6s;
              transition: 0.6s;
            }
            
            .chenini {
              left: 4.375em;
              width: 0.5em;
              height: 0.5em;
              -webkit-box-shadow: 0 0 0.125em #ffffff52, 0 0 0.125em #6e8ea24b;
              box-shadow: 0 0 0.125em #ffffff52, 0 0 0.125em #6e8ea24b;
              -webkit-transition: 0.8s;
              -o-transition: 0.8s;
              transition: 0.8s;
            }
            
            .tatto-1,
            .tatto-2 {
              position: absolute;
              width: 1.25em;
              height: 1.25em;
              border-radius: var(--radius);
            }
            
            .tatto-1 {
              background: #fefefe;
              right: 3.125em;
              top: 0.625em;
              -webkit-box-shadow: 0 0 0.438em #fdf4e1;
              box-shadow: 0 0 0.438em #fdf4e1;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            .tatto-2 {
              background: -o-linear-gradient(#e6ac5c, #d75449);
              background: -webkit-gradient(
                linear,
                left top,
                left bottom,
                from(#e6ac5c),
                to(#d75449)
              );
              background: linear-gradient(#e6ac5c, #d75449);
              right: 1.25em;
              top: 2.188em;
              -webkit-box-shadow: 0 0 0.438em #e6ad5c3d, 0 0 0.438em #d755494f;
              box-shadow: 0 0 0.438em #e6ad5c3d, 0 0 0.438em #d755494f;
              -webkit-transition: 0.7s;
              -o-transition: 0.7s;
              transition: 0.7s;
            }
            
            .bb8-toggle__star {
              position: absolute;
              width: 0.063em;
              height: 0.063em;
              background: #fff;
              border-radius: var(--radius);
              -webkit-filter: drop-shadow(0 0 0.063em #fff);
              filter: drop-shadow(0 0 0.063em #fff);
              color: #fff;
              top: 100%;
            }
            
            .bb8-toggle__star:nth-child(1) {
              left: 3.75em;
              -webkit-box-shadow: 1.25em 0.938em, -1.25em 2.5em, 0 1.25em, 1.875em 0.625em,
                -3.125em 1.875em, 1.25em 2.813em;
              box-shadow: 1.25em 0.938em, -1.25em 2.5em, 0 1.25em, 1.875em 0.625em,
                -3.125em 1.875em, 1.25em 2.813em;
              -webkit-transition: 0.2s;
              -o-transition: 0.2s;
              transition: 0.2s;
            }
            
            .bb8-toggle__star:nth-child(2) {
              left: 4.688em;
              -webkit-box-shadow: 0.625em 0, 0 0.625em, -0.625em -0.625em, 0.625em 0.938em,
                -3.125em 1.25em, 1.25em -1.563em;
              box-shadow: 0.625em 0, 0 0.625em, -0.625em -0.625em, 0.625em 0.938em,
                -3.125em 1.25em, 1.25em -1.563em;
              -webkit-transition: 0.3s;
              -o-transition: 0.3s;
              transition: 0.3s;
            }
            
            .bb8-toggle__star:nth-child(3) {
              left: 5.313em;
              -webkit-box-shadow: -0.625em -0.625em, -2.188em 1.25em, -2.188em 0,
                -3.75em -0.625em, -3.125em -0.625em, -2.5em -0.313em, 0.75em -0.625em;
              box-shadow: -0.625em -0.625em, -2.188em 1.25em, -2.188em 0, -3.75em -0.625em,
                -3.125em -0.625em, -2.5em -0.313em, 0.75em -0.625em;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            .bb8-toggle__star:nth-child(4) {
              left: 1.875em;
              width: 0.125em;
              height: 0.125em;
              -webkit-transition: 0.5s;
              -o-transition: 0.5s;
              transition: 0.5s;
            }
            
            .bb8-toggle__star:nth-child(5) {
              left: 5em;
              width: 0.125em;
              height: 0.125em;
              -webkit-transition: 0.6s;
              -o-transition: 0.6s;
              transition: 0.6s;
            }
            
            .bb8-toggle__star:nth-child(6) {
              left: 2.5em;
              width: 0.125em;
              height: 0.125em;
              -webkit-transition: 0.7s;
              -o-transition: 0.7s;
              transition: 0.7s;
            }
            
            .bb8-toggle__star:nth-child(7) {
              left: 3.438em;
              width: 0.125em;
              height: 0.125em;
              -webkit-transition: 0.8s;
              -o-transition: 0.8s;
              transition: 0.8s;
            }
            
            /* actions */
            
            .bb8-toggle__checkbox:checked
              + .bb8-toggle__container
              .bb8-toggle__star:nth-child(1) {
              top: 0.625em;
            }
            
            .bb8-toggle__checkbox:checked
              + .bb8-toggle__container
              .bb8-toggle__star:nth-child(2) {
              top: 1.875em;
            }
            
            .bb8-toggle__checkbox:checked
              + .bb8-toggle__container
              .bb8-toggle__star:nth-child(3) {
              top: 1.25em;
            }
            
            .bb8-toggle__checkbox:checked
              + .bb8-toggle__container
              .bb8-toggle__star:nth-child(4) {
              top: 3.438em;
            }
            
            .bb8-toggle__checkbox:checked
              + .bb8-toggle__container
              .bb8-toggle__star:nth-child(5) {
              top: 3.438em;
            }
            
            .bb8-toggle__checkbox:checked
              + .bb8-toggle__container
              .bb8-toggle__star:nth-child(6) {
              top: 0.313em;
            }
            
            .bb8-toggle__checkbox:checked
              + .bb8-toggle__container
              .bb8-toggle__star:nth-child(7) {
              top: 1.875em;
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container .bb8-toggle__cloud {
              right: -100%;
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container .gomrassen {
              top: 0.938em;
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container .hermes {
              top: 2.5em;
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container .chenini {
              top: 2.75em;
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container {
              background-position-y: 0;
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container .tatto-1 {
              top: 100%;
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container .tatto-2 {
              top: 100%;
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container .bb8 {
              left: calc(100% - var(--bb8-diameter) - var(--toggle-offset));
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container .bb8__shadow {
              left: calc(100% - var(--bb8-diameter) - var(--toggle-offset) + 0.938em);
              -webkit-transform: skew(70deg);
              -ms-transform: skew(70deg);
              transform: skew(70deg);
            }
            
            .bb8-toggle__checkbox:checked + .bb8-toggle__container .bb8__body {
              -webkit-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
              transform: rotate(225deg);
            }
            
            .bb8-toggle__checkbox:hover + .bb8-toggle__container .bb8__head::before {
              left: 100%;
            }
            
            .bb8-toggle__checkbox:not(:checked):hover
              + .bb8-toggle__container
              .bb8__antenna:nth-child(1) {
              right: 1.5em;
            }
            
            .bb8-toggle__checkbox:hover
              + .bb8-toggle__container
              .bb8__antenna:nth-child(2) {
              left: 0.938em;
            }
            
            .bb8-toggle__checkbox:hover + .bb8-toggle__container .bb8__head::after {
              background-position: 1.375em 0;
            }
            
            .bb8-toggle__checkbox:checked:hover
              + .bb8-toggle__container
              .bb8__head::before {
              left: 0;
            }
            
            .bb8-toggle__checkbox:checked:hover
              + .bb8-toggle__container
              .bb8__antenna:nth-child(2) {
              left: calc(100% - 0.938em);
            }
            
            .bb8-toggle__checkbox:checked:hover + .bb8-toggle__container .bb8__head::after {
              background-position: -1.375em 0;
            }
            
            .bb8-toggle__checkbox:active + .bb8-toggle__container .bb8__head-container {
              -webkit-transform: rotate(25deg);
              -ms-transform: rotate(25deg);
              transform: rotate(25deg);
            }
            
            .bb8-toggle__checkbox:checked:active
              + .bb8-toggle__container
              .bb8__head-container {
              -webkit-transform: rotate(-25deg);
              -ms-transform: rotate(-25deg);
              transform: rotate(-25deg);
            }
            
            .bb8:hover .bb8__head::before,
            .bb8:hover .bb8__antenna:nth-child(2) {
              left: 50% !important;
            }
            
            .bb8:hover .bb8__antenna:nth-child(1) {
              right: 0.938em !important;
            }
            
            .bb8:hover .bb8__head::after {
              background-position: 0 0 !important;
            }
            
            
            
            
            
            
            
            .card {
              overflow: visible;
              width: 190px;
              height: 254px;
            }
            
            .content {
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
              transition: transform 300ms;
              box-shadow: 0px 0px 10px 1px #000000ee;
              border-radius: 5px;
            }
            
            .front, .back {
              background-color: #151515;
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
              border-radius: 5px;
              overflow: hidden;
            }
            
            .back {
              width: 100%;
              height: 100%;
              justify-content: center;
              display: flex;
              align-items: center;
              overflow: hidden;
            }
            
            .back::before {
              position: absolute;
              content: ' ';
              display: block;
              width: 160px;
              height: 160%;
              background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
              animation: rotation_481 5000ms infinite linear;
            }
            
            .back-content {
              position: absolute;
              width: 99%;
              height: 99%;
              background-color: #151515;
              border-radius: 5px;
              color: white;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 30px;
            }
            
            .card:hover .content {
              transform: rotateY(180deg);
            }
            
            @keyframes rotation_481 {
              0% {
                transform: rotateZ(0deg);
              }
            
              0% {
                transform: rotateZ(360deg);
              }
            }
            
            .front {
              transform: rotateY(180deg);
              color: white;
            }
            
            .front .front-content {
              position: absolute;
              width: 100%;
              height: 100%;
              padding: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            
            .front-content .badge {
              background-color: #00000055;
              padding: 2px 10px;
              border-radius: 10px;
              backdrop-filter: blur(2px);
              width: fit-content;
            }
            
            .description {
              box-shadow: 0px 0px 10px 5px #00000088;
              width: 100%;
              padding: 10px;
              background-color: #00000099;
              backdrop-filter: blur(5px);
              border-radius: 5px;
            }
            
            .title {
              font-size: 11px;
              max-width: 100%;
              display: flex;
              justify-content: space-between;
            }
            
            .title p {
              width: 50%;
            }
            
            .card-footer {
              color: #ffffff88;
              margin-top: 5px;
              font-size: 8px;
            }
            
            .front .img {
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            }
            
            .circle {
              width: 90px;
              height: 90px;
              border-radius: 50%;
              background-color: #ffbb66;
              position: relative;
              filter: blur(15px);
              animation: floating 2600ms infinite linear;
            }
            
            #bottom {
              background-color: #ff8866;
              left: 50px;
              top: 0px;
              width: 150px;
              height: 150px;
              animation-delay: -800ms;
            }
            
            #right {
              background-color: #ff2233;
              left: 160px;
              top: -80px;
              width: 30px;
              height: 30px;
              animation-delay: -1800ms;
            }
            
            @keyframes floating {
              0% {
                transform: translateY(0px);
              }
            
              50% {
                transform: translateY(10px);
              }
            
              100% {
                transform: translateY(0px);
              }
            }
            
            
            
            
            .container {
              display: flex;
              flex-direction: row;
            }
            
            .radio-wrapper {
              position: relative;
              height: 38px;
              width: 84px;
              margin: 3px;
            }
            
            .radio-wrapper .input {
              position: absolute;
              height: 100%;
              width: 100%;
              margin: 0;
              cursor: pointer;
              z-index: 10;
              opacity: 0;
            }
            
            .btn {
              --primary: #ff184c;
              --shadow-primary: #fded00;
              --color: white;
              --font-size: 9px;
              --shadow-primary-hue: 180;
              --shadow-secondary-hue: 60;
              --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
              --clip: polygon(11% 0, 95% 0, 100% 25%, 90% 90%, 95% 90%, 85% 90%, 85% 100%, 7% 100%, 0 80%);
              --border: 5px;
              --shimmy-distance: 5;
              --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
              --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
              --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
              --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
              --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
              --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
              --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
              color: var(--color);
              text-transform: uppercase;
              font-size: var(--font-size);
              letter-spacing: 3px;
              position: relative;
              font-weight: 900;
              width: 100%;
              height: 100%;
              line-height: 38px;
              text-align: center;
              transition: background 0.2s, 0.3s;
            }
            
            .input:checked + .btn {
              --primary: #8B00FF;
              --shadow-primary: #00e572;
            }
            
            .input:hover + .btn {
              --primary: #cc133c;
              --font-size: 11px;
            }
            
            .btn:after, .btn:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              clip-path: var(--clip);
              z-index: -1;
            }
            
            .btn:before {
              background: var(--shadow-primary);
              transform: translate(var(--border), 0);
            }
            
            .btn:after {
              background: var(--primary);
            }
            
            .btn__tag {
              position: absolute;
              padding: 1px 4px;
              letter-spacing: 1px;
              line-height: 1;
              bottom: -5%;
              right: 5%;
              font-weight: normal;
              color: hsl(0, 0%, 0%);
              font-size: var(--label-size);
            }
            
            .btn__glitch {
              position: absolute;
              top: calc(var(--border) * -1);
              left: calc(var(--border) * -1);
              right: calc(var(--border) * -1);
              bottom: calc(var(--border) * -1);
              background: var(--shadow-primary);
              text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
              clip-path: var(--clip);
              animation: glitch 2s infinite;
              display: none;
            }
            
            .input:hover + .btn .btn__glitch {
              display: block;
            }
            
            .input:checked + .btn .btn__glitch {
              display: block;
              animation: glitch 5s infinite;
            }
            
            .btn__glitch:before {
              content: '';
              position: absolute;
              top: calc(var(--border) * 1);
              right: calc(var(--border) * 1);
              bottom: calc(var(--border) * 1);
              left: calc(var(--border) * 1);
              clip-path: var(--clip);
              background: var(--primary);
              z-index: -1;
            }
            
            @keyframes glitch {
              0% {
                clip-path: var(--clip-one);
              }
            
              2%, 8% {
                clip-path: var(--clip-two);
                transform: translate(calc(var(--shimmy-distance) * -1%), 0);
              }
            
              6% {
                clip-path: var(--clip-two);
                transform: translate(calc(var(--shimmy-distance) * 1%), 0);
              }
            
              9% {
                clip-path: var(--clip-two);
                transform: translate(0, 0);
              }
            
              10% {
                clip-path: var(--clip-three);
                transform: translate(calc(var(--shimmy-distance) * 1%), 0);
              }
            
              13% {
                clip-path: var(--clip-three);
                transform: translate(0, 0);
              }
            
              14%, 21% {
                clip-path: var(--clip-four);
                transform: translate(calc(var(--shimmy-distance) * 1%), 0);
              }
            
              25% {
                clip-path: var(--clip-five);
                transform: translate(calc(var(--shimmy-distance) * 1%), 0);
              }
            
              30% {
                clip-path: var(--clip-five);
                transform: translate(calc(var(--shimmy-distance) * -1%), 0);
              }
            
              35%, 45% {
                clip-path: var(--clip-six);
                transform: translate(calc(var(--shimmy-distance) * -1%));
              }
            
              40% {
                clip-path: var(--clip-six);
                transform: translate(calc(var(--shimmy-distance) * 1%));
              }
            
              50% {
                clip-path: var(--clip-six);
                transform: translate(0, 0);
              }
            
              55% {
                clip-path: var(--clip-seven);
                transform: translate(calc(var(--shimmy-distance) * 1%), 0);
              }
            
              60% {
                clip-path: var(--clip-seven);
                transform: translate(0, 0);
              }
            
              31%, 61%, 100% {
                clip-path: var(--clip-four);
              }
            }
            
            .number {
              background: var(--shadow-primary);
              color: #323232;
              font-size: 5.5px;
              font-weight: 700;
              letter-spacing: 1px;
              position: absolute;
              width: 15px;
              height: 6px;
              top: 0;
              left: 81%;
              line-height: 6.2px;
            }
            
            
            
            
            
            
            
            .main {
              display: flex;
              flex-direction: column;
              gap: 0.5em;
            }
            
            .up {
              display: flex;
              flex-direction: row;
              gap: 0.5em;
            }
            
            .down {
              display: flex;
              flex-direction: row;
              gap: 0.5em;
            }
            
            .card1 {
              width: 90px;
              height: 90px;
              outline: none;
              border: none;
              background: white;
              border-radius: 90px 5px 5px 5px;
              box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
              transition: .2s ease-in-out;
            }
            
            .instagram {
              margin-top: 1.5em;
              margin-left: 1.2em;
              fill: #cc39a4;
            }
            
            .card2 {
              width: 90px;
              height: 90px;
              outline: none;
              border: none;
              background: white;
              border-radius: 5px 90px 5px 5px;
              box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
              transition: .2s ease-in-out;
            }
            
            .twitter {
              margin-top: 1.5em;
              margin-left: -.9em;
              fill: #03A9F4;
            }
            
            .card3 {
              width: 90px;
              height: 90px;
              outline: none;
              border: none;
              background: white;
              border-radius: 5px 5px 5px 90px;
              box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
              transition: .2s ease-in-out;
            }
            
            .github {
              margin-top: -.6em;
              margin-left: 1.2em;
            }
            
            .card4 {
              width: 90px;
              height: 90px;
              outline: none;
              border: none;
              background: white;
              border-radius: 5px 5px 90px 5px;
              box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
              transition: .2s ease-in-out;
            }
            
            .discord {
              margin-top: -.9em;
              margin-left: -1.2em;
              fill: #8c9eff;
            }
            
            .card1:hover {
              cursor: pointer;
              scale: 1.1;
              background-color: #cc39a4;
            }
            
            .card1:hover .instagram {
              fill: white;
            }
            
            .card2:hover {
              cursor: pointer;
              scale: 1.1;
              background-color: #03A9F4;
            }
            
            .card2:hover .twitter {
              fill: white;
            }
            
            .card3:hover {
              cursor: pointer;
              scale: 1.1;
              background-color: black;
            }
            
            .card3:hover .github {
              fill: white;
            }
            
            .card4:hover {
              cursor: pointer;
              scale: 1.1;
              background-color: #8c9eff;
            }
            
            .card4:hover .discord {
              fill: white;
            }
            
            
            
            
            
            
            
            .wheel-and-hamster {
              --dur: 1s;
              position: relative;
              width: 12em;
              height: 12em;
              font-size: 14px;
            }
            
            .wheel,
            .hamster,
            .hamster div,
            .spoke {
              position: absolute;
            }
            
            .wheel,
            .spoke {
              border-radius: 50%;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            
            .wheel {
              background: radial-gradient(100% 100% at center,hsla(0,0%,60%,0) 47.8%,hsl(0,0%,60%) 48%);
              z-index: 2;
            }
            
            .hamster {
              animation: hamster var(--dur) ease-in-out infinite;
              top: 50%;
              left: calc(50% - 3.5em);
              width: 7em;
              height: 3.75em;
              transform: rotate(4deg) translate(-0.8em,1.85em);
              transform-origin: 50% 0;
              z-index: 1;
            }
            
            .hamster__head {
              animation: hamsterHead var(--dur) ease-in-out infinite;
              background: hsl(30,90%,55%);
              border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
              box-shadow: 0 -0.25em 0 hsl(30,90%,80%) inset,
                    0.75em -1.55em 0 hsl(30,90%,90%) inset;
              top: 0;
              left: -2em;
              width: 2.75em;
              height: 2.5em;
              transform-origin: 100% 50%;
            }
            
            .hamster__ear {
              animation: hamsterEar var(--dur) ease-in-out infinite;
              background: hsl(0,90%,85%);
              border-radius: 50%;
              box-shadow: -0.25em 0 hsl(30,90%,55%) inset;
              top: -0.25em;
              right: -0.25em;
              width: 0.75em;
              height: 0.75em;
              transform-origin: 50% 75%;
            }
            
            .hamster__eye {
              animation: hamsterEye var(--dur) linear infinite;
              background-color: hsl(0,0%,0%);
              border-radius: 50%;
              top: 0.375em;
              left: 1.25em;
              width: 0.5em;
              height: 0.5em;
            }
            
            .hamster__nose {
              background: hsl(0,90%,75%);
              border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
              top: 0.75em;
              left: 0;
              width: 0.2em;
              height: 0.25em;
            }
            
            .hamster__body {
              animation: hamsterBody var(--dur) ease-in-out infinite;
              background: hsl(30,90%,90%);
              border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
              box-shadow: 0.1em 0.75em 0 hsl(30,90%,55%) inset,
                    0.15em -0.5em 0 hsl(30,90%,80%) inset;
              top: 0.25em;
              left: 2em;
              width: 4.5em;
              height: 3em;
              transform-origin: 17% 50%;
              transform-style: preserve-3d;
            }
            
            .hamster__limb--fr,
            .hamster__limb--fl {
              clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
              top: 2em;
              left: 0.5em;
              width: 1em;
              height: 1.5em;
              transform-origin: 50% 0;
            }
            
            .hamster__limb--fr {
              animation: hamsterFRLimb var(--dur) linear infinite;
              background: linear-gradient(hsl(30,90%,80%) 80%,hsl(0,90%,75%) 80%);
              transform: rotate(15deg) translateZ(-1px);
            }
            
            .hamster__limb--fl {
              animation: hamsterFLLimb var(--dur) linear infinite;
              background: linear-gradient(hsl(30,90%,90%) 80%,hsl(0,90%,85%) 80%);
              transform: rotate(15deg);
            }
            
            .hamster__limb--br,
            .hamster__limb--bl {
              border-radius: 0.75em 0.75em 0 0;
              clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
              top: 1em;
              left: 2.8em;
              width: 1.5em;
              height: 2.5em;
              transform-origin: 50% 30%;
            }
            
            .hamster__limb--br {
              animation: hamsterBRLimb var(--dur) linear infinite;
              background: linear-gradient(hsl(30,90%,80%) 90%,hsl(0,90%,75%) 90%);
              transform: rotate(-25deg) translateZ(-1px);
            }
            
            .hamster__limb--bl {
              animation: hamsterBLLimb var(--dur) linear infinite;
              background: linear-gradient(hsl(30,90%,90%) 90%,hsl(0,90%,85%) 90%);
              transform: rotate(-25deg);
            }
            
            .hamster__tail {
              animation: hamsterTail var(--dur) linear infinite;
              background: hsl(0,90%,85%);
              border-radius: 0.25em 50% 50% 0.25em;
              box-shadow: 0 -0.2em 0 hsl(0,90%,75%) inset;
              top: 1.5em;
              right: -0.5em;
              width: 1em;
              height: 0.5em;
              transform: rotate(30deg) translateZ(-1px);
              transform-origin: 0.25em 0.25em;
            }
            
            .spoke {
              animation: spoke var(--dur) linear infinite;
              background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
                    linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
            }
            
            /* Animations */
            @keyframes hamster {
              from, to {
                transform: rotate(4deg) translate(-0.8em,1.85em);
              }
            
              50% {
                transform: rotate(0) translate(-0.8em,1.85em);
              }
            }
            
            @keyframes hamsterHead {
              from, 25%, 50%, 75%, to {
                transform: rotate(0);
              }
            
              12.5%, 37.5%, 62.5%, 87.5% {
                transform: rotate(8deg);
              }
            }
            
            @keyframes hamsterEye {
              from, 90%, to {
                transform: scaleY(1);
              }
            
              95% {
                transform: scaleY(0);
              }
            }
            
            @keyframes hamsterEar {
              from, 25%, 50%, 75%, to {
                transform: rotate(0);
              }
            
              12.5%, 37.5%, 62.5%, 87.5% {
                transform: rotate(12deg);
              }
            }
            
            @keyframes hamsterBody {
              from, 25%, 50%, 75%, to {
                transform: rotate(0);
              }
            
              12.5%, 37.5%, 62.5%, 87.5% {
                transform: rotate(-2deg);
              }
            }
            
            @keyframes hamsterFRLimb {
              from, 25%, 50%, 75%, to {
                transform: rotate(50deg) translateZ(-1px);
              }
            
              12.5%, 37.5%, 62.5%, 87.5% {
                transform: rotate(-30deg) translateZ(-1px);
              }
            }
            
            @keyframes hamsterFLLimb {
              from, 25%, 50%, 75%, to {
                transform: rotate(-30deg);
              }
            
              12.5%, 37.5%, 62.5%, 87.5% {
                transform: rotate(50deg);
              }
            }
            
            @keyframes hamsterBRLimb {
              from, 25%, 50%, 75%, to {
                transform: rotate(-60deg) translateZ(-1px);
              }
            
              12.5%, 37.5%, 62.5%, 87.5% {
                transform: rotate(20deg) translateZ(-1px);
              }
            }
            
            @keyframes hamsterBLLimb {
              from, 25%, 50%, 75%, to {
                transform: rotate(20deg);
              }
            
              12.5%, 37.5%, 62.5%, 87.5% {
                transform: rotate(-60deg);
              }
            }
            
            @keyframes hamsterTail {
              from, 25%, 50%, 75%, to {
                transform: rotate(30deg) translateZ(-1px);
              }
            
              12.5%, 37.5%, 62.5%, 87.5% {
                transform: rotate(10deg) translateZ(-1px);
              }
            }
            
            @keyframes spoke {
              from {
                transform: rotate(0);
              }
            
              to {
                transform: rotate(-1turn);
              }
            }
            
            
            
            
            
            
            .theme-switch {
              --toggle-size: 30px;
              /* the size is adjusted using font-size,
                 this is not transform scale,
                 so you can choose any size */
              --container-width: 5.625em;
              --container-height: 2.5em;
              --container-radius: 6.25em;
              /* radius 0 - minecraft mode :) */
              --container-light-bg: #3D7EAE;
              --container-night-bg: #1D1F2C;
              --circle-container-diameter: 3.375em;
              --sun-moon-diameter: 2.125em;
              --sun-bg: #ECCA2F;
              --moon-bg: #C4C9D1;
              --spot-color: #959DB1;
              --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
              --stars-color: #fff;
              --clouds-color: #F3FDFF;
              --back-clouds-color: #AACADF;
              --transition: .5s cubic-bezier(0, -0.02, 0.4, 1.25);
              --circle-transition: .3s cubic-bezier(0, -0.02, 0.35, 1.17);
            }
            
            .theme-switch, .theme-switch *, .theme-switch *::before, .theme-switch *::after {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              font-size: var(--toggle-size);
            }
            
            .theme-switch__container {
              width: var(--container-width);
              height: var(--container-height);
              background-color: var(--container-light-bg);
              border-radius: var(--container-radius);
              overflow: hidden;
              cursor: pointer;
              -webkit-box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
              box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
              position: relative;
            }
            
            .theme-switch__container::before {
              content: "";
              position: absolute;
              z-index: 1;
              inset: 0;
              -webkit-box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
              box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
              border-radius: var(--container-radius)
            }
            
            .theme-switch__checkbox {
              display: none;
            }
            
            .theme-switch__circle-container {
              width: var(--circle-container-diameter);
              height: var(--circle-container-diameter);
              background-color: rgba(255, 255, 255, 0.1);
              position: absolute;
              left: var(--circle-container-offset);
              top: var(--circle-container-offset);
              border-radius: var(--container-radius);
              -webkit-box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
              box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-transition: var(--circle-transition);
              -o-transition: var(--circle-transition);
              transition: var(--circle-transition);
              pointer-events: none;
            }
            
            .theme-switch__sun-moon-container {
              pointer-events: auto;
              position: relative;
              z-index: 2;
              width: var(--sun-moon-diameter);
              height: var(--sun-moon-diameter);
              margin: auto;
              border-radius: var(--container-radius);
              background-color: var(--sun-bg);
              -webkit-box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
              box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
              -webkit-filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
              filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
              overflow: hidden;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            .theme-switch__moon {
              -webkit-transform: translateX(100%);
              -ms-transform: translateX(100%);
              transform: translateX(100%);
              width: 100%;
              height: 100%;
              background-color: var(--moon-bg);
              border-radius: inherit;
              -webkit-box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #969696 inset;
              box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #969696 inset;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
              position: relative;
            }
            
            .theme-switch__spot {
              position: absolute;
              top: 0.75em;
              left: 0.312em;
              width: 0.75em;
              height: 0.75em;
              border-radius: var(--container-radius);
              background-color: var(--spot-color);
              -webkit-box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
              box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
            }
            
            .theme-switch__spot:nth-of-type(2) {
              width: 0.375em;
              height: 0.375em;
              top: 0.937em;
              left: 1.375em;
            }
            
            .theme-switch__spot:nth-last-of-type(3) {
              width: 0.25em;
              height: 0.25em;
              top: 0.312em;
              left: 0.812em;
            }
            
            .theme-switch__clouds {
              width: 1.25em;
              height: 1.25em;
              background-color: var(--clouds-color);
              border-radius: var(--container-radius);
              position: absolute;
              bottom: -0.625em;
              left: 0.312em;
              -webkit-box-shadow: 0.937em 0.312em var(--clouds-color), -0.312em -0.312em var(--back-clouds-color), 1.437em 0.375em var(--clouds-color), 0.5em -0.125em var(--back-clouds-color), 2.187em 0 var(--clouds-color), 1.25em -0.062em var(--back-clouds-color), 2.937em 0.312em var(--clouds-color), 2em -0.312em var(--back-clouds-color), 3.625em -0.062em var(--clouds-color), 2.625em 0em var(--back-clouds-color), 4.5em -0.312em var(--clouds-color), 3.375em -0.437em var(--back-clouds-color), 4.625em -1.75em 0 0.437em var(--clouds-color), 4em -0.625em var(--back-clouds-color), 4.125em -2.125em 0 0.437em var(--back-clouds-color);
              box-shadow: 0.937em 0.312em var(--clouds-color), -0.312em -0.312em var(--back-clouds-color), 1.437em 0.375em var(--clouds-color), 0.5em -0.125em var(--back-clouds-color), 2.187em 0 var(--clouds-color), 1.25em -0.062em var(--back-clouds-color), 2.937em 0.312em var(--clouds-color), 2em -0.312em var(--back-clouds-color), 3.625em -0.062em var(--clouds-color), 2.625em 0em var(--back-clouds-color), 4.5em -0.312em var(--clouds-color), 3.375em -0.437em var(--back-clouds-color), 4.625em -1.75em 0 0.437em var(--clouds-color), 4em -0.625em var(--back-clouds-color), 4.125em -2.125em 0 0.437em var(--back-clouds-color);
              -webkit-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
              -o-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
              transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
            }
            
            .theme-switch__stars-container {
              position: absolute;
              color: var(--stars-color);
              top: -100%;
              left: 0.312em;
              width: 2.75em;
              height: auto;
              -webkit-transition: var(--transition);
              -o-transition: var(--transition);
              transition: var(--transition);
            }
            
            /* actions */
            
            .theme-switch__checkbox:checked + .theme-switch__container {
              background-color: var(--container-night-bg);
            }
            
            .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
              left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter));
            }
            
            .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container:hover {
              left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter) - 0.187em)
            }
            
            .theme-switch__circle-container:hover {
              left: calc(var(--circle-container-offset) + 0.187em);
            }
            
            .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__moon {
              -webkit-transform: translate(0);
              -ms-transform: translate(0);
              transform: translate(0);
            }
            
            .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__clouds {
              bottom: -4.062em;
            }
            
            .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__stars-container {
              top: 50%;
              -webkit-transform: translateY(-50%);
              -ms-transform: translateY(-50%);
              transform: translateY(-50%);
            }
            
            
            
            
            
            
            
            
            .loading svg polyline {
              fill: none;
              stroke-width: 3;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            
            .loading svg polyline#back {
              fill: none;
              stroke: #ff4d5033;
            }
            
            .loading svg polyline#front {
              fill: none;
              stroke: #ff4d4f;
              stroke-dasharray: 48, 144;
              stroke-dashoffset: 192;
              animation: dash_682 1.4s linear infinite;
            }
            
            @keyframes dash_682 {
              72.5% {
                opacity: 0;
              }
            
              to {
                stroke-dashoffset: 0;
              }
            }
            
            
            
            
            
            
            
            .pencil {
              display: block;
              width: 10em;
              height: 10em;
            }
            
            .pencil__body1,
            .pencil__body2,
            .pencil__body3,
            .pencil__eraser,
            .pencil__eraser-skew,
            .pencil__point,
            .pencil__rotate,
            .pencil__stroke {
              animation-duration: 3s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
            
            .pencil__body1,
            .pencil__body2,
            .pencil__body3 {
              transform: rotate(-90deg);
            }
            
            .pencil__body1 {
              animation-name: pencilBody1;
            }
            
            .pencil__body2 {
              animation-name: pencilBody2;
            }
            
            .pencil__body3 {
              animation-name: pencilBody3;
            }
            
            .pencil__eraser {
              animation-name: pencilEraser;
              transform: rotate(-90deg) translate(49px,0);
            }
            
            .pencil__eraser-skew {
              animation-name: pencilEraserSkew;
              animation-timing-function: ease-in-out;
            }
            
            .pencil__point {
              animation-name: pencilPoint;
              transform: rotate(-90deg) translate(49px,-30px);
            }
            
            .pencil__rotate {
              animation-name: pencilRotate;
            }
            
            .pencil__stroke {
              animation-name: pencilStroke;
              transform: translate(100px,100px) rotate(-113deg);
            }
            
            /* Animations */
            @keyframes pencilBody1 {
              from,
                to {
                stroke-dashoffset: 351.86;
                transform: rotate(-90deg);
              }
            
              50% {
                stroke-dashoffset: 150.8;
             /* 3/8 of diameter */
                transform: rotate(-225deg);
              }
            }
            
            @keyframes pencilBody2 {
              from,
                to {
                stroke-dashoffset: 406.84;
                transform: rotate(-90deg);
              }
            
              50% {
                stroke-dashoffset: 174.36;
                transform: rotate(-225deg);
              }
            }
            
            @keyframes pencilBody3 {
              from,
                to {
                stroke-dashoffset: 296.88;
                transform: rotate(-90deg);
              }
            
              50% {
                stroke-dashoffset: 127.23;
                transform: rotate(-225deg);
              }
            }
            
            @keyframes pencilEraser {
              from,
                to {
                transform: rotate(-45deg) translate(49px,0);
              }
            
              50% {
                transform: rotate(0deg) translate(49px,0);
              }
            }
            
            @keyframes pencilEraserSkew {
              from,
                32.5%,
                67.5%,
                to {
                transform: skewX(0);
              }
            
              35%,
                65% {
                transform: skewX(-4deg);
              }
            
              37.5%, 
                62.5% {
                transform: skewX(8deg);
              }
            
              40%,
                45%,
                50%,
                55%,
                60% {
                transform: skewX(-15deg);
              }
            
              42.5%,
                47.5%,
                52.5%,
                57.5% {
                transform: skewX(15deg);
              }
            }
            
            @keyframes pencilPoint {
              from,
                to {
                transform: rotate(-90deg) translate(49px,-30px);
              }
            
              50% {
                transform: rotate(-225deg) translate(49px,-30px);
              }
            }
            
            @keyframes pencilRotate {
              from {
                transform: translate(100px,100px) rotate(0);
              }
            
              to {
                transform: translate(100px,100px) rotate(720deg);
              }
            }
            
            @keyframes pencilStroke {
              from {
                stroke-dashoffset: 439.82;
                transform: translate(100px,100px) rotate(-113deg);
              }
            
              50% {
                stroke-dashoffset: 164.93;
                transform: translate(100px,100px) rotate(-113deg);
              }
            
              75%,
                to {
                stroke-dashoffset: 439.82;
                transform: translate(100px,100px) rotate(112deg);
              }
            }
            
            
            
            
            
            
            
            
            .loader {
              width: 120px;
              height: 150px;
              background-color: #fff;
              background-repeat: no-repeat;
              background-image: linear-gradient(#ddd 50%, #bbb 51%),
                linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd),
                radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
                radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
                radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%);
              background-position: 0 20px, 45px 0, 8px 6px, 55px 3px, 75px 3px, 95px 3px;
              background-size: 100% 4px, 1px 23px, 30px 8px, 15px 15px, 15px 15px, 15px 15px;
              position: relative;
              border-radius: 6%;
              animation: shake 3s ease-in-out infinite;
              transform-origin: 60px 180px;
            }
            
            .loader:before {
              content: "";
              position: absolute;
              left: 5px;
              top: 100%;
              width: 7px;
              height: 5px;
              background: #aaa;
              border-radius: 0 0 4px 4px;
              box-shadow: 102px 0 #aaa;
            }
            
            .loader:after {
              content: "";
              position: absolute;
              width: 95px;
              height: 95px;
              left: 0;
              right: 0;
              margin: auto;
              bottom: 20px;
              background-color: #bbdefb;
              background-image: linear-gradient( to right, #0004 0%, #0004 49%, #0000 50%, #0000 100% ),
                linear-gradient(135deg, #64b5f6 50%, #607d8b 51%);
              background-size: 30px 100%, 90px 80px;
              border-radius: 50%;
              background-repeat: repeat, no-repeat;
              background-position: 0 0;
              box-sizing: border-box;
              border: 10px solid #DDD;
              box-shadow: 0 0 0 4px #999 inset, 0 0 6px 6px #0004 inset;
              animation: spin 3s ease-in-out infinite;
            }
            
            @keyframes spin {
              0% {
                transform: rotate(0deg)
              }
            
              50% {
                transform: rotate(360deg)
              }
            
              75% {
                transform: rotate(750deg)
              }
            
              100% {
                transform: rotate(1800deg)
              }
            }
            
            @keyframes shake {
              65%, 80%, 88%, 96% {
                transform: rotate(0.5deg)
              }
            
              50%, 75%, 84%, 92% {
                transform: rotate(-0.5deg)
              }
            
              0%, 50%, 100% {
                transform: rotate(0)
              }
            }
            





.ball {
  position: relative;
  bottom: 50px;
  left: calc(100% - 20px);
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  animation: ball-move8234 3s ease-in-out 1s infinite alternate;
}

.ball::after {
  position: absolute;
  content: '';
  top: 25px;
  right: 5px;
  width: 5px;
  height: 5px;
  background: #000;
  border-radius: 50%;
}

.bar {
  width: 200px;
  height: 12.5px;
  background: #FFDAAF;
  border-radius: 30px;
  transform: rotate(-15deg);
  animation: up-down6123 3s ease-in-out 1s infinite alternate;
}

@keyframes up-down6123 {
  from {
    transform: rotate(-15deg);
  }

  to {
    transform: rotate(15deg);
  }
}

@keyframes ball-move8234 {
  from {
    left: calc(100% - 40px);
    transform: rotate(360deg);
  }

  to {
    left: calc(0% - 20px);
    transform: rotate(0deg);
  }

}


.flotante {
  position: relative;
  animation: flotar 2s ease-in-out infinite alternate;
  color: white;
  display: flex;
}

@keyframes flotar {
  0% {
      top: 0;
  }
  100% {
      top: 20px; /* Puedes ajustar esta cantidad para cambiar la distancia del movimiento */
  }
}


.flotante2 {
  position: relative;
  animation: flotar2 2s ease-in-out infinite alternate;
  color: white;
  display: flex;
}

@keyframes flotar2 {
  0% {
      top: 0;
  }
  100% {
      top: 10px; /* Puedes ajustar esta cantidad para cambiar la distancia del movimiento */
  }
}

.flotante3 {
  position: relative;
  animation: flotar3 6s ease-in-out infinite alternate;
  color: white;
  display: flex;
}

@keyframes flotar3 {
  0% {
      top: 0;
  }
  100% {
      top: 10px; /* Puedes ajustar esta cantidad para cambiar la distancia del movimiento */
  }
}



            
            
              </style>
            </head>
            <body>
            <div class="container">

    <div class="container1"> 
        <div class="main">
          <div class="up">
            <button class="card1">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="30px" height="30px" fill-rule="nonzero" class="instagram"><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
            </button>
            <button class="card2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" class="twitter"><path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
            </button>
          </div>
          <div class="down">
            <button class="card3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" class="github">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
            </button>
            <button class="card4">
              <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="discord"><path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path></svg>
            </button>
          </div>
        </div> 
            <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <svg stroke="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
        
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
        
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
        
                <g id="SVGRepo_iconCarrier">
        
                <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z"></path>
        
                </g>
        
                </svg>
                <strong>Hover Me</strong>
              </div>
            </div>
            <div class="front">
              
              <div class="img">
                <div class="circle">
                </div>
                <div class="circle" id="right">
                </div>
                <div class="circle" id="bottom">
                </div>
              </div>
        
              <div class="front-content">
                <small class="badge">Pasta</small>
                <div class="description">
                  <div class="title">
                    <p class="title">
                      <strong>Spaguetti Bolognese</strong>
                    </p>
                    <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                  </div>
                  <p class="card-footer">
                    30 Mins &nbsp; | &nbsp; 1 Serving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
            <div class="wheel"></div>
            <div class="hamster">
                <div class="hamster__body">
                    <div class="hamster__head">
                        <div class="hamster__ear"></div>
                        <div class="hamster__eye"></div>
                        <div class="hamster__nose"></div>
                    </div>
                    <div class="hamster__limb hamster__limb--fr"></div>
                    <div class="hamster__limb hamster__limb--fl"></div>
                    <div class="hamster__limb hamster__limb--br"></div>
                    <div class="hamster__limb hamster__limb--bl"></div>
                    <div class="hamster__tail"></div>
                </div>
            </div>
            <div class="spoke"></div>
        </div>
    </div>

    <div class="container2">

              <div class="loader"></div>


        <div class="loading">
          <svg width="64px" height="48px">
              <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
          </svg>
        </div>

       
        

              <div class="bar">
    <div class="ball"></div>
</div>
       
        
        

        
    
    </div>

    <div class="container3">
          <div>
        <label class="theme-switch">
          <input type="checkbox" class="theme-switch__checkbox">
          <div class="theme-switch__container">
            <div class="theme-switch__clouds"></div>
            <div class="theme-switch__stars-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="theme-switch__circle-container">
              <div class="theme-switch__sun-moon-container">
                <div class="theme-switch__moon">
                  <div class="theme-switch__spot"></div>
                  <div class="theme-switch__spot"></div>
                  <div class="theme-switch__spot"></div>
                </div>
                
              </div>
            </div>
          </div>
        </label>
        </div>

          <div>
            
            <label class="bb8-toggle">
              <input class="bb8-toggle__checkbox" type="checkbox">
              <div class="bb8-toggle__container">
                <div class="bb8-toggle__scenery">
                  <div class="bb8-toggle__star"></div>
                  <div class="bb8-toggle__star"></div>
                  <div class="bb8-toggle__star"></div>
                  <div class="bb8-toggle__star"></div>
                  <div class="bb8-toggle__star"></div>
                  <div class="bb8-toggle__star"></div>
                  <div class="bb8-toggle__star"></div>
                  <div class="tatto-1"></div>
                  <div class="tatto-2"></div>
                  <div class="gomrassen"></div>
                  <div class="hermes"></div>
                  <div class="chenini"></div>
                  <div class="bb8-toggle__cloud"></div>
                  <div class="bb8-toggle__cloud"></div>
                  <div class="bb8-toggle__cloud"></div>
                </div>
                <div class="bb8">
                  <div class="bb8__head-container">
                    <div class="bb8__antenna"></div>
                    <div class="bb8__antenna"></div>
                    <div class="bb8__head"></div>
                  </div>
                  <div class="bb8__body"></div>
                </div>
                <div class="artificial__hidden">
                  <div class="bb8__shadow"></div>
                </div>
              </div>
            </label>
            </div>


             <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 200 200" class="pencil">
            <defs>
                <clipPath id="pencil-eraser">
                    <rect height="30" width="30" ry="5" rx="5"></rect>
                </clipPath>
            </defs>
            <circle transform="rotate(-113,100,100)" stroke-linecap="round" stroke-dashoffset="439.82" stroke-dasharray="439.82 439.82" stroke-width="2" stroke="currentColor" fill="none" r="70" class="pencil__stroke"></circle>
            <g transform="translate(100,100)" class="pencil__rotate">
                <g fill="none">
                    <circle transform="rotate(-90)" stroke-dashoffset="402" stroke-dasharray="402.12 402.12" stroke-width="30" stroke="hsl(223,90%,50%)" r="64" class="pencil__body1"></circle>
                    <circle transform="rotate(-90)" stroke-dashoffset="465" stroke-dasharray="464.96 464.96" stroke-width="10" stroke="hsl(223,90%,60%)" r="74" class="pencil__body2"></circle>
                    <circle transform="rotate(-90)" stroke-dashoffset="339" stroke-dasharray="339.29 339.29" stroke-width="10" stroke="hsl(223,90%,40%)" r="54" class="pencil__body3"></circle>
                </g>
                <g transform="rotate(-90) translate(49,0)" class="pencil__eraser">
                    <g class="pencil__eraser-skew">
                        <rect height="30" width="30" ry="5" rx="5" fill="hsl(223,90%,70%)"></rect>
                        <rect clip-path="url(#pencil-eraser)" height="30" width="5" fill="hsl(223,90%,60%)"></rect>
                        <rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
                        <rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
                        <rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
                        <rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)"></rect>
                        <rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)"></rect>
                    </g>
                </g>
                <g transform="rotate(-90) translate(49,-30)" class="pencil__point">
                    <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)"></polygon>
                    <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
                    <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)"></polygon>
                </g>
            </g>
        </svg>
        </div>

      

    </div>

    
        
        
        
           
        
        </div>
        
        
                    </body>
          </html>
          `;
        return html;
    }




    return (
        <div className='container__header'>
            <div className='container__header__titulo'>
                <div className='container__titulo__button'>
                <h1>Make <span>beautiful</span> websites regardless of your design experience.</h1>
                <button>Browse all elements</button>
                </div>
            </div>
            <div className='container__header__tarjetasFlotantes'>
              <ContainerTarjetasFlotantes HTML={Lavarropas} />
            </div>

        </div>
    )
}
export default Header 