import { client } from "../sanity.client";

export interface Story {
  _id: string;
  coupleName: string;
  slug: {
    current: string;
  };
  thumbnail: any;
  gallery?: any[];
}

const storiesQuery = `*[_type == "story"] | order(_createdAt desc) {
  _id,
  coupleName,
  slug,
  thumbnail,
  gallery
}`;

export async function getStories(): Promise<Story[]> {
  return await client.fetch<Story[]>(
    storiesQuery,
    {},
    {
      next: { revalidate: 60 },
    }
  );
}

const storyBySlugQuery = `*[_type == "story" && slug.current == $slug][0] {
  _id,
  coupleName,
  slug,
  thumbnail,
  gallery
}`;

export async function getStoryBySlug(slug: string): Promise<Story | null> {
  return await client.fetch<Story | null>(
    storyBySlugQuery,
    { slug },
    {
      next: { revalidate: 60 },
    }
  );
}

export interface Film {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  videoUrl?: string | null;
  videoMimeType?: string | null;
  thumbnail?: any;
}

const filmsQuery = `*[_type == "film"] | order(title asc) {
  _id,
  title,
  slug,
  "videoUrl": video.asset->url,
  "videoMimeType": video.asset->mimeType,
  thumbnail
}`;

export async function getFilms(): Promise<Film[]> {
  return await client.fetch<Film[]>(
    filmsQuery,
    {},
    {
      next: { revalidate: 60 },
    }
  );
}

export interface Testimonial {
  _id: string;
  couple: string;
  image1: any;
  image2: any;
  testimonial: string;
  order?: number;
}

const testimonialsQuery = `*[_type == "testimonial"] | order(order asc, couple asc) {
  _id,
  couple,
  image1,
  image2,
  testimonial,
  order
}`;

export async function getTestimonials(): Promise<Testimonial[]> {
  return await client.fetch<Testimonial[]>(
    testimonialsQuery,
    {},
    {
      next: { revalidate: 60 },
    }
  );
}

export interface HomePage {
  ctaStoriesImage?: any;
  ctaFilmsImage?: any;
}

const homeQuery = `*[_type == "home" && _id == "home"][0] {
  ctaStoriesImage,
  ctaFilmsImage
}`;

export async function getHomePage(): Promise<HomePage | null> {
  return await client.fetch<HomePage | null>(
    homeQuery,
    {},
    {
      next: { revalidate: 60 },
    }
  );
}
