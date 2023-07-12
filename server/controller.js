const houseDatabase = require('./db.json');
let currentId = 4;

module.exports = {

    getHouses: (req, res) => {
        res.status(200).send(houseDatabase)
    },
    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body

        houseDatabase.push({
            id: currentId,
            address: address,
            price: price,
            imageURL: imageURL
        })
        currentId++

        res.status(200).send(houseDatabase)

    },
    deleteHouse: (req, res) => {
        const id = +req.params.id
        const houseIndex = houseDatabase.findIndex(e => e.id === id);

        if (houseDatabase[houseIndex].id === id) {
            houseDatabase.splice(houseIndex, 1)
            res.status(200).send(houseDatabase)
        } else {
            res.status(400).send('House not found')
        }
    },
    updateHouse: (req, res) => {
        id = req.params.id
        upOrDown = req.body.upOrDown

    }
}
    
    // getHouses, updateHouse, deleteHouse, createHouse
    
//     const id = +req.params.id
//     const type = req.body.type
//     let houseIndex = houseDatabase.findIndex(e => e.id === id);

//     if (houseIndex === undefined) {
//         res.status(400).send('House not found')
//     } else if (type === 'plus') {
//         houseDatabase[houseIndex].price += 10000
//         res.status(200).send(houseDatabase)
//     } else if (type === 'minus') {
//         houseDatabase[houseIndex].price -= 10000
//         res.status(200).send(houseDatabase)
//     } else {
//         res.status(400).send('invalid type constraint')
//     }
// }