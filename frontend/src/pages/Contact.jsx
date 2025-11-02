import useContactForm from '../hooks/useContactForm.js';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/jultdev',
    description: 'Lihat proyek dan kontribusi open-source terbaru.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jultdev',
    description: 'Terhubung secara profesional dan diskusikan peluang kolaborasi.',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/6281234567890',
    description: 'Hubungi langsung untuk respons cepat melalui WhatsApp.',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jultdev',
    description: 'Ikuti update desain dan perjalanan kreatif harian.',
  },
];

export default function Contact() {
  const { register, errors, onSubmit, status, isSubmitting } = useContactForm();

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-16">
      <header className="flex flex-col gap-3 text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">Let&apos;s Collaborate</p>
        <h1 className="text-4xl font-display font-bold tracking-tight text-primary sm:text-5xl">
          Hubungi Saya
        </h1>
        <p className="text-base text-foreground/80 sm:text-lg">
          Tertarik bekerja sama atau punya pertanyaan? Kirim pesan melalui formulir di bawah ini atau gunakan tautan sosial untuk
          terhubung secara langsung.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:gap-16">
        <form onSubmit={onSubmit} className="flex flex-col gap-6 rounded-2xl border border-foreground/10 bg-background/80 p-8 shadow-sm">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-foreground">
              Nama
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Masukkan nama lengkap"
              className="rounded-lg border border-foreground/20 bg-background px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name', {
                required: 'Nama wajib diisi.',
                minLength: {
                  value: 2,
                  message: 'Nama harus berisi minimal 2 karakter.',
                },
              })}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="nama@email.com"
              className="rounded-lg border border-foreground/20 bg-background px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', {
                required: 'Email wajib diisi.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Masukkan alamat email yang valid.',
                },
              })}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-foreground">
              Pesan
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Ceritakan kebutuhan atau ide proyek kamu..."
              className="rounded-lg border border-foreground/20 bg-background px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              aria-invalid={errors.message ? 'true' : 'false'}
              {...register('message', {
                required: 'Pesan wajib diisi.',
                minLength: {
                  value: 10,
                  message: 'Pesan perlu sedikit lebih detail (minimal 10 karakter).',
                },
              })}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/60"
          >
            {isSubmitting ? 'Mengirim…' : 'Kirim Pesan'}
          </button>

          {status.state !== 'idle' && (
            <p
              className={`text-sm ${
                status.state === 'success'
                  ? 'text-emerald-500'
                  : status.state === 'error'
                    ? 'text-red-500'
                    : 'text-foreground/70'
              }`}
              role={status.state === 'error' ? 'alert' : undefined}
            >
              {status.message}
            </p>
          )}
        </form>

        <aside className="flex flex-col gap-6 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-display font-semibold text-primary">Tautan Sosial</h2>
            <p className="text-base text-foreground/80">
              Preferensi lain? Silakan pilih salah satu kanal berikut untuk terhubung dan berdiskusi lebih lanjut.
            </p>
          </div>

          <ul className="flex flex-col gap-4 text-sm">
            {socialLinks.map((link) => (
              <li key={link.href} className="group rounded-xl border border-transparent p-4 transition hover:border-primary/20 hover:bg-background/80">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1"
                >
                  <span className="text-base font-semibold text-primary group-hover:text-primary/80">{link.label}</span>
                  <span className="text-foreground/70">{link.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
