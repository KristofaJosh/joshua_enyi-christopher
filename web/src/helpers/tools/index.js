
export const toolResolver = (value) =>{
    if(!(value instanceof Array)){
        value = value.replace(/[^0-9a-z_]/gi, ' ');
        return value.split(' ').filter(el=> el !== "")
    }
    return value;
};