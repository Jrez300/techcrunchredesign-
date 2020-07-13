import React from 'react';
import BlogPost from '../BlogPost/BlogPost'

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* <Home /> */}
        {/* <Articles /> */}
        <BlogPost />
        {/* <Events /> */}
        {/* <Contact /> */}
      </Router>
    </div>
  );
}

export default App;
