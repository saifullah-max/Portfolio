import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faFacebook,
    faInstagram,
    faSnapchat,
    faUpwork

} from '@fortawesome/free-brands-svg-icons'
import { Button } from "react-bootstrap";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.facebook.com/saifullah.ahmed.7505/"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.instagram.com/saifullah_.ahmed/"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/saifullah-max"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.linkedin.com/in/saifullahahmed2003/"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faSnapchat}/>
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.upwork.com/freelancers/~01eebbf4c661f43385"
            role="button"
          >
            <FontAwesomeIcon icon={faUpwork}/>
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  placeholder="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="info" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Thank you for visiting my personal website! I hope you found the
            information you were looking for. If you have any questions,
            feedback, or just want to connect, feel free to reach out through
            the contact form or follow me on social media. Stay tuned for
            updates and new content as I continue to share my journey and
            projects. Your support means a lot!
          </p>
        </section>
      </MDBContainer>
        <h5>Source Code for this website: </h5>
            <MDBBtn outline color="info" type="submit" className="mb-4">Click here</MDBBtn>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:&nbsp;
        <a className="text-white" href="#!">
          Saifullah Ahmed
        </a>
      </div>
    </MDBFooter>
  );
}
