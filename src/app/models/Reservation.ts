/**
 * ===================================================
 * =   Este modelo puede ser utilizado para saber    =
 * =   cómo va a estar formateada la reserva de      =
 * =   una película                                  =
 * ===================================================
 */
export interface Reservation {
  id?: string;
  userId: string;
  movieId: number;
  tickets: number;
}
