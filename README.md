# TypeWriter
TypeScript Class to expose methods in Order to Simulate typing on Web in loop

#### The Class Constructor require 2 Parameters (```<HTMLElement>```,```{options}```)
```typescript
new Typewriter(document.body as HTMLElement, {loop: false, typingSpeed = 50, deletingSpeed = 50})
```
#### Supports 5 Methods which can be chained
```typescript
.typeString("SomeString") //String to be typed
.pauseFor(1000) //Pause for Milliseconds
.deleteChars(10) //Delete number of Characters from the end
.deleteAll(10) //Delete all Charachters Specify timeInterval b/w each char
.start() //To start the Simulation
```

#### You can Try it by Cloning the Repository
    npm install
    npm start dev
Then Open http://localhost:3000/
    



