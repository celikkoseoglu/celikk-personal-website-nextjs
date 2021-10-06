export const NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_DESKTOP = 8;
export const NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE = 6;
export const retrieveLatestBlogPosts = (allPosts) => {
  const latestBlogsList = [];
  for (let i = 0; i < NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_DESKTOP; i += 1) {
    latestBlogsList.push(allPosts[i]);
  }
  return latestBlogsList;
};
