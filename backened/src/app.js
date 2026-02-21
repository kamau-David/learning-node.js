import express from "express";

import { convertToUSD } from './converter.js';
import { log, error } from './logger.js';

log("Server started");
error("Database connection failed");

const myMoney = 100;
const myCurrency = 'EUR';

const result = convertToUSD(myMoney, myCurrency);

console.log(`--- Currency Report ---`);
console.log(`Original: ${myMoney} ${myCurrency}`);
console.log(`Converted: ${result}`);

const app = express();



export default app;
