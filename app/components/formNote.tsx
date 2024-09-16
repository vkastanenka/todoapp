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

const FormNote = ({ ...props }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormNoteInputs>()

  const onSubmit: SubmitHandler<FormNoteInputs> = (data) => console.log(data)

  return (
    <div
      className={cx(
        // 'fixed',
        // 'h-screen',
        // 'w-screen',
        // 'top-0',
        // 'left-0',
        // 'z-50'
        'px-8',
        'py-16',
        'bg-purple-light-300',
        'h-screen',
        'flex',
        'flex-col',
        'gap-6'
      )}
      {...props}
    >
      <div className={cx('flex', 'items-center', 'justify-between')}>
        <button>
          <Image alt="" src={ArrowLeftSvg} />
        </button>
        <button onClick={() => handleSubmit(onSubmit)}>
          <Image alt="" src={CheckmarkSvg} />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('flex', 'flex-col', 'gap-6')}>
          <input
            placeholder="Title"
            {...register('title', { required: true })}
            className={cx('font-bold')}
          />
          <textarea
            rows={20}
            placeholder="Content"
            {...register('content', { required: true })}
          />
        </div>
      </form>
    </div>
  )
}

export default FormNote
