import React from 'react';
import { Link } from "react-router-dom";
// import '../App.scss';

const Champions = ({ keys = [], data = [] }) => {
  return (
    <section className="container-champions" >
      
        {
          keys.length === 0 ?
            <p>Cargando...</p>
            :
            keys.map(key => {
              return (
                <div key={key} className="container-champions__items">
                  <Link to={{ pathname: `/home/${key}`, params: data[key].id, state: data[key] }} >
                    <img src={data[key].splash} alt="campeon" className="container-champions__img" />
                  </Link>
                  <h2 >{data[key].id}</h2>
                  <h2 >{data[key].title}</h2>
                  
                </div>
              )
            })
        }
    
    </section>
  )
}

export default Champions