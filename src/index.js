import React from 'react'
import ReactDOM from 'react-dom'
import Encabezado from './components/react/encabezado'
import CuerpoContenidoInicial from './components/react/cuerpo'
import CuerpoContenidoJuegosDisponibles from './components/react/cuerpo2'
import ContenidoRedesSociales from './components/react/redes'
import ContenidoPiepagina from './components/react/pie'
import princessconnectfondo from './components/imagenes/princessconnectfondo.png'
import mobpsycho from './components/imagenes/mobpsycho.jpg'
import cristalmatch from './components/imagenes/cristalmatch.jpg'
import grandsummoners from './components/imagenes/grandsummoner.png'

document.body.style.margin = '0'
document.body.style.paddding = '0'
const Contenedor = () => {
  const [imagenactual, setimagen] = React.useState(princessconnectfondo)
  const [estiloactual2, setestilo2] = React.useState(['#2a424c', '#fff'])
  const [estiloactual3, setestilo3] = React.useState(['#2a424c', '#fff'])
  const [estiloactual4, setestilo4] = React.useState(['#2a424c', '#fff'])
  const [estiloactual, setestilo] = React.useState(['#2a424c', '#fff'])
  const [estiloactual1, setestilo1] = React.useState('#000')

  const cambioestilo1 = () => {
    if (estiloactual1 === '#000') {
      setestilo1('#fff')
    } else if (estiloactual1 === '#fff') {
      setestilo1('#000')
    }
  }
  const cambioestilo = () => {
    if (estiloactual[0] === '#2a424c') {
      setestilo(['#fff', '#2cbdbb'])
    } else if (estiloactual[1] === '#2cbdbb') {
      setestilo(['#2a424c', '#fff'])
    }
  }
  const cambioestilo2 = () => {
    if (estiloactual2[0] === '#2a424c') {
      setestilo2(['#fff', '#2cbdbb'])
    } else if (estiloactual2[1] === '#2cbdbb') {
      setestilo2(['#2a424c', '#fff'])
    }
  }
  const cambioestilo3 = () => {
    if (estiloactual3[0] === '#2a424c') {
      setestilo3(['#fff', '#2cbdbb'])
    } else if (estiloactual3[1] === '#2cbdbb') {
      setestilo3(['#2a424c', '#fff'])
    }
  }
  const cambioestilo4 = () => {
    if (estiloactual4[0] === '#2a424c') {
      setestilo4(['#fff', '#2cbdbb'])
    } else if (estiloactual4[1] === '#2cbdbb') {
      setestilo4(['#2a424c', '#fff'])
    }
  }
  const siguiente = () => {
    if (imagenactual === princessconnectfondo) {
      setimagen(mobpsycho)
    } else if (imagenactual === mobpsycho) {
      setimagen(cristalmatch)
    } else if (imagenactual === cristalmatch) {
      setimagen(grandsummoners)
    } else if (imagenactual === grandsummoners) {
      setimagen(princessconnectfondo)
    }
  }
  const antesclick = () => {
    if (imagenactual === princessconnectfondo) {
      setimagen(grandsummoners)
    } else if (imagenactual === grandsummoners) {
      setimagen(cristalmatch)
    } else if (imagenactual === cristalmatch) {
      setimagen(mobpsycho)
    } else if (imagenactual === mobpsycho) {
      setimagen(princessconnectfondo)
    }
  }
  const estilo = {
    display: 'block',
    width: '100%',
    height: 'auto',
  }
  const estilogeneralcontenedorjuegos = {
    width: '100%',
    height: 'auto',
    background: 'linear-gradient(to bottom,#23444d 0%,#308184 61%,#20bdba 100%)',
    textAlign: 'center',
    display: 'block',
    paddingTop: '2.8125rem',
    paddingBottom: '3.4375rem',

  }
  const styletitulo = {
    color: 'rgb(44, 189, 187)',
    marginBottom: '2.6rem',
    letterSpacing: '0.01875rem',
    fontFamily: 'Nutmeg, sans-serif',
    fontWeight: '600',
    fontSize: '2.8rem',
  }
  const Redes = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column ',
    alignItems: 'center',

  }
  return (
    <div style={estilo}>
      <Encabezado />
      <CuerpoContenidoInicial
        imagenlink={imagenactual}
        funciondespues={siguiente}
        funcioantes={antesclick}
        estilobotoncambio={estiloactual1}
        funcion={cambioestilo1}
      />
      <div style={estilogeneralcontenedorjuegos}>
        <h1 style={styletitulo}>CRUNCHYROLL GAMES</h1>
        <CuerpoContenidoJuegosDisponibles
          estilo={estiloactual}
          estilo2={estiloactual2}
          estilo3={estiloactual3}
          estilo4={estiloactual4}
          funcion={cambioestilo}
          funcion2={cambioestilo2}
          funcion3={cambioestilo3}
          funcion4={cambioestilo4}
        />
      </div>
      <div style={Redes}>
        <ContenidoRedesSociales />
      </div>
      <ContenidoPiepagina />
    </div>
  )
}
ReactDOM.render(
  <Contenedor />,
  document.getElementById('root'),
)
