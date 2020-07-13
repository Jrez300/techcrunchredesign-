import React, { Component } from 'react';
import data from "../data/post.json";
import '../BlogPost/blogPost.css'
//used to send HTTP requests to back end
import axios from 'axios';

const Comment = props => (
  <div className='commentbox'>
    <p className='commentname'>{props.comment.comment_name5}</p>
    <p className='commentdescription'>{props.comment.comment_description5}</p>
  </div>
)

export default class CreateComments extends Component {

  constructor(props) {
    super(props);
    //binding state objects to 'this' since we are dealing with methods
    this.onChangeCommentName5 = this.onChangeCommentName5.bind(this);
    this.onChangeCommentDescription5 = this.onChangeCommentDescription5.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    //setting and assigning state
    this.state = {
      comment_name5: '',
      comment_description5: '',
      comments: []

    }
  }
  //methods to update state properties
  onChangeCommentName5(e) {
    this.setState({
      comment_name5: e.target.value
    });
  }
  onChangeCommentDescription5(e) {
    this.setState({
      comment_description5: e.target.value
    });
  }

  //handle submit event, create new comment
  onSubmit(e) {
    //prevent default submit behavior
    // e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`Name: ${this.state.comment_name5}`);
    console.log(`Comment Description: ${this.state.comment_description5}`);

    const newComment = {
      comment_name5: this.state.comment_name5,
      comment_description5: this.state.comment_description5
    };
    //sending POST request to endpoint using axios, endpoint expects new comment in JSON 
    axios.post('http://localhost:4000/comments/add', newComment)
      .then(res => console.log(res.data))

    this.setState({
      comment_name5: '',
      comment_description5: ''
    })

  }


  //retreiving data from database
  //axios gets access to comments endpoint
  componentDidMount() {
    axios.get('http://localhost:4000/comments/')
      .then(response => {
        //once data available, assigning response.data to comments using setstate
        this.setState({ comments: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // mapping comments 
  commentList() {
    return this.state.comments.map((currentComment, i) => {
      return <Comment comment={currentComment} key={i} />;
    })
  }
  render() {
    var useThis = this
    let one = data.filter(it => new RegExp(5).test(it.id))
    return (
      <div>
        <div className="square__post">
          {one.map((data, i) => {
            return (
              <div key={i} >
                <h2>{data.title}</h2>
                <img src={data.img} alt="aws logo" />
                <p>{data.author}</p>
                <p>{data.date}</p>
                <p>Earlier today we took a look at two companies that have filed to go public, nCino and GoHealth. The pair join Lemonade in a march toward the public markets.
                But those three firms are hardly alone. We know that DoorDash filed privately earlier this year (it also raised a pile of cash lately, so its IPO may not be in a hurry), and Postmates filed privately last year.
                Even more, there are a number of companies whose IPOs we anticipate in short order. So, what follows is our incredibly scientific survey of impending IPOs, starting with those closest to the gate. This list is focused on companies that were at one point venture-backed startups, even if they have become behemoths in the intervening years.
                We’ll start with companies that have filed and are moving toward debuts in the next few weeks:
                nCino: This SaaS company is growing nicely, and has pretty good overall economics. We covered its financial history here. Its debut will be a win for North Carolina.
                GoHealth: A Chicago success story that was swallowed by private equity last year, GoHealth is now an incredibly complicated company and offering that features lots of long-term indebtedness. But, its exit should provide reasonable returns to its current owner’s backers, who held onto the firm for less than a year before trying to flip it.
                Lemonade: Lemonade’s IPO is an important moment for a number of modern insurance companies like Root, MetroMile, Kin and others. Not that they all sell the same type of insurance, mind, they don’t. Lemonade does rental and home insurance, while Root and MetroMile are focused on autos, for example. But if Lemonade manages a strong offering, it could provide tailwind to its fellow neo-insurance providers all the same.
                Agora: We’re catching up on the Agora debut. The China-based company’s IPO filing details a company that provides other companies and developers the ability to “embed real-time video and voice functionalities into their applications without the need to develop the technology or build the underlying infrastructure themselves” via APIs. This sounds a bit like what Daily.co is building, if you recall that round. Agora is a company that has good operating income and net income before “accretion on convertible redeemable preferred shares to redemption value.” With that in hand, the company’s earnings are sharply negative. Read that how you want. Agora wants to raise between $280 million and $315 million. (Update: Agora reached out to TechCrunch, noting that it also has an HQ in the United States. We called it China-based above given that the first listed address in its F-1 filing is in China, and that it filed an F-1 filing as opposed to an S-1. The company’s other HQ is in Santa Clara, California.)
                And, next, companies that have filed privately but are still hanging back:
                DoorDash: With lots of new money, DoorDash may not be in a rush to go public. That said, this offering is easily a top-three, most-anticipated offering. And as the company certainly wants to get out while the markets are recovered, perhaps there’s some ambient pressure on the firm to make its private IPO filing public.
                Postmates: Postmates filed privately to go public last year. Since then it has raised a bunch more money. It’s now just keeping along. Go public, Postmates! We want to see your numbers!
                Asana: Asana  filed privately to go public earlier this year, which was exciting. Then it didn’t go public, which wasn’t. It’s doing some stuff with Microsoft lately, which is neat. But when we asked the company to stop messing about and give us that S-1, co-founder Dustin Moskovitz told us “No!” Adding to this particular trail of breadcrumbs, Asana crossed the $100 million ARR mark over a year ago, and added some new board members in the interim.
                BigCommerce: Bloomberg reported earlier today that the company is going public, and has filed privately to do so. BigCommerce is an Austin-based SaaS service that provides e-commerce tools to merchants. It’s like an American Shopify, kinda. And backed by over $200 million in venture capital, there’s a lot of bets riding on its eventual debut. Save us the wait, BigCommerce, and file publicly today.
                And here are companies that are making the sort of noise that one might make before finally going public:
                Airbnb: Airbnb  promised to go public, then COVID-19 happened, and the company had to raise a bunch of expensive capital and lay off around a quarter of its staff. But now it’s bouncing back, and could still go public this year, according to its CEO. Please do, Airbnb, I want to see your numbers.
                Palantir: I am loath to include Palantir in this list, as it’s been on future IPO lists since time immemorial (here’s an example); but, hey, maybe this time it will happen. Why do we think that? Here are two headlines to make it plain: “Palantir Notches $500M Ahead Of Potential IPO” from June 19th, and “Palantir to File IPO in Weeks For Possible Fall Debut” from June 11, 2020. So, yeah, this is a thing.
                All of the above is a jam, and I am stoked to dig through the S-1 trenches with you.</p>
              </div>
            );
          })}
          <h3 className="createcomment">Comments</h3>
          <p> {this.commentList()}</p>

          <h3>Create Comment</h3>

          <form onSubmit={useThis.onSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text"
                className="form-control"
                value={this.state.comment_name5}
                onChange={this.onChangeCommentName5}
              />
            </div>
            <div className="form-group">
              <label>Comment:</label>
              <input type="text"
                className="form-control"
                value={this.state.comment_description5}
                onChange={this.onChangeCommentDescription5}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Create Comment"
                className="commentBTN"
              />
            </div>

          </form>
        </div>
      </div>
    );

  }
}

