"use server";

import { type Provider } from "@/types";
import { mockProvider } from "@/__mocks__";

/*
NOTE - this function should be updated to accept a client id.
Since we are mocking server responses for this project,
the mocked client will be returned by default.
*/
export async function fetchProvider(): Promise<Provider> {
  const response = await Promise.resolve(mockProvider);
  return response;
}

export async function fetchProviders(): Promise<Provider[]> {
  const response = await Promise.resolve([mockProvider]);
  return response;
}
