export type HeaderProps = {
  title: string
  descr: string
}

export type LayoutProps = {
  id: string
  title: string
  urlBg?: string
  colorBg?: string
}

export type LayoutStyle = {
  backgroundImage?: string
  backgroundColor?: string
}

export type Pokemon = {
  id: number
  name: string
  type: string
  base_experience: number
  img: string
  height: number
  stats: {
    hp: number
    attack: number
    defense: number
    'special-attack': number
    'special-defense': number
    speed: number
  }
  abilities: string[]
  values: {
    top: number | string
    right: number | string
    bottom: number | string
    left: number | string
  }
}
