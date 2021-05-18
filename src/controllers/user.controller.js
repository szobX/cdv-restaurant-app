import db from '../db/init.js';
const Users = db.users;
import RoleEnum from '../db/enums/role.enum.js';
export const create = (req, res) => {
    // if (!req.body.title) {
    //     res.status(400).send({
    //         message: 'Content can not be empty!',
    //     });
    //     return;
    // }
    console.log(req.body);
    // Create a Tutorial
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        role: RoleEnum[req.body.role],
        active: false,
    };

    // Save Tutorial in the database
    Users.create(user)
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

export const findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Users.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving tutorials.',
            });
        });
};

export default {
    create,
    findAll,
};
