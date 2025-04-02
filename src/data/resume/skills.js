const skills = [
  {
    title: 'Javascript',
    competency: 4.5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Java',
    competency: 4.3,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 4.4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4.7,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'GSAP',
    competency: 4.9,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3.8,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 4.7,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Firebase',
    competency: 4.6,
    category: ['Web Development', 'Databases'],
  },

  {
    title: 'Express.JS',
    competency: 4.5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 4.3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML',
    competency: 4.8,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'CSS',
    competency: 4.6,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'TailwindCss',
    competency: 4.6,
    category: ['Web Development'],
  },
  {
    title: 'Vs Code',
    competency: 4.9,
    category: ['Tools'],
  },
  {
    title: 'Bootstrap',
    competency: 4.4,
    category: ['Web Development'],
  },
  {
    title: 'Yarn',
    competency: 4.5,
    category: ['Tools'],
  },
  {
    title: 'Vite',
    competency: 4.9,
    category: ['Tools'],
  },
  {
    title: 'Npm',
    competency: 4.8,
    category: ['Tools'],
  },
  {
    title: 'Vercel',
    competency: 4.3,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
