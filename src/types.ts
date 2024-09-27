export type Reservation = {
  id: number;
  clientId: number;
  providerId: number;
  providerName?: string;
  date: string;
  pending: boolean;
};

export type Client = {
  id: number;
  name: string;
  imgUrl?: string;
  reservations?: Reservation[];
};

type Availability = {
  start: string;
  end: string;
};

export type Provider = {
  id: number;
  name: string;
  imgUrl?: string;
  availabilities?: Availability[];
  reservations?: Reservation[];
};
