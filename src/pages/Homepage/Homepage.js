import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const baseurl = require("../")

export default function Homepage() {

  return (
    <>
      <Navbar />
      <h1>Haloo</h1>
    </>
  );
}
