/*global console*/

import readlineSync from 'readline-sync';

export default () => {
	  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
	  const name = readlineSync.question('May I have your name? ');
	  console.log(`Hello, ${name}!`);
};
