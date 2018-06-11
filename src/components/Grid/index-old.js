import React, { Component } from 'react';
import GridItem from '../GridItem';
import GridWrapper from './style';
import Masonry, {getSize, matchesSelector } from 'masonry-layout';
import classNames from 'classnames';

class Grid extends Component {
	constructor(props) {
	    super(props);
	    this.invokeMasonry = this.invokeMasonry.bind(this);
	    // this.setItemContentPixelSize = this.setItemContentPixelSize.bind(this);
	    // this.addTransitionListener = this.addTransitionListener.bind(this);
	    // this.setItemContentTransitionSize = this.setItemContentTransitionSize.bind(this);
	}

	componentDidMount() {
	    this.invokeMasonry();
	}

	invokeMasonry() {
	    var elem = document.querySelector('.grid')
	    var msnry = new Masonry(elem, {
	        itemSelector: '.grid-item',
	        columnWidth: '.grid-sizer',
	        percentPosition: true
	    });

	    return msnry;
	}


	render(){

		const {articles} = this.props;

		const displayArticles = articles.map((a, i) => <GridItem key={i} id={a.id} title={a.title} author={a.by} score={a.score} url={a.url} time={a.time} text={a.text} /> );

		  return(
		    <GridWrapper className='grid' ref={this.gridRef}>
		      <div className="grid-sizer"></div>
		    	{displayArticles}
		    </GridWrapper>
		  );
	}
}
export default Grid;