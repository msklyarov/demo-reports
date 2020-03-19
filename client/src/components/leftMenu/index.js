import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './components';
import setActiveWidgetAction from '../../modules/activeWidget/actions/set';

class LeftMenuContainer extends React.Component {
  render() {
    return (
      <Component setActiveWidgetAction={this.props.setActiveWidgetAction} />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActiveWidgetAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuContainer);

// надо будет добавить список элементов на холсте
