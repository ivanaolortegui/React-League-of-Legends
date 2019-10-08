
import React, { useState, useEffect } from 'react'
import Champions from '../components/campions'
// import Header from '../components/header'


// import '../App.scss';


const Home = () => {
  const [data, setData] = useState([])
  const [keys, setKeys] = useState([])
  const url = 'https://raw.githubusercontent.com/ivanaolortegui/League-of-Legends-React/master/src/data/data.json'

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

  return (
    <div>
      <Champions keys={keys} data={data} />
    </div>
  )
}

export default Home