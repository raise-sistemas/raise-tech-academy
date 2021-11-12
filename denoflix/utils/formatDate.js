export const formatDate = (release_date) => {
  if(release_date) return release_date.replace(/[-]+/g,'/')

  return release_date
}