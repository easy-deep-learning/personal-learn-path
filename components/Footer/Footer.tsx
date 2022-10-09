import React from 'react'

export default function Footer () {
  return (
    <footer className="footer">
        <span className="copyright footer__item">
          2001 — {(new Date()).getFullYear()},{' '}
          Учу программирование
        </span>
      <span
        className="feedback footer__item">
          Пишите
        </span>
      <span className="footer__item">Открытые исходники:
          <a
            href="https://github.com/easy-deep-learning/personal-learn-path"
            target="_blank"
            rel="noreferrer"
          >github.com/easy-deep-learning/personal-learn-path</a>
        </span>
    </footer>
  )
}
