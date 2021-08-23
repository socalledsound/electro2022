import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore} from 'redux-persist';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './sagas/rootSaga' 
import userReducer from '../features/user/userSlice'
import syllabusReducer from '../features/syllabus/syllabusSlice'
import warningsReducer from '../features/warnings/warningsSlice'
import galleryReducer from '../features/gallery/gallerySlice'
import peopleReducer from '../features/people/peopleSlice'
import assignmentReducer from '../features/assignments/assignmentSlice'
import submitWorkReducer from '../features/submitWork/submitWorkSlice'
import critMessagesReducer from '../features/critMessages/critMessagesSlice'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  user: userReducer,
  syllabus: syllabusReducer,
  warnings: warningsReducer,
  gallery: galleryReducer,
  people: peopleReducer,
  assignment: assignmentReducer,
  submitWork: submitWorkReducer,
  critMessages: critMessagesReducer,
})




export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false}), sagaMiddleware],
});

sagaMiddleware.run(rootSaga)
// export const persistor = persistStore(store);
