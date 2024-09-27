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
      start: "Fri Oct 15 2024 10:00:00 GMT-0700 (Pacific Daylight Time)",
      end: "Fri Oct 15 2024 17:00:00 GMT-0700 (Pacific Daylight Time)",
    },
    {
      start: "Fri Oct 22 2024 10:00:00 GMT-0700 (Pacific Daylight Time)",
      end: "Fri Oct 22 2024 17:00:00 GMT-0700 (Pacific Daylight Time)",
    },
  ],
  reservations: [
    {
      clientId: 2,
      providerId: 1,
      date: "Fri Oct 15 2024 12:30:00 GMT-0700 (Pacific Daylight Time)",
      pending: false,
    },
    {
      clientId: 2,
      providerId: 1,
      date: "Fri Oct 15 2024 13:30:00 GMT-0700 (Pacific Daylight Time)",
      pending: false,
    },
    {
      clientId: 2,
      providerId: 1,
      date: "Fri Oct 15 2024 14:30:00 GMT-0700 (Pacific Daylight Time)",
      pending: false,
    },
    {
      clientId: 2,
      providerId: 1,
      date: "Fri Oct 15 2024 15:30:00 GMT-0700 (Pacific Daylight Time)",
      pending: false,
    },
    {
      clientId: 2,
      providerId: 1,
      date: "Fri Oct 15 2024 16:30:00 GMT-0700 (Pacific Daylight Time)",
      pending: false,
    },
    {
      clientId: 1,
      providerId: 1,
      date: "Fri Oct 15 2024 12:30:00 GMT-0700 (Pacific Daylight Time)",
      pending: true,
    },
  ],
};
