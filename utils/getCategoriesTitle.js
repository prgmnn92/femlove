export function getCategoriesTitle(categories, postCategories) {
  let res = [];
  for (let item of categories) {
    for (let postCat of postCategories) {
      if (item._id == postCat._ref || item._id == postCat._id) {
        res.push(item.title);
      }
    }
  }
  return res;
}
