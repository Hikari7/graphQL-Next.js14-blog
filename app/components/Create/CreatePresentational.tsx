'use client';

import React from 'react';

import { Button } from '@/app/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FeedItemCreateInput } from '@/app/types';

export type Props = {
  onSubmit: SubmitHandler<FeedItemCreateInput>;
};

const CreatePresentational: React.FC<Props> = (props) => {
  const form = useForm({
    defaultValues: {
      id: '',
      author: '',
      title: '',
      contents: '',
    },
  });

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(props.onSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input placeholder='author' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='title' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='contents'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contents</FormLabel>
                <FormControl>
                  <Input placeholder='contents' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreatePresentational;
