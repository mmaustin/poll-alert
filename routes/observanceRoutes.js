import express from 'express';
import {createObservance, getObservance, getObservances, updateObservance, alsoObserved, deleteObservance } from '../controllers/observances.js';

const router = express.Router();

router.route('/').get(getObservances).post(createObservance);
router.route('/:id').get(getObservance).patch(updateObservance).delete(deleteObservance);
router.route('/:id/observed').patch(alsoObserved);

export default router;
