import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CommentsList extends Component {
//using constructor to initialize state to empty comment array
constructor(props) {
    super(props);
    this.state = {comments: []};
}

//retreiving data from database using lifecycle method
//axios gets access to comments endpoint
componentDidMount() {
    axios.get('http://localhost:4000/comments/')
        .then(response => {
            //once data available, assigning response.data to comments using setstate
            this.setState({ comments: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
}


render() {
    return (
        <div>
            <h3>Comments</h3>
            <div>
                <body>
                    { this.commentList() }
                </body>
            </div>
        </div>
    )
}


}