export const paths = {
  home() {
    return "/";
  },
  clientHome() {
    return "/client";
  },
  providerHome() {
    return "/provider";
  },
  providerShow(id: string) {
    return `/provider/${id}`;
  },
};
