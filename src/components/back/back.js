import React from 'react';
import { Link } from 'gatsby';

const Back = () => (
  <Link onClick={() => window.history.back() }
        className="link" 
        title="Back">
    Back
  </Link>
)

export default Back;