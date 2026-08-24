export const metadata = { title: 'CV · Carld Similien' };

// version du PDF : à bumper à chaque mise à jour du CV pour forcer le
// rechargement (contourne le cache navigateur/CDN sur l'URL /cv.pdf)
const CV_URL = '/cv.pdf?v=2026-08-24';

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="font-mono text-sm text-accent mb-2">
        <span className="text-soft">##</span> cv
      </h1>
      <p className="font-mono font-bold text-3xl sm:text-4xl mb-8">cat cv.pdf</p>

      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href={CV_URL}
          download="CV_Carld_Similien.pdf"
          className="font-mono text-sm px-5 py-3 rounded-lg bg-accent text-bg font-bold hover:opacity-85 transition-opacity"
        >
          ⬇ Télécharger le CV
        </a>
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm px-5 py-3 rounded-lg border border-line hover:border-accent hover:text-accent transition-colors"
        >
          Ouvrir dans un onglet ↗
        </a>
      </div>

      <div className="border border-line rounded-xl overflow-hidden bg-panel/60">
        <object data={CV_URL} type="application/pdf" className="w-full h-[80vh]">
          <p className="p-8 text-soft text-sm">
            Impossible d'afficher le PDF dans le navigateur.{' '}
            <a href={CV_URL} className="text-accent underline">
              Télécharge-le ici
            </a>
            .
          </p>
        </object>
      </div>
    </div>
  );
}
