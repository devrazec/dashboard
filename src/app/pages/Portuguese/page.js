export default function PortuguesePage() {
  return (
    <div style={{ height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory" }}>
      <iframe src="/portuguese.html" style={{ height: "100vh", width: "100%", border: 0, scrollSnapAlign: "start" }} />
    </div>
  );
}