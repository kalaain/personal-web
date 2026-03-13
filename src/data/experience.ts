export type ExperienceItem = {
  id: string
  year: string
  title: string
  company: string
  duration: string
  responsibilities: string[]
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'senior-fullstack',
    year: '2024',
    title: 'Senior Full-Stack Developer',
    company: 'POPI MART',
    duration: '2024 - Present',
    responsibilities: [
      'Memimpin pengembangan fitur end-to-end untuk aplikasi web skala produksi dengan fokus performa dan maintainability.',
      'Mendesain arsitektur front-end dan API agar integrasi antar modul lebih konsisten serta mudah dikembangkan.',
      'Melakukan code review, mentoring developer junior, dan koordinasi lintas tim desain/QA agar release tepat waktu.',
    ],
  },
  {
    id: 'fullstack-developer',
    year: '2022',
    title: 'Full-Stack Developer',
    company: 'SUMBER MAKMUR JAYA',
    duration: '2022 - 2024',
    responsibilities: [
      'Membangun dashboard operasional berbasis React dan Node.js untuk monitoring data real-time.',
      'Mengembangkan layanan backend, autentikasi pengguna, dan integrasi database untuk kebutuhan bisnis harian.',
      'Mengoptimalkan alur deployment dan troubleshooting issue production agar downtime minimal.',
    ],
  },
  {
    id: 'freelance-web',
    year: '2021',
    title: 'Freelance Web Developer',
    company: 'Independent / Remote',
    duration: '2021 - 2022',
    responsibilities: [
      'Mengerjakan website company profile dan landing page untuk UMKM serta klien personal.',
      'Menyesuaikan UI responsif lintas perangkat dengan pendekatan mobile-first.',
      'Menjaga komunikasi proyek yang jelas dari discovery, revisi, hingga handover final ke klien.',
    ],
  },
]
