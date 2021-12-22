let createDate = document.querySelector('p');

function Clock(elem) {
  this.createDate = elem;
  this.fullFormat = false;
  this.hours;
  this.min;
  this.sec;
}

function ClockWrapper(elem) {
	Clock.call(this, elem);

  this.switchFormat = function() {
    this.fullFormat = !this.fullFormat;
  }
  
  this.showDate = function () {
    let date = new Date();
    this.hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(); 
    this.min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();  
    this.sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    let formatDate = this.fullFormat ? this.hours + ':' + this.min + ':' + this.sec : this.hours + ':' + this.min;  
    this.createDate.innerHTML = `<p>${formatDate}</p>`;
  };
}

ClockWrapper.prototype = Object.create(Clock.prototype);

let clockWrapper = new ClockWrapper(createDate);


createDate.addEventListener('click', (e) => {
  if(e.target.tagName === 'P') {
    clockWrapper.switchFormat();
  }
});

setInterval(() => {
  clockWrapper.showDate() 
}, 500);











