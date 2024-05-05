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

const FeedItem = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
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
