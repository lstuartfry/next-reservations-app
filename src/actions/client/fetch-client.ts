"use server";

import { Client } from "@/types";
import { mockClient } from "@/__mocks__";

/*
NOTE - this function should be updated to accept a client id.
Since we are mocking server responses for this project,
the mocked client will be returned by default.
*/
export async function fetchClient(): Promise<Client> {
  const response = await Promise.resolve(mockClient);
  return response;
}
