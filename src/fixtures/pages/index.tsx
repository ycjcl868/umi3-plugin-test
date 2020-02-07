import { getUserName } from 'umi';
import React from 'react';

export default function() {
  console.log('ewqfqwefwq', require.resolve('umi'));
  return <h1>{getUserName('Hello World')}</h1>;
}
