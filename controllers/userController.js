const User = require("../models/userModel");

exports.signUp = async (req, res, next) => {
    // return res.status(200).send({ message: 'signup successful'})
    console.log('reached here')
    try {
        const newUser = await createUserObj(req);
        console.log('reached here', newUser)

        const savedUser = await User.create(newUser);
        console.log('reached here')

        return res.status(200).send({ message: 'user created successfully', user: savedUser });
    } catch (err) {
        return res.status(400).send({ message: 'enable to create user', error: err });
    }
}

exports.logIn = async (req, res) => {
    return res.status(200).send({ message: 'login successful' })
}

exports.updateUser = async (req, res) => {
    return res.status(200).send({ message: 'update user route' })
}

exports.deleteUser = async (req, res) => {
    return res.status(200).send({ message: 'delete user route' })
}

exports.data = async (req, res) => {
    return res.status(200).send({ message: 'data route' })
}


const createUserObj = async (req) => {
    console.log('first', req.body)
    return {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }
}