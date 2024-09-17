'use client'

// components
import ArrowLeftSvg from '@svg/arrow-left.svg'
import CheckmarkSvg from '@svg/checkmark.svg'
import Image from 'next/image'

// utilities
import cx from 'classnames'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormNoteInputs {
  title: string
  content: string
}

const FormNote = ({
  setFormIsActive,
  ...props
}: {
  setFormIsActive: React.Dispatch<React.SetStateAction<boolean>>
} & React.HTMLAttributes<HTMLDivElement>) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormNoteInputs>()

  const onSubmit: SubmitHandler<FormNoteInputs> = (data) => {
    console.log(data)
    setFormIsActive((prevState) => !prevState)
  }

  return (
    <div
      className={cx(
        'fixed',
        'h-screen',
        'top-0',
        'left-0',
        'right-0',
        'z-[70]',
        'px-8',
        'py-16',
        'bg-purple-light-300',
        'flex',
        'flex-col',
        'gap-6'
      )}
      {...props}
    >
      <div className={cx('flex', 'items-center', 'justify-between')}>
        <button onClick={() => setFormIsActive((prevState) => !prevState)}>
          <Image alt="" src={ArrowLeftSvg} />
        </button>
        <button
          onClick={() => {
            console.log('Hello!')
            handleSubmit(onSubmit)
            setFormIsActive((prevState) => !prevState)
          }}
        >
          <Image alt="" src={CheckmarkSvg} />
        </button>
      </div>
      <h2 className={cx('font-bold', 'text-lg', 'tracking-[0.12px]')}>Note</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('flex', 'flex-col', 'gap-6')}>
          <input
            placeholder="Title"
            {...register('title')}
            className={cx('font-bold')}
          />
          <textarea rows={20} placeholder="Content" {...register('content')} />
        </div>
      </form>
    </div>
  )
}

export default FormNote
