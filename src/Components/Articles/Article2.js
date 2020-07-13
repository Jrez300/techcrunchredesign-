import React, { Component } from 'react';
import data from "../data/post.json";
import '../BlogPost/blogPost.css'
//used to send HTTP requests to back end
import axios from 'axios';

const Comment = props => (
  <div className='commentbox'>
  <p className='commentname'>{props.comment.comment_name2}</p>
  <p className='commentdescription'>{props.comment.comment_description2}</p>
</div>
)

export default class CreateComments extends Component {

  constructor(props) {
    super(props);
    //binding state objects to 'this' since we are dealing with methods
    this.onChangeCommentName2 = this.onChangeCommentName2.bind(this);
    this.onChangeCommentDescription2 = this.onChangeCommentDescription2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    //setting and assigning state
    this.state = {
      comment_name2: '',
      comment_description2: '',
      comments: []

    }
  }
  //methods to update state properties
  onChangeCommentName2(e) {
    this.setState({
      comment_name2: e.target.value
    });
  }
  onChangeCommentDescription2(e) {
    this.setState({
      comment_description2: e.target.value
    });
  }

  //handle submit event, create new comment
  onSubmit(e) {
    //prevent default submit behavior
    // e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`Name: ${this.state.comment_name2}`);
    console.log(`Comment Description: ${this.state.comment_description2}`);

    const newComment = {
      comment_name2: this.state.comment_name2,
      comment_description2: this.state.comment_description2
    };
    //sending POST request to endpoint using axios, endpoint expects new comment in JSON 
    axios.post('http://localhost:4000/comments/add', newComment)
      .then(res => console.log(res.data))

    this.setState({
      comment_name2: '',
      comment_description2: ''
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
    let one = data.filter(it => new RegExp(2).test(it.id))
    return (
      <div>
        <div className="square__post">
          {one.map((data, i) => {
            return (
              <div key={i} >
                <h2>{data.title}</h2>
                <img src={data.img} alt={data.alt} />
                <p>{data.author}</p>
                <p>{data.date}</p>
                <p>New York City is on the verge of approving a shared electric scooter pilot program, opening up a potentially lucrative market and new micromobility battleground in the United States. The New York City Council is expected Thursday to vote on a bill that will require the New York Department of Transportation to create a pilot program for the operation of shared electric scooters in the city. The proposed legislation will first be taken up by the Committee on Transportation at 10 a.m. ET before moving to the full council, which has a meeting scheduled for 1:30 p.m. ET. The committee is expected to approve the measure. The proposed legislation would require the DOT to issue by October 15, 2020 a request for proposals to participate in a shared e-scooter pilot program. The pilot program would need to launch by March 1, 2021. “New Yorkers need more sustainable and safe ways to commute and get around during this pandemic–and that is especially true for our essential delivery workers who deserve our gratitude and our support for keeping this city running even through the darkest days of this crisis,” New York Council speaker Corey Johnson said in an emailed statement ahead of tomorrow’s vote. “E-bikes and scooters are going to be a major part of our city’s transit future, and I’m proud of the council’s work to ensure that future arrives safely and equitably. ”Lime  is among several shared electric scooter companies eager to participate in the pilot. The micromobility company has spent the past two years working with elected officials, social justice organizations and advocates to finally make scooters available to New Yorkers, Phil Jones, the senior director of government relations for Lime, told TechCrunch in an email. “The newfound urgency to offer car-alternative transportation options seems to have gotten us to this point,” Jones said. Bird founder and CEO Travis VanderZanden said the pending vote highlights “that New York City recognizes the ‘next’ transportation normal is one that indexes on shared micromobility, such as e-scooters and devolves from cars or ride hail options that contribute to increased pollution and decreased safety throughout communities. ”A recent survey conducted by the New York League of Conservation Voters, the Tri-State Transportation Campaign and shared micromobility company Lime suggests there is support for electric scooters in New York City. The survey, which was administered between June 15 to June 19, found 92% of respondents would choose to use scooters as an alternative to cars during the COVID-19 crisis. (It should be noted that the survey was sent to more than 30,000 New Yorkers who are part of the NYLCV, TSTC and Lime networks; 394 people responded). A bevy of companies confirmed to TechCrunch plans to apply for a permit, including Bird, Lyft, Spin and  Link, a new scooter startup that is the shared micromobility arm of Superpedestrian and that just officially launched about a month ago. Link founder and CEO Assaf Biderman is aiming to sell the city on its technology. “With some of the busiest streets in the country, New York needs micromobility operators who can keep riders moving in bike lanes and out of no-ride zones,” Biderman said. While the proposed legislation was first introduced two years ago, a pilot program wasn’t technically feasible until this April when New York Gov. Andrew Cuomo signed a bill to legalize the use of throttle-based electric scooters and bikes in the state. Under the state law, shared scooters will not be allowed in Manhattan and a pilot program must be approved by the NY City Council before shared scooter services can operate in the remaining boroughs of Brooklyn, the Bronx, Queens and Staten Island. The proposed local law places some requirements on how the pilot program is structured. Neighborhoods that lack access to existing bike-share programs will be given priority in determining the geographic boundaries of the pilot program. Companies that receive permits will be required to meet operating rules, such as providing accessible scooter options. It’s not clear how many companies will be issued permits or if there will be restrictions on the number of scooters in each fleet. Jones over at Lime said that “successful scooter programs strike a careful balance that allows for competition between a handful of operators, but not so many as it becomes oversaturated and unruly. ”In Lime’s view, a successful scooter program will allow for demand to dictate fleet size, include service zones in denser communities with nearby transit options, ensure the zones are expansive enough to connect residential and commercial districts, guarantee access for lower-income neighborhoods as well as provide and capitalize on its unprecedented growth of the bike lane network, Jones added. Will Burns, director of government partnerships for the East Coast at Spin said the most important aspect for NYC regulators to think about when designing this program is how to incentivize companies to make long-term investments for the benefit of the public and their transportation needs. The committee on transportation and full council is also expected to discuss and possibly approve rules about private use of electric bikes and scooters. One proposed law would allow for privately owned scooter use in Manhattan. Shared scooters are prohibited in Manhattan in accordance with state law.</p>
              </div>
            );
          })}
          <h3>Comments</h3>
          <p> {this.commentList()}</p>

          <h3 className="createcomment">Create Comment</h3>

          <form onSubmit={useThis.onSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text"
                className="form-control"
                value={this.state.comment_name2}
                onChange={this.onChangeCommentName2}
              />
            </div>
            <div className="form-group">
              <label>Comment:</label>
              <input type="text"
                className="form-control"
                value={this.state.comment_description2}
                onChange={this.onChangeCommentDescription2}
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

