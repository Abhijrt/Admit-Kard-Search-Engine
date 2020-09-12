// importing the mongoose
const mongoose = require("mongoose");

// question schema
const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    tags: [],
  },
  {
    timestamps: true,
  }
);

if (!questionSchema.options.toObject) questionSchema.options.toObject = {};

//customizing question's object
questionSchema.options.toObject.transform = function (doc, question, options) {
  delete question.__v;
  //   delete question.createdAt;
  //   delete question.updatedAt;
  return question;
};

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
