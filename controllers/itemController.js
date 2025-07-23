const itemServices = require('../services/itemServices');

exports.saveData = (req, res) => {

    if (req.body != null) {
        res.status(500).send({ message: "Request Body NULL!" });
    } else {
        return res.send(itemServices.save);
    }
};