import { configureStore } from '@reduxjs/toolkit';
// import { persistStore} from 'redux-persist';
import userReducer from '../features/user/userSlice'
import syllabusReducer from '../features/syllabus/syllabusSlice'
import warningsReducer from '../features/warnings/warningsSlice'
import galleryReducer from '../features/gallery/gallerySlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    syllabus: syllabusReducer,
    warnings: warningsReducer,
    gallery: galleryReducer,
  },
});


// export const persistor = persistStore(store);
