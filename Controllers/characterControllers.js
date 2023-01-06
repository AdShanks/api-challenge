const characterArr = ["Archer", "Malory", "Lana", "Pam"]

export const getCharacters = (req, res) => {
   res.status(200).send({
    tvShow: "Archer",
    characters: characterArr
  })
}

export const getCharacterById = (req, res) => {
  const id = parseInt(req.params.id)

  res.status(200).send({
    character: characterArr[id] || "Character does not exist."
  })
}

export const addCharacter = (req, res) => {
  characterArr.push(req.body.characters)
    res.status(201).send(`You added a character`)
}

export const deleteCharacterById = (req, res) => {
  const id = parseInt(req.params.id)
  characterArr.splice(id, 1)

  res.status(204).send("Delete")
}