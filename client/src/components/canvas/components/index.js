import React from 'react';
import Box from '../../box';

export default ({ widgets }) => (
  <>
    {widgets.map((item, i) => (
      <Box key={i} data={item} />
    ))}
  </>
);
