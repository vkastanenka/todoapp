// components
import Image from 'next/image'
import CheckboxSvg from '@svg/checkbox.svg'
import CheckboxEmptySvg from '@svg/checkbox-empty.svg'

// utilites
import cx from 'classnames'

const scheduleItems = [
  {
    isComplete: true,
    heading: 'Meeting with Anomali Team',
    time: '07.00 am - 10.00 am',
    place: 'Anomali Office',
  },
  {
    isComplete: false,
    heading: 'Dinner with Anna',
    time: '08.00 am',
    place: `Anna's House`,
    notes: `don't forget to give her a bouquet of flowers`,
  },
  {
    isComplete: false,
    heading: 'Pay House Tax',
    time: '08.00 am',
    place: 'Tax Office',
  },
  {
    isComplete: false,
    heading: 'Make a New Proposal',
    time: '10.00 am',
    place: 'Library',
  },
]

const Schedule = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={cx('p-4')} {...props}>
      <div className={cx('pb-6')}>
        <h2 className={cx('font-bold', 'text-lg', 'tracking-[0.12px]')}>
          Schedule
        </h2>
      </div>
      {scheduleItems.length ? (
        <div className={cx('pl-6', 'flex', 'gap-6')}>
          <div className={cx('pt-3')}>
            <ScheduleDate>20</ScheduleDate>
          </div>
          <div className={cx('flex', 'flex-col', 'gap-4')}>
            {scheduleItems.map(
              ({ isComplete, heading, time, place, notes }, i) => (
                <ScheduleCard
                  key={i}
                  isComplete={isComplete}
                  cardData={{ heading, time, place, notes }}
                />
              )
            )}
          </div>
        </div>
      ) : (
        <div className={cx('flex', 'justify-center')}>
          <div className={cx('rounded-lg', 'bg-purple', 'p-3')}>
            <p
              className={cx('font-semibold', 'text-xs')}
            >{`You don't have anything scheduled`}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Schedule

const ScheduleDate = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={cx('relative')} {...props}>
      <div
        className={cx(
          'rounded-full',
          'border-2',
          'bg-purple',
          'border-purple-light-300',
          'w-8',
          'h-8',
          'absolute-center',
          'z-0'
        )}
      />
      <p className={cx('font-bold', 'text-xs', 'relative', 'z-10')}>
        {props.children}
      </p>
    </div>
  )
}

interface ScheduleCard {
  cardData: {
    heading: string
    time: string
    place: string
    notes?: string
  }
  isComplete?: boolean
}

const ScheduleCard = ({
  cardData,
  isComplete,
  ...props
}: ScheduleCard & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        'rounded-lg',
        'py-2',
        'px-3',
        ...(isComplete
          ? ['bg-purple-dark-100', 'text-grey-200']
          : ['bg-purple'])
      )}
      {...props}
    >
      <div className={cx('flex', 'flex-col', 'gap-3')}>
        <div
          className={cx(
            'flex',
            'justify-between',
            'items-center',
            'pb-2',
            'border-b-[1px]',
            ...(isComplete ? ['border-purple'] : ['border-purple-light-200'])
          )}
        >
          <p className={cx('font-semibold', 'text-sm')}>{cardData.heading}</p>
          <Image
            alt="checkbox"
            src={isComplete ? CheckboxSvg : CheckboxEmptySvg}
          />
        </div>
        <div className={cx('flex', 'gap-3')}>
          <div className={cx('flex', 'flex-col', 'gap-1')}>
            <p className={cx('font-bold', 'text-xs')}>Time</p>
            <p className={cx('font-bold', 'text-xs')}>Place</p>
            <p className={cx('font-bold', 'text-xs')}>Notes</p>
          </div>
          <div className={cx('flex', 'flex-col', 'gap-1')}>
            <p className={cx('text-xs')}>{cardData.time}</p>
            <p className={cx('text-xs')}>{cardData.place}</p>
            <p className={cx('text-xs')}>{cardData.notes ? cardData.notes : 'None'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
