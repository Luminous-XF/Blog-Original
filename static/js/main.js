window.onload = function () {
    resetMainContentTopValue();
}


let resizeTimer = null;
$(window).resize(function(){
    if(resizeTimer){
        clearTimeout(resizeTimer);
    }

    /// 可以设置延迟动态修改 main-content 属性时间, 可以防止浏览器假死, 提高性能
    resizeTimer = setTimeout(function(){
        resetMainContentTopValue();
    }, 0)
})


/**
 * 动态根据首页背景高度设置下方 main-content 高度
 */
function resetMainContentTopValue() {
    const homeFirstBackgroundImage = document.getElementsByClassName("home-first-background")[0]
    const mainContent = document.getElementById("main-content")
    mainContent.style.top = homeFirstBackgroundImage.offsetHeight + "px"
}