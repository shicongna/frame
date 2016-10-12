import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery"

class Fruitlist extends React.Component{
	// constructor(props){
	// 		super(props)
	// 		this.state={
	// 			Fruits:["香蕉","苹果","鸭梨"]
	// 		}
	// }
	componentDidMount() {
	     $("button").click(function(){
	     	alert("hello 渲染后")
	     }) 
	}
	componentWillMount() {
	     //   $("button").click(function(){
	     // 	alert("hello 渲染方法前")
	     // }) 
	}
	render(){
		return (
			<button>按钮</button>	
		)
	}
}

ReactDOM.render(
	<Fruitlist />,
	document.querySelector("#app")
)