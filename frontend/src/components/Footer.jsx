export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-6 text-center text-sm text-foreground/70">
        <p>&copy; {new Date().getFullYear()} Jultdev. All rights reserved.</p>
        <p className="font-body">Built with Vite, React, and TailwindCSS.</p>
      </div>
    </footer>
  );
}
