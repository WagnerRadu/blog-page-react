import React, { ChangeEvent } from 'react'
import { ArticleModel } from '../pages/Home';

type Props = {
    isModalOpen: boolean;
    closeModal: () => void;
    article: ArticleModel;
    handleTitleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleTagInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleAuthorInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDateInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleUrlInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleContentInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Modal({isModalOpen, closeModal, article}: Props) {
  return (
    <div className={isModalOpen ? "modal-bg modal-active" : "modal-bg"}>
        <div className="modal">
            <h1 className="title modal-title">Add/Edit article</h1>
            <div className="form-container">
                <input className="modal-form" type="text" placeholder="Please enter title" value={article.title}/>
                <input className="modal-form" type="text" placeholder="Please enter tag" value={article.tag}/>
                <input className="modal-form" type="text" placeholder="Please enter author" value={article.author}/>
                <input className="modal-form" type="text" placeholder="Please enter date" value={article.date}/>
                <input className="modal-form url-form" type="text" placeholder="Please enter image url" value={article.imgUrl}/>
                <textarea className="modal-form content-form" placeholder="Please enter content" value={article.content}></textarea>
            </div>
            <div className="modal-button-container">
                <button className="button" id="closeModalBtn" onClick={closeModal}>CANCEL</button>
                <button className="button bg-pink">SAVE</button>
            </div>
        </div>
    </div>
  )
}