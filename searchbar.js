const userCardTemplate = document.querySelector("[data-user-template");
const userCardContainer = document.querySelector("[data-user-cards-container");
const searchInput = document.querySelector("[data-search");

let users = [];

searchInput.addEventListener("input", function (e) {
  const value = e.target.value.toLowerCase();
  //console.log(value);
  //console.log(users);
  users.forEach(function (user) {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

https: fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header");
      const body = card.querySelector("[data-body");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardContainer.append(card);
      //console.log(user);
      return {
        name: user.name,
        email: user.email,
        element: card,
      };
    });
  });
