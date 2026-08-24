import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Carld Similien · Développeur Cloud & DevOps',
  description:
    "Portfolio de Carld Similien : alternant développeur & automatisation chez Framatome, futur ingénieur Cloud Computing & Cybersécurité (ESILV). Kubernetes, Azure AKS, Terraform, Prometheus, Python, Next.js, FastAPI.",
  keywords: ['développeur', 'DevOps', 'cloud', 'Kubernetes', 'Terraform', 'Azure', 'automatisation', 'Next.js', 'Python', 'portfolio', 'Carld Similien'],
  openGraph: {
    title: 'Carld Similien · Développeur Cloud & DevOps',
    description: 'Développement, automatisation, cloud et DevOps. Portfolio de Carld Similien.',
    type: 'website',
    locale: 'fr_FR',
  },
};

// applique le thème avant le premier rendu (pas de flash)
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'light') document.documentElement.dataset.theme = 'light';
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
