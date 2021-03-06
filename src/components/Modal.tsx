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
    handleSayingInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleContentInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    addArticle: () => void;
    updateArticle: () => void;
}

export default function Modal({
    isModalOpen,
    closeModal,
    article,
    handleTitleInputChange,
    handleTagInputChange,
    handleAuthorInputChange,
    handleDateInputChange,
    handleUrlInputChange,
    handleSayingInputChange,
    handleContentInputChange,
    addArticle,
    updateArticle
}: Props) {
    return (
        <div className={isModalOpen ? "modal-bg modal-active" : "modal-bg"}>
            <div className="modal">
                <h1 className="title modal-title">Add/Edit article</h1>
                <div className="form-container">
                    <input className="modal-form" type="text" placeholder="Please enter title" value={article.title} onChange={handleTitleInputChange} />
                    <input className="modal-form" type="text" placeholder="Please enter tag" value={article.tag} onChange={handleTagInputChange} />
                    <input className="modal-form" type="text" placeholder="Please enter author" value={article.author} onChange={handleAuthorInputChange} />
                    <input className="modal-form" type="text" placeholder="Please enter date" value={article.date} onChange={handleDateInputChange} />
                    <input className="modal-form" type="text" placeholder="Please enter image url" value={article.imgUrl} onChange={handleUrlInputChange} />
                    <input className="modal-form" type="text" placeholder="Please enter saying" value={article.saying} onChange={handleSayingInputChange} />
                    <textarea className="modal-form content-form" placeholder="Please enter content" value={article.content} onChange={handleContentInputChange}></textarea>
                </div>
                <div className="modal-button-container">
                    <button className="button" id="closeModalBtn" onClick={closeModal}>CANCEL</button>
                    {article.id === 0 && (
                        <button className="button bg-pink" onClick={addArticle}>ADD</button>
                    )}
                    {article.id !== 0 && (
                        <button className="button bg-pink" onClick={updateArticle}>UPDATE</button>
                    )}
                </div>
            </div>
        </div>
    )
}