import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY} from '../Actions/actionTypes'

const intialData = {
    product : [
        {
            id: 1,
            name: "Tshirt",
            price: 500,
            image: 'https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg'
        },
        {
            id: 2,
            name: "Mobile",
            price: 25000,
            image: 'https://www.lg.com/in/images/mobile-phones/md07519000/thumbnail/LMK315IM-350-03.jpg'
        },
        {
            id: 3,
            name: "Laptop",
            price: 25000,
            image: 'https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
        },
        {
            id:4,
            name: "Camera",
            price: 20000,
            image: 'https://static.bhphoto.com/images/images1000x1000/1536120359_1433711.jpg'
        },
        {
            id:4,
            name: "Charger",
            price: 350,
            image: "https://images.squarespace-cdn.com/content/v1/5a6a29eb90badee2e1e568f3/1589059268992-BEV5QWZFHU1SX9UNBMGP/ke17ZwdGBToddI8pDm48kFQje51FHK-dKtUjziEJFSR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UStp45yDF9obFg0L7Vkw884aGpuZ4Y0XKRMIRMzwY87m_XaCZ2eR_PUwOvzfpR6u4g/maykenmain.jpg"
        }
    ],

    productList:[],
    total:0
}

const productReducer = (state= intialData , action) =>{
    

    if(action.type === ADD_TO_CART){
          let addedItem = state.product.find(item=> item.id === action.id)
       
         let existed_item= state.productList.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
          
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                productList: [...state.productList, addedItem],
                total : newTotal
            } 
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.productList.find(item=> action.id === item.id)
        let new_items = state.productList.filter(item=>  item.id  !== action.id )
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            productList: new_items,
            total: newTotal
        }
    }
    
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.product.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.product.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.productList.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                productList: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }

    }
   
        return state

    
}

export default productReducer;