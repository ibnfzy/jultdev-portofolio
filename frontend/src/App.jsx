import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

const pages = [
  {
    path: '/about',
    name: 'About',
    description: 'Learn more about the project goals and the technology stack behind this portfolio.',
  },
  {
    path: '/contact',
    name: 'Contact',
    description: 'Reach out if you have questions or want to collaborate on future phases.',
  },
];

function Page({ title, description }) {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-16 text-center">
      <h1 className="text-4xl font-display font-bold tracking-tight text-primary sm:text-5xl">{title}</h1>
      <p className="text-lg font-body text-foreground/80">{description}</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={<Page title={page.name} description={page.description} />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
