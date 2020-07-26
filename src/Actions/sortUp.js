export function sortUp(name,forward){
    return{
        type:"SORT",
        payload:{
            name:name,
            forward:forward,
        }
    }
}