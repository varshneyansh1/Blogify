import React from 'react';
import ScreenMenu from './components/Menus/ScreenMenu';
import {PostProvider} from './context/postContext';

const RootNavigation = () => {
  return (
    <PostProvider>
      <ScreenMenu />
    </PostProvider>
  );
};

export default RootNavigation;
