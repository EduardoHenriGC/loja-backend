import express from "express";
import {getSearch} from "../controller/search.js"

const router = express.Router()


router.get("/search", getSearch)



export default router