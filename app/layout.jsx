import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Carld Similien · IA et imagerie médicale',
  description:
    "Portfolio de Carld Similien : étudiant en Master 1 Optique, Image, Vision, Multimédia (parcours Signaux et Images en Médecine) à l'UPEC. IA pour l'imagerie médicale, deep learning, MLOps, Python, PyTorch, ONNX, FastAPI.",
  keywords: ['intelligence artificielle', 'imagerie médicale', 'deep learning', 'MLOps', 'PyTorch', 'traitement d\'images', 'fond d\'œil', 'Python', 'alternance', 'portfolio', 'Carld Similien'],
  openGraph: {
    title: 'Carld Similien · IA et imagerie médicale',
    description: "IA pour l'imagerie médicale, deep learning et MLOps. Portfolio de Carld Similien.",
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
