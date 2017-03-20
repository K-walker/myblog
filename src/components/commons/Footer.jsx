import React from 'react' ;
import {Layout} from 'antd';
import style from './common.css';
const {Footer} = Layout ;

export default class MyFooter extends React.Component {

	render() {
		return (
			<Footer className={style.footer}>
				Footer
			</Footer>
		)
	}
}