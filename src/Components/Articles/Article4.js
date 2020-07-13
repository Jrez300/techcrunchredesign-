import React, { Component } from 'react';
import data from "../data/post.json";
import '../BlogPost/blogPost.css'
//used to send HTTP requests to back end
import axios from 'axios';

const Comment = props => (
  <div className='commentbox'>
  <p className='commentname'>{props.comment.comment_name4}</p>
  <p className='commentdescription'>{props.comment.comment_description4}</p>
</div>
)

export default class CreateComments extends Component {

  constructor(props) {
    super(props);
    //binding state objects to 'this' since we are dealing with methods
    this.onChangeCommentName4 = this.onChangeCommentName4.bind(this);
    this.onChangeCommentDescription4 = this.onChangeCommentDescription4.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    //setting and assigning state
    this.state = {
      comment_name4: '',
      comment_description4: '',
      comments: []

    }
  }
  //methods to update state properties
  onChangeCommentName4(e) {
    this.setState({
      comment_name4: e.target.value
    });
  }
  onChangeCommentDescription4(e) {
    this.setState({
      comment_description4: e.target.value
    });
  }

  //handle submit event, create new comment
  onSubmit(e) {
    //prevent default submit behavior
    // e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`Name: ${this.state.comment_name4}`);
    console.log(`Comment Description: ${this.state.comment_description4}`);

    const newComment = {
      comment_name4: this.state.comment_name4,
      comment_description4: this.state.comment_description4
    };
    //sending POST request to endpoint using axios, endpoint expects new comment in JSON 
    axios.post('http://localhost:4000/comments/add', newComment)
      .then(res => console.log(res.data))

    this.setState({
      comment_name4: '',
      comment_description4: ''
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
    let one = data.filter(it => new RegExp(4).test(it.id))
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
                <p>The murder of George Floyd was shocking, but we know that his death was not unique. Too many Black lives have been stolen from their families and communities as a result of historical racism. There are deep and numerous threads woven into racial injustice that plague our country that have come to a head following the recent murders of George Floyd, Ahmaud Arbery and Breonna Taylor.
                Just as important as the process underway to admit to and understand the origin of racial discrimination will be our collective determination to forge a more equitable and inclusive path forward. As we commit to address this intolerable and untenable reality, our discussions must include the role of artificial intelligence (AI) . While racism has permeated our history, AI now plays a role in creating, exacerbating and hiding these disparities behind the facade of a seemingly neutral, scientific machine. In reality, AI is a mirror that reflects and magnifies the bias in our society.
                I had the privilege of working with Deputy Attorney General Sally Yates to introduce implicit bias training to federal law enforcement at the Department of Justice, which I found to be as educational for those working on the curriculum as it was to those participating. Implicit bias is a fact of humanity that both facilitates (e.g., knowing it’s safe to cross the street) and impedes (e.g., false initial impressions based on race or gender) our activities. This phenomenon is now playing out at scale with AI.
                As we have learned, law enforcement activities such as predictive policing have too often targeted communities of color, resulting in a disproportionate number of arrests of persons of color. These arrests are then logged into the system and become data points, which are aggregated into larger data sets and, in recent years, have been used to create AI systems. This process creates a feedback loop where predictive policing algorithms lead law enforcement to patrol and thus observe crime only in neighborhoods they patrol, influencing the data and thus future recommendations. Likewise, arrests made during the current protests will result in data points in future data sets that will be used to build AI systems.
                This feedback loop of bias within AI plays out throughout the criminal justice system and our society at large, such as determining how long to sentence a defendant, whether to approve an application for a home loan or whether to schedule an interview with a job candidate. In short, many AI programs are built on and propagate bias in decisions that will determine an individual and their family’s financial security and opportunities, or lack thereof — often without the user even knowing their role in perpetuating bias.
                This dangerous and unjust loop did not create all of the racial disparities under protest, but it reinforced and normalized them under the protected cover of a black box.
                This is all happening against the backdrop of a historic pandemic, which is disproportionately impacting persons of color. Not only have communities of color been most at risk to contract COVID-19, they have been most likely to lose jobs and economic security at a time when unemployment rates have skyrocketed. Biased AI is further compounding the discrimination in this realm as well.
                This issue has solutions: diversity of ideas and experience in the creation of AI. However, despite years of promises to increase diversity — particularly in gender and race, from those in tech who seem able to remedy other intractable issues (from putting computers in our pockets and connecting with machines outside the earth to directing our movements over GPS) — recently released reports show that at Google and Microsoft, the share of technical employees who are Black or Latinx rose by less than a percentage point since 2014. The share of Black technical workers at Apple has not changed from 6%, which is at least reported, as opposed to Amazon, which does not report tech workforce demographics.
                In the meantime, ethics should be part of a computer science-related education and employment in the tech space. AI teams should be trained on anti-discrimination laws and implicit bias, emphasizing that negative impacts on protected classes and the real human impacts of getting this wrong. Companies need to do better in incorporating diverse perspectives into the creation of its AI, and they need the government to be a partner, establishing clear expectations and guardrails.
                There have been bills to ensure oversight and accountability for biased data and the FTC recently issued thoughtful guidance holding companies responsible for understanding the data underlying AI, as well as its implications, and to provide consumers with transparent and explainable outcomes. And in light of the crucial role that federal support is playing and our accelerated use of AI, one of the most important solutions is to require assurance of legal compliance with existing laws from the recipients of federal relief funding employing AI technologies for critical uses. Such an effort was started recently by several members of Congress to safeguard protected persons and classes — and should be enacted.
                We all must do our part to end the cycles of bias and discrimination. We owe it to those whose lives have been taken or altered due to racism to look within ourselves, our communities and our organizations to ensure change. As we increasingly rely on AI, we must be vigilant to ensure these programs are helping to solve problems of racial injustice, rather than perpetuate and magnify them.</p>
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
                value={this.state.comment_name4}
                onChange={this.onChangeCommentName4}
              />
            </div>
            <div className="form-group">
              <label>Comment:</label>
              <input type="text"
                className="form-control"
                value={this.state.comment_description4}
                onChange={this.onChangeCommentDescription4}
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

