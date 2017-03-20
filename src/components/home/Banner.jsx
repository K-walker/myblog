import React from 'react' ;
import {Carousel} from 'antd' ;

export default class Banner extends React.Component {

	render() {
		return (
			<Carousel autoplay>
				<div>panel 1</div>
				<div>panel 1</div>
				<div>panel 1</div>
			</Carousel>
		)
	}
}