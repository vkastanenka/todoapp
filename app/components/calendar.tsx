'use client'

import { useState, Dispatch, SetStateAction, HTMLAttributes } from 'react'
import cx from 'classnames'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date())

  return (
    <div className={cx('flex', 'flex-col', 'w-[900px]')}>
      <div className={cx('calendar-header')}>
        <h2>
          {months[currentDay.getMonth()]} {currentDay.getFullYear()}
        </h2>
      </div>
      <div className={cx('calendar-body')}>
        <div className={cx('table-header')}>
          {days.map((day, i) => {
            return (
              <div className={cx('weekday')} key={i}>
                <p>{day}</p>
              </div>
            )
          })}
        </div>
        <div className={cx('table')}>
          <CalendarDays currentDay={currentDay} setCurrentDay={setCurrentDay} />
        </div>
      </div>
    </div>
  )
}

export default Calendar

interface CalendarData {
  currentMonth: boolean
  date: Date
  month: number
  number: number
  selected: boolean
  year: number
}

const CalendarDays = ({
  currentDay,
  setCurrentDay,
  ...props
}: {
  currentDay: Date
  setCurrentDay: Dispatch<SetStateAction<Date>>
} & HTMLAttributes<HTMLDivElement>) => {
  const firstDayOfMonth = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    1
  )
  const weekdayOfFirstDay = firstDayOfMonth.getDay()

  const currentDays = []

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7)
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      )
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)
    }

    const calendarDay: CalendarData = {
      currentMonth: firstDayOfMonth.getMonth() === currentDay.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === currentDay.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    }

    currentDays.push(calendarDay)
  }

  return (
    <div className="table-content" {...props}>
      {currentDays.map((day, i) => {
        return (
          <div
            key={i}
            className={
              'calendar-day' +
              (day.currentMonth ? ' current' : '') +
              (day.selected ? ' selected' : '')
            }
            onClick={() =>
              setCurrentDay(new Date(day.year, day.month, day.number))
            }
          >
            <p>{day.number}</p>
          </div>
        )
      })}
    </div>
  )
}
