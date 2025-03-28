import React from 'react'
import { Tarjeta } from './Tarjeta'

// importar cada una de las imagenes y les asignamos un objeto
import MarioImage from './imagenes/Mario.png'
import LuigiImage from './imagenes/Luigi.png'
import PeachesImage from './imagenes/Peaches.png'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros que mas me gustan</div>
        <Tarjeta nombre = "Mario" colorFavorito ="Rojo" image={MarioImage}/>
        <Tarjeta nombre = "Luigi" colorFavorito = "Verde" image={LuigiImage}/>
        <Tarjeta nombre = "Peaches" colorFavorito = "Rosa" image={PeachesImage}/>
    </div>
  )
}
