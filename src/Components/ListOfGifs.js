// pakages
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// hooks
import { getGifs } from '../Services/getGifs'

//components
import { searchGif, getId } from '../actions'
import Gif from './Gif'
import SearchGif from './SearchGif'
import Loader from './Loader'

const ListOfGifs = (props) => {
  const [gifs, setGifs] = useState([]);
  const [form, setForm] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState(props.search);

  const handleSearch = async (e) => {
    e.preventDefault();
    props.searchGif(form.search)
    setSearch(form.search);
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    })
  }
  useEffect(() => {
    const fetch = async () => {
      setLoader(true)
      const data = await getGifs(search);
      setGifs(data)
      setLoader(false);
    }
    fetch();
  }, [props.id, search])
  return (
    loader ? (
      <Loader />
    ) : (
        <section className="App-content" id="appContent">
          <h1>Giphy Dragon Ball Z</h1>
          <SearchGif
            handleSearch={handleSearch}
            handleChange={handleChange}
          />
          {gifs.map(item => <Gif {...item} key={item.id} search={search} />)}
        </section>
      )
  )
}
const mapStateToProps = state => {
  return {
    search: state.search,
    id: state.id,
  }
}
const mapDispatchToProps = {
  searchGif,
}
export default connect(mapStateToProps, mapDispatchToProps)(ListOfGifs)