'use client'

// components
import Image from 'next/image'
import ArrowLeftSvg from '@svg/arrow-left.svg'
import CheckmarkSvg from '@svg/checkmark.svg'
import { FormContainer } from '@components/forms'

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
    <FormContainer className={cx('bg-purple-light-300')} {...props}>
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
      <form
        className={cx('grow', 'flex', 'flex-col', 'gap-6')}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Title"
          {...register('title')}
          className={cx('font-bold')}
        />
        <textarea
          className={cx('grow')}
          placeholder="Content"
          {...register('content')}
        />
      </form>
    </FormContainer>
  )
}

export default FormNote
