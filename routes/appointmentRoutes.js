// routes/appointmentRoutes.js
import express from "express";
import { bookAppointment, getAppointments } from "../controllers/appointmentController.js";

const router = express.Router();

// book new appointment
router.post("/book", bookAppointment);

// get all appointments
router.get("/", getAppointments);

export default router;
