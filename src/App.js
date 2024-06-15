import React from 'react';
import Navigation from './components/Navigation';
import HomeFeed from './components/HomeFeed';
import SearchFeed from './components/SearchFeed';

const App = () => {
  return (
    <div className="flex justify-center items-start mx-auto gap-[55px] mt-[20px]">
      <Navigation />
      <HomeFeed />
      <SearchFeed />
    </div>
  );
};

export default App;
