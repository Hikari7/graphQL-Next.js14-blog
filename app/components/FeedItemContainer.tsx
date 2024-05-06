'use client';

import React from 'react';

import { gql, useQuery } from '@apollo/client';
import FeedItemPresentational, {
  FeedItem_QueryFragment,
} from './FeedItemPresentational';

const FeedItemContainer = () => {
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

  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
      {data.feedItems.map((item: any) => (
        <FeedItemPresentational query={item} key={item.id} />
      ))}
    </div>
  );
};

export default FeedItemContainer;
