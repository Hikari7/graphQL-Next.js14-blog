'use client';

import React from 'react';
import CreatePresentational from './CreatePresentational';

const CreateContainer = () => {
  /**
 * mutation {
  createFeedItem(data: {
    author:"Hikari mutation",
    title: "This is the title"
    contents: "this is mutation",
    date: "2024-05-05"
  }) {
    author
    title
    contents
    date
  }
}
 */

  return (
    <>
      <CreatePresentational />
    </>
  );
};

export default CreateContainer;
