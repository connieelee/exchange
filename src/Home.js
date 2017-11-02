import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>exchange</h1>
    <p>description?</p>
    <Link to="/edit"><button>Update currencies</button></Link>
    <Link to="/set"><button>Set new default</button></Link>
    <Link to="/add"><button>Add currency</button></Link>
  </div>
);

export default Home;
