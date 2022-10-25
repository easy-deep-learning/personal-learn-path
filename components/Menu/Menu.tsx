import React from 'react'
import Link from 'next/link'
import { NextRouter } from 'next/router'
import style from './menu.module.css'

interface WithRouterProps {
  router: NextRouter
}

interface ComposedComponent extends WithRouterProps {
  children: string
  href: string
}

export default function Menu () {
  return (
    <nav className={style.root}>
      <Link href="/">Главная</Link>
      <Link href="/test-works">Тестовые задания</Link>
      <Link href="/programming">Программирование</Link>
      <Link href="/infrastructure">Деплой</Link>
      <Link href="/soft-skills">Софт-Скиллы</Link>
      <Link href="/api/hello">API</Link>
    </nav>
  )
}
