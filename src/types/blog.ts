export type Blog = {
  title: string,
  description: string,
  topics: string[],
  date: string, // YYYY-MM-DD
  file: string,
  originalUrl?: string,
}
