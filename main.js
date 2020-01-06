//css部分
import './public/css/common.scss';
import './widget/firstScreen/firstScreen.scss';
import './widget/introduce/introduce.scss';
import './widget/floor/floor.scss';
// js部分
import { pageObserve } from './public/js/observe';
import store from './public/js/global';
const _$store = new store();
//楼层js部分

import { firstScreen } from './widget/firstScreen/firstScreen';
import { introduce } from './widget/introduce/introduce';
import { floor } from './widget/floor/floor';

function jsLoaded() {
    $(function() {
        _$store.initstate();
        //页面主逻辑
        pageObserve({ firstScreen, introduce, floor });
    });
}

jsLoaded();