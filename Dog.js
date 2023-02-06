export class Character {
  constructor(data) {
    // this.name = data.name;
    Object.assign(this, data);
  }

  getCharacterHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return ` <img src="${avatar}" alt="teddy-img" class="data-img" />
        <div class="img-text">
          <h3 class="img-name-age">${name}, ${age}</h3>
          <p class="img-info">${bio}</p>
        </div>
         <h2 class="img-choice">like</h2>
      `;
  }
}
