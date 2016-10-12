import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			title:"状态按钮",
			checked:true,
			number:0,
			name:"xiaoming",
			fruits:["x","y"]
		}
	}

	changeText(){
		this.setState({
			title : this.state.checked ? "状态" : "按钮",
			checked : !this.state.checked
		})
	}

	render(){
		return(
			<div>
				<button onClick={this.changeText.bind(this)}>{this.props.name}</button>
				<button onClick={this.changeText.bind(this)}>{this.state.title}</button>
				<button onClick={this.changeText.bind(this)}>{this.state.title}</button>
				<button onClick={this.changeText.bind(this)}>{this.state.title}</button>
				<button onClick={this.changeText.bind(this)}>{this.state.title}</button>
			</div>
		)
	}
}

ReactDOM.render(<Hello name="test" />,document.querySelector("#app"));
ReactDOM.render(<Hello />,document.querySelector("#content"));