
async function  getAllProducts() {
    const res = await fetch("");
    const products=await res.json();
    return products;


}

export default getAllProducts