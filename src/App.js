// import CSS
import 'bulma/css/bulma.css'

import React from 'react'
import { Tarjeta } from './Tarjeta'

// Importamos las imagenes
import MarioImage from './imagenes/Mario.png'
import LuigiImage from './imagenes/Luigi.png'
import PeachesImage from './imagenes/Peaches.png'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros</div>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-2">
                <Tarjeta nombre="Mario" colorFavorito="Rojo" image={MarioImage}/>
              </div>
              <div className="column is-2">
                <Tarjeta nombre="Luigi" colorFavorito="Verde" image={LuigiImage}/>
              </div>
              <div className="column is-2">
                <Tarjeta nombre="Peaches" colorFavorito="Rosa" image={PeachesImage}/>
              </div>
            </div>
          </section>
        </div>
    </div>
  
  )
}