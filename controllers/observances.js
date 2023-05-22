import Observance from "../models/Observance";

export const getObservances = async (req, res) => {
  res.status(200).send('Got em!');
}

export const getObservance = async (req, res) => {
  res.status(200).send('Got it!');
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