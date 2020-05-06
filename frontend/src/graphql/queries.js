import { gql } from '@apollo/client';

export const GET_COLLECTIONS = gql`
  query GetCollections {
    collections {
      _id
      name
    }
  }
`;

export const GET_NOTES = gql`
  query GetNotesForCollection($collectionId: MongoID!) {
    notes(filter: { collectionId: $collectionId }) {
      name
      _id
    }
  }
`;

export const GET_NOTE_DATA = gql`
  query GetNoteData($noteId: MongoID!) {
    noteById(_id: $noteId) {
      name
      body
      group
      _id
    }
  }
`;

export const GET_SELECTED_COLLECTION = gql`
  {
    selectedCollection @client
  }
`;

export const GET_SELECTED_NOTE = gql`
  {
    selectedNote @client
  }
`;
