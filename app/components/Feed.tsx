'use client';

import React from 'react';

import { gql, useQuery } from '@apollo/client';
import FeedItem, { FeedItem_QueryFragment } from './FeedItem';

const Feed = () => {
  const FEED_QUERY = gql`
    query Assets {
      feedItems {
        id
        ...feedItem_query
      }
    }
    ${FeedItem_QueryFragment}
  `;

  const { data, loading, error } = useQuery(FEED_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;
  console.log('data>>>', data.feedItems);

  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
      {data.feedItems.map((item: any) => (
        <FeedItem query={item} key={item.id} />
      ))}
    </div>
  );
};

export default Feed;
