import React from 'react' ;
import {Layout , Menu} from 'antd';
import style from './common.css';
const {Header} = Layout ;

export default class MyHeader extends React.Component {

	constructor() {
		super();
		this.state = {
			current:"home"
		}
	}

	handleMenuClick = (e) => {
		this.setState({
			current:e.key
		})
	}

	render() {
		return (
			<Header className={style.header}>
				<h1>KK-Coder</h1>
				<Menu 
					onClick={this.handleMenuClick}
					className={style.nav}
					mode="horizontal"
					theme="dark"
					selectedKeys={[this.state.current]}>
				  <Menu.Item key="home" className={style.navItem}>首页</Menu.Item>
				  <Menu.Item key="lifes" className={style.navItem}>生活笔记</Menu.Item>
				  <Menu.Item key="itarticle" className={style.navItem}>技术文章</Menu.Item>
				  <Menu.Item key="works" className={style.navItem}>个人作品</Menu.Item>
				  <Menu.Item key="about" className={style.navItem}>关于自己</Menu.Item>
				  <Menu.Item key="contact" className={style.navItem}>给我留言</Menu.Item>
				  <Menu.Item key="donate" className={style.navItem}>赞助作者</Menu.Item>
				</Menu>
			</Header>
		)
	}
}