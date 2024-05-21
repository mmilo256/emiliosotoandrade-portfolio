import { create } from "zustand";
import data from "../data/data.json";

const useDataStore = create(() => ({
  data,
}));

export default useDataStore;
