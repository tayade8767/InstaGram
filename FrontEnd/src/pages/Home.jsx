/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Slice/postslice';
import HeaderForStories from '../components/HeaderForStories';
import SliderBar from '../components/SliderBar';
import SideComponantHomepage from '../components/SideComponantHomepage';
import PostPage from './PostPage';
import InfiniteScroll from 'react-infinite-scroller';

function Home() {
  const { isLoading, posts } = useSelector((state) => state.posts); // Adjust selector to match slice name
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Log posts data when loading is done
  console.log("Posts data:", posts);

  return (
    <div className="flex h-screen">
      <div className="w-1/5 fixed h-full">
        <SliderBar/>
      </div>
      <div className="flex-1 ml-[20%] flex overflow-y-auto">
        <div className="w-3/5 p-4">
          <div className="mb-4">
            <HeaderForStories />
          </div>
          <div className='flex flex-col items-center'>
              <InfiniteScroll
                pageStart={0}
                // loadMore={loadFunc}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
                // getScrollParent={() => this.scrollParentRef}
            >
                  { 
                    posts.map( (postwithuser) => (
                        <PostPage key={postwithuser._id} postwithuser={postwithuser}  />
                    ))
                  }
            </InfiniteScroll>
          </div>
        </div>    
        <div className="w-2/5 p-4 bg-yellow-300">
          <SideComponantHomepage/>
        </div>
      </div>
    </div>
  );
}

export default Home;
