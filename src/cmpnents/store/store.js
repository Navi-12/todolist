import {createStore} from "redux";
import reducer from "./reducer" 

const mainStore=createStore(reducer)

export default mainStore