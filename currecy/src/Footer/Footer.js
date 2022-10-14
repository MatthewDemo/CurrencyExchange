import React from 'react';
import './Footer.css';



class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <footer id="footer" className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="flex-container">
            <div className="flex-item">
              <h1 className="footer-title"><a href='https://github.com/MatthewDemo?tab=repositories'>2022 &copy; My github</a></h1>
              <p>Thanks for attention!</p>
            </div>

            <div className="flex-item">
              <div className="module-body">
                <ul className="list-unstyled">
                  <li><a href='/' tooltip="/">На главную</a></li>
                  <li><a href='/about' tooltip="about">О сайте</a></li>
                </ul>
              </div>
            </div>
            <div className="flex-item">
              <div className="module-body">
                <ul calss="list-unstyled">
                  <li><a href='/contacts/' tooltip="Контакты">Контакты</a></li>
                  <li><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">Гарантии</a></li>
                  <li><a href='https://www.youtube.com/watch?v=3HishGi0CQw' target="_blank">О сервисе</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        <div className="flex-container">
          <div className="flex-item">
            <ul className="link">
            </ul>
          </div>
          <div className="flex-item">
            <div className="clearfix payment-methods">
              <ul>
                <img src="/skin/default/images/dummy.png"
                  data-toggle="tooltip" data-placement="top"
                  data-original-title='www.webmoney.ru' alt="" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;
