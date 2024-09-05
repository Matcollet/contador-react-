import React, { useState } from 'react'
import './App.css'

const Contador = () => {

  const [numero, setNumero] = useState(0)

  return (
    <section className='geral'>
      <div id='topo'>
    <h1>COUNTER</h1>
    <p>{numero}</p>
    </div>
    <section className='btns'>
    <section className='btn-p'>
    <button className='positivos' onClick={aumentar1}>+1</button>
    <button className='positivos' onClick={aumentar10}>+10</button>
    <button className='positivos' onClick={aumentar100}>+100</button>
    <button className='positivos' onClick={aumentar1000}>+1000</button>
    <button className='positivos' onClick={aumentar10000}>+10000</button>
    </section>
    <button className='z-btn' onClick={zerar}>ZERAR</button>
    <section className='btn-n'>
    <button className='negativos' onClick={diminuir1}>-1</button>
    <button className='negativos' onClick={diminuir10}>-10</button>
    <button className='negativos' onClick={diminuir100}>-100</button>
    <button className='negativos' onClick={diminuir1000}>-1000</button>
    <button className='negativos' onClick={diminuir10000}>-10000</button>
    </section>
    </section>
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
    setNumero(numero - 100)
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