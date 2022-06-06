import { useQuery } from '@apollo/client';

import { GET_PUBLICATIONS } from '../gql/post';

export default function useGetPublications(username) {
  const {
    data: dataPublications,
    loading: loadingPublications,
    error: errorPublications,
  } = useQuery(GET_PUBLICATIONS, {
    variables: {
      username: username,
    },

    update(cache, { data: { getPublications } }) {
      const { publications } = cache.readQuery({
        query: GET_PUBLICATIONS,
        variables: {
          username: username,
        },
      });

      cache.writeQuery({
        query: GET_PUBLICATIONS,
        variables: {
          username: username,
        },
        data: {
          getPublications: getPublications.publications,
        },
      });
    },
  });

  return {
    dataPublications,
    loadingPublications,
    errorPublications,
  };
}
