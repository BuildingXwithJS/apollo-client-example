import { useQuery } from '@apollo/client';
import { GET_SELECTED_COLLECTION, GET_SELECTED_NOTE } from '../graphql/queries';

export const useSelectedCollection = () => {
  const { data } = useQuery(GET_SELECTED_COLLECTION);
  return data?.selectedCollection;
};

export const useSelectedNote = () => {
  const { data } = useQuery(GET_SELECTED_NOTE);
  return data?.selectedNote;
};
