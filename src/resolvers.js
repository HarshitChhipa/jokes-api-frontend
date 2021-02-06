const resolvers = {
  Query: {
    joke: async (_source, { id }, { dataSource }) =>
      dataSource.jokesAPI.getJoke(id),
    jokes: async (_source, { id }, { dataSource }) =>
      dataSource.jokesAPI.getJokes(id),
    rating: async (_source, { id }, { dataSource }) =>
      dataSource.ratingsAPI.getRating(id),
    ratings: async (_source, { id }, { dataSource }) =>
      dataSource.ratingsAPI.getRating(),
  },
  Mutation: {
    rating: async (_source, { jokeId, score }, { dataSource }) => {
      const rating = await dataSource.ratingsAPI.postRating({ jokeId, score });
      return rating;
    },
  },
};

module.exports = resolvers;
