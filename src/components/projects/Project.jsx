import React from "react";
import "./project.css";
import RPS from "/Personal portfolio/portflio/src/components/images/RPS.jpeg";
import expenseTracker from "/Personal portfolio/portflio/src/components/images/expenseTracker.png";
import stopWatch from "/Personal portfolio/portflio/src/components/images/stopWatch.jpeg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { delay, motion } from "framer-motion";

const projectOneVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const projectTwoVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
        delay: 1,
        duration: 2,
    },
  },
};
const projectThreeVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
        delay: 2,
        duration: 2,
    },
  },
};

const Project = () => {
  return (
    <div className="ms-5 me-3 d-flex">
      <motion.div
        variants={projectOneVariant}
        initial="initial"
        animate="visible"
      >
        <Card style={{ width: "22rem", height: "27em" }} border="warning">
          <Card.Img variant="top" src={RPS} />
          <Card.Body>
            <Card.Title>Rock-Paper-Scissor</Card.Title>
            <Card.Text>
              In this game, we discover a valuable lesson: To overcome
              something, you need something even more powerful. For instance, to
              defeat paper, you use scissors. This analogy holds true in our
              lives.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/saifullah-max/Rock-paper-scissor"
                target="_blank"
              >
                <Button variant="info">
                  <FontAwesomeIcon icon={faGithub} />
                  &nbsp; Source Code
                </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </motion.div>

    <motion.div
    variants={projectTwoVariant}
    initial="initial"
    animate="visible"
    >
      <Card style={{ width: "22rem", height: "27em" }} className="ms-5 me-2">
        <Card.Img
          variant="top"
          src={expenseTracker}
          style={{ height: "13em" }}
        />
        <Card.Body>
          <Card.Title>Expense Tracker</Card.Title>
          <Card.Text>
            Tracking your spending can help you manage your money well and make
            progress towards your goals.
          </Card.Text>
          <div className="d-flex justify-content-center">
            <a
              href="https://github.com/saifullah-max/expense-tracker"
              target="_blank"
            >
              <Button variant="info" style={{ marginTop: "37px" }}>
                <FontAwesomeIcon icon={faGithub} />
                &nbsp; Source Code
              </Button>
            </a>
          </div>
        </Card.Body>
      </Card>
      </motion.div>

    <motion.div
    variants={projectThreeVariant}
    initial="initial"
    animate="visible"
    >
      <Card
        style={{ width: "22rem", height: "27em" }}
        border="light"
        className="ms-5 me-3"
      >
        <Card.Img variant="top" src={stopWatch} style={{ height: "13em" }} />
        <Card.Body>
          <Card.Title>Stop Watch</Card.Title>
          <Card.Text>

            A stopwatch is a handheld timepiece designed to gauge the span of
            time which elapses between its activation and deactivation.
          </Card.Text>
          <div className="d-flex justify-content-center">
            <a
              href="https://github.com/saifullah-max/StopWatch-"
              target="_blank"
            >
              <Button variant="info" className="mt-3">
                <FontAwesomeIcon icon={faGithub} />
                &nbsp; Source Code
              </Button>
            </a>
          </div>
        </Card.Body>
      </Card>
      </motion.div>
    </div>
  );
};

export default Project;
