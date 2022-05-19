import "./style.css"
import Typewriter from "./Typewriter"

const typewriter = new Typewriter(document.querySelector('.whitespace') as HTMLDivElement, {loop: false})

typewriter
  .typeString("Want to Know About Me?")
  .pauseFor(1000)
  .typeString("\n\nMy Name is Tom Riddle")
  .deleteChars(10)
  .typeString("Pranjul Varshney a bad coder")
  .deleteChars(11)
  .typeString("Ooops sorry")
  .deleteChars(11)
  .typeString("A cool coder ;-) ")
  .pauseFor(150)
  .typeString("\n\nWhat my Skills are: ?")
  .pauseFor(1000)
  .typeString("\n\nYeah It's Problem creating with")
  .deleteChars(13)
  .typeString("Solving with JS after all")
  .pauseFor(1000)
  .typeString("\n\nIs there an easy way to introduce oneself then this")
  .pauseFor(500)
  .typeString("\n\nIf Yes then tell -- my LinkedIn profile is as below -- ")
  .typeString("\n\nhttps://www.linkedin.com/in/pranjul-v-9578b885/")
  .pauseFor(7000)
  .deleteAll(10)
  .start()
