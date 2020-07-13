import React from 'react';
// import Modal from "../Modal/Modal";
import ContactSection from "../ContactSection"
import '../ContactPage/contact.css'

class ContactSignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowing: false,
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };
  render() {
    return (
      <div className="background">
        <form className="li__form">
          <h1 className="li__title">Log In</h1>
          <label>
            UserName/Email:
                  <input type="text" name="name" id="li__name" />
          </label>
          <label>
            Password:
                  <input type="text" name="email" id="li__password" />
          </label>
          <input type="submit" value="Log In" />
          <div className="ca__contact">
            <h3 className="ca__title">PLEASE FILL OUT ALL NECESSARY INFORMATION TO CREATE AN ACCOUNT</h3>
            <label>
              Full Name:
                  <input type="text" name="name" id="ca__fname" />
            </label>
            <label>
              Email:
                  <input type="email" name="name" id="ca__email" />
            </label>
            <label>
              UserName:
                  <input type="text" name="name" id="ca__username" />
            </label>
            <label>
              Password:
                  <input type="text" name="text" id="ca__password" />
            </label>
            <input type="submit" value="Create Account" />
          </div>
        </form>
        <ContactSection />
      </div>
    );

  }
}

export default ContactSignUp;