import React from 'react'
import crunchyrollgames from '../imagenes/crunchyrollgameslogo.png'
import logoyoutube from '../imagenes/youtubelogo.png'
import logotwitter from '../imagenes/logotwitter.png'
import twitchlogo from '../imagenes/twitchlogo.png'
import instagramlogo from '../imagenes/instagramlogo.png'
import facebooklogo from '../imagenes/facebooklogo.png'

const Piepagina = () => {
  const estilopiepagina = {
    display: 'flex',
    backgroundColor: 'rgb(33, 57, 68)',
    paddingBottom: '15px',
    width: '100%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  }
  const stylebullet = {
    listStyleType: 'none',
    marginTop: '1.875rem',
    marginBottom: '0.9375rem',
  }
  const estiloletra = {
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.125rem',
    fontWeight: '400',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginBottom: '0.9375rem',
  }
  const tamanoimagen = {
    width: '17.375rem',
  }
  const estiloiconoscontenedor = {
    width: '4.6875rem',
    height: '4.6875rem',
    backgroundColor: '#2cbdbb',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: '50%',
    marginTop: '6rem',
    marginRight: '1rem',

  }
  const estiloiconos = {
    width: '60%',
    height: 'auto',

  }

  return (
    <div style={estilopiepagina}>
      <ul style={stylebullet}>
        <li style={estiloletra}>
          <a href="# ">
            <img src={crunchyrollgames} alt="crunchyrollgames" style={tamanoimagen} height="auto" />
          </a>
        </li>
        <li style={estiloletra}>
          <a style={estiloletra} href="https://crgames.zendesk.com/hc/en-us/requests/new"> Customer Support</a>
        </li>
        <li style={estiloletra}>
          <a style={estiloletra} href="https://www.crunchyroll.com/games/partner/index.html">Partner With Us</a>
        </li>
        <li style={estiloletra}>
          <a style={estiloletra} href="https://www.crunchyroll.com/games/privacy/index.html"> Terms and Conditions</a>
        </li>
        <li style={estiloletra}>
          <a style={estiloletra} href="https://www.crunchyroll.com/games/terms/index.html"> Customer Support</a>
        </li>
        <li style={estiloletra}>
          <a style={estiloletra} href="https://www.crunchyroll.com/games/terms/index.html"> Show Purposes</a>
        </li>
        <li style={estiloletra}> </li>
        <li style={estiloletra}> ©FO-SBCr/DM ©WFS</li>
        <li style={estiloletra}> 2016 K・S/K/BSD・P ©Ambition</li>
        <li style={estiloletra}> © GOOD SMILE COMPANY, Inc. Developed by NextNinja Co., Ltd.</li>
        <li style={estiloletra}>
          ©Hajime Isayama, Kodansha/“ATTACK ON TITAN”Production Committee.
          All Rights Reserved. ©DeNA Developed by KAYAC
        </li>
        <li style={estiloletra}> ©2019 Rooster Teeth Productions, LLC. </li>
        <li style={estiloletra}> ©ONE,Shogakukan/MobPsycho100 Project 2016</li>
        <li style={estiloletra}>
          ©2002 MASASHI KISHIMOTO / 2017 BORUTO All Rights Reserved.
          ©BANDAI NAMCO Entertainment Inc.
        </li>
        <li style={estiloletra}>
          ©Kugane Maruyama, PUBLISHED BY KADOKAWA CORPORATION/OVERLORD3PARTNERS
        </li>
        <li style={estiloletra}>© Copyright Gaudium 2020</li>
      </ul>
      <a style={estiloiconoscontenedor} href="https://www.crunchyroll.com/games/terms/index.html">
        <img src={logoyoutube} alt="logo" style={estiloiconos} />
      </a>
      <a style={estiloiconoscontenedor} href="https://www.crunchyroll.com/games/terms/index.html">
        <img src={logotwitter} alt="logo" style={estiloiconos} />
      </a>
      <a style={estiloiconoscontenedor} href="https://www.crunchyroll.com/games/terms/index.html">
        <img src={twitchlogo} alt="logo" style={estiloiconos} />
      </a>
      <a style={estiloiconoscontenedor} href="https://www.crunchyroll.com/games/terms/index.html">
        <img src={instagramlogo} alt="logo" style={estiloiconos} />
      </a>
      <a style={estiloiconoscontenedor} href="https://www.crunchyroll.com/games/terms/index.html">
        <img src={facebooklogo} alt="logo" style={estiloiconos} />
      </a>
    </div>
  )
}
export default Piepagina
