export const projects = [
  {
    id: 1,
    slug: 'design-system-dashboard',
    title: 'Design System Dashboard',
    summary:
      'Dashboard untuk memantau konsistensi komponen UI di berbagai produk dengan integrasi analitik real-time.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    problem:
      'Tim produk mengalami inkonsistensi komponen antarmuka antar aplikasi yang menyebabkan biaya maintenance meningkat dan pengalaman pengguna yang tidak selaras.',
    solution:
      'Membangun dashboard berbasis React yang memvisualisasikan status komponen dari repositori design system dan memberikan peringatan otomatis saat terjadi deviasi.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    result:
      'Konsistensi komponen meningkat 35% dan waktu on-boarding developer baru berkurang 20% karena dokumentasi visual yang terintegrasi.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    description:
      'Sebuah pusat kontrol terpadu yang menghubungkan dokumentasi design system dengan data penggunaan komponen secara real-time.',
    demoUrl: 'https://example.com/design-system-dashboard',
    githubUrl: 'https://github.com/jultdev/design-system-dashboard',
  },
  {
    id: 2,
    slug: 'workflow-automation-suite',
    title: 'Workflow Automation Suite',
    summary:
      'Platform automasi untuk menyederhanakan alur kerja lintas departemen dengan rule builder drag-and-drop.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    problem:
      'Perusahaan mengalami bottleneck karena proses approval manual dan tidak adanya visibilitas status tugas antar tim.',
    solution:
      'Mengimplementasikan builder berbasis kanban yang memungkinkan pengguna membuat rule automasi tanpa kode dan mengintegrasikan notifikasi Slack secara instan.',
    technologies: ['React', 'Redux Toolkit', 'Node.js', 'PostgreSQL'],
    result:
      'Waktu siklus approval turun hingga 50% dan tingkat kepatuhan SLA meningkat dengan audit trail otomatis.',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'PostgreSQL'],
    description:
      'Produk ini memadukan orkestrasi tugas dan automasi komunikasi untuk menjaga arus kerja tetap transparan.',
    demoUrl: 'https://example.com/workflow-automation',
    githubUrl: 'https://github.com/jultdev/workflow-automation-suite',
  },
  {
    id: 3,
    slug: 'customer-insights-portal',
    title: 'Customer Insights Portal',
    summary:
      'Portal analitik pelanggan dengan personalisasi rekomendasi dan pelacakan KPI secara interaktif.',
    image:
      'https://images.unsplash.com/photo-1508387028805-5e5383340b00?auto=format&fit=crop&w=1200&q=80',
    problem:
      'Tim pemasaran kesulitan memahami perilaku pelanggan dan mengukur dampak kampanye secara real-time.',
    solution:
      'Membangun portal analitik dengan visualisasi interaktif dan segmentasi pelanggan berbasis machine learning ringan.',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Recharts'],
    result:
      'Retensi pelanggan meningkat 18% dan waktu pengambilan keputusan pemasaran berkurang drastis dengan dashboard KPI harian.',
    techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Recharts'],
    description:
      'Portal ini menggabungkan data transaksional dan feedback pelanggan untuk menghasilkan rekomendasi yang dapat ditindaklanjuti.',
    demoUrl: 'https://example.com/customer-insights',
    githubUrl: 'https://github.com/jultdev/customer-insights-portal',
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
