import { parseISO, format } from 'date-fns'
import { ru } from 'date-fns/locale'
import dateStyles from './date.module.css'


export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className="date">
      <span className={dateStyles.day}>{format(date, 'dd', { locale: ru })}</span>
      <span className={dateStyles.month}>{format(date, 'mm', { locale: ru })}</span>
      <span className={dateStyles.year}>{format(date, 'yyyy', { locale: ru })}</span>
    </time>
  )
}
