import React, { Component } from 'react'
import AddBtn from '../components/AddBtn';
import Article from '../components/Article';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';

type Props = {}

type State = {
  articles: ArticleModel[];
  isModalOpen: boolean;
  selectedArticle: ArticleModel;
}

export type ArticleModel = {
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
        articles: [],
        isModalOpen: false,
        selectedArticle: {
          title: "",
          tag: "",
          author: "",
          date: "",
          imgUrl: "",
          content: "",
          id: 0
        }
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handleTagInputChange = this.handleTagInputChange.bind(this);
    this.handleAuthorInputChange = this.handleAuthorInputChange.bind(this);
    this.handleDateInputChange = this.handleDateInputChange.bind(this);
    this.handleUrlInputChange = this.handleUrlInputChange.bind(this);
    this.handleContentInputChange = this.handleContentInputChange.bind(this);
    this.addArticle = this.addArticle.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
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

  closeModal() {
    this.setState({
      isModalOpen: false,
      selectedArticle: {
        title: "",
        tag: "",
        author: "",
        date: "",
        imgUrl: "",
        content: "",
        id: 0
      }
    });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  editArticle(article: ArticleModel) {
    console.log(article);
    
    this.setState({ selectedArticle: article, isModalOpen: true });
  }

  async deleteArticle(id: number) {
    const response = await fetch(`http://localhost:3000/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    this.fetchArticles();
  }

  handleTitleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, title: value } });
  }

  handleTagInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, tag: value } });
  }

  handleAuthorInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, author: value } });
  }

  handleDateInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, date: value } });
  }

  handleUrlInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, imgUrl: value } });
  }

  handleContentInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, content: value } });
  }

  async addArticle() {
    const { title, tag, author, date, imgUrl, content } = this.state.selectedArticle;
    const body = { title, tag, author, date, imgUrl, content };
    const response = await fetch(`http://localhost:3000/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    console.log(json);
    this.closeModal();
    this.fetchArticles();
  }

  async updateArticle() {

  }

  render() {
    const { isModalOpen, articles, selectedArticle } = this.state;
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
            deleteArticle={this.deleteArticle}
            editArticle={this.editArticle}
        />
      ));

    return (
      <div className='container'>
        <NavBar/>
        <AddBtn openModal={this.openModal}/>
        {articleList}
        <Modal 
          isModalOpen={isModalOpen}
          article={selectedArticle} 
          closeModal={this.closeModal}
          handleTitleInputChange={this.handleTitleInputChange}
          handleTagInputChange={this.handleTagInputChange}
          handleAuthorInputChange={this.handleAuthorInputChange}
          handleDateInputChange={this.handleDateInputChange}
          handleUrlInputChange={this.handleUrlInputChange}
          handleContentInputChange={this.handleContentInputChange}
          addArticle={this.addArticle}
          updateArticle={this.updateArticle} ></Modal>
      </div>
    )
  }
}

export default Home;