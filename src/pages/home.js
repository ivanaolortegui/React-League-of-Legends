import React, { useState, useEffect } from 'react'
import Champions from '../components/campions'
import Header from '../components/header'


import '../App.scss';


const Home = () => {
  const [data, setData] = useState([])
  const [keys, setKeys] = useState([])
  const url = 'https://raw.githubusercontent.com/ivanaolortegui/React-League-of-Legends/master/src/data/data.json'

  const fetchData = async () => {
    const response = await fetch(url)
    response
      .json()
      .then(res => {
        setData(res.data)
        setKeys(Object.keys(res.data))
      })
  }

  useEffect(() => { fetchData() }, [url])

  const filter = (e, filterBy) => {
    const result = Object.keys(data).filter(ele => data[ele][filterBy].indexOf(e.target.value) !== -1)
    e.target.value === 'all' ? setKeys(Object.keys(data)) : setKeys(result)
  }
  const sort = (e) => {
    let sortData = []
    if (e.target.value === 'A-Z') {
      sortData = Object.keys(data).slice().sort((elementA, elementB) => elementA.localeCompare(elementB));
    } else {
      sortData = Object.keys(data).slice().sort((elementA, elementB) => elementB.localeCompare(elementA));
    }
    setKeys(sortData);
  }



  return (
    <div>
      <Header />
      {<form className="form-inputs">
        <div className="selects">
          <select onChange={(e) => filter(e, 'tags')} className="select-role">
            <option value="all">Todos</option>
            <option value="Fighter">Fighter</option>
            <option value="Tank">Tanque</option>
            <option value="Mage">Mago</option>
            <option value="Assassin">Asesino</option>
          </select>
          <select onChange={sort} className="select-role">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>

        <input type="text" onChange={(e) => filter(e, 'id')} className="input-search" placeholder="Buscar" />

      </form>}
      <h2 className="header">Campeones: {keys.length}</h2>
      <Champions keys={keys} data={data} />
    </div>
  )
}

export default Home