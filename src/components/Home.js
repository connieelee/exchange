import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapState = state => ({
  defaultCurrency: state.defaultCurrency,
});
const mapDispatch = null;

const Home = ({ defaultCurrency }) => (
  <div>
    <h1>exchange</h1>
    <h2>DEFAULT CURRENCY:</h2>
    <h3>
      { defaultCurrency ?
        `${defaultCurrency.name}: ${defaultCurrency.value}` :
        'you don\'t have one set yet! add/manage your currencies' }
    </h3>
    <div><Link to="/manage"><button>Manage currencies</button></Link></div>
    <div><Link to="/add"><button>Add currency</button></Link></div>
  </div>
);

export default connect(mapState, mapDispatch)(Home);
