'use client';

import React from 'react';
import { gql, useQuery } from '@apollo/client';
import FeedDetailsPresentational, {
  FeedDetails_QueryFragment,
} from './FeedDetailsPresentational';
import { useParams } from 'next/navigation';

const FeedDetailsContainer = () => {
  /**
   * useParams フックで動的なパラメータを取得
   * /posts/abc123 の場合、useParams は { id: 'abc123' } を返す
   */
  const { id } = useParams();
  const DETAILS_QUERY = gql`
    query Assets($id: ID!) {
      feedItem(where: { id: $id }) {
        ...feedDetails_query
      }
    }
    ${FeedDetails_QueryFragment}
  `;
  console.log(DETAILS_QUERY);
  const { data, loading, error } = useQuery(DETAILS_QUERY, {
    variables: { id },
    skip: !id, // IDがnullの場合はクエリをスキップ
  });

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;
  if (!data || !data.feedItem) return 'No data found';

  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
      <FeedDetailsPresentational query={data.feedItem} />
    </div>
  );
};

export default FeedDetailsContainer;
