export default function OverlayCross() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Linea verticale */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-red-500"></div>

      {/* Linea orizzontale */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-red-500"></div>
    </div>
  );
}