import React, { useEffect, useState } from "react"
import "./changetext.css"

export default ({ words, colors, time, step, wait }) => {
  const tempText = ["Hello World.", "Console Text", "Made with Love.", "ali"]
  words = words !== undefined && words.length > 0 ? words : tempText
  colors =
    colors !== undefined && colors.length > 0
      ? colors
      : ["#fff", "#000", "#f00", "#0f0"]
  time = time !== undefined ? time : 120
  step = step !== undefined ? step : 1
  wait = wait !== undefined ? wait : 4

  const [waiting, setWaiting] = useState(wait)

  const [letter, setLetter] = useState("")
  const [letterCount, setLetterCount] = useState(0)

  const [word, setWord] = useState("")
  const [wordCounter, setWordCounter] = useState(0)

  const [color, setColor] = useState("")
  const [colorCounter, setColorCounter] = useState(0)

  const [typing, setTyping] = useState(true)

  const makeText = () => {
    if (waiting > 0) {
      // waiting...
      setWaiting(waiting - 1)
    } else if (letterCount === 0) {
      // change word
      // add waiting
      setWaiting(wait)
      // change color
      if (colorCounter === colors.length - 1) {
        setColorCounter(0)
      } else {
        setColorCounter(colorCounter + 1)
      }
      setColor(colors[colorCounter])
      // change words
      if (wordCounter === words.length - 1) {
        setWordCounter(0)
      } else {
        setWordCounter(wordCounter + 1)
      }
      setWord(words[wordCounter])
      setLetterCount(step)
      setTyping(true)
      setLetter(word.substring(0, letterCount))
    } else if (letterCount === word.length + 1 && typing !== false) {
      // end of letter...
      setWaiting(wait)
      setTyping(false)
    } else {
      // write letter...
      setLetter(word.substring(0, letterCount))
      if (typing) {
        setLetterCount(letterCount + 1)
      } else {
        setLetterCount(letterCount - 1)
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(makeText, time)
    return () => clearInterval(interval)
  })

  return (
    <>
      <span style={{ color: color }}>{letter}</span>
      <span className="blink">&#95;</span>
    </>
  )
}

// https://codepen.io/Tbgse/pen/dYaJyJ
