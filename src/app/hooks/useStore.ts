import create from 'zustand';

interface Parking {
  id: string;
  user_id: string;
  spot: string;
  image_url: string;
}

interface User {
  id: string;
  name: string;
  phone: string;
  unit: string;
  is_renter: boolean;
}

interface Store {
  parkings: Parking[];
  users: User[];
  fetchParkings: () => void;
  fetchUsers: () => void;
}

export const useStore = create<Store>((set) => ({
  parkings: [],
  users: [],
  fetchParkings: async () => {
    try {
      const response = await fetch('/api/parkings');
      const data = await response.json();
      set({ parkings: data });
    } catch (error) {
      console.error('Error fetching parkings:', error);
    }
  },
  fetchUsers: async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      set({ users: data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
}));