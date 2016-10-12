import React from "react";
import ReactDOM from "react-dom";

class Fruitlist extends React.Component{
	constructor(props){
			super(props)
			this.state={
				Fruits:["香蕉","苹果","鸭梨"]
			}
	}
	render(){
		return (
			<ul>
				{
					this.state.Fruits.map((fruit,index)=><FruitIteam  key={index} date={fruit}/>)
				}
			</ul>
		)
	}
}
class FruitIteam extends React.Component{
	render(){
		return (
			<li >
			<span>{this.props.date}</span>
			<span><button>删除</button></span>
			</li>
		)
	}
}


ReactDOM.render(
	<Fruitlist />,
	document.querySelector("#app")
)