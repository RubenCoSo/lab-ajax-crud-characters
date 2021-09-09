class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({ baseURL: baseUrl });
  }

  //characterId = numeric identificator
  //characterInfo= object under this format { name: string, occupation: string, cartoon: boolean, weapon: string }

  getFullList = () => this.api.get("/characters");

  getOneRegister = (characterId) => {
    this.api.get(`/characters/${characterId}`);
  };

  createOneRegister = (characterInfo) => {
    this.api
      .post("/characters", characterInfo)
      .then((createdCharacter) => {
        return createdCharacter;
      })
      .catch((err) => console.log("Some of the field are wrong"));
  };

  updateOneRegister = (characterID, characterInfo) => {
    this.api
      .put("/characters/$characterId", characterInfo)
      .then((updatedCharacter) => {
        return updatedCharacter;
      })
      .catch((err) => console.log("No characters with this ID"));
  };

  deleteOneRegister = (characterId) => {
    this.api
      .delete(`/characters/${characterId}`)
      .then(console.log(`character deleted succesfully`))
      .catch((err) => console.log("No characters with this ID"));
  };
}
