import { create } from 'zustand';

export const useLinksStore = create((set) => {
  return {
    userLinks: [],
    addUserLink: (link) => {
      set((state) => ({
        userLinks: [
          ...new Set([...state.userLinks, link].map(JSON.stringify)),
        ].map(JSON.parse),
      }));
    },
    fetchUserLinks: async () => {
      const resLinks = await fetch('/api/links');
      const userLinks = await resLinks.json();
      set({
        userLinks: userLinks?.links,
      });
    },
  };
});
