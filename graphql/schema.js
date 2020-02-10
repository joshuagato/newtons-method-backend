const { buildSchema } = require('graphql');

module.exports = buildSchema(`


    type CalculationResult {
        root: Float!
    }

    input CalculationInput {
        function: String!
        root: Float!
    }

    type RootMutation {
        createCalculation(inputData: CalculationInput): Boolean
    }

    type RootQuery {
        retriveCalculation(inputFunction: String!): CalculationResult!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
