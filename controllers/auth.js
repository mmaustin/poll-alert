import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async  (req, res) => {
    try {
        const{
            firstName,
            lastName,
            email,
            password,
            picturePath,
            stateId,
            congressDist,
            pollingPlace,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            stateId,
            congressDist,
            pollingPlace
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};