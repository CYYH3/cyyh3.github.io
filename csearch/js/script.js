// 文档加载完毕
$(function () {
    let type = localStorage.getItem('type');

    // 如果是null,设置默认值并且设置存储
    if(type===null){
        type='Baidu';
        localStorage.setItem('type','Baidu');
    }
    // 设置默认选中
    $('.btn-group li').each(function(){
        if ($(this).text()==type){
            $(this).addClass('this');
            let src='./img/'+$(this).attr('data-logo')+'.png';
            $('#set').attr('src',src);
        }
    })
});


// 当点击图标的时候显示切换
$('#set').click(function () {
    $('.container').toggleClass('set');
})

// 切换搜索
$('.btn-group li').click(function(){
    $('.btn-group li').removeClass('this')
    $(this).addClass('this');
    localStorage.setItem('type',$(this).text());
    let src='./img/'+$(this).attr('data-logo')+'.png';
    $('#set').attr('src',src);
    $('.container').removeClass('set');
});

// 回车搜索
document.getElementById('searchInput').onkeydown=function(e){
   if(e.keyCode==13){
       let type=localStorage.getItem('type');
       let url='';
        switch (type) {
            case 'Baidu':
                url='https://www.baidu.com/s?wd=';
                break;
            case 'Google':
                url='https://www.google.com/search?q=';
                break;
            case 'Bing':
                url='https://cn.bing.com/search?FORM=BESBTB&q=';
                break;
            case 'Doge':
                url='https://www.dogedoge.com/results?q=';
                break;
        }
        location.href=url+$(this).val();
}
}
