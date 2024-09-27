export type Reservation = {
  id: number;
  clientId: number;
  clientName: string;
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

export type Availability = {
  startTime: string;
  endTime: string;
};

export type Provider = {
  id: number;
  name: string;
  imgUrl?: string;
  availabilities?: Availability[];
  reservations?: Reservation[];
};
