import React, { useState } from 'react'
import './App.css'

const Contador = () => {

  const [numero, setNumero] = useState(0)

  return (
    <section>
    <h1>COUNTER</h1>
    <p>{numero}</p>
    <div className='btns'>
    <div className='p-btns'>
    <button onClick={aumentar1}>+1</button>
    <button onClick={aumentar10}>+10</button>
    <button onClick={aumentar100}>+100</button>
    <button onClick={aumentar1000}>+1000</button>
    <button onClick={aumentar10000}>+10000</button>
    </div>
    <button className='z-btn' onClick={zerar}>ZERAR</button>
    <div className='n-btns'>
    <button onClick={diminuir1}>-1</button>
    <button onClick={diminuir10}>-10</button>
    <button onClick={diminuir100}>-100</button>
    <button onClick={diminuir1000}>-1000</button>
    <button onClick={diminuir10000}>-10000</button>
    </div>
    </div>
    </section>
  );
  
  function aumentar1() {
    setNumero(numero + 1)
  }
  function diminuir1() {
    setNumero(numero - 1)
  }
  function aumentar10() {
    setNumero(numero + 10)
  }
  function diminuir10() {
    setNumero(numero - 10)
  }
  function aumentar100() {
    setNumero(numero + 100)
  }
  function diminuir100() {
    setNumero(numero - 1000)
  }
  function aumentar1000() {
    setNumero(numero + 1000)
  }
  function diminuir1000() {
    setNumero(numero - 1000)
  }
  function aumentar10000() {
    setNumero(numero + 10000)
  }
  function diminuir10000() {
    setNumero(numero - 10000)
  }
  function zerar() {
    setNumero(numero - numero)
  }
}

export default Contador