import products from "../Mock/asyncmock.js";

const getProducts = () =>{
    return new Promise((resolve, reject) =>{
        const ok = true;
            setTimeout(() => {
                if(ok){
                    resolve(products);
                }else {
                    reject("error")
                }
            }, 2000)
    })
}

export default getProducts