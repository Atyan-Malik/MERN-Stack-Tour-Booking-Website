import express from 'express'
import {createTour, deleteTour, getAllTour, getFeatureTour, getSingleTour, getTourBySearch, getTourCount, updateTour} from "../controllers/tourController.js"

import { verifyAdmin } from '../utils/VerifyToken.js'
const router=express.Router()
router.get("/Search/getTourBySearch",getTourBySearch)

router.post("/",verifyAdmin,createTour)
router.put("/:id",verifyAdmin,updateTour)
router.delete("/:id",verifyAdmin,deleteTour)
router.get("/:id",getSingleTour)
router.get("/",getAllTour)
router.get("/Search/FeatureTour",getFeatureTour)
router.get("/Search/TourCount",getTourCount)

export default router;