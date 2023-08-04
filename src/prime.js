#!/usr/bin/env node
import { getRandomNumber } from '../src/utils.js';
import run from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 0;
const maxRange = 100;

const isPrime = (number) => {
const limit = Math.sqrt(number);
if (number <= 1) {
return false;
}
for (let i = 2; i <= limit; i += 1) {
if (number % i === 0) {
return false;
}
}
return true;
};

const generateRound = () => {
const number = getRandomNumber(minRange, maxRange);
const question = number.toString();
const correctAnswer = isPrime(number) ? 'yes' : 'no';
return [question, correctAnswer];
};

export default () => {
run(description, generateRound);
};
