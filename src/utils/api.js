const users = {
    0: [
        { id: 0, name: 'Denma', age: 36 },
        { id: 1, name: 'Ryu', age: 24 },
        { id: 2, name: 'Goku', age: 44 }
    ],
    1: [
        { id: 0, name: 'ShaoKan', age: 20 },
        { id: 1, name: 'Goru', age: 34 },
        { id: 2, name: 'Milena', age: 40 }
    ],
}; 
  
export default (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.warn('id', id);
            return resolve(users[id])
        }, 3000)
    })
}