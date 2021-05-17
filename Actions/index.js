
export const addProduct = (id) =>{
   
    return {
        type : "ADD_TO_CART",
        id : id
    }
}

export const removeProduct = (id) =>{
    console.log(id);
    return {
        type : "REMOVE_ITEM",
        id: id
    }
}

export const subtractQuantity=(id)=>{
    return{
        type: "SUB_QUANTITY",
        id
    }
}

export const addQuantity=(id)=>{
    return{
        type: "ADD_QUANTITY",
        id
    }
}