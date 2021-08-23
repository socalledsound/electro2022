import { all, call, takeLatest } from 'redux-saga/effects';

const FETCH_WORKS_START = 'FETCH_WORKS_START'

function* logWorks(){
    yield console.log('works start')
}

export function* fetchWorksStart(){
    yield takeLatest(FETCH_WORKS_START, logWorks)
}

export function* worksSagas(){
    yield all([call(fetchWorksStart)])
}