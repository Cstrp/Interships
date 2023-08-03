export const filterTags = (tags: string[], query: string) => {
  if (tags && query) {
    tags = tags.filter((tag) => tag.toLowerCase().indexOf(query.toLowerCase()) > -1);

    return tags;
  }

  return tags;
};
