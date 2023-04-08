import  { useState } from 'react'

type Props = {}

const useInputs = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const setInput =
    (setter: (arg0: any) => void) => (e: { currentTarget: { value: any } }) => {
      setter(e.currentTarget.value)
    }

  return {
    minutes,
    seconds,
    setInput,
    setSeconds,
    setMinutes
  }
}

export default useInputs
