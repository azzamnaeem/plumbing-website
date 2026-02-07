/**
 * =============================================================================
 * GALLERY / PORTFOLIO
 * =============================================================================
 *
 * Showcase of completed projects with before/after images.
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Add images to: public/images/gallery/
 *    - Name format: project-name-before.jpg, project-name-after.jpg
 * 2. Copy the template below
 * 3. Paste it at the TOP of the array (newest first)
 * 4. Update the image paths and details
 * 5. Save and deploy
 *
 * TEMPLATE:
 * {
 *   id: "unique-id",
 *   title: "Project Title",
 *   description: "Short description of the work done.",
 *   beforeImage: "/images/gallery/project-before.jpg",
 *   afterImage: "/images/gallery/project-after.jpg",
 *   service: "Service Category",
 *   date: "YYYY-MM",
 * },
 *
 * SERVICE CATEGORIES:
 * - "Desatascos"
 * - "Reparación de Fugas"
 * - "Reforma de Baños"
 * - "Cambio de Calentador"
 * - "Instalación de Grifería"
 *
 * =============================================================================
 */

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  service: string;
  date: string; // Format: YYYY-MM
}

export const galleryItems: GalleryItem[] = [
  // ===========================================================================
  // ADD NEW PROJECTS HERE (newest first)
  // ===========================================================================

  {
    id: "1",
    title: "Desatasco de bajante en edificio",
    description:
      "Desatasco completo de bajante de 4 plantas que llevaba meses con problemas. Utilizamos máquina de alta presión para limpiar completamente la tubería.",
    beforeImage: "/images/gallery/desatasco-antes-1.jpg",
    afterImage: "/images/gallery/desatasco-despues-1.jpg",
    service: "Desatascos",
    date: "2024-10",
  },
  {
    id: "2",
    title: "Reparación de fuga en cocina",
    description:
      "Fuga oculta bajo el fregadero que estaba causando humedades. Detectamos el punto exacto y reparamos sin necesidad de romper la pared.",
    beforeImage: "/images/gallery/fuga-antes-1.jpg",
    afterImage: "/images/gallery/fuga-despues-1.jpg",
    service: "Reparación de Fugas",
    date: "2024-09",
  },
  {
    id: "3",
    title: "Reforma de baño completo",
    description:
      "Transformación total de un baño de los años 80. Cambio de bañera por plato de ducha, nuevos sanitarios y alicatado moderno.",
    beforeImage: "/images/gallery/reforma-antes-1.jpg",
    afterImage: "/images/gallery/reforma-despues-1.jpg",
    service: "Reforma de Baños",
    date: "2024-08",
  },
  {
    id: "4",
    title: "Instalación de calentador",
    description:
      "Sustitución de un calentador de gas antiguo por un termo eléctrico de 80L más eficiente y seguro.",
    beforeImage: "/images/gallery/calentador-antes-1.jpg",
    afterImage: "/images/gallery/calentador-despues-1.jpg",
    service: "Cambio de Calentador",
    date: "2024-07",
  },
  {
    id: "5",
    title: "Cambio de grifería de baño",
    description:
      "Renovación completa de la grifería del baño. Instalación de grifo termostático en la ducha para mayor confort.",
    beforeImage: "/images/gallery/griferia-antes-1.jpg",
    afterImage: "/images/gallery/griferia-despues-1.jpg",
    service: "Instalación de Grifería",
    date: "2024-06",
  },
  {
    id: "6",
    title: "Reforma de baño pequeño",
    description:
      "Aprovechamiento máximo del espacio en un baño de 4m². Cambio de bañera por ducha y nuevos muebles.",
    beforeImage: "/images/gallery/reforma-antes-2.jpg",
    afterImage: "/images/gallery/reforma-despues-2.jpg",
    service: "Reforma de Baños",
    date: "2024-05",
  },
];

// ===========================================================================
// HELPER FUNCTIONS
// ===========================================================================

/**
 * Get the most recent gallery items
 * @param count Number of items to return (default: 6)
 */
export function getRecentGalleryItems(count: number = 6): GalleryItem[] {
  return galleryItems.slice(0, count);
}

/**
 * Get gallery items for a specific service
 * @param service Service category to filter by
 */
export function getGalleryByService(service: string): GalleryItem[] {
  return galleryItems.filter((item) => item.service === service);
}

/**
 * Get a single gallery item by ID
 * @param id Gallery item ID
 */
export function getGalleryItemById(id: string): GalleryItem | undefined {
  return galleryItems.find((item) => item.id === id);
}
