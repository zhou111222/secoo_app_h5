const pageObserve = function(...arg) {
    let observeItem = document.querySelectorAll("#app .observe");
    let hasObserveItem = [];
    // 支持IntersectionObserver
    if (window.IntersectionObserver) {
        let observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                // 这段逻辑，是每一个被观察的楼层进入视窗时都会触发的
                if (entry.isIntersecting) {
                    var hasObserveName = entry.target.getAttribute('name');
                    entry.target.setAttribute("state", "done");
                    if (hasObserveItem.indexOf(hasObserveName) === -1) {
                        hasObserveItem.push(hasObserveName);
                        eval(arg[0][entry.target.getAttribute('name')]());
                    }
                    observer.unobserve(entry.target)
                }
            })
        }, {
            root: null, // 默认根节点是视口
            rootMargin: '0px',
            threshold: 0 // 全部进入视口才被观察  这个阈值介于0和1之间
        });
        if (observeItem.length > 0) {
            observeItem.forEach(item => {
                observer.observe(item) // 观察每一个进入视口的区域
            })
        }
    } else {
        // 不支持IntersectionObserver
        for (var i = 0; i < observeItem.length; i++) {
            var hasObserveName = observeItem[i].getAttribute('name');
            if (hasObserveItem.indexOf(hasObserveName) === -1) {
                hasObserveItem.push(hasObserveName);
                observeItem[i].setAttribute("state", "done");
                eval(arg[0][observeItem[i].getAttribute('name')]());
            }
        }
    }
}

export {
    pageObserve
}