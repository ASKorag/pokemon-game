import s from './Footer.module.css'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className={s.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  )
}
