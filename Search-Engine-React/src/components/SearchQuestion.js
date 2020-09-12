import React, { Component, createRef } from "react";
import { getFormBody } from "../helper/index";
import { debounce } from "lodash";

export default class SearchQuestion extends Component {
  constructor() {
    super();
    this.state = {
      key: "",
      showSearchResult: false,
      questions: [],
      inputRef: createRef(),
    };
  }

  // when a search call
  searchQuestions = debounce(() => {
    const { key } = this.state;
    const url = "http://localhost:8000/api/v1/qbank/search";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ key }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("DATA", data);
        this.setState({
          questions: data.data.questions,
          showSearchResult: true,
        });
      });
  }, 500);

  // when a handle change call
  handleChange = (value) => {
    this.setState({
      key: value,
    });
    this.searchQuestions();
  };

  render() {
    const { showSearchResult, questions } = this.state;
    return (
      <div className="main-search-container">
        <div className="form-container">
          <h1>Search The Question</h1>
          <div>
            <input
              ref={this.state.inputRef}
              id="search"
              placeholder="Write Your Question Here"
              onChange={(e) => this.handleChange(e.target.value)}
            />
          </div>
        </div>
        {showSearchResult ? (
          <div className="result-container">
            <div className="result">
              <ul>
                {questions.length > 0 ? (
                  questions.map((question) => {
                    return <li key={question._id}>{question.question}</li>;
                  })
                ) : (
                  <li>There is no match</li>
                )}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
