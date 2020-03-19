import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './components';
import setActionAction from '../../modules/action/actions/set';

class CanvasContainer extends React.Component {
  render() {
    return (
      <Component
        data={this.props.data}
        setActionAction={this.props.setActionAction}
      />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActionAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
