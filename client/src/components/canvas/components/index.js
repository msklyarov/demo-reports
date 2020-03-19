import React from 'react';
import Box from '../../box';

// export default ({ widgets }) => (
//   <>
//     {widgets.map((item, i) => (
//       <Box key={i} data={item} />
//     ))}
//   </>
// );

class Canvas extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <>
        {this.props.widgets.map((item, i) => (
          <Box key={i} data={item} />
        ))}
      </>
    );
  }
}

export default Canvas;
