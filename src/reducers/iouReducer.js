import { FETCH_IOUS_SUCCESS, 
  TOGGLE_IOU_ADD_FORM, 
  POST_IOU_SUCCESS, 
  DELETE_IOU_SUCCESS, 
  STORE_DELETED_IOUS} from '../actions/ious';

const initState = {
  modalFormView: false,
  iouDetails: [],
  deletedIous: []
};

export default (state=initState, action) => {
  if(action.type===TOGGLE_IOU_ADD_FORM){
    return {...state,
      modalFormView: !state.modalFormView,
    };
  }
  if(action.type===FETCH_IOUS_SUCCESS){
    return {...state, 
      iouDetails: action.ious,
    };
  }
  if(action.type===POST_IOU_SUCCESS) {
    return {...state, 
      iouDetails: [...state.iouDetails, action.iou],
      modalFormView: !state.modalFormView,
    };
  }
  if(action.type===DELETE_IOU_SUCCESS) {
    return state;
  }
  if(action.type===STORE_DELETED_IOUS) {
    return {...state, deletedIous: [...state.deletedIous, action.iou]};
  }
  return state;
};