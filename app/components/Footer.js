import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var now = new Date();

    return(
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <p>© {now.getFullYear()} Hollerith</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;