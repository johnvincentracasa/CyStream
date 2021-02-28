import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.onSubmit = (formValues) => {
      this.props.editStream(this.props.match.params.id, formValues);
    };
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderEdit(stream) {
    if (stream) {
      return (
        <div className="ui segment">
          <StreamForm onSubmit={this.onSubmit} />
        </div>
      );
    }
    return <div className="ui header"> Loading...</div>;
  }
  render() {
    return <div className="ui items celled list">{this.renderEdit(this.props.stream)}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
