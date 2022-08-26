import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import axios from 'axios';

const baseUrl = 'https://mocki.io/v1/d933391c-4422-4e65-9693-c221260cca18';

export default function Homepage() {
  const [homeplay, setHomeplay] = useState([]);
  const [category, setCategory] = useState([]);

  const getCategory = () => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        setCategory(response.data.kategori);
        console.log(response.data.kategori);
      })
      .catch((error) => console.error(`error: ${error}`));
  };
  const getData = () => {
    fetch('homeplay.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHomeplay(data);
      });
  };

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Playlist</h1>
        <div className="row">
          {homeplay &&
            homeplay.length > 0 &&
            homeplay.map((datas) => {
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
        <div>
          {category.map((data) => {
            return <p>{data}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
