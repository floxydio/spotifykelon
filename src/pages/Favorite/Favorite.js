import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';

export default function Favorite() {
  const [favorite, setFavorite] = useState([]);

  const getFavorite = () => {
    fetch('favorite.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFavorite(data);
      });
  };

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Favorite</h1>
        <div className="row">
          {favorite &&
            favorite.length > 0 &&
            favorite.map((datas) => {
              return (
                <div
                  style={{
                    width: '15rem',
                    margin: '10px',
                  }}
                  key={datas.id}
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
