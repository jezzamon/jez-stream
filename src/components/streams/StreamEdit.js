import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    console.log(this.props);
    return <div>Stream Edit</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id], // routeParams
});

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
