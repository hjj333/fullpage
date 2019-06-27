$(function () {
    $('.fullpage').fullpage({
        // 设置每一屏的颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        // 设置屏幕内容的对齐方式，默认为true居中对齐，改成顶部对齐
        verticalCenterde: false,
        navigation: true,
        
        // 进入每一屏后添加.now样式
        afterLoad: function (link, index) {
            $('.section').eq(index - 1).addClass("now")
        },
        onLeave: function (index, nextindex, direction) {
            // 从第二屏离开进入第三屏时添加.leave样式（沙发）
            if (index === 2 && nextindex === 3) {
                $('.section').eq(index - 1).addClass('leave')
            }
        },
        // 插件渲染完毕后执行函数
        afterRender: function () {
            // 点击更多切换下一页
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown()
            })
        }
    });
})