const card = {
    width: 'calc(25% - 44px)',
    height: '300px',
    border: '2px dashed gray',
    padding: '10px 15px',
    margin: '5px'
}

export default {
    place: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    },
    container: {
        ...card
    },
    containerWhite: {
        ...card,
        backgroundColor: 'white',
        cursor: 'move',
    }
}