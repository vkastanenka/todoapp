// components
import Image from 'next/image'
import ZoomGlassSvg from '@svg/zoom-glass.svg'

// utilities
import cx from 'classnames'

const cardsData = [
  {
    note: `this morning's meeting, we have to improve the quality of office facilities and another...`,
    date: `28/10/2012`,
  },
  {
    note: `need for this month: -clothes -snack...`,
    date: `16/08/2013`,
  },
  {
    note: `Message from Liam: Don't forget to complete assignments on Tuesday`,
    date: `15/08/2017`,
  },
]

const Notes = () => {
  return (
    <div className={cx('flex', 'flex-col', 'gap-6')}>
      <div className={cx('relative', 'flex')}>
        <Image
          alt=""
          src={ZoomGlassSvg}
          className={cx('absolute', 'top-1/2', '-translate-y-1/2', 'left-3')}
        />
        <input
          placeholder="Search notes"
          className={cx(
            'grow',
            'bg-purple-light-100',
            'pl-[44px]',
            'pr-2',
            'py-1',
            'rounded-full',
            'text-grey-500',
            'placeholder:text-grey-400'
          )}
        />
      </div>
      {cardsData.length ? (
        <div className={cx('flex', 'flex-col', 'gap-4')}>
          {cardsData.map((cardData, i) => (
            <NoteCard key={i} noteCardData={cardData} />
          ))}
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

export default Notes

const NoteCard = ({
  noteCardData,
  ...props
}: {
  noteCardData: { note: string; date: string }
}) => {
  return (
    <div
      className={cx(
        'rounded-lg',
        'bg-purple-light-300',
        'p-4',
        'flex',
        'flex-col',
        'gap-3'
      )}
      {...props}
    >
      <p className={cx('leading-[120%]', 'text-sm')}>{noteCardData.note}</p>
      <p className={cx('text-[10px]')}>{noteCardData.date}</p>
    </div>
  )
}
