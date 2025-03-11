const mongoose = require('mongoose');

// Function to check if a document exists in MongoDB
const checkDocumentExists = async (model, query) => {
  return await model.findOne(query).exec();
};

// Function to validate email
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

module.exports = {
  checkDocumentExists,
  validateEmail,
};
