
import React from "react"
import { useTypewriter } from 'react-simple-typewriter'
import './home.css';

export const Home = () => {
  const [text, speed] = useTypewriter({
    words: [
      "Hi, I'm Ahmad",
      "I'm a Full Stack Developer",
      "Coding dreams into reality, end to end.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='container'>
      <h1>{text}</h1>
    </div>

  )

}