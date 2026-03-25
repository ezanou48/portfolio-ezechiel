import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { motion } from "framer-motion"; import { useState } from "react";

export default function Portfolio() { const [dark, setDark] = useState(false); const [lang, setLang] = useState("fr");

const pdfUrl = "https://www.dropbox.com/scl/fi/jzqk86xwwpc4zy22v2w24/memVF.pdf?raw=1";

const content = { fr: { title: "ZANOU Ezéchiël", subtitle: "Biologie Moléculaire | Biotechnologies | Santé", profile: "Titulaire d’une licence en génétique, biotechnologies et ressources biologiques, je suis passionné par les sciences du vivant, la santé et les innovations technologiques. Mon intérêt scientifique porte particulièrement sur les interactions moléculaires et génomiques du vivant, notamment dans le contexte des maladies infectieuses. Mon ambition est de contribuer au développement de solutions innovantes en diagnostic moléculaire, en épidémiologie et en bioinformatique appliquée à la santé, afin d’améliorer les systèmes de santé en Afrique.", memoryTitle: "Mémoire", memoryDesc: "Séroprévalence de la co-infection VIH/VHB chez les adolescents sous traitement antirétroviral à Cotonou.", skills: "Compétences", projects: "Projets", vision: "Vision Scientifique", visionText: "Développer des solutions innovantes en diagnostic moléculaire et en épidémiologie pour renforcer les systèmes de santé en Afrique et contribuer à la médecine personnalisée.", download: "Télécharger le mémoire" }, en: { title: "ZANOU Ezechiel", subtitle: "Molecular Biology | Biotechnology | Global Health", profile: "Holder of a Bachelor's degree in Genetics, Biotechnology and Biological Resources, I am deeply passionate about life sciences, health, and technological innovation. My scientific interests focus on molecular and genomic interactions within living systems, particularly in the context of infectious diseases. My ambition is to contribute to the development of innovative solutions in molecular diagnostics, epidemiology, and bioinformatics applied to healthcare, with the goal of strengthening health systems in Africa.", memoryTitle: "Thesis", memoryDesc: "Seroprevalence of HIV/HBV co-infection among adolescents under antiretroviral therapy in Cotonou.", skills: "Skills", projects: "Projects", vision: "Scientific Vision", visionText: "To develop innovative solutions in molecular diagnostics and epidemiology to improve healthcare systems in Africa and contribute to personalized medicine.", download: "Download thesis" } };

const t = content[lang];

return ( <div className={dark ? "bg-gray-900 text-white min-h-screen p-6" : "bg-gray-50 text-black min-h-screen p-6"}> {/* HEADER */} <div className="flex justify-between items-center mb-6"> <h1 className="text-3xl font-bold">{t.title}</h1> <div className="flex gap-2"> <Button onClick={() => setLang(lang === "fr" ? "en" : "fr")}>EN / FR</Button> <Button onClick={() => setDark(!dark)}> {dark ? "☀️" : "🌙"} </Button> </div> </div>

<p className="text-center text-lg mb-10">{t.subtitle}</p>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-6">

    {/* PROFILE */}
    <Card>
      <CardContent className="p-4">
        <h2 className="text-2xl font-semibold mb-2">Profil</h2>
        <p>{t.profile}</p>
      </CardContent>
    </Card>

    {/* THESIS */}
    <Card>
      <CardContent className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{t.memoryTitle}</h2>
        <p className="mb-2">{t.memoryDesc}</p>

        <iframe
          src={pdfUrl}
          className="w-full h-64 border mb-2"
          title="PDF"
        />

        <a href={pdfUrl} target="_blank">
          <Button>{t.download}</Button>
        </a>
      </CardContent>
    </Card>

    {/* SKILLS */}
    <Card>
      <CardContent className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{t.skills}</h2>
        <ul className="list-disc ml-5">
          <li>Biologie moléculaire</li>
          <li>Analyse statistique</li>
          <li>Culture in vitro</li>
          <li>Bioinformatique (en cours)</li>
        </ul>
      </CardContent>
    </Card>

    {/* PROJECTS */}
    <Card>
      <CardContent className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{t.projects}</h2>
        <p>
          Agrigentech Solution – Innovation en biotechnologie appliquée à
          l’agriculture et à la santé.
        </p>
      </CardContent>
    </Card>

  </div>

  {/* VISION */}
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10">
    <Card>
      <CardContent className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{t.vision}</h2>
        <p>{t.visionText}</p>
      </CardContent>
    </Card>
  </motion.div>

  {/* FOOTER */}
  <footer className="mt-10 text-center text-sm opacity-70">
    © 2026 ZANOU Ezéchiël
  </footer>
</div>

); }
