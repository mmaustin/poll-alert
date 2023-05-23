import Observance from "../models/Observance.js";
import User from "../models/User.js";

export const createObservance = async(req, res) => {
  try {
    const {userId, description} = req.body;
    const user = await User.findById(userId);

    const newObservance = new Observance({
      userId,
      description,
      alsoObserved: {},
      stateId: user.stateId,
      userPicturePath: user.picturePath,
      firstName: user.firstName,
      lastName: user.lastName,
      pollingPlace: user.pollingPlace
    });
    await newObservance.save();
    const observances = await Observance.find();

    res.status(201).json(observances);
    
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}

export const getObservances = async (req, res) => {
  try {
    const observances = await Observance.find();
    res.status(200).json(observances);

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

export const getObservance = async (req, res) => {
  try {
    const {id} = req.params;
    const observance = await Observance.findById(id);
    res.status(200).json(observance);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const updateObservance = async (req, res) => {
  res.status(200).send('Updated!');
}

export const alsoObserved = async (req, res) => {
  res.status(200).send('Also observed, or not!')
}

export const deleteObservance = async (req, res) => {
  res.status(200).send('Deleted!');
}