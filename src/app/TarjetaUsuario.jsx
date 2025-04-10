export default function TarjetaUsuario({ usuario }) {
  return (
    <div className="absolute top-[80px] left-[20px]">
      <strong>Nombre: {usuario.nombre}</strong>
      <strong>Email: {usuario.email}</strong>
    </div>
  );
}
