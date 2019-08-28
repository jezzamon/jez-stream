import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import { pick } from 'lodash';
import StreamForm from './StreamForm';
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    const {
      editStream,
      match: { params },
    } = this.props;
    editStream(params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    console.log(this.props);
    return (
      <div>
        <h3>Edit a stream</h3>
        {/* initialValues is a special prop injected by ReduxForm */}
        {/* object keys are from the name property on Field components */}
        <StreamForm
          initialValues={pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id], // routeParams
});

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
