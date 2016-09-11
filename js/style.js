~function(){
    var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW/desW,
        oWrap = document.querySelector('.wrap');
    if(winW > desW){
        oWrap.style.margin = "0 auto";
        oWrap.style.width = desW + 'px';
        return;
    }
    document.documentElement.style.fontSize = ratio*100 + 'px';
}();

new Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    onSlideChangeEnd:function (swiper){
        var slideAry = swiper.slides,
            curIn = swiper.activeIndex,
            total = slideAry.length;
        var targetId = 'page';
        switch (curIn){
            case 0:
                targetId += total - 2;
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIn;
        }
        [].forEach.call(slideAry,function(item,index){
            if(curIn === index){
                item.id = targetId;
                return;
            }
            item.id = null;
        })
    }
})

//MUSIC
~function(){
    var musicMenu = document.getElementById('musicMenu');
    var musicAudio = document.getElementById('musicAudio');
    musicMenu.addEventListener('click',function(){
        if(musicAudio.paused){
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = "music";
    },false);

    function controlMusic(){
        musicAudio.volume = 0.5;
        musicAudio.play();
        musicAudio.addEventListener('canplay',function(){
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        },false);
    }
    window.setTimeout(controlMusic,1000);
}()






























