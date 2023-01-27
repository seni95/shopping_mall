export async function uploadImage(file){
    const data = new FormData();
    data.append('file',file);
    data.append('upload_preset', process.env.REACT_APP_CLOUDIARY_PRESET);
    return fetch(process.env.REACT_APP_CLOUDIARY_URL,{
        method:'POST',
        body: data
    }).then(res=>res.json()).then(data=>data.url);
}