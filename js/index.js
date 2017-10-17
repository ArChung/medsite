$(document).ready(function() {

    initLoading();
    initBtn();
    initVideo();
})

function initVideo(){
    $('.videoPop .clozBtn').click(function(event) {
        simpleHide($('.videoPop'));
        $('#video').empty();
        $('#video')[0].pause();

    });

    $('.vBtn').click(function(){
        simpleShow($('.videoPop'));
        var t = $(this);

        var id=ChungTool.returnClassNameWithFilter(t,'v_')[0]* 1;

        $("#video").html('<source src=film/v'+id+'.mp4></source>' );
// document.getElementById("videoplayer").play();
        $('#video')[0].load();
        $('#video')[0].play();

    })
}
function initBtn(){

    $('.mBtn').click(function(){
        var t = $(this);
        var id=ChungTool.returnClassNameWithFilter(t,'m_')[0]* 1;
        ChungTool.removeClassWithFilter($('.mainContainer'),'channel');
        $('.mainContainer').addClass('channel_'+id);
        // console.log(ChungTool.returnClassNameWithFilter(t,'m_'))
    })

    $('.homeBtn').click(function(){
        ChungTool.removeClassWithFilter($('.mainContainer'),'channel');
        $('.mainContainer').addClass('channel_0');
        
    })

    
}

function initLoading() {
    $('.loadingFirst').waitForImages({
        finished: function() {
            // $('#loading').find('.loadingTxt').html('100');
            // simpleHide($('.loadingPage'), 0);
            // _gaPV('index');
            // $('.mainContainer').removeClass('hide');
            // $('.ci').removeClass('hide');
            // playAni(getChannelString());
        },
        each: function(loaded, count, success) {
            var r = Math.floor(loaded / count * 100);
            // console.log(loaded,count)
            // $('.loadingPage').find('.txt').html(r + '%');

        },
        waitForAll: true
    });
}