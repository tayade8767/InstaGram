/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { PiNavigationArrowBold } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';                        // emoji piker

function PostFooter() {

    const [likeordislike, setlikeordislike] = useState(false);
    const [countlike, setcountlike] = useState(0)
    const [countcomment, setcountcomment] = useState(0)
    const [comment, setComment] = useState('')
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const emojiPickerRef = useRef(null);
    
    useEffect(() => {
        function handleClickOutside(event) {
            if(emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                setShowEmojiPicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        
    })

    const changelikedislike = () => {
        setlikeordislike(previoustate => !previoustate);
        if(likeordislike){
            setcountlike(previoustate => previoustate - 1);
        } else {
            setcountlike(previoustate => previoustate + 1);
        }
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setcountcomment(prevState => prevState + 1);
            setComment('');
            // Here you would typically send the comment to your backend
        }
    }

    const onEmojiClick = (emojiObject) => {
        setComment(prevComment => prevComment + emojiObject.emoji);
    }

  return (
    <div className=" flex-col items-center bg-blue-50 mt-3">
        <div className='flex'>
            <div onClick={changelikedislike} className='cursor-pointer hover:scale-110 transition-transform duration-200'>
            {!likeordislike ? <FaRegHeart size={26} /> : <FaHeart color='red' size={26} />}
            </div>
            <div className='ml-4 cursor-pointer hover:scale-110 transition-transform duration-200'>
                <FiMessageCircle size={27} style={{ transform: 'scaleX(-1)' }} />
            </div>
            <div className='ml-5 cursor-pointer hover:scale-110 transition-transform duration-200'>
                <PiNavigationArrowBold size={27} style={{ transform: 'scaleX(-1)' }}  />
            </div>
            <div className='ml-[16rem] cursor-pointer hover:scale-110 transition-transform duration-200'>
                <FiBookmark size={27} style={{ transform: 'scaleX(-1)' }}  />
            </div>
        </div>
        <div className='flex ml-[.2rem] mt-2 '>
          {countlike} Likes
        </div>
        <div className='flex flex-col ml-[.2rem] mt-2 '>
            <span className='text-sm'>akash tayade</span>
            <span className='text-sm '>...More</span>
        </div>
        <div className='text-slate-400 flex ml-[.2rem] mt-2 '>
            <span className='text-sm'>View all {countcomment} comments</span>
        </div>
        <form onSubmit={handleCommentSubmit} className="flex items-center border-b border-gray-200 pt-3">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="flex-grow bg-transparent outline-none text-sm"
                />
                  
                <div className="relative">
                    <BsEmojiSmile 
                        size={18} 
                        className="mr-3 text-gray-500 cursor-pointer" 
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)} 
                    />

                    {showEmojiPicker && (
                        <div 
                            ref={emojiPickerRef} 
                            className="absolute right-0 top-full mt-1"
                        >
                            <EmojiPicker onEmojiClick={onEmojiClick} />
                        </div>
                    )}
                </div>

                <button 
                    type="submit" 
                    className={`text-blue-500 mr-1 font-semibold text-sm ${!comment.trim() ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
                    disabled={!comment.trim()}
                >
                    Post
                </button>

            </form>
            <div className="border-[.04rem] mt-4 border-gray-900 my-2"></div>
    </div>
  )
}

export default PostFooter