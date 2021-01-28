import s from './Layout.module.css'
import { LayoutProps, LayoutStyle } from '../../assets/types'

export const Layout: React.FC<LayoutProps> = ({
  id,
  title,
  descr,
  urlBg,
  colorBg,
}) => {
  let style: LayoutStyle = {}

  if (urlBg !== undefined) {
    style.backgroundImage = `url(${urlBg})`
  }

  if (colorBg !== undefined) {
    style.backgroundColor = colorBg
  }

  return (
    <section className={s.root} id={id} style={style}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={[s.desc, s.full].join(' ')}>
            {descr && <p>{descr}</p>}
          </div>
        </article>
      </div>
    </section>
  )
}
