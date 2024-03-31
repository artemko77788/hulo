const firstBtn1 = document.getElementById('button1');

firstBtn1.addEventListener('click', function () {
  let descriptionWrapper = document.querySelector('.hide1');

  let descriptionHeight = descriptionWrapper.scrollHeight;

  if (
    descriptionWrapper.style.maxHeight === '0px' ||
    descriptionWrapper.style.maxHeight === '422px'
  ) {
    descriptionWrapper.style.maxHeight = descriptionHeight + 'px';
    firstBtn1.classList.remove('activeBtn');
  } else {
    descriptionWrapper.style.maxHeight = '0';
    firstBtn1.classList.add('activeBtn');
  }
});

const firstBtn2 = document.getElementById('button2');

firstBtn2.addEventListener('click', function () {
  let descriptionWrapper = document.querySelector('.hide2');

  let descriptionHeight = descriptionWrapper.scrollHeight;

  if (
    descriptionWrapper.style.maxHeight === '0px' ||
    descriptionWrapper.style.maxHeight === '422px'
  ) {
    descriptionWrapper.style.maxHeight = descriptionHeight + 'px';
    firstBtn2.classList.remove('activeBtn');
  } else {
    descriptionWrapper.style.maxHeight = '0';
    firstBtn2.classList.add('activeBtn');
  }
});

const firstBtn3 = document.getElementById('button3');

firstBtn3.addEventListener('click', function () {
  let descriptionWrapper = document.querySelector('.hide3');

  let descriptionHeight = descriptionWrapper.scrollHeight;

  if (
    descriptionWrapper.style.maxHeight === '0px' ||
    descriptionWrapper.style.maxHeight === '422px'
  ) {
    descriptionWrapper.style.maxHeight = descriptionHeight + 'px';
    firstBtn3.classList.remove('activeBtn');
  } else {
    descriptionWrapper.style.maxHeight = '0';
    firstBtn3.classList.add('activeBtn');
  }
});
