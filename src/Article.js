import React from 'react';
import { useHistory, useParams } from 'react-router-dom'

class Article extends React.Component{
    constructor(props) {
        super(props);
        this.state = {'route':window.location.hash.split('/')[1]}
    }

    render() {
        return(<div>{this.state.route}</div>);
    }
}

export default Article;