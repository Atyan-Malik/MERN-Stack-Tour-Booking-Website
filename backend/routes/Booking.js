import express from 'express'
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js'
import { verifyAdmin, verifyUser } from '../utils/VerifyToken.js'

const route=express.Router()

route.post('/bookTour',verifyUser,createBooking)
route.get('/:id',verifyUser,getBooking)
route.get('/',verifyAdmin,getAllBooking)

export default route