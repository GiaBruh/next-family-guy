import { endpoint } from "@/utils/endpoint";

export const getQuizQuestion = async (id: string) => {
  const response = await fetch(`${endpoint}/quiz/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const getRandomQuizQuestion = async <T>(): Promise<T> => {
  const response = await fetch(`${endpoint}/quiz/random`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: T = await response.json();
  return data;
};
