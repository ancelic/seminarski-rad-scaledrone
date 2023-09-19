import create from 'zustand';

const useStore = create((set) => ({
  numMember: 1, 
  setNumMember: (newNumMember) => set({ numMember: newNumMember }), 
}));

export default useStore;