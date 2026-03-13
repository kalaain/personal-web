import ecommercePreview from '../assets/projects/project-ecommerce.jpg'
import dashboardPreview from '../assets/projects/project-dashboard.webp'
import bookingPreview from '../assets/projects/project-booking.jpg'
import analyticsPreview from '../assets/projects/project-analytics.jpg'

export type PortfolioProject = {
  id: string
  label: string
  title: string
  projectBrief: string
  technologies: string[]
  situation: string
  task: string
  action: string
  result: string
  image: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'ecommerce-platform',
    label: 'Web case study',
    title: 'E-commerce Platform',
    projectBrief:
      'Mengembangkan platform e-commerce khusus untuk kolektor Skullpanda yang ingin membeli, menjual, dan berburu seri edisi terbatas secara online. Platform ini dirancang untuk menghadirkan pengalaman belanja yang fun dan visual, sesuai dengan karakter unik dari koleksi Skullpanda.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    situation:
      'Membuat pengalaman belanja koleksi Skullpanda yang terasa seperti “treasure hunting” digital bagi para collector.',
    task:
      'Saya bertanggung jawab membangun front-end dan back-end serta memastikan integrasi ke sistem inventori dan pembayaran berjalan mulus.',
    action:
      'Saya merancang UI responsif dengan React, membangun REST API dengan Node.js dan MongoDB, mengoptimalkan performa deployment di AWS, serta berkolaborasi erat dengan tim desain dan QA untuk standar usability dan accessibility.',
    result:
      'Proyek selesai tepat waktu dan menghasilkan kenaikan penjualan online 35% pada 3 bulan pertama, dengan umpan balik pengguna yang menyoroti kecepatan serta kemudahan navigasi.',
    image: ecommercePreview,
  },
  {
    id: 'ops-dashboard',
    label: 'Product case study',
    title: 'Hirono Sales Dashboard',
    projectBrief:
      'Dashboard ini membantu memvisualisasikan data penjualan Hirono sehingga tim dapat memahami kondisi bisnis dengan lebih cepat dan membuat keputusan berdasarkan data.',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    situation:
      'Data penjualan sebelumnya masih tersebar di beberapa sumber sehingga cukup sulit untuk memantau performa penjualan secara menyeluruh.',
    task:
      'Mengembangkan tampilan dashboard dengan grafik dan ringkasan data untuk menampilkan informasi penting seperti total penjualan, tren penjualan, serta distribusi produk terjual.',
    action:
      'Saya membangun modul chart interaktif, sistem filter dinamis, endpoint agregasi data, dan strategi cache untuk menjaga performa tetap responsif.',
    result:
      'Dashboard membantu menyederhanakan proses pemantauan penjualan sehingga informasi dapat diakses dengan lebih cepat dan mudah dipahami.',
    image: dashboardPreview,
  },
  {
    id: 'booking-app',
    label: 'UX case study',
    title: 'Service Booking Application',
    projectBrief:
      'Aplikasi booking layanan berbasis web untuk membantu pengguna melakukan reservasi dan pelacakan jadwal secara praktis.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    situation:
      'Proses booking manual menyebabkan banyak bentrok jadwal dan keterlambatan konfirmasi ke pelanggan.',
    task:
      'Saya diminta membangun alur booking end-to-end yang sederhana namun tetap andal untuk volume pengguna yang meningkat.',
    action:
      'Saya merancang flow pemesanan bertahap, validasi slot jadwal real-time, sistem notifikasi status booking, dan dashboard admin untuk monitoring.',
    result:
      'Tingkat bentrok jadwal turun drastis, proses reservasi jadi lebih cepat, dan kepuasan pengguna meningkat dari feedback bulanan.',
    image: bookingPreview,
  },
  {
    id: 'analytics-reports',
    label: 'Data case study',
    title: 'Analytics & Reporting Portal',
    projectBrief:
      'Portal analitik untuk menampilkan performa bisnis lintas kanal melalui laporan visual yang mudah dieksplorasi.',
    technologies: ['TypeScript', 'React', 'Python', 'AWS'],
    situation:
      'Stakeholder membutuhkan laporan berkala yang sebelumnya dibuat manual sehingga prosesnya lambat dan tidak konsisten.',
    task:
      'Saya diminta membuat sistem pelaporan yang otomatis, akurat, dan mudah diakses oleh tim non-teknis.',
    action:
      'Saya membangun pipeline pengolahan data, komponen visualisasi modular, serta fitur export laporan untuk kebutuhan presentasi dan evaluasi.',
    result:
      'Pelaporan menjadi lebih cepat dan konsisten, membantu tim mengambil keputusan berbasis data dengan confidence lebih tinggi.',
    image: analyticsPreview,
  },
]
