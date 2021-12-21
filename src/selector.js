import _ from 'lodash';

export const selectProduct = state => _.get(state, 'ProductList.products', []);