import { type Provider, type Client } from "@/types";

export const mockClient: Client = {
  id: 1,
  name: "John Doe",
  reservations: [
    {
      id: 1,
      clientId: 1,
      providerId: 1,
      providerName: "Jane Doe",
      date: "Oct 15, 2024 12:30 PM",
      pending: true,
    },
  ],
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
      id: 2,
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 11:30 AM",
      pending: false,
    },
    {
      id: 3,
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 1:30 PM",
      pending: false,
    },
    {
      id: 4,
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 2:30 PM",
      pending: false,
    },
    {
      id: 5,
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 3:30 PM",
      pending: false,
    },
    {
      id: 6,
      clientId: 2,
      providerId: 1,
      date: "Oct 15, 2024 4:30 PM",
      pending: false,
    },
    {
      id: 1,
      clientId: 1,
      providerId: 1,
      date: "Oct 15, 2024 12:30 PM",
      pending: true,
    },
  ],
};
