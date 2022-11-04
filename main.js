function createGame(player1, hour, player2) {
  return `
  <li>
      <img
        src="./assets/icon=${player1}.svg"
        alt="Imagem da ${player1} do pais Quatar"
      />
      <strong>${hour}</strong>
      <img
        src="./assets/icon=${player2}.svg"
        alt="Imagem da bandeira pais ${player2}"
      />
    </li>
    <h3>${player1}<span>${player2}</span></h3>
  
  `
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style='animation-delay:${delay}s'>
  <h2>${date} <span>${day}</span></h2>
  <ul>
    ${games}
  </ul> 
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "DOMINGO", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "SEGUNDA",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands")
  ) +
  createCard("22/11", "TERÇA", createGame()) +
  createCard("22/11", "TERÇA", createGame())
