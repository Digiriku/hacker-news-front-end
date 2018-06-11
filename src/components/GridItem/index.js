import React, { Component } from 'react';
import Title from '../Title';
import Author from '../Author';
import Text from '../Text';
import Score from '../Score';
import DateTime from '../Date';
import GridWrapperItem from './style';
import classNames from 'classnames';

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
		const {title, author, text, score, url, time} = this.props;
		const btnClass = classNames('grid-item', {
      		'is-expanded': this.state.isExpanded
    	});
	  	return (

		    <GridWrapperItem className={btnClass} onClick={this.handleClick}>
			    <div className="grid-item-content">
			    	<Title content={title} />
			    	<Author content={author} />
			    	<Score content={score} />
			    	<a href={url} target="_blank">
							<Text content={text} />
						</a>
			    	
			    	<DateTime content={time} />
			    </div>
		    </GridWrapperItem>

		)
	}
}

export default GridItem;
