const courses = [
  {
    name:'Javascript Course',price:179
  },
  {
    name:'ReactJS Course',price:199
  },
  {
    name:'Bootstrap Course',price:249
  },
  {
    name:'HTML Course',price:399
  },
  {
    name:'CSS Course',price:499
  },
];

function displayList() {

  const ol = document.querySelector('.list');

  courses.forEach( course => {

    const li = document.createElement('li');
    li.classList.add('listItems');
    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement('span');
    span.classList.add('price');
    const cost = document.createTextNode('Price-'+course.price);// same as in c.log()
    span.appendChild(cost);
    // console.log(span);
    // console.log(li);

    li.appendChild(span);
    // console.log(li);

    // const na = document.createTextNode(' Jasvinder');
    // li.appendChild(na);
    // console.log(li); comment all below and check.

    // console.log(ol);
    ol.appendChild(li);
    // console.log(ol);

  });

}

// displayList();
window.addEventListener('load',displayList);// same as 52