let createDate = document.querySelector('p');
let isTrue = true;

function Clock(elem) {
  this.createDate = elem;
};

Clock.prototype.showDate = function () {
	let dateFormat = new Date();
	this.dateArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
}

function Full(elem){
	Clock.call(this, elem);
}

Full.prototype = Object.create(Clock.prototype);

Full.prototype.showDate = function () {
  let date = new Date();
  let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(); 
  let min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();  
  let sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  let formatDate = hours + ':' + min + ':' + sec;  
	this.createDate.innerHTML = `<p>${formatDate}</p>`;
};

function Short(elem){
	Clock.call(this, elem);
}

Short.prototype = Object.create(Clock.prototype);

Short.prototype.showDate = function () {
  let date = new Date();
  let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();  
  let min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  let formatDate = hours + ':' + min;  
	this.createDate.innerHTML = `<p>${formatDate}</p>`;
};

createDate.addEventListener('click', (e) => {
  if(e.target.tagName === 'P') {
    isTrue = !isTrue;
  }
})

let full = new Full(createDate);
let short = new Short(createDate);

setInterval(() => {
  isTrue === true ? full.showDate() : short.showDate() 
}, 500);











