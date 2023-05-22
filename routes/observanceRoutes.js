import express from 'express';
import { getObservance, getObservances, updateObservance, alsoObserved, deleteObservance } from '../controllers/observances.js';

const router = express.Router();

router.route('/').get(getObservances);
router.route('/:id').get(getObservance).patch(updateObservance).delete(deleteObservance);
router.route('/:id/observed').patch(alsoObserved);

export default router;
