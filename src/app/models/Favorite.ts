/**
 * ===================================================
 * =   Este modelo puede ser utilizado para saber    =
 * =   cómo va a estar formateada la lista           =
 * =   de favoritos                                  =
 * ===================================================
 */
export interface Favorite {
  id?: string;
  userId: string;
  favoriteMovies: number[];
}
