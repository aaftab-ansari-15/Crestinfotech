import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
    console.log("News constructor");
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2024-07-30&to=2024-07-30&sortBy=popularity&apiKey=e98a7edc9ba84747a877b9bef4438c9e";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <>
        <h2>Now News - Top Headlines</h2>
        <div className="row mx-3 my-3">
          {this.state.articles.map((element) => {
            console.log("News constructor ", element.id);
            return (
              <div className="col-md-4" key={element.id}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.url ? element.url : ""}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
