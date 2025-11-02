import { useTheme } from '../contexts/ThemeContext.jsx';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background text-foreground shadow-sm transition hover:border-primary/60 hover:text-primary"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
