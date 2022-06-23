import React, { Component } from 'react'
import axios from 'axios'
export class Postform extends Component {
	constructor(props) {
		super(props)

		this.state = {
			Id: '',
			title: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		//console.log("raviii",this.state)
		// axios
		// 	.post('https://jsonplaceholder.typicode.com/posts', this.state)
		// 	.then(response => {
		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 	})
		axios.post('http://localhost:8080/album/post',this.state)
            .then(res=>{
                // console.log(res)
               console.log(res.data)
            })
            .catch(err => {
                        console.log("error", err);
                    });
	}

	render() {
		const { Id, title} = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="Id"
							value={Id}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
					
				</form>
			</div>
		)
	}
}
