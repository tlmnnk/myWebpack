//jshint esversion:6
import _ from 'lodash';

function component() {
    const element = document.createElement('h1');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
