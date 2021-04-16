import React from 'react'
import antes from '../imagenes/antes.png'
import despues from '../imagenes/despues.png'

const Cuerpo = ({
  imagenlink, funcioantes, funciondespues, funcion, estilobotoncambio,
}) => {
  const style = {
    width: '100%',
    height: '68%',
    backgroundImage: `url(${imagenlink})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

  }

  const estiloboton = {
    fontFamily: 'Nutmeg,sans-serif',
    backgroundColor: '#f47521',
    color: estilobotoncambio,
    paddingBottom: '0.8rem',
    paddingTop: '0.8rem',
    padding: '0.5rem 0.6rem',
    fontSize: '1.875rem',
    lineHeight: '1.15',
    fontWeight: '600',
    letterSpacing: '0.01875rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    marginTop: 'auto',
    marginBottom: '5%',

  }

  const estiloimagenes = {
    width: 'auto',
    height: '10%',
  }

  return (
    <div style={style}>
      <input type="image" src={antes} alt="antes" style={estiloimagenes} onClick={funcioantes} />
      <a style={estiloboton} onMouseEnter={funcion} onMouseLeave={funcion} href="https://www.crunchyroll.com/games/princessconnectredive/index.html"> LEARN MORE </a>
      <input type="image" src={despues} alt="despues" style={estiloimagenes} onClick={funciondespues} />
    </div>
  )
}
export default Cuerpo
