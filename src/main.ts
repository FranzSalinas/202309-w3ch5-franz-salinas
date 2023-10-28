/* eslint-disable no-new */
import { Header } from './components/header';
import { List } from './components/list';
import './scss/list.scss';
import './scss/header.scss';

function main() {
  console.log('Load main');

  new Header('.container');

  new List('.main-container');
}

main();
