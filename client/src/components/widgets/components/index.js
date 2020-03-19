import React, { useState } from 'react';
import Grid from './grid';
import Chart from './chart';

export default ({ data, width, height, deleteWidget }) => {
  const [isConnected, setConection] = useState(false);

  return (
    <div>
      <div>
        {data.name}
        <br />
        id: {data.id}
      </div>
      {!isConnected && (
        <button onClick={() => setConection(true)}>Connect</button>
      )}
      <button onClick={deleteWidget}>Delete</button>
      {isConnected && data.name === 'grid' && <Grid />}
      {isConnected && data.name === 'chart' && (
        <Chart width={width} height={height} />
      )}
    </div>
  );
};
