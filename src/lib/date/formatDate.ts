import format from 'date-fns/format'

export function formatDate(date: Date) {
  const dateFormat = 'yyyy-MM-dd'
  return format(date, dateFormat)
}
