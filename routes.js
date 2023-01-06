import Router from "express";
import { getCharacters, getCharacterById, addCharacter, deleteCharacterById } from "./Controllers/characterControllers.js";

const router = Router();

router.get("/", (req, res) => {
  getCharacters(req, res)
})

router.get("/:id", (req, res) => {
  getCharacterById(req, res)
})

router.post("/", (req, res) => {
  addCharacter(req, res)
})

router.delete("/:id", (req, res) => {
deleteCharacterById(req, res)
})



export default router;