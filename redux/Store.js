import { createStore,applyMiddleware } from "redux";
import rootReducer from "./CombineReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { initialState } from "./Reducer";

const middleware = [thunk]
// more then one middleare ko store rny k liye array bnani prti h.....
// ku k apis bhe ek sy zyada hoti hotin  hain.... user ki, products ki...

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    // right to left: thunk ki array m jo bhee middleware ara  h vo apply kraya..
    // or osy dev tools ki extension m bhyj dia
    )

export default store
















// import { createStore } from "redux";
// import rootReducer from "./CombineReducer";

// const store = createStore(rootReducer)

// export default store