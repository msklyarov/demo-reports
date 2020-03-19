import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from './components';
import deleteWidgetAction from '../../modules/widgets/actions/delete';

class RootContainer extends React.Component {
  deleteWidget = () => this.props.deleteWidgetAction(this.props.data.id);

  render() {
    return (
      <Component
        data={this.props.data}
        width={this.props.width}
        height={this.props.height}
        deleteWidget={this.deleteWidget}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteWidgetAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
