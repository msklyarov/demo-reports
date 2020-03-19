import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './components';

class CanvasContainer extends React.Component {
  render() {
    return <Component widgets={this.props.widgets} />;
  }
}

const mapStateToProps = state => ({
  widgets: state.widgets,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
