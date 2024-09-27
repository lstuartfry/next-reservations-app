import { type Provider, type Client } from "@/types";

export const mockClient: Client = {
  id: 1,
  name: "John Doe",
};

// provider with 1 pending reservation with the mock client for 10/15/24 @ 1230pm
export const mockProvider: Provider = {
  id: 1,
  name: "Jane Doe",
  availabilities: [
    {
      start: "Oct 15, 2024 10:00 AM",
      end: "Oct 15, 2024 5:00 PM",
    },
    {
      start: "Oct 22, 2024 10:00 AM",
      end: "Oct 22, 2024 5:00 PM",
    },
  ],
  reservations: [
    {
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 11:30 AM",
      pending: false,
    },
    {
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 1:30 PM",
      pending: false,
    },
    {
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 2:30 PM",
      pending: false,
    },
    {
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 3:30 PM",
      pending: false,
    },
    {
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 4:30 PM",
      pending: false,
    },
    {
      clientId: 1,
      providerId: 1,
      date: "Oct 15, 2024 12:30 PM",
      pending: true,
    },
  ],
};
