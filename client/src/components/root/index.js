import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './components';
import createWidgetAction from '../../modules/widgets/actions/create';

class RootContainer extends React.Component {
  render() {
    return (
      <Component
        createWidgetAction={this.props.createWidgetAction}
        action={this.props.action}
        activeWidget={this.props.activeWidget}
      />
    );
  }
}

const mapStateToProps = state => ({
  action: state.action,
  activeWidget: state.activeWidget,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createWidgetAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
