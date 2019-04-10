import React from 'react';
import ReactDOM from 'react-dom';
import AppBroken from './AppBroken';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppBroken />, div);
  ReactDOM.unmountComponentAtNode(div);
});
