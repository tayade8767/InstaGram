/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { PiNavigationArrowBold } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';    

import { FiEdit } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom"// emoji piker

// import Popup from "reactjs-popup";

import { useDispatch,useSelector } from 'react-redux';
import { addComment,removeComment,setComment } from '../Slice/commentslice';
import { addCommentAsync } from '../Slice/commentslice';

function PostFooter( { imagevedio,postid,comments } ) {

    const commentscount = comments.length;

    const [likeordislike, setlikeordislike] = useState(false);
    const [countlike, setcountlike] = useState(0)
    const [countcomment, setcountcomment] = useState(commentscount);
    const [popupforcomment, setpopupforcomment] = useState(false);
    const [comment, setComment] = useState('')
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const emojiPickerRef = useRef(null);

    const dispatch = useDispatch();

    // const commentcount = useSelector()
    
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

    const onCloseforcommentsection = () => {
        setpopupforcomment(false);
    }

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
            dispatch(addCommentAsync({postid, comment}));
            setcountcomment(prevState => prevState + 1);
            setComment('');
        }
    }

    const onEmojiClick = (emojiObject) => {
        setComment(prevComment => prevComment + emojiObject.emoji);
    }

  return (
    <div className=" flex-col items-center bg-blue-50 pb-1">
        <div className='flex'>
            <div onClick={changelikedislike} className='cursor-pointer hover:scale-110 transition-transform duration-200'>
            {!likeordislike ? <FaRegHeart size={26} /> : <FaHeart color='red' size={26} />}
            </div>
            <div className='ml-4 cursor-pointer hover:scale-110 transition-transform duration-200' onClick={() => setpopupforcomment(true)}>
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
            {/* this sectionis for popup for comment section for this perticular post content */}

            { popupforcomment && 
                (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
                            {/* Left side - Image */}
                            <div className="flex-grow bg-white flex items-center justify-center">
                                <img 
                                    src={imagevedio} 
                                    alt="Post" 
                                    className="max-w-full max-h-[80vh] object-contain" 
                                />
                            </div>
                            {/* Right side - Comments */}
                            <div className="w-full md:w-2/5 flex flex-col max-h-[80vh]">
                                {/* Header */}
                                <div className="flex justify-between items-center p-4 border-b">
                                    <h2 className="text-xl font-semibold">Comments</h2>
                                    <button onClick={onCloseforcommentsection}>
                                        <GrClose className="w-5 h-5" />
                                    </button>
                                </div>
                                {/* Comments list */}


                                <div className="flex-grow p-4 overflow-y-auto">
                                    {comments.map((comment) => (
                                        <div key={comment._id} className="mb-4 cursor-pointer">
                                            <div className="flex items-start">
                                                <img src={comment.owner.avatar} alt={comment.owner.username} className="w-8 h-8 rounded-full mr-2" />
                                                <div className="flex-grow truncate md:text-clip">
                                                    <p className="text-sm ">
                                                        <span className="font-bold">{comment.owner.username}</span> <span className='text-wrap'>{comment.content}</span>
                                                    </p>
                                                    <div className="text-xs text-gray-400 mt-1">
                                                        1w               2K likes   Reply   See translation
                                                    </div>
                                                </div>
                                                <FaRegHeart className="text-gray-500 cursor-pointer" />
                                            </div>
                                            {/* Uncomment and modify this if you want to show reply counts */}
                                            <div className="text-xs text-gray-500 ml-10 mt-1 cursor-pointer">
                                                View replies (3)
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                {/* Comment input */}
                                <div className="p-4 border-t">
                                    <form onSubmit={handleCommentSubmit} className="flex items-center">
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
                                                    className="absolute right-0 bottom-full mb-1"
                                                >
                                                    <EmojiPicker onEmojiClick={onEmojiClick} />
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            className={`text-blue-500 ml-2 font-semibold text-sm ${!comment.trim() ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
                                            disabled={!comment.trim()}
                                        >
                                            Post
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

    </div>
  )
}

export default PostFooter