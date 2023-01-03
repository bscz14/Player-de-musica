let musicas = [
  {
    titulo: "In The End",
    artista: "Link Park",
    src: "music/In The End  - Linkin Park.mp3",
    img: "img/In-The-End.jpg",
  },
  {
    titulo: "Ashanti",
    artista: "Ja Rule ft. R. Kelly",
    src: "music/Ja Rule ft. R. Kelly, Ashanti.mp3",
    img: "img/Ja-Rule.jpg",
  },
  {
    titulo: "Decode",
    artista: "Paramore",
    src: "music/Paramore - Decode.mp3",
    img: "img/Decode.jpg",
  },
  {
    titulo: "Numb",
    artista: "Link Park",
    src: "music/Numb Link Park.mp3",
    img: "img/Numb.jpg",
  },
  {
    titulo: "Billionaire",
    artista: "Travie McCoy ft. Bruno Mars",
    src: "music//Travie McCoy  Billionaire ft - Bruno Mars.mp3",
    img: "img/Billiomaire.jpg",
  },
];

let musica = document.querySelector("audio");
let indexMusica = 0;

let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

renderizarMusica(indexMusica);

// Eventos
document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  pausarMusica();
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 4;
  }
  renderizarMusica(indexMusica);
  tocarMusica();
});

document.querySelector(".proxima").addEventListener("click", () => {
  pausarMusica();
  indexMusica++;
  if (indexMusica > 4) {
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
  tocarMusica();
});

// Funções
function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinutos + ":" + campoSegundos;
}
