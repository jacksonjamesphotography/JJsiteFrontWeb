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

const storiesQuery = `*[_type == "story"] | order(coupleName asc) {
  _id,
  coupleName,
  slug,
  thumbnail,
  gallery
}`;

export async function getStories(): Promise<Story[]> {
  return await client.fetch<Story[]>(storiesQuery);
}

const storyBySlugQuery = `*[_type == "story" && slug.current == $slug][0] {
  _id,
  coupleName,
  slug,
  thumbnail,
  gallery
}`;

export async function getStoryBySlug(slug: string): Promise<Story | null> {
  return await client.fetch<Story | null>(storyBySlugQuery, { slug });
}

export interface Film {
  _id: string;
  coupleName: string;
  slug: {
    current: string;
  };
  videos?: Array<{
    url: string;
  }>;
  thumbnail?: any;
}

const filmsQuery = `*[_type == "film"] | order(coupleName asc) {
  _id,
  coupleName,
  slug,
  videos,
  thumbnail
}`;

export async function getFilms(): Promise<Film[]> {
  return await client.fetch<Film[]>(filmsQuery);
}
