'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Link from 'next/link';
import { gql } from '@apollo/client';

export const FeedItem_QueryFragment = gql`
  # on の後に続く型名は、GraphQLスキーマ内で定義された具体的な型を指す
  fragment feedItem_query on FeedItem {
    id
    title
    contents
    author
  }
`;

type feedItem_query = {
  id: string;
  title: string;
  contents: string;
  author: string;
};

const FeedItemPresentational: React.FC<{ query: feedItem_query }> = ({
  query,
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{query.title}</CardTitle>
          <CardDescription>{query.author}</CardDescription>
        </CardHeader>
        <CardContent>{query.contents}</CardContent>
        <CardFooter>
          <Link
            href={`/posts/${query.id}`}
            className='text-right text-xs text-blue-300'
          >
            Read more
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default FeedItemPresentational;
