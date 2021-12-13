import { Experience } from './interfaces/Experience';

export const employers: Experience[] = [
  {
    name: 'Rural Sourcing, Inc.',
    termLength: 'June 2018 - December 2021',
    role: 'Full Stack Analyst/Consultant',
    url: 'https://ruralsourcing.com',
    descriptions: [
      `\
Rural Sourcing is a U.S.-based IT/Development Consulting firm that has served \
many enterprise-level clients, such as ParkMobile, Cars.com, and Southwest Airlines.`,
      `\
Having consulted for multiple clients at RSI, including a Fortune 500 company where \
I worked on their native/hero ad campaigns, and on other clients, where I helped develop \
their email and SMS systems, I gained crucial knowledge in creating and maintaining \
enterprise-level codebases.`
    ],
  },
  {
    name: 'JumpCloud',
    termLength: 'December 2021 - Present',
    role: 'Front-End UI Engineer',
    url: 'https://jumpcloud.com',
    descriptions: [
      `\
JumpCloud provides IT administrators and their organizations with an all-in-one cloud directory, \
user access/identity, resource, and device management, all from a single platform, and is used by \
over 150,000 organizations.`,
      `\
I currently work in a Vue.js Front-End engineering role for their Cloud Directory Services platform.`
    ],
  }
];