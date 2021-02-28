import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.onSubmit = (formValues) => {
      this.props.createStream(formValues);
    };
  }

  render() {
    return (
      <div className="ui segment">
        <h3>Create New Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
