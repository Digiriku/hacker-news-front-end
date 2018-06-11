import React from 'react';
import DateWrapper from './style';
import moment from 'moment';

const DateTime = (props) => {

const {content} = props;

  return(
    <DateWrapper>
    	<span>Posted: </span>
    	{moment(content*1000).startOf('hour').fromNow()}

    </DateWrapper>
  );
}

export default DateTime;