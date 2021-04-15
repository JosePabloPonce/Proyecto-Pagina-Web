import React from 'react'

const Cuerpo2 = ({
  estilo, estilo2, estilo3, estilo4, funcion, funcion2, funcion3, funcion4,
}) => {
  const styledescripcion = {
    width: '36.25rem',
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.5625rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.5',
  }
  const style = {
    width: '100%',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const StylenombreJuegos = {
    color: '#fff',
    fontFamily: 'Nutmeg, sans-serif',
    fontSize: '1.25rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1.25rem',
    letterSpacing: '0.01875rem',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '1.5625rem',
    minHeight: '2.875rem',
    alignItems: 'center',

  }

  const Stylecontenedorjuegos = {
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.5rem',
    textSizeAdjust: '100%',
    maxWidth: '100%',
    width: '71.85rem',
    height: 'auto',
    alignItems: 'flex-start',
    margin: 'auto',
    justifyContent: 'center',

  }

  const Stylecontenedorjuego = {
    display: 'block',
    marginTop: '2.5rem',
    width: '30%',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.5rem',
    height: 'auto',
    paddingRight: '1.8rem',
  }

  const estiloimagenes = {
    width: '350',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
  }

  const estiloboton = {
    fontFamily: 'Nutmeg,sans-serif',
    backgroundColor: estilo[0],
    color: estilo[1],
    paddingBottom: '0.8rem',
    paddingTop: '0.8rem',
    padding: '0.5rem 0.6rem',
    lineHeight: '1.15',
    fontWeight: '600',
    letterSpacing: '0.01875rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',

  }
  const estiloboton2 = {
    fontFamily: 'Nutmeg,sans-serif',
    backgroundColor: estilo2[0],
    color: estilo2[1],
    paddingBottom: '0.8rem',
    paddingTop: '0.8rem',
    padding: '0.5rem 0.6rem',
    lineHeight: '1.15',
    fontWeight: '600',
    letterSpacing: '0.01875rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',

  }
  const estiloboton3 = {
    fontFamily: 'Nutmeg,sans-serif',
    backgroundColor: estilo3[0],
    color: estilo3[1],
    paddingBottom: '0.8rem',
    paddingTop: '0.8rem',
    padding: '0.5rem 0.6rem',
    lineHeight: '1.15',
    fontWeight: '600',
    letterSpacing: '0.01875rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',

  }
  const estiloboton4 = {
    fontFamily: 'Nutmeg,sans-serif',
    backgroundColor: estilo4[0],
    color: estilo4[1],
    paddingBottom: '0.8rem',
    paddingTop: '0.8rem',
    padding: '0.5rem 0.6rem',
    lineHeight: '1.15',
    fontWeight: '600',
    letterSpacing: '0.01875rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',

  }
  const Stylejuegoalmacenados = {
    color: '#000',
    fontFamily: 'Nutmeg,sans-serif',
    backgroundColor: '#fff',
    paddingBottom: '0.8rem',
    paddingTop: '0.8rem',
    padding: '0.5rem 0.6rem',
    lineHeight: '1.15',
    fontWeight: '600',
    letterSpacing: '0.01875rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    display: 'inline-block',
  }

  return (
    <div style={style}>
      <p style={styledescripcion}>
        Crunchyroll Games is a game publisher working
        to bring amazing anime-based mobile games to anime and video games
        fans around the world.
      </p>
      <div style={Stylecontenedorjuegos}>
        <div style={Stylecontenedorjuego}>
          <a href="https://www.crunchyroll.com/games/princessconnectredive/index.html">
            <img src="https://www.crunchyroll.com/games/static/8f11095308d99b7d65185075c7d1bd00/45604/gamehub-icon.webp" alt="juego1" style={estiloimagenes} />
          </a>
          <h2 style={StylenombreJuegos}>
            PRINCESS CONNECT! RE: DIVE
          </h2>
          <a style={estiloboton} onMouseEnter={funcion} onMouseLeave={funcion} href="https://www.crunchyroll.com/games/princessconnectredive/index.html"> LEARN MORE </a>

        </div>
        <div style={Stylecontenedorjuego}>
          <a href="https://www.crunchyroll.com/games/mobpsycho100/index.html">
            <img src="https://www.crunchyroll.com/games/static/ab82d100357c28160862632612cd5a98/45604/gamehub-icon.webp" alt="juego1" style={estiloimagenes} />
          </a>
          <h2 style={StylenombreJuegos}> MOB PSYCHO 100: PSYCHIC BATTLE </h2>
          <a style={estiloboton2} onMouseEnter={funcion2} onMouseLeave={funcion2} href="https://www.crunchyroll.com/games/princessconnectredive/index.html"> LEARN MORE </a>

        </div>
        <div style={Stylecontenedorjuego}>
          <a href="https://www.crunchyroll.com/games/rwbycrystalmatch/index.html">
            <img src="https://www.crunchyroll.com/games/static/fae0b2c5260d9928c6f4b2bc5dc20a62/5b27c/gamehub-icon.webp" alt="juego1" style={estiloimagenes} />
          </a>
          <h2 style={StylenombreJuegos}> RWBY: CRYSTAL MATCH </h2>
          <a style={estiloboton3} onMouseEnter={funcion3} onMouseLeave={funcion3} href="https://www.crunchyroll.com/games/princessconnectredive/index.html"> LEARN MORE </a>

        </div>
        <div style={Stylecontenedorjuego}>
          <a href="https://www.crunchyroll.com/games/princessconnectredive/index.html">
            <img src="https://www.crunchyroll.com/games/static/23e460779e87bcbb5b5d369a7e4e69c0/45604/gamehub-icon.webp" alt="juego1" style={estiloimagenes} />
          </a>
          <h2 style={StylenombreJuegos}> GRAND SUMMONERS </h2>
          <a style={estiloboton4} onMouseEnter={funcion4} onMouseLeave={funcion4} href="https://www.crunchyroll.com/games/princessconnectredive/index.html"> LEARN MORE </a>

        </div>
        <div style={Stylecontenedorjuego}>
          <img src="https://www.crunchyroll.com/games/static/d78203973ef716cc7ffd4cdda1199559/45604/gamehub-icon.webp" alt="juego1" style={estiloimagenes} />
          <h2 style={StylenombreJuegos}> DANMACHI: MEMORIA FREESE </h2>
          <div style={Stylejuegoalmacenados}> VAULTED GAME </div>

        </div>
        <div style={Stylecontenedorjuego}>
          <img src="https://www.crunchyroll.com/games/static/f48eea1889c573d76a3b04c8554bb68e/5b27c/gamehub-icon.webp" alt="juego1" style={estiloimagenes} />
          <h2 style={StylenombreJuegos}> ATTACK ON TITAN TACTICS </h2>
          <div style={Stylejuegoalmacenados}> VAULTED GAME </div>

        </div>
        <div style={Stylecontenedorjuego}>
          <img src="https://www.crunchyroll.com/games/static/51593737e6fc05335416396495118b6a/45604/gamehub-icon.webp" alt="juego1" style={estiloimagenes} />
          <h2 style={StylenombreJuegos}> MASS FOR THE DEAD </h2>
          <div style={Stylejuegoalmacenados}> VAULTED GAME </div>

        </div>
        <div style={Stylecontenedorjuego}>
          <img src="https://www.crunchyroll.com/games/static/7ff2837c03e848b299b2992c4738c75a/45604/gamehub-icon.webp" alt="juego1" style={estiloimagenes} />
          <h2 style={StylenombreJuegos}> NARUTO X BORUTO NINJA TRIBES </h2>
          <div style={Stylejuegoalmacenados}> VAULTED GAME </div>
        </div>
        <div style={Stylecontenedorjuego} />
      </div>
    </div>
  )
}
export default Cuerpo2
