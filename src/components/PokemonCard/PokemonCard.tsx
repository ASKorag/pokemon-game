import s from './PokemonCard.module.css'

import React from 'react'
import { Pokemon } from '../../assets/types'
import cardBack from '../../assets/images/card-back-side.jpg'

export const PokemonCard: React.FC<Pokemon> = ({
  id,
  name,
  type,
  img,
  height,
  base_experience,
  abilities,
  stats,
  values,
}) => {
  return (
    <div className="root">
      <div className="pokemonСard">
        <div className="cardFront">
          <div className="wrap front">
            <div className="pokemon <-- Type Pokemon -->">
              <div className="values">
                <div className="count top">{values.top}</div>
                <div className="count right">{values.right}</div>
                <div className="count bottom">{values.bottom}</div>
                <div className="count left">{values.left}</div>
              </div>
              <div className="imgContainer">
                <img src={img} alt={name} />
              </div>
              <div className="info">
                <span className="number">#{id}</span>
                <h3 className="name">{name}</h3>
                <small className="type">
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="cardBack">
          <div className="wrap back">
            <img src={cardBack} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  )
}
