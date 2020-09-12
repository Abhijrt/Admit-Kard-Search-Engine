import React, { Component, createRef } from "react";
// importing the getformbody function from the helper funciton
import { getFormBody } from "../helper/index";
// importing the alert message function from the helper function
import {
  successMessageAlert,
  errorMessageAlert,
  filedMissingAlert,
} from "../helper/index";

// Addquesiton component
export default class AddQuestions extends Component {
  constructor() {
    super();

    // state
    this.state = {
      question: "",
      topic: "",
      tags: "",
      formRef: createRef(),
    };
  }

  // when a any change occur in the input then this funciton call and add the value to the state
  handleChange = (name, value) => {
    if (name === "question") {
      this.setState({ question: value });
    } else if (name === "topic") {
      this.setState({ topic: value });
    } else if (name === "tags") {
      this.setState({ tags: value });
    }
  };

  // when a button click for adding the quesiton
  handleAddQuestion = (e) => {
    e.preventDefault();
    const { question, topic, tags } = this.state;
    // For field chancking
    if (question.length === 0) {
      filedMissingAlert("Field Missing", "First Write the Question!");
      return;
    }
    if (topic.length === 0) {
      filedMissingAlert("Field Missing", "Please Write The Topic!");
      return;
    }
    if (tags.length === 0) {
      filedMissingAlert("Fiels Missing", "Please write the tags!");
      return;
    }
    // reset the input
    this.state.formRef.current.reset();
    // url for api
    const url = "http://localhost:8000/api/v1/qbank/add-question";
    // adding the quesiton to the database with api
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ question, topic, tags }),
    })
      .then((response) => response.json())
      .then((data) => {
        // if data is success
        if (data.success) {
          successMessageAlert("SuccessFully Added", "Your Question is added!");
          this.setState({
            question: "",
            topic: "",
            tags: "",
          });
        } else {
          errorMessageAlert(
            "Question Adding Failed",
            "Some Error while Adding Question!"
          );
        }
      });
  };

  render() {
    return (
      <div className="main-addquestion-container">
        <div className="form-container">
          <h1>Add the Question to your Question Bank</h1>
          <form ref={this.state.formRef}>
            <div>
              <label for="query">Query</label>
              <input
                id="query"
                placeholder="Write Your Question Here"
                onChange={(e) => this.handleChange("question", e.target.value)}
              />
            </div>
            <div>
              <label for="topic">Topic</label>
              <input
                id="topic"
                placeholder="Write Your Topic Here"
                onChange={(e) => this.handleChange("topic", e.target.value)}
              />
            </div>
            <div>
              <label for="tag">Tags</label>
              <input
                id="tag"
                placeholder="Write Your Tag Here"
                onChange={(e) => this.handleChange("tags", e.target.value)}
              />
            </div>
            <button type="submit" onClick={(e) => this.handleAddQuestion(e)}>
              Add Question
            </button>
          </form>
        </div>
      </div>
    );
  }
}
