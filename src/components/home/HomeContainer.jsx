import React from 'react' ;
import Banner from './Banner' ;
import HotList from './HotList' ;
import ContentList from './ContentList' ;

export default class HomeContainer extends React.Component {

	render() {
		return (
			<div>
				<Banner />
				<HotList />
				<ContentList />
			</div>
			
		)
	}
}