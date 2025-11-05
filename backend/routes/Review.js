import express from 'express'

import { createReviews } from '../controllers/reviewController.js'

const router=express.Router()

router.post("/:tourId",createReviews)

export default router