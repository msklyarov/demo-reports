import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './components';
import setActionAction from '../../modules/action/actions/set';
import resizeWidgetAction from '../../modules/widgets/actions/resize';
import placeWidgetAction from '../../modules/widgets/actions/place';

class CanvasContainer extends React.Component {
  render() {
    return (
      <Component
        data={this.props.data}
        setActionAction={this.props.setActionAction}
        resizeWidgetAction={this.props.resizeWidgetAction}
        placeWidgetAction={this.props.placeWidgetAction}
      />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActionAction,
      resizeWidgetAction,
      placeWidgetAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
