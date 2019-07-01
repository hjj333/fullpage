$(function () {
    $('.fullpage').fullpage({
        // 设置每一屏的颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        // 设置屏幕内容的对齐方式，默认为true居中对齐，改成顶部对齐
        verticalCenterde: false,
        navigation: true,
        // 页面切换时间
        scrollingSpeed: 1000,
        // 进入每一屏后添加.now样式
        afterLoad: function (link, index) {
            $('.section').eq(index - 1).addClass("now")
        },
        onLeave: function (index, nextindex, direction) {
            // 从第二屏离开进入第三屏时添加.leave样式（沙发）
            if (index === 2 && nextindex === 3) {
                $('.section').eq(index - 1).addClass('leave')
            } else if (index === 3 && nextindex === 4) {
                $('.section').eq(index - 1).addClass('leave')
            } else if (index === 5 && nextindex === 6) {
                $('.section').eq(index - 1).addClass('leave');
                $('.screen06 .box').addClass('show');
            } else if (index === 6 && nextindex === 7) { 
                $('.screen07 .text').addClass('show');         
                $('.screen07 .star img').each(function (index, valueOfElement){
                    $(this).delay(index*0.5*1000).fadeIn()
                 });
            }
        },
        // 插件渲染完毕后执行函数
        afterRender: function () {
            // 点击更多切换下一页
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown()
            });
            // 过渡效果结束后执行函数
            $('.screen04 .cart').on('transitionend', function () {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            // 第八屏功能
            $('.screen08').on('mousemove',function(e){
                $(this).find('.hand').css({
                    left:e.clientX-190,
                    top:e.clientY-20,
                });
            }).find('.again').on('click',function () {
                // 点击再来一次重置动画跳回第一屏
                $('.now,.leave,.show').removeClass('now').removeClass('leave').removeClass('show');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
              })
        },
    });
})