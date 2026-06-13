import { notFound } from "next/navigation";

const languagePages = {
  english: "/english.html",
  portuguese: "/portuguese.html",
  spanish: "/spanish.html",
};

export default async function LanguagePage({ params }) {
  const { language } = await params;
  const src = languagePages[language];

  if (!src) {
    notFound();
  }

  return (
    <div style={{ height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory" }}>
      <iframe src={src} style={{ height: "100vh", width: "100%", border: 0, scrollSnapAlign: "start" }} />
    </div>
  );
}
