// importing the Question model
const Question = require("../../../model/question");
const { connect } = require("mongoose");

// when a add quesiton url hit then this controller will add the quesiton to the database
module.exports.addQuestion = async function (req, res) {
  try {
    // console.log("BODY", req.body);
    let ques = await Question.create({
      question: req.body.question,
      topic: req.body.topic,
    });
    // if question added into the database
    if (ques) {
      let tags = req.body.tags.split(",");
      for (let tag of tags) {
        ques.tags.push(tag);
      }
      ques.save();
      return res.status(200).json({
        success: true,
        message: "SuccessFully Added Question!",
      });
    }
    // if error in adding to the database
    return res.status(200).json({
      success: false,
      message: "Error in Adding the Question",
    });
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// when a search url call then this controller will search from the database
module.exports.search = async function (req, res) {
  try {
    // spliting the key
    let arr = req.body.key.split(" ");
    let questions;
    // fetching the mathing questions
    questions = await Question.find({
      tags: { $in: arr },
    });

    // if quesitons arr is empty then search in questions
    if (questions.length === 0) {
      console.log("IN");
      let key = new RegExp(req.body.key, "i");
      console.log(key);
      questions = await Question.find({
        question: { $regex: key },
      });
    }
    console.log(questions);
    // if quesiton found then return
    if (questions) {
      return res.status(200).json({
        success: true,
        data: {
          questions: questions,
        },
      });
    }
    // if there is no question available for the desired key

    return res.status(200).json({
      success: false,
      message: "There are no Question Availabe for this Key",
    });
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
