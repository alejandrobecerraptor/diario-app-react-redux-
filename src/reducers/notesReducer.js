/* 
{
    notes: [],
    active: null 
    || 
    active: {
        id: 'asd23',
        title: '',
        body: '',
        imageUrl: '',
        date: 2323342
    }
}

*/

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        
    
        default:
            return state;
    }

}