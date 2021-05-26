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
            let src='https://cdn.jsdelivr.net/gh/CYYHH3/CSearch/img/'+$(this).attr('data-logo')+'.png';
            //let src='https://cdn.jsdelivr.net/gh/CYYHH3/CSearch@main/img/'+$(this).attr('data-logo')+'.png';
            //let src='./img/'+$(this).attr('data-logo')+'.png';
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
    let src='https://cdn.jsdelivr.net/gh/CYYHH3/CSearch/img/'+$(this).attr('data-logo')+'.png';
    //let src='https://cdn.jsdelivr.net/gh/CYYHH3/CSearch@main/img/'+$(this).attr('data-logo')+'.png';
    //let src='./img/'+$(this).attr('data-logo')+'.png';
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

// Waves
Waves.attach('.close', ['waves-button', 'waves-light']);
Waves.init();

// 心知天气
(function(a,h,g,f,e,d,c,b){b=function(){d=h.createElement(g);c=h.getElementsByTagName(g)[0];d.src=e;d.charset="utf-8";d.async=1;c.parentNode.insertBefore(d,c)};a["SeniverseWeatherWidgetObject"]=f;a[f]||(a[f]=function(){(a[f].q=a[f].q||[]).push(arguments)});a[f].l=+new Date();if(a.attachEvent){a.attachEvent("onload",b)}else{a.addEventListener("load",b,false)}}(window,document,"script","SeniverseWeatherWidget","//cdn.sencdn.com/widget2/static/js/bundle.js?t="+parseInt((new Date().getTime() / 100000000).toString(),10)));
window.SeniverseWeatherWidget('show', {
    flavor: "bubble", //bubble or slim
    location: "WX4FBXXFKE4F",
    geolocation: true,
    language: "auto",
    unit: "c",
    theme: "auto",
    token: "93ca93c8-a4a6-4a83-a8a9-823f1900a7cf",
    hover: "enabled",
    container: "tp-weather-widget"
})
