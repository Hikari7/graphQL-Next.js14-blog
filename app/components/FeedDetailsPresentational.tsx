'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { gql } from '@apollo/client';

export const FeedDetails_QueryFragment = gql`
  # on の後に続く型名は、GraphQLスキーマ内で定義された具体的な型を指す
  fragment feedDetails_query on FeedItem {
    id
    title
    contents
    author
  }
`;

type feedDetails_query = {
  id: string;
  title: string;
  contents: string;
  author: string;
};

const FeedDetailsPresentational: React.FC<{ query: feedDetails_query }> = ({
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
      </Card>
    </>
  );
};

export default FeedDetailsPresentational;
