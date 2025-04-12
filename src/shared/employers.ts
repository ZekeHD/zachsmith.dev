import { Experience } from './interfaces/Experience';

export const employers: Experience[] = [
  {
    name: 'LoCI Controls, Inc.',
    termLength: 'March 2025 - Present',
    role: 'Software Engineer',
    url: 'https://locicontrols.com',
    descriptions: [
      `\
LoCI Controls uses real-time data analysis and monitoring to maximize methane capture at landfills, automating \
well valve positions and empowering on-site teams with complete visibility into well and environmental conditions. \
We use cloud-based analytics to give well technicians and operators the tools they need to diagnose and fix \
problems at wells with less guess-based troubleshooting and more results.`,
    `\
I've been brought on to help develop and modernize the WellWatcher\u00ae platform, which gives on-site technicians \
insight on well quality, LoCI device health, and control over methane capture automation.`,
    ],
  },
  {
    name: 'JumpCloud',
    termLength: 'December 2021 - February 2025',
    role: 'Software Engineer II - III',
    url: 'https://jumpcloud.com',
    descriptions: [
      `\
JumpCloud provides IT administrators and their organizations with an all-in-one cloud directory, \
user access/identity, resource, and device management, all from a single platform, and is used by \
over 150,000 organizations.`,
      `\
I worked all over the application, but most recently I led the effort to transform our legacy \
List/Search APIs by implementing Cypress and functional test suites that define current behavior \
and expand its breadth of scope and functionality, making it more straightforward and easy to use for customers - \
becoming an SME in JumpCloud API and RPC development.`,
      `\
I also heavily contributed to the front-end repositories, including being the Feature Lead on multiple \
new features in our front-end monorepo and contributing to our UI Design System, which allows for seamless \
component integration across all of our Vue repositories.`,
    ],
  },
  {
    name: 'Sparq',
    termLength: 'June 2018 - December 2021',
    role: 'Full Stack Analyst/Consultant',
    url: 'https://www.teamsparq.com/',
    descriptions: [
      `\
Sparq (previously Rural Sourcing, Inc.) is a U.S.-based IT/Development Consulting firm that has served \
many enterprise-level clients, such as ParkMobile, Cars.com, and Southwest Airlines.`,
      `\
Having consulted for multiple clients at RSI, including a Fortune 500 company where \
I worked on their native/hero ad campaigns, and on other clients, where I helped develop \
their email and SMS systems, I gained crucial knowledge in creating and maintaining \
enterprise-level codebases.`,
    ],
  },
];