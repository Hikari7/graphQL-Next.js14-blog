import React from 'react';

import FeedItem from './FeedItem';

const Feed = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
      <FeedItem />
    </div>
  );
};

export default Feed;
