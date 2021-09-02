const data = document.querySelector('.date');
const curDate = document.querySelector('.cur__date');
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const curGuar = document.querySelector('.cur__guar');
const curGuar2 = document.querySelector('.cur__guar2');
const curGuar3 = document.querySelector('.cur__guar3');
const curGuar4 = document.querySelector('.cur__guar4');
const curGuar5 = document.querySelector('.cur__guar5');
const curGuar6 = document.querySelector('.cur__guar6');
const curGuar7 = document.querySelector('.cur__guar7');
const form = document.querySelector('#guard');
const btnZp = document.querySelector('#zp');
const btnZpHead = document.querySelector('.zp');
const btnStat = document.querySelector('.stat');
const hide = document.querySelector('.hide');
const info = document.querySelector('.info');
const math = document.querySelector('.math');
const calender = document.querySelector('.calendar');
const curGuars = document.querySelectorAll('.cur__guar');
const ochran = document.querySelector('.ochran');

btnZpHead.addEventListener('click', function() {
  math.scrollIntoView({behavior: 'smooth'});
  hide.innerHTML = '';
});

btnStat.addEventListener('click', function() {
  info.scrollIntoView({behavior: 'smooth'});
});


class Guard {
  constructor(firstname, lastname, number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.number = number;
  }
  dates(year,month, day) {
    return new Date (year,month, day);
  }
}

const vasiliy = new Guard('Василий', 'Иванович', '+7 (978) 111-11-11');

const petr = new Guard('Петр', 'Романович', '+7 (978) 111-11-11');

const vadim = new Guard('Вадим', 'Михайлович', '+7 (978) 111-11-11');

console.log (vasiliy, petr, vadim);

hide.innerHTML = '';


//Data
let date = new Date();
const options = {
    day:'numeric',
    month: 'long',
    weekday: 'long',
    hour:'numeric',
    minute:'numeric',

};

const options2 = {
  month: 'long',
};

const options3 = {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
}
const date1 = vasiliy.dates(2021,07,01);
const date2 = petr.dates(2021,07,02);
const date3 = vadim.dates(2021,07,03);

console.log (date1, date2, date3);

const calcDaysPressed = (dat1, dat2) =>Math.trunc(Math.abs(dat2 - dat1) / (1000 * 60 * 60 * 24));

const daysPressed1 = calcDaysPressed (date1, date);

const daysPressed2 = calcDaysPressed (date2, date);

const daysPressed3 = calcDaysPressed (date3, date);



if (date1 === date || daysPressed1 % 3 ===0) {
  curGuar.textContent = `Сегодня дежурит ${vasiliy.firstname} ${vasiliy.lastname}`;
  curGuar2.textContent = `Завтра дежурит ${petr.firstname} ${petr.lastname}`;
  curGuar3.textContent = `Послезавтра дежурит ${vadim.firstname} ${vadim.lastname}`;
  curGuar4.textContent = `Позавчера дежурил ${petr.firstname} ${petr.lastname}`;
  curGuar5.textContent = `Вчера дежурил ${vadim.firstname} ${vadim.lastname}`;

}

else if (date2 === date || daysPressed2 % 3 ===0) {
  curGuar.textContent = `Сегодня дежурит ${petr.firstname} ${petr.lastname}`;
  curGuar2.textContent = `Завтра дежурит ${vadim.firstname} ${vadim.lastname}`;
  curGuar3.textContent = `Послезавтра дежурит ${vasiliy.firstname} ${vasiliy.lastname}`;
  curGuar4.textContent = `Позавчера дежурил ${vadim.firstname} ${vadim.lastname}`;
  curGuar5.textContent = `Вчера дежурил ${vasiliy.firstname} ${vasiliy.lastname}`;
}


else if (date3 === date || daysPressed3 % 3 ===0) {
  curGuar.textContent = `Сегодня дежурит ${vadim.firstname} ${vadim.lastname}`;
  curGuar2.textContent = `Завтра дежурит ${vasiliy.firstname} ${vasiliy.lastname}`;
  curGuar3.textContent = `Послезавтра дежурит ${petr.firstname} ${petr.lastname}`;
  curGuar4.textContent = `Позавчера дежурил ${vasiliy.firstname} ${vasiliy.lastname}`;
  curGuar5.textContent = `Вчера дежурил ${petr.firstname} ${petr.lastname}`;
}





data.textContent = ` Сегодня ${new Intl.DateTimeFormat('ru-RU', options).format(date)}`;



//Slider


let curSlide = 0;
const maxSlide = slides.length;


const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  
  goToSlide(0);

  
  //Next slide
  
  const nextSlide = function () {
    if (curSlide === maxSlide - 3) {
      curSlide = 0;
    } else {
      curSlide++;

    }
  
    goToSlide(curSlide);
  
 
  };
  
  //Prev slide
  
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else if(curSlide ===3) {
      curSlide = 0;
    }
      else {
      curSlide--;
      console.log(curSlide)
    }
  
    goToSlide(curSlide);
    
    
  };
  
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  
  //With keaboard
  
  document.addEventListener("keydown", function (e) {
    e.preventDefault()
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
  


  const month = date.getMonth();
  console.log (month);

 
//Рассчитать зарплату

//Отображение зарплаты



let f = form.value;

function displayZp(sum, number) {
  let zpp = `Зарплата ${form.value} за ${new Intl.DateTimeFormat('ru-RU', options2).format(date)}: ${sum} рублей за ${number} смен`;
      hide.innerHTML = zpp;
};

btnZp.addEventListener('click', function (e) {
  e.preventDefault();

  if (month === 8 || month === 10 || month === 3|| month === 5) {
    displayZp (8000,10);
    
  }
  else if (month===1) {
    if (f=='Василия Ивановича') {
      displayZp(7200,9);
    }
    else if (f =='Петра Романовича') {
      displayZp(7200,9);
    }
    else if (f='Вадима Михайловича') {
      displayZp(8000,10);
    }
  }
else if (month===7 || month===0) {
    if (f=='Василия Ивановича') {
    displayZp(8800, 11);
  }
  else if (f =='Петра Романовича') {
    displayZp(8000,10);
  }
  else if (f='Вадима Михайловича') {
    displayZp (8000,10);
  }
}

else if (month===9) {
  if (f=='Василия Ивановича') {
    displayZp (8000,10);
  }
  else if (f =='Петра Романовича') {
    displayZp (8000,10);
  }
  else if (f='Вадима Михайловича') {
    displayZp (8000,10);
  }
}

else if (month===11) {
  if (f=='Василия Ивановича') {
    displayZp (8000,10);
  }
  else if (f =='Петра Романовича') {
    displayZp (8000,10);
  }
  else if (f='Вадима Михайловича') {
    displayZp (8800,11);
  }
}
});