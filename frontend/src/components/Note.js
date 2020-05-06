import { useQuery } from '@apollo/client';
import React, { useMemo } from 'react';
import { useSelectedNote } from '../graphql/hooks';
import { GET_NOTE_DATA } from '../graphql/queries';

export default function Notes() {
  const selectedNote = useSelectedNote();
  const noteId = useMemo(() => selectedNote?._id, [selectedNote]);
  const { loading, error, data } = useQuery(GET_NOTE_DATA, {
    variables: { noteId },
    skip: noteId === undefined,
  });

  if (loading) return <div className="p-2 text-xl">Loading...</div>;
  if (error) return <div className="p-2 text-xl text-color-red">Error :( </div>;
  if (!data) return <div />;

  return (
    <div className="flex flex-col">
      <div className="flex text-2xl font-bold">{data.noteById.name}</div>

      <div className="flex text-base">{data.noteById.body}</div>
    </div>
  );
}
