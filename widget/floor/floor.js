import { getHotProduct } from '../../api/index.js';
const floor = function() {
    getHotProduct().then(res => {
        if (res.data.code === 0) {
            console.log("获取热门商品", res);
        }
    });
}
export {
    floor,
}