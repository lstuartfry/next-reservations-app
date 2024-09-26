export type Reservation = {
  clientId: number;
  providerId: number;
  date: Date;
  pending: boolean;
};

export type Client = {
  id: number;
  name: string;
  imgUrl?: string;
  reservations?: Reservation[];
};

export type Provider = {
  id: number;
  name: string;
  imgUrl?: string;
  reservations?: Reservation[];
};
