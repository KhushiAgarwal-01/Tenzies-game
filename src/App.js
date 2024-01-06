import React from "react"
import Die from "./component/die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti';

export default function App(){

  const [dice,setdice]=React.useState(genumber())
  const[tenzies,settenzies]=React.useState(false)

  

  React.useEffect(()=>{
   const allheld= dice.every(num=>num.isheld)
   const firstval=dice[0].value
   const allsame=dice.every(num=> num.value==firstval)

   if(allheld && allsame)
   {
    settenzies(true)
    console.log("you won")
   }
  },[dice])


function gennewdie(){
  let num= Math.floor(Math.random() * 6) + 1;
  return (
    { 
      value:num,
      isheld:false,
      id:nanoid()
    }
  )
}
  function genumber (){
    let newarray=[]
    for(let i=1;i<=10;i++){
      
      newarray.push (gennewdie())
    }
   return (newarray)
  }

  function holddice(id){
   setdice( olddice=> {
    return (
      olddice.map((value)=>{
        return ((value.id===id)?{ ...value, "isheld":!value.isheld}: value)
      })
    )
   })
  }

  function rollnumber(){
    
    if(tenzies==false)
    { 
      setdice( olddice=>{
        return (
          olddice.map((value)=>{
            return ( value.isheld ? value :   gennewdie() )
          })
        )
      })
    }else{
     
     
      settenzies(false)
      setdice(genumber())
    } 
  }

  // function countchance(){
  //   let cnt=0;
  //   if(tenzies==false)
  //   { cnt=cnt+1;

  //   }
  //   else{
  //     console.log(cnt)
  //     cnt=0;s
  //   }
  // }

  const dicenum=dice.map((num)=>{
    return <Die  key={num.id} number={num.value}  held={num.isheld} handlechange={()=>holddice(num.id)}/>
  })
return(
  <main >
    {tenzies && <Confetti />}
     <h1 className="title">Tenzies</h1>
     <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
     <pre className="instructions">                               HAVE FUN !!                              </pre>
    <div className="die-container">
    {dicenum}
      </div>
      <button className="roll-btn" onClick={rollnumber }  >{tenzies?"Play Again": "Roll"}</button>
  </main>


)
}