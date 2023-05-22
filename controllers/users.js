import User from "../models/User.js";
import jwt from 'jsonwebtoken';

export const getUser = async (req, res) => {
  try {
      const {id} = req.params;
      const user = await User.findById(id);
      res.status(200).json(user);
  } catch (error) {
      res.status(404).json({message: error.message})
  }
};

export const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const {stateId, firstName, lastName, congressDist, pollingPlace, picturePath} = req.body;
    const user = await User.findById(id)

    user.stateId = stateId;
    user.firstName = firstName;
    user.lastName = lastName;
    user.congressDist = congressDist;
    user.pollingPlace = pollingPlace;
    user.picturePath = picturePath;

    await user.save();

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});

    res.status(200).json({token, user});

  } catch (error) {
    res.status(304).json({error: error.message})
  }
};

export const deleteUser = async(req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findById(id);

    await user.remove()
  
    res.status(StatusCodes.OK).json({ msg: 'Voter account deleted.' })    

  } catch (error) {
    
  }
}