const charactersAPI = new APIHandler("http://localhost:8000");
const charactersContainer = document.getElementsByClassName(
  "characters-container"
);

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList().then((retournedInfo) => {
        const allCharacters = retournedInfo.data;
        console.log(allCharacters);
        allCharacters.forEach((character) => {
          charactersContainer.innerHTML = `<div class="character-info">
              <div class="name">Character Name:${character.name}</div>
              <div class="occupation">Character Occupation:${character.occupation}</div>
              <div class="cartoon">Is a Cartoon?${character.cartoon}</div>
              <div class="weapon">Character Weapon${character.weapon}</div>
            </div>
            <br>`;
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
