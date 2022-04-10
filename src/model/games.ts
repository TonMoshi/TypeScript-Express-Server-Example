interface rawgWrap {
  count: number;
  next: string;
  previous: string;
  results: game[];
}

interface game {
  id: number;
  name: string;
  slug: string;
  platforms: platform[];
  released: string;
  rating: number;
  genres: genres[];
}

interface subOption {
  id: number;
  name: string;
  slug: string;
}

interface platform extends subOption {}
interface genres extends subOption {}

export { game, rawgWrap, genres, platform };
