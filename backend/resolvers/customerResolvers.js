const Customer = require('../models/Customer');

const resolvers = {
  Query: {
    customers: async () => {
      return await Customer.find().exec();
    },
  },
  Mutation: {
    createCustomer: async (parent, { name, email }) => {
      const customer = new Customer({ name, email });
      return await customer.save();
    },
  },
};

module.exports = resolvers;
