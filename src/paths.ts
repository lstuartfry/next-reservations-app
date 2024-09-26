export const paths = {
  home() {
    return "/";
  },
  clientHome() {
    return "/client";
  },
  clientReservations(providerId: number) {
    return `/client/reservations/${providerId}`;
  },
  providerHome() {
    return "/provider";
  },
  providerShow(id: string) {
    return `/provider/${id}`;
  },
};
