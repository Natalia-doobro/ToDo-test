import {
  configureStore,
  //   combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import todosStore from "./todos/todos-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const todospersistConfig = {
  key: "todos",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    todos: persistReducer(todospersistConfig, todosStore),
  },
  middleware,
  devTools: true,
});

const persist = persistStore(store);

export default { store, persist };

// const rootReducer = combineReducers({
//     contacts: configureStore,
// })

// const store = createStore(rootReducer, composeWithDevTools());
