const chalk = require("chalk");

const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

const bio = `${italic(`
I'm an Electronics and Communication Engineer from Bangalore, India.
🔭 I'm currently working on Data Structures and Algorithms
🌱 I'm currently learning everything 🤣
👯 I'm looking to collaborate with other content creators
🥅 2022 Goals: Contribute more to Open Source projects
⚡ Fun fact: I love anime 🍿`)}`;

const social = `
${githubClr(` GitHub `)}  ${dim(`https://github.com/thatbeautifuldream`)}
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/dryruncatch`)}
${purple(` Links `)}    ${dim(`https://milind.bio.link`)}
`;

module.exports = {
  bio,
  social,
};
