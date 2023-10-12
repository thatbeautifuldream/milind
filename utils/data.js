const chalk = require("chalk");

const dim = chalk.dim;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const linkedinClr = chalk.hex(`#0077b5`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

const bio = `
I'm Milind, a highly skilled Software Engineer hailing from Dhanbad, India.
I bring a wealth of experience in crafting innovative solutions for startups,
with a proven track record of success with respect to full-stack engineering.
My expertise lies in building robust software that drives business growth.

I am currently contributing my talents to Startup Hire,
where I am passionately involved in creating cutting-edge software solutions.
My previous role at Locus Connect equipped me with a deep understanding of
frontend technologies and DevOps practices, allowing me to deliver exceptional results.

I am enthusiastic about collaborating with forward-thinking companies and contributing
my skills to projects that require technical excellence and creativity.
If you're seeking a dedicated Software Engineer who can bring fresh perspectives and
technical expertise to your team,I would love to connect.

Book a meeting with me: ${dim(`https://calendly.com/milindmishra/30min ↗`)}
`;

const social = `
${githubClr(` GitHub `)} ${dim(`https://github.com/thatbeautifuldream ↗`)}
${linkedinClr(` LinkedIn `)} ${dim(`https://linkedin.com/in/mishramilind ↗`)}
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/milindstwt ↗`)}
${purple(` Portfolio `)} ${dim(`https://milindmishra.com ↗`)}
`;

module.exports = { bio, social };
