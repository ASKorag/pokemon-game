import { Header } from './components/Header/Header'
import { Layout } from './components/Layout/Layout'
import { Footer } from './components/Footer/Footer'

import pikachu from './images/bg1.jpg'
import sky from './images/bg3.jpg'

export const App: React.FC = () => {
  return (
    <>
      <Header
        title="Новые покемоны всегда рядом!*"
        descr="*За исключением церкви"
      />
      <Layout
        id="1"
        title="Любимые персонажи детства снова на поле боя"
        descr="Покажи всем, кто самый лучший тренер покемонов"
        urlBg={pikachu}
      />
      <Layout
        id="2"
        title="1 арена - 1 победитель"
        descr="Оставь в стороне сентиментальность"
        colorBg="red"
      />
      <Layout
        id="3"
        title="Райский отдых"
        descr="Победитель заслуживают самого лучшего"
        urlBg={sky}
      />
      <Footer />
    </>
  )
}
