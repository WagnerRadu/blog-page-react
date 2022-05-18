import React from 'react'
import { ArticleModel } from '../pages/Home';

type Props = {
    isModalOpen: boolean;
    closeModal: () => void;
    article: ArticleModel;
}

export default function Modal({isModalOpen, closeModal, article}: Props) {
  return (
    <div className="modal-bg">
        <div className="modal">
            <h1 className="title modal-title">Add/Edit article</h1>
            <div className="form-container">
                <input className="modal-form" type="text" placeholder="Please enter title"/>
                <input className="modal-form" type="text" placeholder="Please enter tag"/>
                <input className="modal-form" type="text" placeholder="Please enter author"/>
                <input className="modal-form" type="text" placeholder="Please enter date"/>
                <input className="modal-form url-form" type="text" placeholder="Please enter image url"/>
                <textarea className="modal-form content-form" placeholder="Please enter content"></textarea>
            </div>
            <div className="modal-button-container">
                <button className="button" id="closeModalBtn">CANCEL</button>
                <button className="button bg-pink">SAVE</button>
            </div>
        </div>
    </div>
  )
}