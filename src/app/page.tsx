
'use client'
import { useEffect } from 'react';
import { useStore } from '@hooks/useStore';

const Home = () => {
  const { parkings, users, fetchParkings, fetchUsers } = useStore();

  useEffect(() => {
    fetchParkings();
    fetchUsers();
  }, [fetchParkings, fetchUsers]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Resident Parking Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parkings && parkings.map((parking) => (
          <div key={parking.id} className="p-4 border rounded">
            <p>Spot: {parking.spot}</p>
            <p>User ID: {parking.user_id}</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-8">Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded">
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Unit: {user.unit}</p>
            <p>Is Renter: {user.is_renter ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;