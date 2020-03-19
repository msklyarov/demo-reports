import React from 'react';
import { Rnd } from 'react-rnd';
import Widgets from '../../widgets';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

class App extends React.Component {
  render() {
    return (
      <Rnd
        style={style}
        size={{ width: this.props.data.width, height: this.props.data.height }}
        position={{ x: this.props.data.x, y: this.props.data.y }}
        onDragStart={e => {
          this.props.setActionAction('drag');
        }}
        onDragStop={(e, d) => {
          setTimeout(() => this.props.setActionAction(null), 100);
          // this.setState({ x: d.x, y: d.y });

          this.props.placeWidgetAction(this.props.data.id, d.x, d.y);
        }}
        onResizeStart={e => this.props.setActionAction('resize')}
        onResizeStop={(e, direction, ref, delta, position) => {
          setTimeout(() => this.props.setActionAction(null), 100);

          this.props.placeWidgetAction(
            this.props.data.id,
            position.x,
            position.y,
          );
          this.props.resizeWidgetAction(
            this.props.data.id,
            ref.style.width,
            ref.style.height,
          );
        }}
      >
        <Widgets
          data={this.props.data}
          width={this.props.data.width}
          height={this.props.data.height}
        />
      </Rnd>
    );
  }
}

export default App;
