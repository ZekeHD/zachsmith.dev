interface Proficiency {
  title?: string;
  type: ProficiencyType,
  techs: {
    name: string;
    iconName: string;
    years: number;
    note?: string | undefined;
  }[];
};

enum ProficiencyType {
  Dev,
  Editing,
}

const devProficiencies: Proficiency[] = [
  {
    title: 'JS Frameworks',
    type: ProficiencyType.Dev,
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
    type: ProficiencyType.Dev,
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
    type: ProficiencyType.Dev,
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

const editingProficiencies: Proficiency[] = [
  {
    type: ProficiencyType.Editing,
    techs: [
      {
        name: 'Adobe Premiere Pro',
        iconName: 'premiere.svg',
        years: 4,
      },
      {
        name: 'Adobe After Effects',
        iconName: 'aftereffects.svg',
        years: 4,
      },
      {
        name: 'Adobe Photoshop',
        iconName: 'photoshop.svg',
        years: 3,
      },
      {
        name: 'Adobe Audition',
        iconName: 'audition.svg',
        years: 2,
      },
      {
        name: 'Sony Vegas Pro',
        iconName: 'vegas.png',
        years: 10,
      },
    ]
  },
]

export { devProficiencies, editingProficiencies, Proficiency, ProficiencyType };