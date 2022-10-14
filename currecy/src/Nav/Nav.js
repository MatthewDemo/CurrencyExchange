import React from 'react';
import './Nav.css';



class Nav extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="header-nav">
          <div className="container">
            <nav>
              <ul>
                 <li className="firstli"><a href='/'>Главная</a></li>
                <li className="firstli"><a href='/about'>О сайте</a></li>
                <li className="firstli"><a href='/contacts'>Контакты</a></li> 
              </ul>
            </nav>
          </div>
        </div>
    );
  }
}

export default Nav;
