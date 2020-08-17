import { observable, action, computed, autorun } from 'mobx';


class Store {
    @observable list = []
    @computed get total () {
        return this.list.length
    }
    @action change () {
        this.list.push('1');
    }
};

const mstore = new Store();

// setInterval(() => {
//     mstore.change();
// }, 2000);

autorun(() => {
    console.log(mstore.total);
});

export default mstore;