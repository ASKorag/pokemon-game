import './App.css'

import React from 'react'

import { Header } from './Header/Header'
import { Layout } from './Layout/Layout'
import { Footer } from './Footer/Footer'
import { PokemonCard } from './PokemonCard/PokemonCard'

import { pokemons } from '../assets/data/pokemons'

import pikachu from '../assets/images/bg1.jpg'
import sky from '../assets/images/bg3.jpg'

export const App: React.FC = () => {
  return (
    <div>
      <Header
        title="Новые покемоны всегда рядом!*"
        descr="*За исключением церкви"
      />
      <Layout
        id="1"
        title="Любимые персонажи детства снова на поле боя"
        urlBg={pikachu}
      >
        In the game two players face off against one another, one side playing
        as "blue", the other as "red" on a 3x3 grid. Each player has five cards
        in a hand and the aim is to capture the opponent's cards by turning them
        into the player's own color of red or blue. To win, a majority of the
        total ten cards played (including the one card that is not placed on the
        board) must be of the player's card color. To do this, the player must
        capture cards by placing a card adjacent to an opponent's card whereupon
        the 'ranks' of the sides where the two cards touch will be compared. If
        the rank of the opponent's card is higher than the player's card, the
        player's card will be captured and turned into the opponent's color. If
        the player's rank is higher, the opponent's card will be captured and
        changed into the player's color instead.
      </Layout>

      <Layout id="2" title="Карточки" colorBg="green">
        <div className="flex">
          {pokemons.map((pokemon) => {
            const { id, name, type, img, values } = pokemon
            return (
              <PokemonCard
                id={id}
                name={name}
                type={type}
                img={img}
                values={values}
                key={id}
              />
            )
          })}
        </div>
      </Layout>
      <Layout id="3" title="Райский отдых" urlBg={sky}>
        In the game two players face off against one another, one side playing
        as "blue", the other as "red" on a 3x3 grid. Each player has five cards
        in a hand and the aim is to capture the opponent's cards by turning them
        into the player's own color of red or blue. To win, a majority of the
        total ten cards played (including the one card that is not placed on the
        board) must be of the player's card color. To do this, the player must
        capture cards by placing a card adjacent to an opponent's card whereupon
        the 'ranks' of the sides where the two cards touch will be compared. If
        the rank of the opponent's card is higher than the player's card, the
        player's card will be captured and turned into the opponent's color. If
        the player's rank is higher, the opponent's card will be captured and
        changed into the player's color instead.
      </Layout>
      <Footer />
    </div>
  )
}
