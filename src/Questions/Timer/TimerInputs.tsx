import useTimer from './useTimer'

type Props = {}

const TimerInputs = (props: Props) => {
  const {
    setInput,
    minutes,
    setSeconds,
    seconds,
    setMinutes,

    activeCountdown,
    setTimerValues,
    startTimer,
    resetTimer
  } = useTimer()
  return (
    <div>
      <label htmlFor='minutes'>minutes</label>
      <input
        value={minutes}
        type='number'
        onChange={(e) => {
          setTimerValues((prev) => ({
            ...prev,
            minutes: +e.target.value
          }))
          setMinutes(+e.target.value)
        }}
        name='minutes'
        id='minutes'
        autoFocus
      />

      <label htmlFor='seconds'>seconds</label>
      <input
        value={seconds}
        type='number'
        onChange={(e) => {
          setTimerValues((prev) => ({
            ...prev,
            seconds: +e.target.value
          }))
          setSeconds(+e.target.value)
        }}
        name='seconds'
        id='seconds'
      />
      <button onClick={startTimer}>{activeCountdown ? 'STOP' : 'START'}</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  )
}

export default TimerInputs
