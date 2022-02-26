const addedImages = (state = [], action)=>{
	switch(action.type){
		case "ADD_IMAGE": 
			return [...state, 1]
		default:
			return state
	}
}
export default addedImages
 