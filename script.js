let hPlayer = 0;
let hComputer = 0;

const sPlayer = document.querySelector(".s-player");
const sComputer = document.querySelector(".s-comp");

sPlayer.innerHTML = `score kamu = ${hPlayer}`;
sComputer.innerHTML = `score computer = ${hComputer}`;

const getPilihanComputer = () => {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
};

const getHasil = (comp, player) => {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return comp == "gajah" ? "MENANG" : "KALAH";
};

const putar = () => {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval();
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
};

const pilihan = document.querySelectorAll("li img");
pilihan.forEach((pil) => {
  pil.addEventListener("click", () => {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
      if (hasil == "MENANG") hPlayer++;
      if (hasil == "KALAH") hComputer++;

      sPlayer.innerHTML = `score kamu = ${hPlayer}`;
      sComputer.innerHTML = `score computer = ${hComputer}`;
    }, 1000);
  });
});

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', ()=>{
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     console.log(hasil)
//     const impComputer = document.querySelector('.img-komputer')
//     impComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// });
