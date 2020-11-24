const { Stocks } = require("../../models");
module.exports = {
    getAllStocks: async (req, res) => {
        try {
            const stocks = await Stocks.findAll({
                attributes: ["id", "location", "quantity", "product"],
            });

            res.status(200).send({
                status_code: 200,
                status_message: "Success",
                stocks: stocks,
            });
        } catch (error) {
            res.send(error);
        }
    },
};
