import logo from './logo.svg';
import './App.css';


import React, { useState } from 'react';
import MyInput from './components/inputField';
import merge from './functions/merger';

export default function App() {

  const [result, setResult] = useState("");

  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    var array = [inputOne, inputTwo, inputThree];

    var newResult = merge(array);

    setResult(newResult);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p aria-label='result' >{result}</p>
        <form onSubmit={handleSubmit}>
          <MyInput field={"First"} state={inputOne} setState={setInputOne} /> <br />

          <MyInput field={"Second"} state={inputTwo} setState={setInputTwo} /> <br />

          <MyInput field={"Third"} state={inputThree} setState={setInputThree} /> <br />

          <input type="submit" value="Merge" />
        </form>
      </header>
    </div>
  );
}

