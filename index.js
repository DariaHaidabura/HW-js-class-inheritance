let createDateShort = document.getElementById('short-clock');
let createDateFull = document.getElementById('full-clock');

function Clock(elem) {
  this.createDate = elem;
  this.fullFormat = false;
  this.hours;
  this.min;
  this.sec;
}

Clock.prototype.switchFormat = function() {
  this.fullFormat = !this.fullFormat;
}

Clock.prototype.showDate = function () {
  console.log("some date");
}

function Short(elem) {
	Clock.call(this, elem); 
}

function Full(elem) {
	Clock.call(this, elem);
}

Short.prototype = Object.create(Clock.prototype);
let short = new Short(createDateShort);
Full.prototype = Object.create(Clock.prototype);
let full = new Full(createDateFull);

Full.prototype.showDate = function () {
  let date = new Date();
  this.hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(); 
  this.min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();  
  this.sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  this.msec = (date.getMilliseconds() < 10) ? '0' + date.getMilliseconds() : date.getMilliseconds();
  let formatDate = this.fullFormat ? this.hours + ':' + this.min + ':' + this.sec + ':' + this.msec : this.hours + ':' + this.min + ':' + this.sec;  
  this.createDate.innerHTML = `<p>${formatDate}</p>`;
};

Short.prototype.showDate = function () {
  let date = new Date();
  this.hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(); 
  this.min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  this.sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds(); 
  let formatDate =  this.fullFormat ? this.hours + ':' + this.min + ':' +this.sec : this.hours + ':' + this.min;  
  this.createDate.innerHTML = `<p>${formatDate}</p>`;
};

createDateShort.addEventListener('click', () => {
  short.switchFormat();
});

createDateFull.addEventListener('click', () => {
  full.switchFormat();
});

setInterval(() => {
  full.showDate();
  short.showDate();
}, 1000);











