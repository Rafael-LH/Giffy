import React, { useState, useEffect } from 'react'
import './App.css'
import getGiphy from './Services/getGifs'
import Gif from './Components/Gif'
import SearchGif from './Components/SearchGif'

function App() {
  const [gifs, setGifs] = useState([]);
  const [form, setForm] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await getGiphy(form.search)
    setGifs(data)
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    })
  }
  useEffect(() => {
    const fetch = async () => {
      const data = await getGiphy();
      setGifs(data)
    }
    fetch();
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giphy Dragon Ball Z</h1>
        <SearchGif
          handleSearch={handleSearch}
          handleChange={handleChange}
        />
        {gifs.map(item => <Gif {...item} key={item.id} />)}
      </section>
    </div>
  );
}

export default App;
