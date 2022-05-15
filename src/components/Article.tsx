import React from 'react'
import "./style.css"

type Props = {
  title: string;
  tag: string;
  author: string;
  date: string;
  imgUrl: string;
  content: string;
  id: number;
}

export default function Article({title, tag, author, date, imgUrl, content, id}: Props) {
  return (
    <article className='article'>
      <h1 className='title'>{title}</h1>
      <ul className='details-list'>
        <li className='details-item'>{tag}</li>
        <li className='details-item'>Added by <span className='details-span'>{author}</span></li>
        <li className='details-item'>{date}</li>
      </ul>
      <div className='edit-container'>
        <button className='edit-button'>Edit</button>
        <p className='edit-button'>|</p>
        <button className='edit-button'>Delete</button>
      </div>
      <img className='image' src={imgUrl} alt=""/>
      <p className='text'>{content}</p>
    </article>
  )
}