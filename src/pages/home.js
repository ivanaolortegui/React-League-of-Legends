
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Champions from '../components/campions'
// import Header from '../components/header'


// import '../App.scss';


const Home = () => {
  const [data, setData] = useState([])
  const [keys, setKeys] = useState([])
  const url = 'https://raw.githubusercontent.com/ivanaolortegui/League-of-Legends-React/master/src/data/data.json'

  const fetchData = async () => {
    const response = await axios.get(url);
    console.log(response.data.data);
        setData(response.data.data)
        setKeys(Object.keys(response.data.data))
      
  }

  useEffect(() => { fetchData() }, [url])

  return (
    <div>
      <Champions keys={keys} data={data} />
    </div>
  )
}

export default Home