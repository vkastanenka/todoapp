'use client'

// components
import Image from 'next/image'
import ArrowLeftSvg from '@svg/arrow-left.svg'
import CheckmarkSvg from '@svg/checkmark.svg'
import { FormContainer } from '@components/forms'

// utilities
import cx from 'classnames'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormScheduleInputs {
  title: string
  location?: string
  notes?: string
}

const FormSchedule = ({
  setFormIsActive,
  ...props
}: {
  setFormIsActive: React.Dispatch<React.SetStateAction<boolean>>
} & React.HTMLAttributes<HTMLDivElement>) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormScheduleInputs>()

  const onSubmit: SubmitHandler<FormScheduleInputs> = (data) =>
    console.log(data)

  return (
    <FormContainer className={cx('bg-gradient-primary')} {...props}>
      <div className={cx('flex', 'items-center', 'justify-between')}>
        <button onClick={() => setFormIsActive((prevState) => !prevState)}>
          <Image alt="" src={ArrowLeftSvg} />
        </button>
        <button
          onClick={() => {
            handleSubmit(onSubmit)
            setFormIsActive((prevState) => !prevState)
          }}
        >
          <Image alt="" src={CheckmarkSvg} />
        </button>
      </div>
      <h2 className={cx('font-bold', 'text-lg', 'tracking-[0.12px]')}>
        Schedule
      </h2>
      <form
        className={cx('flex', 'flex-col', 'gap-6', 'grow')}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Title"
          {...register('title', { required: true })}
          className={cx(
            'bg-purple-light-100',
            'px-2',
            'py-1',
            'rounded',
            'text-grey-500',
            'placeholder:text-grey-400'
          )}
        />
        <input
          placeholder="Location"
          {...register('location')}
          className={cx(
            'bg-purple-light-100',
            'px-2',
            'py-1',
            'rounded',
            'text-grey-500',
            'placeholder:text-grey-400'
          )}
        />
        <div className={cx('flex', 'items-center', 'justify-between')}>
          <p className={cx('tracking-[-0.3px]')}>Start</p>
          <input type="datetime-local" />
        </div>
        <div className={cx('flex', 'items-center', 'justify-between')}>
          <p className={cx('tracking-[-0.3px]')}>End</p>
          <input type="datetime-local" />
        </div>
        <textarea
          rows={10}
          placeholder="Notes"
          {...register('notes')}
          className={cx(
            'grow',
            'bg-purple-light-100',
            'px-2',
            'py-1',
            'rounded',
            'text-grey-500',
            'placeholder:text-grey-400'
          )}
        />
      </form>
    </FormContainer>
  )
}

export default FormSchedule
