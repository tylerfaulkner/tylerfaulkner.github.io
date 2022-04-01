import React from 'react';
import sanityClient from "./client.js";
import temp from "./images/temp.png";
import {
    Link
} from "react-router-dom";

class CardDisplay extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.type);
        this.state = {};
        sanityClient.fetch(`*[_type=="post" && ${"\"" + props.type + "\""} in categories[]->title]{
            title,
            slug,
            categories[] -> {
                  title,
            },
            mainImage{
                asset->{
                    _id,
                    url
                }
            }
        }`).then((data)=>this.setData(data))
            .catch(console.error);
    }

    setData(data){
        this.setState({data:data})
    }

    render() {
        let genImg = (post) =>{
            let img = temp;
            if (post.mainImage != null) {
                img = post.mainImage.asset.url;
            }
            return <img className="card-img-top" src={img} alt="Card cap"/>
        }
        return(
            <div className={"container mt-4 fade"}>
                <h1>{this.props.type}</h1>
                <div className="row row-cols-md-3 g-4 justify-content-center">
                    {this.state.data &&
                    this.state.data.map((post, index) =>(
                        <div className={"col"} key={post.slug.current}>
                            <div className="card">
                                {genImg(post)}
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href={"#/"+post.slug.current} className="btn btn-primary">Read</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default CardDisplay;