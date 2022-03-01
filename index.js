#!/usr/bin/env node

const cac = require("cac");
const cli = cac()

const  { cron }  = require("./lib/cron");

cli.command("<exp>").action( exp => cron(exp))
cli.parse();