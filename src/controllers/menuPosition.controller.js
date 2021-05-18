import db from '../db/init.js';
const MenuPositions = db.menuPositions;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }

    // Create a Tutorial
    const menuPosition = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    };

    // Save Tutorial in the database
    MenuPositions.create(menuPosition)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while creating the Tutorial.',
            });
        });
};
