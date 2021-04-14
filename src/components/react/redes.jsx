import React from 'react'
import antesredes from '../imagenes/antesredes.png'
import despuesredes from '../imagenes/despuesredes.png'
import narutoredes from '../imagenes/narutoredes.jpg'
import sakura from '../imagenes/sakura.jpg'
import juego from '../imagenes/juego.jpg'
import crunchy from '../imagenes/crunchy.jpg'
import insta from '../imagenes/insta.jpg'

const Redes1 = () => {
  const style = {
    width: '100%',
    height: '75%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingTop: '3.3125rem',
  }

  const estilogeneral = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column ',
    alignItems: 'center',

  }

  const estiloimagenes = {
    width: 'auto',
    height: '10%',
  }
  const estiloimagenes2 = {
    width: '100%',
    height: '90%',
    objectFit: 'cover',
  }

  const redestilo = {
    paddingBottom: '1.5625rem',
    fontSize: '1rem',
    lineHeight: '1.15',
    fontFamily: 'Nutmeg, sans-serif',
    fontWeight: '600',
    color: '#2cbdbb',
  }
  const estilocontenedorimagenes = {
    width: '18%',
  }

  const stylesinsubrayado = {
    textDecoration: 'none',
  }

  return (
    <div style={estilogeneral}>
      <div style={style}>
        <input type="image" src={antesredes} alt="antes" style={estiloimagenes} />
        <a href="https://www.crunchyroll.com/es" style={estilocontenedorimagenes}>
          <img src={narutoredes} alt="juego1" style={estiloimagenes2} />
        </a>
        <a href="https://www.crunchyroll.com/es" style={estilocontenedorimagenes}>
          <img src={insta} alt="juego1" style={estiloimagenes2} />
        </a>
        <a href="https://www.crunchyroll.com/es" style={estilocontenedorimagenes}>
          <img src={juego} alt="juego1" style={estiloimagenes2} />
        </a>
        <a href="https://www.crunchyroll.com/es" style={estilocontenedorimagenes}>
          <img src={sakura} alt="juego1" style={estiloimagenes2} />
        </a>
        <a href="https://www.crunchyroll.com/es" style={estilocontenedorimagenes}>
          <img src={crunchy} alt="juego1" style={estiloimagenes2} />
        </a>

        <input type="image" src={despuesredes} alt="despues" style={estiloimagenes} />
      </div>
      <h4 style={redestilo}>
        <a href="https://www.crunchyroll.com/es" style={stylesinsubrayado}>
          FOLLOW @CRUNCHYROLLGAMES ON INSTAGRAM
        </a>
      </h4>

    </div>
  )
}
export default Redes1
