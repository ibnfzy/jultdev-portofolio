export const aboutProfile = {
  title: 'Tentang Saya',
  headline: 'Menghubungkan desain sistematis dengan eksekusi front-end yang presisi',
  description:
    'Saya seorang Frontend Engineer yang berfokus pada pengiriman pengalaman produk yang konsisten, dapat diandalkan, dan mudah dikembangkan. Saya percaya dokumentasi yang rapi dan komunikasi yang jelas merupakan kunci kolaborasi lintas tim.',
  highlights: [
    'Membangun dan memelihara design system lintas produk',
    'Mengoptimalkan performa dan aksesibilitas sejak tahap awal',
    'Berkoordinasi erat dengan tim produk, desain, dan backend',
    'Mendesain workflow otomasi untuk mempercepat rilis',
  ],
  cta: {
    label: 'Pelajari perjalanan lengkap saya',
    href: '/about',
  },
};

export const skillCategories = [
  {
    name: 'Frontend',
    description: 'Teknologi inti untuk menyusun UI modern dan responsif.',
    skills: [
      { name: 'React', level: 'Expert', percentage: 90 },
      { name: 'TypeScript', level: 'Advanced', percentage: 80 },
      { name: 'Tailwind CSS', level: 'Advanced', percentage: 85 },
    ],
  },
  {
    name: 'Workflow',
    description: 'Perangkat untuk meningkatkan kolaborasi dan reliabilitas rilis.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', percentage: 85 },
      { name: 'Jest & Testing Library', level: 'Intermediate', percentage: 70 },
      { name: 'CI/CD Pipelines', level: 'Intermediate', percentage: 65 },
    ],
  },
  {
    name: 'Kolaborasi Produk',
    description: 'Pendekatan lintas fungsi untuk menghadirkan nilai bisnis.',
    skills: [
      { name: 'Design Handoff', level: 'Advanced', percentage: 75 },
      { name: 'Product Discovery', level: 'Intermediate', percentage: 68 },
      { name: 'Stakeholder Communication', level: 'Advanced', percentage: 80 },
    ],
  },
];

export const experienceTimeline = [
  {
    id: 'exp-1',
    period: '2023 - Sekarang',
    title: 'Senior Frontend Engineer',
    company: 'InnoTech Labs',
    description:
      'Memimpin inisiatif design system dan mempercepat pengiriman fitur dengan mengadopsi arsitektur komponen yang scalable.',
    achievements: [
      'Mengurangi waktu rilis komponen baru hingga 40%',
      'Menerapkan standar aksesibilitas WCAG 2.1 pada produk utama',
    ],
  },
  {
    id: 'exp-2',
    period: '2021 - 2023',
    title: 'Frontend Engineer',
    company: 'Nusantara Digital',
    description:
      'Mengembangkan dashboard analitik dan fitur kolaborasi real-time untuk platform SaaS yang melayani ribuan pengguna aktif.',
    achievements: [
      'Meningkatkan retensi pengguna sebesar 15% melalui iterasi UX',
      'Menyusun dokumentasi developer-first untuk handoff lintas tim',
    ],
  },
  {
    id: 'exp-3',
    period: '2019 - 2021',
    title: 'UI Developer',
    company: 'Kreasi Studio',
    description:
      'Bekerja bersama tim kreatif untuk menghadirkan landing page interaktif dan kampanye microsite.',
    achievements: [
      'Mengelola proyek multi-klien dengan SLA ketat',
      'Memenangkan penghargaan Best Digital Campaign 2020',
    ],
  },
];
