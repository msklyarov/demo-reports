import React from 'react';
import LeftMenu from '../../leftMenu';
import Canvas from '../../canvas';

export default ({ createWidgetAction, action, activeWidget }) => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <div
      style={{
        height: '100vh',
        minWidth: '20%',
      }}
    >
      <LeftMenu />
    </div>
    <div
      style={{
        minWidth: '75%',
        borderLeft: '1px black solid',
        marginLeft: '0.5em',
      }}
      onClick={() =>
        activeWidget && !action && createWidgetAction(activeWidget)
      }
    >
      <Canvas />
    </div>
  </div>
);
