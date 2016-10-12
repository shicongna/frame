import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery"



class Hello extends React.Component{

	componentWillMount() {

	}

	componentDidMount() {
	   $("button").click(function(){
	   		alert("hello jquery")
	   })		
	}

	render(){
		return (
			<button>按钮</button>
		)
	}

}



ReactDOM.render(
	<Hello />,
	document.querySelector("#app")
)