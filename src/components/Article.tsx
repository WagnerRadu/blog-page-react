import React from 'react'
import { ArticleModel } from '../pages/Home';
import "./style.css"

type Props = {
  title: string;
  tag: string;
  author: string;
  date: string;
  imgUrl: string;
  saying: string;
  content: string;
  id: number;
  editArticle: (article: ArticleModel) => void;
  deleteArticle: (id: number) => void;
}

export default function Article({title, tag, author, date, imgUrl, saying, content, id, editArticle, deleteArticle}: Props) {
  return (
    <article className='article'>
      <h1 className='title'>{title}</h1>
      <ul className='details-list'>
        <li className='details-item'>{tag}</li>
        <li className='details-item'>Added by <span className='details-span'>{author}</span></li>
        <li className='details-item'>{date}</li>
      </ul>
      <div className='edit-container'>
        <button className='edit-button' onClick={() => editArticle({title, tag, author, date, imgUrl, saying, content, id})}>Edit</button>
        <p className='edit-button'>|</p>
        <button className='edit-button' onClick={() => deleteArticle(id)}>Delete</button>
      </div>
      <img className='image' src={imgUrl} alt=""/>
      <p className='text'>{content}</p>
    </article>
  )
}