import React, { Component } from 'react';
import {HeaderWrapper, ListWrapper, HeaderWrapperInner} from './style';
import classNames from 'classnames';

const Header = (props) => {

	  	return (
		    <HeaderWrapper>
          <HeaderWrapperInner>
          <h1>Hacker News</h1>
          <div>
            <ListWrapper>
              <div>News</div>
              <div>Comments</div>
              <div>Show</div>
              <div>Ask</div>
              <div>Jobs</div>
              <div>Submit</div>
            </ListWrapper>
          </div>
        </HeaderWrapperInner>
		    </HeaderWrapper>
		)
	}


export default Header;
