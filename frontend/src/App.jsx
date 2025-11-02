import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';

const pages = [
  {
    path: '/about',
    name: 'About',
    description: 'Learn more about the project goals and the technology stack behind this portfolio.',
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={<Page title={page.name} description={page.description} />} />
          ))}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
