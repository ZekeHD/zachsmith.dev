interface Proficiency {
  title: string;
  techs: {
    name: string;
    iconName: string;
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
      },
      {
        name: 'Angular/JS',
        iconName: 'angular.svg',
      }
    ]
  },
  {
    title: 'Web Technologies/Tools',
    techs: [
      {
        name: 'HTML',
        iconName: 'html.svg',
      },
      {
        name: 'CSS',
        iconName: 'css.svg',
      },
      {
        name: 'JavaScript',
        iconName: 'javascript.svg'
      },
      {
        name: 'TypeScript',
        iconName: 'typescript.svg',
      },
      {
        name: 'SASS/SCSS',
        iconName: 'sass.svg',
      },
      {
        name: 'NodeJS',
        iconName: 'node.svg',
      },
      {
        name: 'Bitbucket',
        iconName: 'bitbucket.svg',
      },
      {
        name: 'Github',
        iconName: 'git.svg',
      },
    ]
  },
  {
    title: 'Integrations/Cloud',
    techs: [
      {
        name: 'AWS',
        iconName: 'aws.svg',
      },
      {
        name: 'MongoDB',
        iconName: 'mongodb.svg',
      },
      {
        name: 'Dialogflow',
        iconName: 'dialogflow.svg',
      },
      {
         name: 'Twilio',
         iconName: 'twilio.svg',
      }
    ],
  }
];

export { proficiencies, Proficiency };