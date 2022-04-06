import React from 'react';
import sanityClient from "./client.js";
const BlockContent = require('@sanity/block-content-to-react')


class Article extends React.Component{
    constructor(props) {
        super(props);
        let route = window.location.hash.split('/')[1];
        sanityClient.fetch(`*[_type=="post" && slug.current=="${route}"][0]`).then(response=>this.setData(response))
    }


    setData(data){
        this.setState({article:data})
    }

    render() {
        const serializers = {
            types: {
                code: props => (
                    <pre data-language={props.node.language}>
                        <code>{props.node.code}</code>
                    </pre>
                )
            }
        }

        const genArticle = () =>{
            if (this.state){
                return (
                    <div>
                        <h2><strong>{this.state.article.title}</strong></h2>
                        <h6>Published: {this.state.article._createdAt.split('T')[0]}</h6>
                        <h6>Updated: {this.state.article._updatedAt.split('T')[0]}</h6>
                        <BlockContent className={'mt-4'} blocks={this.state.article.body} serializers={serializers} dataset="production" projectId="2aei1eqa"/>
                    </div>)
            }
            else {
                return <div></div>
            }

        }
        console.log(this.state)
        //<BlockContent blocks={this.state.article.body} serializers={serializers}/>)
        return(
            <div className={'d-flex justify-content-center mt-3'}>
                {genArticle()}
            </div>
        );
    }
}

export default Article;