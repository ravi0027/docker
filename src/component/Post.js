import React,{ Component } from "react"
import axios from "axios"
export class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            posts: []
        };
    }
    // .then(response=>this.setState({ 
    //     //posts:response

    
    //     console.log(this.posts)
    // }))
    submitHandler= e =>{
        e.preventDefault()
        axios.get('http://localhost:8080/album/get')

        .then(response=>

            console.log(response.data)
        )}
    render()
    {

         return(
            <div>
                
             {/* { this.state.posts.map(post=><p>{post.id},{post.title}</p>)} */}
            <form onSubmit={this.submitHandler}>
            <button type="submit">Click</button>
            </form>           
            </div>
        )
    }
}