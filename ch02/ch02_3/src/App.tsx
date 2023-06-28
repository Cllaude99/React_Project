import {Component} from 'react'
import ArrowComponent from './ArrowComponent'

export default function App() {
  return (
    <ul>
      <ArrowComponent href="http://www.google.com" text="Go to google" />
      <ArrowComponent href="www.twitter.com" text="Go to twitter" />
    </ul>
  )
}
