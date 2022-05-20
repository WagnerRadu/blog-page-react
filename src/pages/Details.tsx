import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { ArticleModel } from './Home';
import Article from '../components/Article';

export default function Details() {
    let { articleId } = useParams();

    const [article, setArticle] = useState<ArticleModel | null>(null);

    useEffect(() => {
        async function fetchArticles() {
            const response = await fetch(`http://localhost:3000/articles/${articleId}`);
            const json = await response.json();
            console.log(json);
            setArticle(json);
        }

        fetchArticles();
    }, [articleId]);

    function splitText(text: string) {
        let middle = Math.floor(text.length / 2);
        let before = text.lastIndexOf(' ', middle);
        let after = text.indexOf(' ', middle + 1);

        if (middle - before < after - middle) {
            middle = before;
        } else {
            middle = after;
        }

        let text1 = text.substring(0, middle);
        let text2 = text.substring(middle + 1);

        return { text1: text1, text2: text2 }
    }

    const { text1, text2 } = article !== null ? splitText(article.content) : { text1: "", text2: "" };

    return (
        <div className='container'>
            <NavBar />
            {article !== null && (
                <article className='article'>
                    <h1 className='title'>{article.title}</h1>
                    <ul className='details-list'>
                        <li className='details-item'>{article.tag}</li>
                        <li className='details-item'>Added by <span className='details-span'>{article.author}</span></li>
                        <li className='details-item'>{article.date}</li>
                    </ul>
                    <img className='image' src={article.imgUrl} alt="" />
                    <p className='text'>{text1}</p>
                    <h3 className='saying'>{article.saying}</h3>
                    <p className='text'>{text2}</p>
                </article>
            )}
            {article !== null && articleId && (
                <div className='footer'>
                    <Link to={`/details/${parseInt(articleId) - 1}`}>
                        <button disabled={typeof articleId === 'string' && parseInt(articleId) <= 0} className='footer-button' >
                            previous article
                        </button>
                    </Link>
                    <Link to={`/details/${parseInt(articleId) + 1}`}>
                        <button className='footer-button' > {/* didn't find a way to pass articles length for disable */}
                            next article
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}