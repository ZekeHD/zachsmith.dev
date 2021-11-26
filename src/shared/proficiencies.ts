interface Proficiency {
  title: string;
  techs: {
    name: string;
    iconName: string;
    years: number;
    note?: string | undefined;
  }[];
};

const proficiencies: Proficiency[] = [
  {
    title: 'JS Frameworks',
    techs: [
      {
        name: 'Vue.js',
        iconName: 'vue.svg',
        note: '(my fave \u2764)',
        years: 2,
      },
      {
        name: 'Angular/JS',
        iconName: 'angular.svg',
        years: 3,
      }
    ]
  },
  {
    title: 'Web Technologies/Tools',
    techs: [
      {
        name: 'HTML',
        iconName: 'html.svg',
        years: 6,
      },
      {
        name: 'CSS',
        iconName: 'css.svg',
        years: 6,
      },
      {
        name: 'JavaScript',
        iconName: 'javascript.png',
        years: 5,
      },
      {
        name: 'TypeScript',
        iconName: 'typescript.svg',
        years: 2,

      },
      {
        name: 'SASS/SCSS',
        iconName: 'sass.svg',
        years: 3,
      },
      {
        name: 'NodeJS',
        iconName: 'node.svg',
        years: 4,
      },
      {
        name: 'Bitbucket',
        iconName: 'bitbucket.svg',
        years: 3,
      },
      {
        name: 'Github',
        iconName: 'git.svg',
        years: 5,
      },
    ]
  },
  {
    title: 'Integrations/Cloud',
    techs: [
      {
        name: 'AWS',
        iconName: 'aws.svg',
        years: 2,
      },
      {
        name: 'MongoDB',
        iconName: 'mongodb.svg',
        years: 2,
      },
      {
        name: 'Dialogflow',
        iconName: 'dialogflow.svg',
        years: 2,
      },
      {
         name: 'Twilio',
         iconName: 'twilio.svg',
         years: 2,
      }
    ],
  }
];

export { proficiencies, Proficiency };