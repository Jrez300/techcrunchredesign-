import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from "../data/post.json";
import '../BlogPost/blogPost.css'

export default class CreateComments extends Component {

  render() {


    return (
      <div>
        <div className="square__post">

          {data.map((data, i) => {
            return (
              <div key={i}>
                <h2>{data.title}</h2>
                <img src={data.img} alt={data.alt} />
                <p>{data.author}</p>
                <p>{data.date}</p>
                <p>{data.content}</p>
                <Link to={data.link}><button type="button" onClick="refreshPage()">More info</button></Link>
              </div>
            );
          })}

        </div>

        <div className="recent__section">
          <h3 className="recent__post">Recent Post</h3>
          {data.map(function (data, i) {
            return (
              <div key={i}>
                <h4 className="recent__title">{data.title}</h4>
              </div>
            );
          })}

        </div>
      </div>
    );

  }
}

