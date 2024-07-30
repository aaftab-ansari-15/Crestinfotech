import React, { Component } from "react";

export default class NewsItems extends Component {
  constructor() {
    super();
    console.log("News-item constructor");
  }
  render() {
    const { id, title, description, imageUrl, newsUrl } = this.props;
    console.log("News-item called ", id);
    return (
      <div className="card-container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="image-url" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
