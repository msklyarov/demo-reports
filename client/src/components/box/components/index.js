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
  constructor() {
    super();
    this.state = {
      width: 200,
      height: 200,
      x: 10,
      y: 10,
    };
  }

  render() {
    return (
      <Rnd
        style={style}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStart={e => {
          e.stopPropagation();
          this.props.setActionAction('drag');
        }}
        onDragStop={(e, d) => {
          e.stopPropagation();
          setTimeout(() => this.props.setActionAction(null), 100);
          this.setState({ x: d.x, y: d.y });
        }}
        onResizeStart={e => this.props.setActionAction('resize')}
        onResizeStop={(e, direction, ref, delta, position) => {
          setTimeout(() => this.props.setActionAction(null), 100);
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          });
        }}
      >
        <Widgets
          data={this.props.data}
          width={this.state.width}
          height={this.state.height}
        />
      </Rnd>
    );
  }
}

export default App;
