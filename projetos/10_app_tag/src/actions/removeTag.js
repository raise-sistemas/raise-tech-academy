export default function removeTag(tagTitle, tagInfo) {
  const data = localStorage.getItem('tags').split(';');
  if (data) {
    data.map((tag, index) => {
      data[index] = JSON.parse(tag);
    });
    let filteredItems = data.filter(
      (it) => it.title !== tagTitle && it.info !== tagInfo
    );
    localStorage.setItem('tags', JSON.stringify(filteredItems));
    return true;
  }
  return false;
}
