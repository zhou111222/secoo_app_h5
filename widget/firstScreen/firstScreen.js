import store from '../../public/js/global';
const _$store = new store();
const firstScreen = function() {
    _$store.dispatch('proList', { 'id': 1, 'price': 2 });
    console.log('111111');
}
export {
    firstScreen,
}