import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function Homepage() {
  const [homeplay, setHomeplay] = useState([]);

  const getData = () => {
    fetch('homeplay.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setHomeplay(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <h1 style={{ paddingLeft: '55px' }}>PlayList</h1>
      <div className="container">
        <div className="row">
          {homeplay &&
            homeplay.length > 0 &&
            homeplay.map((datas) => {
              return (
                // <div
                //   className="card"
                //   style={{ width: '15rem', margin: '10px' }}
                //   key={datas.id}
                // >
                //   <img
                //     className="card-img-top"
                //     src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                //     alt="Card Image Cap"
                //   />
                //   <div className="card-body">
                //     <h5 className="card-title">{datas.title}</h5>
                //     <p className="card-text">{datas.artist}</p>
                //   </div>
                // </div>
                <div
                  style={{
                    width: '15rem',
                    margin: '10px',
                  }}
                >
                  <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    style={{
                      borderRadius: '10px',
                    }}
                  />
                  <div
                    className="card border-light mb-3"
                    style={{ maxWidth: '18rem' }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{datas.title}</h5>
                      <p className="card-text">{datas.artist}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
