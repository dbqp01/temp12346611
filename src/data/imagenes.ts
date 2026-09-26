const modulos = import.meta.glob('../assets/images/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, { src: string; width: number; height: number }>;

export const imagenes = Object.fromEntries(
  Object.entries(modulos).map(([ruta, mod]) => {
    const nombre = ruta.split('/').pop()!.replace(/\.webp$/, '');
    return [nombre, mod];
  }),
);

export type NombreImagen = keyof typeof imagenes;
