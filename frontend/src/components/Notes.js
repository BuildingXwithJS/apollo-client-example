import { useQuery } from '@apollo/client';
import React, { useMemo } from 'react';
import { useSelectedCollection } from '../graphql/hooks';
import { GET_NOTES, GET_SELECTED_NOTE } from '../graphql/queries';

export default function Notes() {
  const selectedCollection = useSelectedCollection();
  const collectionId = useMemo(() => selectedCollection?._id, [
    selectedCollection,
  ]);
  const { loading, error, data, client } = useQuery(GET_NOTES, {
    variables: { collectionId },
    skip: collectionId === undefined,
  });

  const selectNote = (note) => {
    client.writeQuery({
      query: GET_SELECTED_NOTE,
      data: { selectedNote: note },
    });
  };

  if (loading) return <div className="p-2 text-xl">Loading...</div>;
  if (error) return <div className="p-2 text-xl text-color-red">Error :( </div>;

  return (
    <div className="flex flex-col">
      {data?.notes?.map((note) => (
        <div
          key={note._id}
          className="flex text-lg cursor-pointer underline"
          onClick={() => selectNote(note)}
        >
          {note.name}
        </div>
      ))}
    </div>
  );
}
