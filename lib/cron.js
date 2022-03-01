const  { parse } = require ('./parser');
const  { process } = require ('./processor');
const { render } = require ('./renderer');

const cron = (expression) => {

    try {
        const input = parse(expression);
        const data = process(input);
        render(data);
    } catch (error) {
        console.error(error);
    }
}


module.exports =  { cron };