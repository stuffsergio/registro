export default function VideoPlayer() {
  return (
    <div
      className="video-container"
      style={{
        width: "250px",
        height: "350px", // Ajusta a la altura deseada
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        style={{
          position: "absolute",
          width: "100%", // Hacer el video más grande que el contenedor
          height: "110%", // Hacer el video más grande que el contenedor
          objectFit: "cover",
          left: "0%", // Centrar horizontalmente
          top: "0%", // Centrar verticalmente
        }}
      >
        <source src="/animated_++imp.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}
