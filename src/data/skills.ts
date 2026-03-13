export type SkillCategory = {
  id: string
  title: string
  summary: string
  details: string
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Front-End Skills',
    summary:
      'Membangun antarmuka yang responsif, cepat, dan interaktif menggunakan praktik modern web development.',
    details: 'HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, responsive UI/UX implementation.',
  },
  {
    id: 'backend',
    title: 'Back-End Skills',
    summary:
      'Mengembangkan API dan logic server-side yang terstruktur untuk kebutuhan aplikasi skala kecil hingga menengah.',
    details: 'Node.js, Express.js, Python, Django basics, REST API, authentication, database integration.',
  },
  {
    id: 'devops-tools',
    title: 'DevOps & Tools',
    summary:
      'Mengoptimalkan workflow development dari kolaborasi kode sampai deployment secara terukur dan stabil.',
    details: 'Git, GitHub, Docker basics, CI/CD concepts, AWS fundamentals, automated build pipelines.',
  },
]
