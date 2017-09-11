import React, {Component} from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import CSSModules from 'react-css-modules';
import style from '../css_modules/file.css';

class File extends Component {
	constructor(props) {
		super(props);

		this.state = {
		
		}

		this.changeName = this.changeName.bind(this);
	}
	
	changeName() {
		let file = document.getElementById('file');
		let filename = file.value.toString().split('\\');
		let index = filename.length - 1;
		let name = document.getElementById('filename');
		name.innerText = filename[index];
		
		let formData = new FormData();
		formData.append('file', file.files[0]);
		
		let xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4) {
				if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
					console.log('file');
				}
			}
		}
		
		xhr.open('POST', 'http://jcuan.org/exam/upload' , true);

		xhr.send(formData);


	}

	componentDidMount() {
		fetch('http://jcuan.org/exam/getAttach', {credentials: "include"})
   		.then((res) => {return res.json() })
        .then((data) => {
        	console.log(data)
  			if(data.errorCode === 0){
				this.setState({
					url: data.url,
					filename: data.fileName
				})
  			}
  		})
	}

	render() {
		return (
			<div>
				<label htmlFor="file" className={style.file}>
					添加附件📎
					<span id="filename" className={style.fileName}>
						<a className={style.a} href={this.state.url}>{this.state.filename}</a>  
					</span>
					<input type="file" id="file" className={style.input} onChange={this.changeName}/>
				</label>
			</div>
		)
	}
}

export default CSSModules(File, style);