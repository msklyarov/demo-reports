import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './components';
import setActiveWidgetAction from '../../modules/activeWidget/actions/set';
import loadWidgetsAction from '../../modules/widgets/actions/load';
import saveWidgetsAction from '../../modules/widgets/actions/save';
import clearWidgetsAction from '../../modules/widgets/actions/clear';

class LeftMenuContainer extends React.Component {
  render() {
    return (
      <Component
        widgets={this.props.widgets}
        setActiveWidgetAction={this.props.setActiveWidgetAction}
        loadWidgetsAction={this.props.loadWidgetsAction}
        saveWidgetsAction={this.props.saveWidgetsAction}
        clearWidgetsAction={this.props.clearWidgetsAction}
      />
    );
  }
}

const mapStateToProps = state => ({
  widgets: state.widgets,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActiveWidgetAction,
      loadWidgetsAction,
      saveWidgetsAction,
      clearWidgetsAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuContainer);

// надо будет добавить список элементов на холсте
