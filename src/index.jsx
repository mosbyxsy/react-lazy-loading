import React from 'react';
import ReactDom from 'react-dom';
import BaseRoute from './baseRoute';
import './index.css';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<BaseRoute/>, root);