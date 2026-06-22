import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Carld Similien — Data Analyst & Automation Engineer',
  description:
    'Portfolio de Carld Similien : data analyst & automation engineer en alternance chez Framatome. Python, SQL, Power BI, TensorFlow, GCP, Docker.',
  keywords: ['data analyst', 'automatisation', 'Python', 'Power BI', 'portfolio', 'Carld Similien'],
  openGraph: {
    title: 'Carld Similien — Data & Automation',
    description: 'Data, automatisation, IA — portfolio de Carld Similien.',
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
