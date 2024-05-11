'use client';

import React from 'react';
import CreatePresentational from './CreatePresentational';
import { gql, useMutation } from '@apollo/client';
import { FeedItemCreateInput } from '@/app/types';

const CreateContainer = () => {
  const FEED_CREATE = gql`
    mutation CreateFeedItem(
      #idは作成時には必要ないので、FeedItemCreateInput型からidフィールドを除外
      $author: String!
      $title: String!
      $contents: String!
    ) {
      createFeedItem(
        data: { author: $author, title: $title, contents: $contents }
      ) {
        #idは作成後にサーバーから返されるため、ここで返す
        id
        author
        title
        contents
      }
    }
  `;

  //stageをPUBLISHEDに変更する（Hygraph用に公開操作）
  const PUBLISH_FEED_ITEM = gql`
    mutation PublishFeedItem($id: ID!) {
      publishFeedItem(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;

  const [createFeedItem] = useMutation(FEED_CREATE);
  const [publishFeedItem] = useMutation(PUBLISH_FEED_ITEM);

  //idは作成時には必要ないので、FeedItemCreateInput型からidフィールドを除外
  //idは作成後にサーバーから返される
  const onSubmit = async (values: Omit<FeedItemCreateInput, 'id'>) => {
    try {
      // Create the feed item
      const { data } = await createFeedItem({ variables: values });

      // Publish the feed item
      /**
       * createFeedItem mutationを実行した後に返されるレスポンスデータから、
       * 作成されたフィードアイテムのIDを取得
       */
      const itemId = data.createFeedItem.id;
      //whereの引数にidを指定して、PUBLISHEDに変更
      await publishFeedItem({ variables: { id: itemId } });
    } catch (error) {
      console.error('Error executing mutation', error);
    }
  };

  return (
    <>
      <CreatePresentational onSubmit={onSubmit} />
    </>
  );
};

export default CreateContainer;
