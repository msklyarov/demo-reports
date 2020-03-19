import React from 'react';
import TreeMenu from 'react-simple-tree-menu';
// import default minimal styling or your own styling
import 'react-simple-tree-menu/dist/main.css';

export default ({ setActiveWidgetAction }) => (
  <TreeMenu
    data={[
      {
        key: 'widgets',
        label: 'Widgets',
        nodes: [
          {
            key: 'grid',
            label: 'Grid',
            nodes: [],
            url: 'https://www.google.com/search?q=dog',
          },
          {
            key: 'chart',
            label: 'Chart',
            nodes: [],
            url: 'https://www.google.com/search?q=fox',
          },
        ],
      },
    ]}
    debounceTime={125}
    disableKeyboard={false}
    hasSearch={false}
    onClickItem={item => {
      if (item.parent) {
        setActiveWidgetAction(item.label.toLowerCase());
      }
    }}
    resetOpenNodesOnDataUpdate={false}
  />
);
