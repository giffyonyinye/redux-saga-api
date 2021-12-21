import {takeLatest, call, put} from "redux-saga/effects";
import { setItem } from "../Actions/action";

const url = "https://fakestoreapi.com/products";
const getProducts = () => {
    return fetch(
        url,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch((error) => {throw error})
}

export default function* actionWatcher() {
    yield takeLatest("GET_ITEM", actionWorker)
}

export function* actionWorker(action) {
    try{
        console.log("this action")
        const products =  yield call(getProducts);
        yield put(setItem(products));
    } catch(e) {
        yield put({type:'GET_ITEM_FAILED', message:e.message})
    }
}