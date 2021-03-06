/**
 * ===================================================
 * =   Este modelo puede ser utilizado para saber    =
 * =   cómo viene formateada la lista de películas   =
 * =   o para saber cómo viene formateada la lista   =
 * =   de películas al buscarlas por nombre.         =
 * ===================================================
 */
export interface MovieListResponse {
  page?: number;
  results?: Movie[];
  total_pages?: number;
  total_results?: number;
}

interface Movie {
  adult?: boolean;
  backdrop_path?: null | string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: null | string;
  release_date?: Date;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
