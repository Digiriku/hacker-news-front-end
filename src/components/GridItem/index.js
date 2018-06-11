import React, { Component } from 'react';
import Title from '../Title';
import Author from '../Author';
import Text from '../Text';
import Score from '../Score';
import GridWrapperItem from './style';
import classNames from 'classnames';

// const GridItem = (props) => {
class GridItem extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	     isExpanded: false
	    }

	     this.handleClick = this.handleClick.bind(this);

	}

	handleClick() {
	  this.setState(prevState => ({
	    isExpanded: !prevState.isExpanded
	  }));
	}
	render() {
		const {title, author, text, score} = this.props;
		const btnClass = classNames('grid-item', {
      		'is-expanded': this.state.isExpanded
    	});
	  	return (
		    <GridWrapperItem className={btnClass} onClick={this.handleClick}>
		    <div className="grid-item-content">
		    	<Title content={title} />
		    	<Author content={author} />
		    	<Score content={score} />
		    	<Text content={text} />		
		    	</div>    	
		    </GridWrapperItem>
		)
	}
}

export default GridItem;