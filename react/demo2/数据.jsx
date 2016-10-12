import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import style from "./index.css"

class Fruitlist extends React.Component{
	constructor(props){
			super(props)
			this.state={
				fruits:null
			}
	}
	componentDidMount() {
		const comp=this;
		   $.ajax({
			"method":"get",
			"url":"../data.json"
			// "url":"http://127.0.0.1:3000/getdata",
			// dataType:"jsonp"
		}).done(function(data){
			comp.setState({
				fruits:data
			})
		})   
	}
	
	render(){
		if(this.state.fruits){
			return(
				<ul>

					{this.state.fruits.map((fruit,index)=><FruitIteam  key={index} data={fruit}/>)}
				</ul>
				)
		}else{
			return(
				<h1>数据加载中...</h1>
				)
		}
		
	}
}
class FruitIteam extends React.Component{
	render(){
		const pic=this.props.data
		return(
			<li className="iteam">
				<h3>{pic.title}</h3>
				<img src={pic.url} />
				<p>{pic.desc}</p>
			</li>
			)
	}
}

ReactDOM.render(
	<Fruitlist />,
	document.querySelector("#app")
)