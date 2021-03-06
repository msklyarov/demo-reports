import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './components';
import deleteWidgetAction from '../../modules/widgets/actions/delete';
import connectWidgetAction from '../../modules/widgets/actions/connect';

class RootContainer extends React.Component {
  deleteWidget = id => () => this.props.deleteWidgetAction(id);

  connectWidget = id => () => this.props.connectWidgetAction(id);

  render() {
    return (
      <Component
        data={this.props.data}
        width={this.props.width}
        height={this.props.height}
        deleteWidget={this.deleteWidget(this.props.data.id)}
        connectWidget={this.connectWidget(this.props.data.id)}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteWidgetAction, connectWidgetAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
