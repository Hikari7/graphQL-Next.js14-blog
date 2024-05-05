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
import { gql, useQuery } from '@apollo/client';

const FeedItem = () => {
  const FEEDITEM = gql`
    query Assets {
      feedItem(where: { id: "clvtk5l7me8u50711ydvcqu9w" }) {
        title
        contents
        author
      }
    }
  `;

  const { data, loading, error } = useQuery(FEEDITEM);

  if (loading) return 'Loading...';
  if (error) return `error ${error}`;

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{data.feedItem.title}</CardTitle>
          <CardDescription>{data.feedItem.author}</CardDescription>
        </CardHeader>
        <CardContent>{data.feedItem.contents}</CardContent>
        <CardFooter className='flex justify-between'>
          <Link href={'/posts/1'} className='text-blue-300'>
            Read more
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeedItem;
