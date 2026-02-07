import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

export interface Testimonial {
  name: string;
  location: string;
  service: string;
  serviceEn?: string;
  rating: number;
  text: string;
  textEn?: string;
  date: string;
}

export interface BusinessConfig {
  name: string;
  title: string;
  tagline: string;
  url: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  stats: {
    experience: number;
    jobsCompleted: number;
    googleReviewScore: number;
    googleReviewCount: number;
  };
  certifications: string[];
  serviceArea: {
    radius: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  keywords: string[];
}

/**
 * Read JSON file from data directory
 */
async function readJsonFile<T>(filename: string): Promise<T> {
  const filePath = path.join(DATA_DIR, filename);
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content) as T;
}

/**
 * Write JSON file to data directory
 */
async function writeJsonFile<T>(filename: string, data: T): Promise<void> {
  const filePath = path.join(DATA_DIR, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  return readJsonFile<Testimonial[]>("testimonials.json");
}

export async function saveTestimonials(testimonials: Testimonial[]): Promise<void> {
  await writeJsonFile("testimonials.json", testimonials);
}

export async function addTestimonial(testimonial: Testimonial): Promise<void> {
  const testimonials = await getTestimonials();
  testimonials.unshift(testimonial); // Add to beginning (newest first)
  await saveTestimonials(testimonials);
}

export async function updateTestimonial(index: number, testimonial: Testimonial): Promise<void> {
  const testimonials = await getTestimonials();
  if (index >= 0 && index < testimonials.length) {
    testimonials[index] = testimonial;
    await saveTestimonials(testimonials);
  }
}

export async function deleteTestimonial(index: number): Promise<void> {
  const testimonials = await getTestimonials();
  if (index >= 0 && index < testimonials.length) {
    testimonials.splice(index, 1);
    await saveTestimonials(testimonials);
  }
}

// Business Config
export async function getBusinessConfig(): Promise<BusinessConfig> {
  return readJsonFile<BusinessConfig>("business.json");
}

export async function saveBusinessConfig(config: BusinessConfig): Promise<void> {
  await writeJsonFile("business.json", config);
}
