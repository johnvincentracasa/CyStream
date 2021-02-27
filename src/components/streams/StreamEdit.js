import React from 'react';
import { connect } from 'react-redux';

function StreamEdit({ stream }) {
  const renderEdit = (stream) => {
    if (stream) {
      return (
        <div className="item">
          <div className="content">
            <div className="header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    }
  };

  return <div className="ui items celled list">{renderEdit(stream)}</div>;
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps)(StreamEdit);
