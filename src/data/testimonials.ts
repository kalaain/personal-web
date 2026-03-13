export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    quote:
      'Kolaborasi berjalan sangat rapi dari awal sampai akhir. Implementasi fitur cepat, komunikatif, dan hasil akhirnya melebihi ekspektasi tim kami.',
    name: 'labewbew satu karat',
    role: 'Product Manager',
    company: 'POPI MART',
  },
  {
    id: 't-2',
    quote:
      'Performa website meningkat signifikan setelah revamp. Pengguna merasa navigasi jauh lebih nyaman dan proses checkout jadi lebih lancar.',
    name: 'nyota putri padang',
    role: 'E-commerce Lead',
    company: 'Skullpanda',
  },
  {
    id: 't-3',
    quote:
      'Sangat detail dalam mengerjakan UI dan selalu memberi update progres yang jelas. Revisi pun ditangani cepat tanpa mengorbankan kualitas.',
    name: 'Sigit Isnaini',
    role: 'Founder',
    company: 'SUMBER MAKMUR JAYA',
  },
  {
    id: 't-4',
    quote:
      'Arsitektur front-end dan API yang dibangun memudahkan tim kami untuk scale fitur berikutnya. Dokumentasi juga sangat membantu proses handover.',
    name: 'Azima Baddie',
    role: 'Engineering Manager',
    company: 'Alwil Camp',
  },
]
