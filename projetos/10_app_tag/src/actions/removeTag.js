export default function removeTag(uuid) {
  const data = localStorage.getItem('tags').split(';');
  console.log("DATA", data);
  if (data) {
    data.map((tag, index) => {
      data[index] = JSON.parse(tag);
    });
    let filteredItems = data.filter(
      (it) => it.uuid !== uuid
    );
    console.log("FILTRADO", filteredItems);
    localStorage.removeItem('tags');

    filteredItems.forEach((element , index)=> {
      filteredItems.length === index 
      ? filteredItems[index] = JSON.stringify(filteredItems[index])
      : filteredItems[index] = JSON.stringify(filteredItems[index]) + ";";
      
    })
    filteredItems = filteredItems.toString();
    filteredItems.replace("};,", "};");
    console.log(filteredItems);
    localStorage.setItem('tags', filteredItems);
    return true;
  }
  return false;
}
