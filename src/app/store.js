import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './sagas/rootSaga' 
import userReducer from '../features/user/userSlice'
import syllabusReducer from '../features/syllabus/syllabusSlice'
import warningsReducer from '../features/warnings/warningsSlice'
import galleryReducer from '../features/gallery/gallerySlice'
import peopleReducer from '../features/people/peopleSlice'
import assignmentReducer from '../features/assignments/assignmentSlice'
import projectsReducer from '../features/projects/projectsSlice'
import submitWorkReducer from '../features/submitWork/submitWorkSlice'
import critMessagesReducer from '../features/critMessages/critMessagesSlice'
import logger from 'redux-logger'
import galleryCategories from '../features/gallery/GALLERY_CATEGORIES';
const sagaMiddleware = createSagaMiddleware()


const galleryPersistConfig = {
  key: 'gallery',
  version: 1,
  storage,
  blacklist: [galleryCategories]
}

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist:['syllabus','warnings', 'assignment', 'submitWork', 'project', 'people', 'gallery']
}


const reducer = combineReducers({
  user: userReducer,
  syllabus: syllabusReducer,
  warnings: warningsReducer,
  gallery: persistReducer(galleryPersistConfig, galleryReducer),
  people: peopleReducer,
  assignment: assignmentReducer,
  submitWork: submitWorkReducer,
  critMessages: critMessagesReducer,
  project: projectsReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
  reducer: persistedReducer,
  // reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ 
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
    sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)