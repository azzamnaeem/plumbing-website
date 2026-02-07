/**
 * =============================================================================
 * CONTENT INDEX
 * =============================================================================
 *
 * Central export point for all content.
 * Import from here instead of individual files:
 *
 * import { siteConfig, services, testimonials } from "@/content";
 *
 * =============================================================================
 */

// Site Configuration (business info, contact, etc.)
export { siteConfig, business } from "./site.config";
export type { SiteConfig } from "./site.config";

// Services
export { services, getServiceBySlug, getAllServiceSlugs, getEmergencyServices } from "./services";
export type { Service } from "./services";

// Cities / Service Areas
export { cities } from "./cities";
export type { City } from "./cities";

// Testimonials
export {
  testimonials,
  getRecentTestimonials,
  getTestimonialsByService,
  getTestimonialsByLocation,
} from "./testimonials";
export type { Testimonial } from "./testimonials";

// Gallery
export {
  galleryItems,
  getRecentGalleryItems,
  getGalleryByService,
  getGalleryItemById,
} from "./gallery";
export type { GalleryItem } from "./gallery";
