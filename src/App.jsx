import React, { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("");
  const [name, setName] = useState("")
  const [avatar_url, setAvatarUrl] = useState("")
  const [bio, setBio] = useState("")
  const [message, setMessage] = useState("")

  async function callApi(login){

    const data = await (await fetch(`https://api.github.com/users/${login}`)).json();

    const { name, avatar_url, bio, message } = data;

    console.log(avatar_url)

    setName(name)
    setAvatarUrl(avatar_url)
    setBio(bio)
    setMessage(message)

  }
  
  return (
    <div>
      <img src={avatar_url}/>
      <h1>{name}</h1>
      <p>{bio}</p>
      <input placeholder='Digite o nome...' onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => callApi(input)}>Search</button>

    </div>
  )
}

export default App
