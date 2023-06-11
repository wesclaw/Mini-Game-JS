


const time_text = document.getElementById('time_text')

const modal = document.querySelector('.modal');
const container_wrap_wrap = document.querySelector('.container-wrap-wrap');

const start = document.getElementById('start');
const full_wrapper = document.querySelector('.full-wrapper');



let timer = 6;

  time_text.style.display = 'block'
  setInterval(()=>{
    timer--
    time_text.textContent = timer
    if(timer<1){
      time_text.style.display = 'none'
      container_wrap_wrap.style.display = 'none';
      full_wrapper.style.display = 'block';
    }
  },1000)


const draggables = document.querySelectorAll('.draggable');
const wrapper = document.getElementById('container');

let blue = false;
let pink = false;
let purple = false;

draggables.forEach((draggable, index) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  draggable.addEventListener('mousedown', dragMouseDown);
  draggable.addEventListener('touchstart', dragMouseDown);

  function dragMouseDown(event) {
    event.preventDefault();
    draggable.style.position = 'absolute';
    pos3 = event.clientX || event.touches[0].clientX;
    pos4 = event.clientY || event.touches[0].clientY;
    draggable.style.left = pos3 - draggable.offsetWidth -0 + 'px';
    draggable.style.top = pos4 - draggable.offsetHeight -0 + 'px';
    document.addEventListener('mousemove', elementDrag);
    document.addEventListener('mouseup', stopElementDrag);
    document.addEventListener('touchmove', elementDrag, { passive: false });
    document.addEventListener('touchend', stopElementDrag);
  }

  function elementDrag(event) {
    event.preventDefault();
    pos1 = pos3 - (event.clientX || event.touches[0].clientX);
    pos2 = pos4 - (event.clientY || event.touches[0].clientY); 
    pos3 = event.clientX || event.touches[0].clientX;
    pos4 = event.clientY || event.touches[0].clientY;
    draggable.style.top = draggable.offsetTop -pos2 + 'px';
    draggable.style.left = draggable.offsetLeft -pos1 + 'px';
    const rect = draggable.getBoundingClientRect();
    const containerRect = wrapper.getBoundingClientRect();
    const x = rect.left - containerRect.left;
    const y = rect.top - containerRect.top;
    console.log('Relative position:', x, y);
  }

  function stopElementDrag() {
    document.removeEventListener('mousemove', elementDrag);
    document.removeEventListener('mouseup', stopElementDrag);
    document.removeEventListener('touchmove', elementDrag, { passive: false });
    document.removeEventListener('touchend', stopElementDrag);
    const rect = draggable.getBoundingClientRect();
    const containerRect = wrapper.getBoundingClientRect();
    const x = rect.left - containerRect.left;
    const y = rect.top - containerRect.top;
    console.log('Relative position:', x, y);
    if (index === 0 && x <= 6.0 && x >= 4.0 && y <= 350 && y >= 340) {
      blue = true;
    } else if (index === 1 && x <= 350 && x >= 320 && y <= 340 && y >= 320) {
      pink = true;
    } else if (index === 2 && x <= 6.5 && x >= 4 && y <= 310 && y >= 280) {
      purple = true;
    }
  }
});

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  const next_btn = document.getElementById('next_btn');
  const stage_two = document.querySelector('.stage-two')

  if (pink === true && blue === true && purple === true) {
    submit.textContent = 'You scored 100%';
    submit.style.background = 'rgba(69, 180, 69, 0.664)';
    next_btn.style.display = 'flex';
    stage_two.classList.add('class-for-all-stages');
    stage_two.style.opacity = 'unset'
  } else if (pink === true && blue === true && purple === false) {
    submit.textContent = 'Score 90%';
  } else if (pink === false && blue === true && purple === true) {
    submit.textContent = 'Score 90%';
  } else if (pink === true && blue === false && purple === true) {
    submit.textContent = 'Score 90%';
  } else if (pink === true && blue === false && purple === false) {
    submit.textContent = 'Score 80%';
  } else if (pink === false && blue === true && purple === false) {
    submit.textContent = 'Score 80%';
  } else if (pink === false && blue === false && purple === true) {
    submit.textContent = 'Score 80%';
  } else {
    submit.textContent = 'Score 0%';
  } 
});


