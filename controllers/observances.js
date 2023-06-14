import Observance from "../models/Observance.js";
import User from "../models/User.js";

export const createObservance = async(req, res) => {
  try {
    const {userId, description} = req.body;
    const user = await User.findById(userId);
    console.log(req.body);
    const newObservance = new Observance({
      userId,
      description,
      alsoObserved: {},
      userStateId: user.stateId,
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
  try {
    const {id} = req.params;
    const {description} = req.body;
    const observance = await Observance.findById(id)

    observance.description = description;

    await observance.save();

    res.status(200).json(observance);

  } catch (error) {
    res.status(304).json({error: error.message})
  }
}

export const alsoObserved = async (req, res) => {
  try {
    const {id} = req.params;
    const {userId} = req.body;
    const observance = await Observance.findById(id);
    const isLiked = observance.alsoObserved.get(userId);

    if(isLiked){
       observance.alsoObserved.delete(userId);
    } else {
       observance.alsoObserved.set(userId, true);
    }

    const updatedObservance = await Observance.findByIdAndUpdate(
        id,
        {alsoObserved: observance.alsoObserved},
        {new: true}
    );
    res.status(200).json(updatedObservance);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const deleteObservance = async (req, res) => {
  try {
    const {id} = req.params;
    await Observance.findByIdAndDelete(id);

    const observances = await Observance.find();
    res.status(200).json(observances);

  } catch (error) {
    res.status(404).json({message: error.message})
  }
}