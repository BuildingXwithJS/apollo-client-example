import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_COLLECTIONS, GET_SELECTED_COLLECTION } from '../graphql/queries';

export default function Collections() {
  const { loading, error, data, client } = useQuery(GET_COLLECTIONS);

  const selectCollection = (collection) => {
    client.writeQuery({
      query: GET_SELECTED_COLLECTION,
      data: { selectedCollection: collection },
    });
  };

  if (loading) return <div className="p-2 text-xl">Loading...</div>;
  if (error) return <div className="p-2 text-xl text-color-red">Error :(</div>;

  return (
    <div className="flex flex-col">
      {data?.collections?.map((collection) => (
        <div
          key={collection._id}
          className="flex text-lg cursor-pointer underline"
          onClick={() => selectCollection(collection)}
        >
          {collection.name}
        </div>
      ))}
    </div>
  );
}
