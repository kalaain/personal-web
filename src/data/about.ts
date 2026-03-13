import javascriptLogo from '../assets/coreSkills/javascript-logo-svgrepo-com.svg'
import typescriptLogo from '../assets/coreSkills/TypeScript.svg'
import reactLogo from '../assets/coreSkills/React.svg'
import nodeLogo from '../assets/coreSkills/Node.js.svg'
import pythonLogo from '../assets/coreSkills/Python.svg'
import tailwindLogo from '../assets/coreSkills/Tailwind CSS.svg'

export const briefBio =
  'Saya memiliki ketertarikan besar pada web development sejak pertama kali belajar JavaScript. Berpengalaman membangun aplikasi web modern dari tahap perencanaan, implementasi antarmuka, hingga integrasi API dengan fokus pada performa dan pengalaman pengguna.'

export type WorkPrinciple = {
  title: string
  description: string
}

export const workPrinciples: WorkPrinciple[] = [
  {
    title: 'Timeliness',
    description: 'Menyelesaikan pekerjaan sesuai timeline yang disepakati.',
  },
  {
    title: 'Attention to Detail',
    description: 'Teliti pada kualitas UI, struktur kode, dan konsistensi hasil.',
  },
  {
    title: 'Clear Communication',
    description: 'Komunikasi progres yang jelas, terbuka, dan terarah.',
  },
]

export type CoreSkill = {
  name: string
  image: string
}

export const coreSkills = [
  { name: 'JavaScript', image: javascriptLogo },
  { name: 'TypeScript', image: typescriptLogo },
  { name: 'React', image: reactLogo },
  { name: 'Node.js', image: nodeLogo },
  { name: 'Python', image: pythonLogo },
  { name: 'Tailwind CSS', image: tailwindLogo },
] satisfies CoreSkill[]
