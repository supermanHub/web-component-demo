import _ from 'lodash';
import './style.css';

const component = function () {
  const elem = document.createElement('div');
  elem.innerHTML = _.concat([
    'Hello',
    'World'
  ]);
  elem.classList.add('hello');
  return elem;
};

document.body.appendChild(component());
