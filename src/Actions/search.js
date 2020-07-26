export function search(text,data){
    return{
        type:"SEARCH",
        payload:{
            text:text,
            data:data
        }
    }
}