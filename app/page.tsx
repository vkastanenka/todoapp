import cx from 'classnames'

// import Calendar from './components/calendar'

export default function Home() {
  return (
    <main
      className={cx('flex', 'justify-center', 'items-center', 'min-h-screen')}
    >
      <h1 className={cx('pb-8')}>on.time</h1>
      {/* <FeatureSelect />
      <Calendar /> */}
    </main>
  )
}

// const FeatureSelect = () => {
//   return (
//     <div className={cx('bg-purple', 'rounded', 'p-1', 'flex')}>
//       <button
//         className={cx(
//           'rounded',
//           'bg-purple-dark',
//           'text-white',
//           'py-2',
//           'px-8',
//           'text-center',
//           'grow'
//         )}
//       >
//         Schedule
//       </button>
//       <button
//         className={cx(
//           'rounded',
//           'text-white',
//           'py-2',
//           'px-8',
//           'text-center',
//           'grow'
//         )}
//       >
//         Note
//       </button>
//     </div>
//   )
// }
