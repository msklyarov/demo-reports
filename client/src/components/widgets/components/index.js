import React, { useState } from 'react';
import Grid from './grid';
import Chart from './chart';

export default ({ data, width, height, deleteWidget, connectWidget }) => {
  const [isConnected, setConection] = useState(data.connected);

  return (
    <div>
      <div>
        {data.type} {data.x} {data.y}
        <br />
        id: {data.id}
      </div>
      {!isConnected && (
        <button
          onClick={() => {
            setConection(true);
            connectWidget();
          }}
        >
          Connect
        </button>
      )}
      <button onClick={deleteWidget}>Delete</button>
      {isConnected && data.type === 'grid' && <Grid />}
      {isConnected && data.type === 'chart' && (
        <Chart width={width} height={height} />
      )}
    </div>
  );
};
