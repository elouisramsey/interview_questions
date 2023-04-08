import { useEffect, useState } from 'react'

const useTimer = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [activeCountdown, setActiveCountdown] = useState(false)
  const [timerValues, setTimerValues] = useState({
    minutes: 0,
    seconds: 0
  })

  const setInput =
    (setter: (arg0: any) => void) => (e: { currentTarget: { value: any } }) => {
      setter(e.currentTarget.value)
    }

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined

    if (minutes > 0 && seconds === 0) {
      setSeconds((prev) => prev + 60)
      setMinutes((prev) => prev - 1)
    }

    if (seconds > 0 && activeCountdown) {
      intervalId = setInterval(() => setSeconds((prev) => prev - 1), 1000)
    }

    if (minutes === 0 && seconds === 0) {
      setActiveCountdown(false)
    }

    return () => clearInterval(intervalId)
  }, [activeCountdown && seconds])

  const resetTimer = () => {
    setSeconds(timerValues.seconds)
    setMinutes(timerValues.minutes)
    setActiveCountdown(false)
  }

  const startTimer = () => {
    setActiveCountdown(prev => !prev)
  }

  return {
    setInput,
    minutes,
    setSeconds,
    seconds,
    setMinutes,
    setActiveCountdown,
    activeCountdown,
    startTimer,
    setTimerValues,
    resetTimer
  }
}

export default useTimer
