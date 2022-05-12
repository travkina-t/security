const data = document.querySelector('.date');
const curDate = document.querySelector('.cur__date');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const curGuar = document.querySelector('.cur__guar');
const curGuar2 = document.querySelector('.cur__guar2');
const curGuar3 = document.querySelector('.cur__guar3');
const curGuar4 = document.querySelector('.cur__guar4');
const curGuar5 = document.querySelector('.cur__guar5');


const form = document.querySelector('#guard');
const formMonth = document.querySelector('#month');

const btnZp = document.querySelector('.zp');

const hide = document.querySelector('.hide');



class Guard {
  constructor(firstname, lastname, number, countZp) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.number = number;
    this.countZp=countZp;
  }
  dates(year,month, day) {
    return new Date (year,month, day);
  }

  
}

const vasiliy = new Guard('Василий', 'Иванович', '+7 (978) 111-11-11', 0);

const petr = new Guard('Петр', 'Романович', '+7 (978) 111-11-11', 0);

const vadim = new Guard('Вадим', 'Михайлович', '+7 (978) 111-11-11', 0);



//Navigation

const about = document.querySelector('.about');
const nav = document.querySelector('#navbar');

const initialCoords = about.getBoundingClientRect();

window.addEventListener('scroll', function() {
  console.log('ns yf ghfd');

  if(this.window.scrollY >= initialCoords.top) {
    console.log('fkkf');
    nav.style.zIndex='20';
  }
  else {
    nav.style.zIndex='0';
  }

});


//Data

let date = new Date();

const displayDate = function() {
  let date = new Date();
const options = {
    day:'numeric',
    month: 'long',
    weekday: 'long',
    hour:'numeric',
    minute:'numeric',
    second: 'numeric'

};
  data.textContent = `Сегодня ${new Intl.DateTimeFormat('ru-RU', options).format(date)}`;

};

setInterval(displayDate, 1000);





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




  





//Slider


let curSlide = 0;
const maxSlide = slides.length;


const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => {
          (s.style.transform = `translateX(${100 * (i - slide)}%)`);

      }
    );


    
  };
  
  goToSlide(0);

  
  //Next slide
  
  const nextSlide = function () {
    if (curSlide >= maxSlide - 3) {
      curSlide = 0;
      console.log(curSlide);
    } else {
        console.log(curSlide);
      curSlide++;

    }
  
    goToSlide(curSlide);
  
 
  };
  
  //Prev slide
  
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide-1;
      console.log(curSlide)
    } else if(curSlide ===3 ) {
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
    e.preventDefault();
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

//Count Zp

const month = date.getMonth();



//Рассчитать зарплату

//Отображение зарплаты



let f = form.value;
console.log(f);
let m = formMonth.value;
console.log(m);


let dateZp = new Date(2022, `${m}`,1);



const options2 = {
  month: 'long',
};


function displayZp(sum, number) {
 
let zpp = `Зарплата ${form.value} за ${new Intl.DateTimeFormat('ru-RU', options2).format(dateZp)}: ${sum} рублей за ${number} смен`;
    hide.innerHTML = zpp;
    hide.classList.add('anim');

    setTimeout(() => {
      hide.classList.remove('anim');
    }, 1500);
};

btnZp.addEventListener('click', function (e) {
e.preventDefault();
m = formMonth.value;
f = form.value;
dateZp = new Date(2022, `${m}`,1);


if (m === '8' || m === '10' || m === '3'|| m === '5') {
  displayZp (8000,10);
  
}
else if (m==='1') {
  if (f=='Василия Ивановича') {
    displayZp(7200,9);
  }
  else if (f =='Петра Романовича') {
    displayZp(8000,10);
  }
  else if (f='Вадима Михайловича') {
    displayZp(7200,9);
  }
}
else if (m==='4' || m==='0' || m==='9') {
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

else if (m==='6' || m==='11') {
if (f=='Василия Ивановича') {
  displayZp (8000,10);
}
else if (f =='Петра Романовича') {
  displayZp (8800,11);
}
else if (f='Вадима Михайловича') {
  displayZp (8000,10);
}
}

else if (m==='7' ||m==='2') {
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