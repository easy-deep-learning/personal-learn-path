import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import style from './menu.module.css'

const ActiveLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(children, {
      className: router.pathname === props.href ? `${style.item} ${style.item_active}` : style.item,
    })}
  </Link>
))

export default function Menu () {
  return (
    <nav className={style.root}>
      <ActiveLink href="/"><a>Главная</a></ActiveLink>
      <ActiveLink href="/text-works"><a>Тестовые задания</a></ActiveLink>
      <ActiveLink href="/programming"><a>Программирование</a></ActiveLink>
      <ActiveLink href="/ci-cd"><a>Деплой</a></ActiveLink>
      <ActiveLink href="/soft-skills"><a>Софт-Скиллы</a></ActiveLink>
    </nav>
  )
}
