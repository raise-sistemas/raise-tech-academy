export default function removeTag(uuid) {
  let filtered = localStorage.getItem('tags');
  filtered = JSON.parse(filtered);
  if(filtered.length === undefined || filtered.length === 1){
    localStorage.removeItem('tags');
  }else{
    filtered = filtered.filter((obj) => {
      return obj.uuid !== uuid; 
    })
    localStorage.setItem('tags', JSON.stringify(filtered));
  }
  return uuid;
}

