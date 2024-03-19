import { api } from "./api";

export const homeApi = {
  async get() {
    try {
      const response = await api.get<GetItemType>("activity");
      return response.data;
    } catch (e) {
      throw e;
    }
  }
};

export type GetItemType = {
  activity?: string;
  type?: string;
  participants?: number;
  price?: number;
  link?: string;
  key?: string;
  accessibility?: number;
};
