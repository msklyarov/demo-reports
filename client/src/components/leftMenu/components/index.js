import React from 'react';
import TreeMenu from 'react-simple-tree-menu';
// import default minimal styling or your own styling
import 'react-simple-tree-menu/dist/main.css';
import { Button } from 'react-bootstrap';

export default ({
  widgets,
  setActiveWidgetAction,
  loadWidgetsAction,
  saveWidgetsAction,
  clearWidgetsAction,
}) => (
  <div>
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
    <Button variant="primary" block onClick={loadWidgetsAction}>
      Load
    </Button>
    <Button variant="primary" block onClick={() => saveWidgetsAction(widgets)}>
      Save
    </Button>
    <Button variant="primary" block onClick={clearWidgetsAction}>
      Clear
    </Button>
  </div>
);
