import React from 'react';
import './article.css';

export default class Article extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<div className='article-page'>Article</div>);
    }
}