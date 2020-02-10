const Calculation = require('../models/calculation');

module.exports = {

    // The Resolver(method) for creating a new calculation record
    createCalculation: async function({ inputData }, req) {
        const calculation = await new Calculation({
            function: inputData.function,
            root: inputData.root
        });

        // Save the calculation in the database
        const createdRecord = await calculation.save();

        return true;
    },

    // The Resolver(method) for retrieving a calculation record
    retriveCalculation: async function({ inputFunction }, req) {
        const calculation = await Calculation.findOne({ where: { function: inputFunction } });

        if(!calculation) {
            const error = new Error('Not found');
            error.statusCode = 404;
            throw error;
        }

        // return calculation
        return calculation.dataValues;
    }
};
