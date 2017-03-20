import React from 'react' ;
import {Layout , Icon} from 'antd' ;
import Header from '../components/commons/Header' ;
import Footer from '../components/commons/Footer' ;
import style from '../components/commons/common.css';
import HomeContainer from '../components/home/HomeContainer' ;
const {Content , Sider} = Layout ;

class Main extends React.Component {

	render () {
		return (
			<Layout>
				<Header />
				<Layout>
					<Content>
						<div className={style.notification}>
							<Icon type="notification"/>
							您好，欢迎大家访问我的个人博客
						</div>
						<HomeContainer />
					</Content>
					<Sider>Sider</Sider>
				</Layout>
				<Footer />
			</Layout>
		)
	}
} 

export default Main ;