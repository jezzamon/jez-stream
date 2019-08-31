import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return <div>Stream show</div>;
  }
}

export default connect(
  null,
  { fetchStream }
)(StreamShow);


