/* eslint-disable no-new */
import { Header } from './components/header';
import { List } from './components/list';
import './scss/list.scss';
import './scss/header.scss';
import './scss/card.scss';
import { Footer } from './components/footer';

function main() {
  console.log('Load main');

  new Header('.container');

  new List('.main-container');

  new Footer('.ul-list');
}

main();
