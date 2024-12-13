import { endpoint } from "@/utils/endpoint";

export const getAllCharacters = async <T>(): Promise<T> => {
  const response = await fetch(`${endpoint}/characters`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: T = await response.json();
  return data;
};

export const getCharacterBySlug = async <T>(slug): Promise<T> => {
  const response = await fetch(`${endpoint}/characters/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: T = await response.json();
  return data;
};
