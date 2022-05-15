import React, { Component } from 'react'
import Article from '../components/Article';

type Props = {}

type State = {
    articles: ArticleModel[];
}

type ArticleModel = {
    title: string;
    tag: string;
    author: string;
    date: string;
    imgUrl: string;
    content: string;
    id: number;
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        articles: []
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles() {
    const response = await fetch(`http://localhost:3000/articles`);
    const json = await response.json();
    console.log(json);
    this.setState({ articles: json });
  }

  render() {
    const { articles } = this.state;
    const articleList = articles.map((article: ArticleModel) => (
        <Article
            key={article.id}
            title={article.title} 
            tag={article.tag} 
            author={article.author} 
            date={article.date} 
            imgUrl={article.imgUrl} 
            content={article.content} 
            id={article.id} 
        />
      ));

    return (
      <div className='container'>{articleList}</div>
    )
  }
}

export default Home;