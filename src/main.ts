/* eslint-disable no-new */
import { List } from './components/list';
import './scss/list.scss';

function main() {
  console.log('Load main');

  new List('.container');
}

main();
