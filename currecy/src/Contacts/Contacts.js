import React from 'react';
import './Contacts.css';


class Contacts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>
          <tr> <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" width="60px" alt='github image' /> <h3>https://github.com/MatthewDemo</h3></tr>
          <tr><img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" width="60px" alt='gmail image' /> <h3>kmilyj72@gmail.com</h3> </tr>
          <tr><img src="https://cdn-icons-png.flaticon.com/512/5968/5968804.png" width="60" alt='telegram image' /> <h3>@imjsdeveloper</h3> </tr>
          <tr><img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="60px" alt='phone image' /> <h3>+380950169386</h3> </tr>
        </td>
      </React.Fragment>
    );
  }
}

export default Contacts;
