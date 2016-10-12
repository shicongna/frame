import React from "react";
import ReactDOM from "react-dom";

class Count extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			fruits:["香蕉","苹果","草莓"]
		}
	}
	render(){
		return (
			<ul>
				{
					this.state.fruits.map((elem,index)=><li key={index}>{elem}</li>)
				}
			</ul>
		)
	}
}

ReactDOM.render(
	<Count />,
	document.querySelector("#app")
)