import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadSavedCurrencies } from '../redux/reducers/savedCurrencies';
import { loadDefaultCurrency } from '../redux/reducers/defaultCurrency';

const mapState = null;
const mapDispatch = dispatch => ({
  loadSavedCurrencies: () => dispatch(loadSavedCurrencies()),
  loadDefaultCurrency: () => dispatch(loadDefaultCurrency()),
});

class Home extends React.Component {
  componentDidMount() {
    this.props.loadSavedCurrencies();
    this.props.loadDefaultCurrency();
  }

  render() {
    return (
      <div>
        <h1>exchange</h1>
        <p>description and stuff</p>
        {/* <Link to="/edit"><button>Update currencies</button></Link> */}
        {/* <Link to="/set"><button>Set new default</button></Link> */}
        <Link to="/add"><button>Add currency</button></Link>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Home);
