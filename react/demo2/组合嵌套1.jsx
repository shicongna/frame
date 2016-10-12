import React from "react";
import ReactDOM from "react-dom";

class Father extends React.Component{
	render(){
		return (
			<h1>父组件</h1>
			<Son />
		)
	}
}
class Son extends React.Component{
	render(){
		return (
			<h2>子组件</h2>
		)
	}
}


ReactDOM.render(
	<Father />,
	document.querySelector("#app")
)