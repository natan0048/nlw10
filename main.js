function createGame(player1, hour, player2) {
  return `
  <li>
      <img
        src="./assets/paises/icon=${player1}.svg"
        alt="Imagem da bandeira do pais ${player1}"
      />
      <strong>${hour}</strong>
      <img
        src="./assets/paises/icon=${player2}.svg"
        alt="Imagem da bandeira pais ${player2}"
      />
    </li>
    <h3>${player1}<span>${player2}</span></h3>
  
  `
}

function createaAguardando(player1, hour, player2) {
  return `
  <li>
      <img height="32" width="32" src="/th?id=ALBUD5031345E7D58256D8638B52E39F9BBEF3E02CCB645B45005D2192A4E215DD4C9&amp;w=32&amp;h=32&amp;o=6&amp;pid=SANGAM" alt="Logo of the 1A (World)" role="presentation" data-bm="185"/>

      <strong>${hour}</strong>
      <img height="32" width="32" src="/th?id=ALBUD5031345E7D58256D8638B52E39F9BBEF3E02CCB645B45005D2192A4E215DD4C9&amp;w=32&amp;h=32&amp;o=6&amp;pid=SANGAM" alt="Logo of the 1A (World)" role="presentation" data-bm="185"/>
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
  createCard("20/11", "DOMINGO", createGame("Quatar", "13:00", "Equador")) +
  createCard(
    "21/11",
    "SEGUNDA",
    createGame("Inglaterra", "10:00", "Irão") +
      createGame("Senegal", "13:00", "Países Baixos") +
      createGame("Estados Unidos", "16:00", "País de Gales")
  ) +
  createCard(
    "22/11",
    "TERÇA",
    createGame("Argentina", "07:00", "Arábia Saudita") +
      createGame("Dinamarca", "10:00", "Tunísia") +
      createGame("México", "13:00", "Polónia") +
      createGame("França", "16:00", "Austrália")
  ) +
  createCard(
    "23/11",
    "QUARTA",
    createGame("Marrocos", "07:00", "Croácia") +
      createGame("Alemanha", "10:00", "Japão") +
      createGame("Espanha", "13:00", "Costa Rica") +
      createGame("Bélgica", "16:00", "Canadá")
  ) +
  createCard(
    "24/11",
    "QUINTA",
    createGame("Suíça", "07:00", "Camarões") +
      createGame("Uruguai", "10:00", "Coreia do Sul") +
      createGame("Portugal", "13:00", "Gana") +
      createGame("Brasil", "16:00", "Sérvia")
  ) +
  createCard(
    "25/11",
    "SEXTA",
    createGame("País de Gales", "07:00", "Irão") +
      createGame("Quatar", "10:00", "Senegal") +
      createGame("Países Baixos", "13:00", "equador") +
      createGame("Inglaterra", "16:00", "Estados Unidos")
  ) +
  createCard(
    "26/11",
    "SÁBADO",
    createGame("Tunísia", "07:00", "Austrália") +
      createGame("Polónia", "10:00", "Arábia Saudita") +
      createGame("França", "13:00", "Dinamarca") +
      createGame("Argentina", "16:00", "México")
  ) +
  createCard(
    "27/11",
    "DOMINGO",
    createGame("Japão", "07:00", "Costa Rica") +
      createGame("Bélgica", "10:00", "Marrocos") +
      createGame("Croácia", "13:00", "Canadá") +
      createGame("Espanha", "16:00", "Alemanha")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("Camarões", "07:00", "Sérvia") +
      createGame("Coreia do Sul", "10:00", "Gana") +
      createGame("Brasil", "13:00", "Suíça") +
      createGame("Portugal", "16:00", "Uruguai")
  ) +
  createCard(
    "29/11",
    "TERÇA",
    createGame("Equador", "12:00", "Senegal") +
      createGame("Países Baixos", "12:00", "Quatar") +
      createGame("País de Gales", "16:00", "Inglaterra") +
      createGame("Irão", "16:00", "Estados Unidos")
  ) +
  createCard(
    "30/11",
    "QUARTA",
    createGame("Austrália", "12:00", "Dinamarca") +
      createGame("Tunísia", "12:00", "França") +
      createGame("Arábia Saudita", "16:00", "México") +
      createGame("Polónia", "16:00", "Argentina")
  ) +
  createCard(
    "01/12",
    "QUINTA",
    createGame("Canadá", "12:00", "Marrocos") +
      createGame("Croácia", "12:00", "Bélgica") +
      createGame("Costa Rica", "16:00", "Alemanha") +
      createGame("Japão", "16:00", "Espanha")
  ) +
  createCard(
    "02/12",
    "SEXTA",
    createGame("Coreia do Sul", "12:00", "Portugal") +
      createGame("Gana", "12:00", "Uruguai") +
      createGame("Camarões", "16:00", "Brasil") +
      createGame("Sérvia", "16:00", "Suíça")
  ) +
  createCard(
    "03/12",
    "Sabado",
    createaAguardando("ESPERANDO", "12:00", "ESPERANDO") +
      createaAguardando("ESPERANDO", "12:00", "ESPERANDO") +
      createaAguardando("ESPERANDO", "16:00", "ESPERANDO") +
      createaAguardando("ESPERANDO", "16:00", "ESPERANDO")
  )
