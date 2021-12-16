
export default function addTag(){
    let data = localStorage.getItem("tags");
    console.log("Data", data);
    console.log(typeof data);
    if(data){
        data = data.split(";");
        data.map((tag, index)=>{data[index] = JSON.parse(tag)})
        return data;
    }

    return false
    
}