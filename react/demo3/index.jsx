import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import style from "./index.css";

class FruitList extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			pics:null
		}
	}

	componentDidMount() {
		const comp = this
		$.ajax({
			url:"../data.json",
			type:"get"
		}).done(function(data){
			comp.setState({
				pics:data
			})
		})  
	}

	render(){
		if(this.state.pics){
			
			return (
				<ul>
					{this.state.pics.map((pic,index)=><FruitItem key={index} data={pic} />)}
				</ul>
			)
			
		}else{
			return(
				<h1>数据加载中...</h1>
			)
		}
	}

}

class FruitItem extends React.Component{
	render(){
		const pic = this.props.data;
		return (
			<li className="myitem">
				<h3>{pic.title}</h3>
				<img src={pic.url} />
				<p>{pic.desc}</p>
			</li>
		)
	}
}

ReactDOM.render(
	<FruitList />,
	document.querySelector("#app"))