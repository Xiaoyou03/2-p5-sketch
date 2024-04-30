let raindrops = [];
let temperature;
let json;
function preload() {

  let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
  json = loadJSON(url);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    raindrops.push({x: random(width), y: random(-height, 0)});
  }
    temperature = json.main.temp;
    console.log(temperature);
}

function draw() {
  background(230, 240, 255);
  raindrops.forEach(drop => {
    drop.y += map(temperature, 0, 100, 1, 5);
    if (drop.y > height) {
      drop.y = random(-100, 0);
    }

    stroke(map(temperature, 0, 100, 0, 255), 0, map(temperature, 0, 100, 255, 0));
    line(drop.x, drop.y, drop.x, drop.y + 20);
  });
}
