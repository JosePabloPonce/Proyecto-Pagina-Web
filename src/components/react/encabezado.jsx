import React from 'react'
import menu from '../imagenes/menu.png'
import crunchyrolllogo from '../imagenes/crunchyrolllogo.png'
import guardar from '../imagenes/guardar.png'
import buscar from '../imagenes/buscar.png'
import perfil from '../imagenes/perfil.png'

const Encabezado = () => {
  const style = {
    position: 'fixed',
    width: '100%',
    height: '3.75rem',
    backgroundColor: '#23252b',
    display: 'flex',
    justifyContent: 'space-Between',
  }

  const tamanoimagen = {
    width: 'auto',
    height: '45%',

  }

  const tamanoimagen2 = {
    width: 'auto',
    height: '35%',

  }

  const tamanoimagen3 = {
    width: 'auto',
    height: '28%',

  }
  const contenedores = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  }

  return (
    <div style={style}>
      <div style={contenedores}>
        <img src={menu} alt="menu" style={tamanoimagen3} height="30%" />
      </div>
      <div style={contenedores} justifyContent="center">
        <a href="https://www.crunchyroll.com/es">
          <img src={crunchyrolllogo} alt="logo" style={tamanoimagen} height="42%" />
        </a>
      </div>
      <div style={contenedores} justifyContent="flex-end">
        <a href="https://www.crunchyroll.com/es/login?next=%2Facct">
          <img src={guardar} alt="guardar" style={tamanoimagen2} height="35%" />
        </a>
        <a href="https://www.crunchyroll.com/search">
          <img src={buscar} alt="buscar" style={tamanoimagen2} height="35%" />
        </a>
        <a href="https://www.crunchyroll.com/es/login?next=%2Facct">
          <img src={perfil} alt="perfil" style={tamanoimagen2} height="35%" />
        </a>
      </div>
    </div>
  )
}
export default Encabezado
