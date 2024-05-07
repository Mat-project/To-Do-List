import React from 'react'
import { useState } from 'react'
const mainn = () => {
  const [money,setMoney]=useState("million");

  function changeStatus(){
      const money=["million","billion","trillion","quartrillon"]
      const number=Math.floor(Math.random()*money.length);
      setMoney(money[number]);
      console.log("reached") 
  }

  return (
    <main>
      <div>let's have {money} euro </div>
      <button onClick={changeStatus}>change</button>

    </main>
  )
}

export default mainn