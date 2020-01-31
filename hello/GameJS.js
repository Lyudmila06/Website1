let cells = document.querySelectorAll('.index');
let user = document.querySelectorAll('.user');
let username = document.querySelector('.username');
let txtScore = document.querySelector('.score');
let maxScore = 11;
let score = 0;

var backgrounds = [
  "#f00 url(src/Zeus.jpg) top center",
  "#0f0 url(src/Ares.jpg) top center",
  "#00f url(src/Poseidon.jpg) top center"
];

var blood = "rgb(0, 0, 0) url(\"src/blood.jpg\") repeat scroll center top";

var str;
    msg = prompt("Введите ваше имя:");
    if (msg === null || msg === '' )
	{
		str = "Kratos";
		alert('Твое имя '  + str);
	}
	else {
	str = msg;
    alert('Привет, '  + str);
	}
	username.innerHTML = str;


function randomTime(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomCell(cells) {
    let i =  Math.floor(Math.random() * cells.length);
    return cells[i];
}

function Game() {

    let time = randomTime(600, 800);
    let cell = randomCell(cells);
	let bl = false;
    txtScore.textContent = score;
    cell.onclick = function () {
        if (cell.style.background !== "rgb(255, 255, 255) none repeat scroll 0% 0%" && cell.style.background !== 'rgb(0, 0, 0) url("src/blood.jpg") repeat scroll center top') {
			cell.style.background = blood;
			//cell.style.background = 'white';
            
            score++;
        }
    };
	
	cell.style.background = backgrounds[Math.floor(Math.random() * (backgrounds.length + 1))];
	

    //cell.classList.add('white');
    setTimeout(() => {
		if (!cell.classList.contains('rgb(255, 255, 255)')){
		cell.style.background = "rgb(255, 255, 255) none repeat scroll 0% 0%";
		}
		if (score !== maxScore)
            Game();
		else console.log(time);
    }, time);
}