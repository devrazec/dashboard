export default function SpanishPage() {
  return (
    <div style={{ height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory" }}>
      <iframe src="/spanish.html" style={{ height: "100vh", width: "100%", border: 0, scrollSnapAlign: "start" }} />
    </div>
  );
}