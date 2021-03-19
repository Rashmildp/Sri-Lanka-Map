
const initialState = {
    eventmapCompare: ["Batticaloa", "Mannar", "Jaffna", "Kilinochchi", "Kandy", "Matale", "Nuwara Eliya", "Ampara", "Polonnaruwa", "Trincomalee", "Anuradhapura",
        "Vavuniya", "Mullaitivu", "Kurunegala", "Puttalam", "Ratnapura", "Galle", "Hambantota", "Matara",
        "Badulla", "Monaragala", "Kegalle", "Colombo", "Gampaha", "Kalutara"],


    mapdata: null,


}
const rootReducer = (state = initialState, action) => {
  
    if (action.type === 'ADD_EVENT_MAP_DATA') {
        console.log("Hey there event map selected-> " + action.mapdata);
        return {

            ...state,
            mapdata: action.mapdata
        }
    }
  

    return state;
}

export default rootReducer;