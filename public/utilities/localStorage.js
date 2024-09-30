
const getDataLS = (key) => {
    const getStoredData = localStorage.getItem(`${key}`);
    // const data = JSON.parse(getStoredData);
    if (getStoredData) {
        return JSON.parse(getStoredData);
    }
    return [];
}

const setToLS = (value, key) => {
    const convertDataforLS = JSON.stringify(value);
    localStorage.setItem(`${key}`, [convertDataforLS]);
}

const addTOLS = (id,key) => {
    const cart = getDataLS(key); // [] 
    cart.push(id); // [id,id,id]
    setToLS(cart,key);
}

export { addTOLS, getDataLS, setToLS };