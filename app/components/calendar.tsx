'use client'

// utilities
import { useState } from 'react'
import cx from 'classnames'

// data
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

const Calendar = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date())

  return (
    <div className={cx('p-4')} {...props}>
      <div className={cx('text-center', 'flex', 'flex-col', 'gap-4')}>
        <h2
          className={cx(
            'font-bold',
            'text-lg',
            'tracking-[0.12px]',
            'uppercase'
          )}
        >
          {months[currentDay.getMonth()]} {currentDay.getFullYear()}
        </h2>
      </div>
      <div className={cx('flex', 'flex-col', 'gap-1')}>
        <div className={cx('flex')}>
          {days.map((day, i) => {
            return (
              <div className={cx('px-1', 'py-4', 'grow')} key={i}>
                <p
                  className={cx(
                    'font-extrabold',
                    'tracking-[0.12px]',
                    'uppercase',
                    ...(i === 0 ? ['text-red'] : [])
                  )}
                >
                  {day}
                </p>
              </div>
            )
          })}
        </div>
        <CalendarDays currentDay={currentDay} setCurrentDay={setCurrentDay} />
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
  setCurrentDay: React.Dispatch<React.SetStateAction<Date>>
} & React.HTMLProps<HTMLDivElement>) => {
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
    <div className={cx('grid', 'grid-cols-7')} {...props}>
      {currentDays.map((day, i) => {
        const dayIsSelected =
          day.number === currentDay.getDate() &&
          day.month === currentDay.getMonth()

        return (
          <div
            key={i}
            className={cx(
              'text-center',
              'py-4',
              ...(!day.currentMonth ? ['text-grey-300'] : []),
              ...(day.currentMonth && !dayIsSelected && (i === 0 || i % 7 === 0)
                ? ['text-red']
                : []),
              ...(dayIsSelected
                ? ['text-black', 'rounded-full', 'relative']
                : [])
            )}
            onClick={() =>
              setCurrentDay(new Date(day.year, day.month, day.number))
            }
          >
            {dayIsSelected && (
              <div
                className={cx(
                  'w-10',
                  'h-10',
                  'rounded-full',
                  'bg-purple-light-300',
                  'absolute-center',
                  'z-0'
                )}
              />
            )}
            <p
              className={cx(
                'font-semibold',
                'tracking-[0.12px]',
                'relative',
                ...(dayIsSelected ? ['z-10'] : [])
              )}
            >
              {day.number}
            </p>
          </div>
        )
      })}
    </div>
  )
}
