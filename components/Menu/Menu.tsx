import React from 'react'
import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router'
import style from './menu.module.css'

interface WithRouterProps {
  router: NextRouter
}

interface ComposedComponent extends WithRouterProps {
  children: React.ReactElement
  href: string
}

const ComposedComponent = ({ router, children, ...props }: ComposedComponent) => (
  <Link {...props}>
    {React.cloneElement(children, {
      className: router.pathname === props.href ? `${style.item} ${style.item_active}` : style.item,
    })}
  </Link>
)

const ActiveLink = withRouter(ComposedComponent)

export default function Menu () {
  return (
    <nav className={style.root}>
      <ActiveLink href="/"><a>Главная</a></ActiveLink>
      <ActiveLink href="/test-works"><a>Тестовые задания</a></ActiveLink>
      <ActiveLink href="/programming"><a>Программирование</a></ActiveLink>
      <ActiveLink href="/ci-cd"><a>Деплой</a></ActiveLink>
      <ActiveLink href="/soft-skills"><a>Софт-Скиллы</a></ActiveLink>
    </nav>
  )
}
