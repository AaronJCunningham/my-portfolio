import create from "zustand";

const useStore = create(() => {
  return {
    router: null,
    dom: null,
  };
});

export const useSelect = create((set) => ({
  select: null,
  setSelect: (select) => set({ select }),
}));

export default useStore;
