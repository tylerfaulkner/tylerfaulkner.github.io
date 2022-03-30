import React from 'react';
import sanityClient from "./client.js";

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
        console.log(data);
        this.setState({data:data})
    }

    render() {
        let genImg = (post) =>{
            if (post.mainImage != null) {
                return <img className="card-img-top" src={post.mainImage.asset.url} alt="Card cap"/>
            }
        }
        return(
            <div className={"card-deck mt-1 d-flex justify-content-center"}>
                {this.state.data &&
                this.state.data.map((post, index) =>(
                    <div className="card h-25" style={{width: 25+ "rem"}} key={post.slug.current}>
                        {genImg(post)}
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href={"/"+post.slug.current} className="btn btn-primary">Read</a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default CardDisplay;