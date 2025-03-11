const { gql } = require('graphql-tag');
const customerResolvers = require('../resolvers/customerResolvers');
const referralResolvers = require('../resolvers/referralResolvers');
const campaignResolvers = require('../resolvers/campaignResolvers');

const typeDefs = gql`
  type Customer {
    id: ID!
    name: String!
    email: String!
  }

  type Referral {
    id: ID!
    customer: Customer!
    status: String!
  }

  type Campaign {
    id: ID!
    name: String!
    offer: String!
    startDate: String!
    endDate: String!
  }

  type Query {
    customers: [Customer]
    referrals: [Referral]
    campaigns: [Campaign]
  }

  type Mutation {
    createCustomer(name: String!, email: String!): Customer
    createReferral(customerId: ID!): Referral
    createCampaign(name: String!, offer: String!, startDate: String!, endDate: String!): Campaign
  }
`;

const resolvers = {
  ...customerResolvers,
  ...referralResolvers,
  ...campaignResolvers,
};

module.exports = { typeDefs, resolvers };
