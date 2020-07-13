import React, { Component } from 'react';
import data from "../data/post.json";
import '../BlogPost/blogPost.css'
//used to send HTTP requests to back end
import axios from 'axios';

const Comment = props => (
  <div className='commentbox'>
    <p className='commentname'>{props.comment.comment_name1}</p>
    <p className='commentdescription'>{props.comment.comment_description1}</p>
  </div>
)

export default class CreateComments extends Component {

  constructor(props) {
    super(props);
    //binding state objects to 'this' since we are dealing with methods
    this.onChangeCommentName1 = this.onChangeCommentName1.bind(this);
    this.onChangeCommentDescription1 = this.onChangeCommentDescription1.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    //initializing and assigning state
    this.state = {
      comment_name1: '',
      comment_description1: '',
      comments: []

    }
  }
  //create methods to UPDATE state properties
  onChangeCommentName1(e) {
    this.setState({
      comment_name1: e.target.value
    });
  }
  onChangeCommentDescription1(e) {
    this.setState({
      comment_description1: e.target.value
    });
  }

  //handle SUBMIT event, create new comment
  onSubmit(e) {
    //prevent default submit behavior
    // e.preventDefault();
    //console logging for test purposes
    console.log(`Form submitted:`);
    console.log(`Name: ${this.state.comment_name}`);
    console.log(`Comment Description: ${this.state.comment_description}`);
     
    const newComment = {
      comment_name1: this.state.comment_name1,
      comment_description1: this.state.comment_description1
    };
    //sending POST request to endpoint using axios, endpoint expects new comment in JSON 
    axios.post('http://localhost:4000/comments/add', newComment)
      .then(res => console.log(res.data))
  //RESETTING the state object after submit
    this.setState({
      comment_name1: '',
      comment_description1: ''
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

  
// CREATE FUNCTION mapping comments 
//iterating through comments, each comment is output by using Cooment  component, current comment is assigned to property of the component
  commentList() {
    return this.state.comments.map((currentComment, i) => {
      return <Comment comment={currentComment} key={i} />;
    })
  }
  render() {
    var useThis = this 
    let one = data.filter(it => new RegExp(1).test(it.id))
    return (
      <div>
        <div className="article__post">
          {one.map((data, i) => {
            return (
              <div key={i} >
                <h2>{data.title}</h2>
                <img src={data.img} alt="aws logo" />
                <p>{data.author}</p>
                <p>{data.date}</p>
                <p>AWS today launched Amazon Honeycode, a no-code environment built around a spreadsheet-like interface that is a bit of a detour for Amazon’s cloud service. Typically, after all, AWS is all about giving developers all of the tools to build their applications — but they then have to put all of the pieces together. Honeycode, on the other hand, is meant to appeal to non-coders who want to build basic line-of-business applications. If you know how to work a spreadsheet and want to turn that into an app, Honeycode is all you need.
                To understand AWS’s motivation behind the service, I talked to AWS VP Larry Augustin and Meera Vaidyanathan, a general manager at AWS.
                “For us, it was about extending the power of AWS to more and more users across our customers,” explained Augustin. “We consistently hear from customers that there are problems they want to solve, they would love to have their IT teams or other teams — even outsourced help — build applications to solve some of those problems. But there’s just more demand for some kind of custom application than there are available developers to solve it.”
                In that respect then, the motivation behind Honeycode isn’t all that different from what Microsoft is doing with its PowerApps low-code tool. That, too, after all, opens up the Azure platform to users who aren’t necessarily full-time developers. AWS is taking a slightly different approach here, though, but emphasizing the no-code part of Honeycode.
                “Our goal with honey code was to enable the people in the line of business, the business analysts, project managers, program managers who are right there in the midst, to easily create a custom application that can solve some of the problems for them without the need to write any code,” said Augustin. “And that was a key piece. There’s no coding required. And we chose to do that by giving them a spreadsheet-like interface that we felt many people would be familiar with as a good starting point.”
                A lot of low-code/no-code tools also allow developers to then “escape the code,” as Augstin called it, but that’s not the intent here and there’s no real mechanism for exporting code from Honeycode and take it elsewhere, for example. “One of the tenets we thought about as we were building Honeycode was, gee, if there are things that people want to do and we would want to answer that by letting them escape the code — we kept coming back and trying to answer the question, ‘Well, okay, how can we enable that without forcing them to escape the code?’ So we really tried to force ourselves into the mindset of wanting to give people a great deal of power without escaping to code,” he noted.
                There are, however, APIs that would allow experienced developers to pull in data from elsewhere. Augustin and Vaidyanathan expect that companies may do this for their users on tthe platform or that AWS partners may create these integrations, too.
                Even with these limitations, though, the team argues that you can build some pretty complex applications.
                “We’ve been talking to lots of people internally at Amazon who have been building different apps and even within our team and I can honestly say that we haven’t yet come across something that is impossible,” Vaidyanathan said. “I think the level of complexity really depends on how expert of a builder you are. You can get very complicated with the expressions [in the spreadsheet] that you write to display data in a specific way in the app. And I’ve seen people write — and I’m not making this up — 30-line expressions that are just nested and nested and nested. So I really think that it depends on the skills of the builder and I’ve also noticed that once people start building on Honeycode — myself included — I start with something simple and then I get ambitious and I want to add this layer to it — and I want to do this. That’s really how I’ve seen the journey of builders progress. You start with something that’s maybe just one table and a couple of screens, and very quickly, before you know, it’s a far more robust app that continues to evolve with your needs.”
                Another feature that sets Honeycode apart is that a spreadsheet sits at the center of its user interface. In that respect, the service may seem a bit like Airtable, but I don’t think that comparison holds up, given that both then take these spreadsheets into very different directions. I’ve also seen it compared to Retool, which may be a better comparison, but Retool is going after a more advanced developer and doesn’t hide the code. There is a reason, though, why these services were built around them and that is simply that everybody is familiar with how to use them.
                “People have been using spreadsheets for decades,” noted Augustin. “They’re very familiar. And you can write some very complicated, deep, very powerful expressions and build some very powerful spreadsheets. You can do the same with Honeycode. We felt people were familiar enough with that metaphor that we could give them that full power along with the ability to turn that into an app.”
                The team itself used the service to manage the launch of Honeycode, Vaidyanathan stressed — and to vote on the name for the product (though Vaidyanathan and Augustin wouldn’t say which other names they considered.
                “I think we have really, in some ways, a revolutionary product in terms of bringing the power of AWS and putting it in the hands of people who are not coders,” said Augustin.</p>
              </div>
            );
          })}
          <h3>Comments</h3>
          <table> {this.commentList()}</table>

          <h3 className="createcomment">Create Comment</h3>

          <form onSubmit={useThis.onSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text"
                className="form-control"
                value={this.state.comment_name1}
                onChange={this.onChangeCommentName1}
              />
            </div>
            <div className="form-group">
              <label>Comment:</label>
              <input type="text"
                className="form-control"
                value={this.state.comment_description1}
                onChange={this.onChangeCommentDescription1}
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

