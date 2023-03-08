$(function(){
    mainInit();
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
 })
 
 function mainInit(){
   gnb_menu()
   site_map()
   main_visual()
   con_system()
   con_business()
   family_site()
   top_btn()
 }

 function gnb_menu(){
    let $gnbli=$('#header .nav>.gnb>li');
    let $header=$('#header');
    //let $subli=$('#header .nav .gnb li ul li');

    $gnbli.hover(function(){
        $header.stop().animate({height:550},300).css({backgroundColor:"white"});
    })
    $header.on('mouseleave',function(){
        $header.stop().animate({height:100},300)
        .css({backgroundColor:"rgb(255, 255, 255,0.9)"});
    })
 }

 function site_map(){
    $('#header .all-menu').on('click',function(){
        $('.site-map').show();
    })

    $('.site-map .close').on('click',function(){
        $('.site-map').hide();
    })
 }

 function main_visual(){
    let arrh2=[];
    arrh2[0]='Farm to Table<br><span>원산지 그대로의 신선함</span>을<br> 농협물류가 전달합니다.'
    arrh2[1]='우리의 것<br><span>우리 농수산물</span><br>농협물류가 함께합니다.'
    arrh2[2]='<span>농업, 농촌, 국민</span>과<br>함께하는 농협<br>농협물류가 앞장서겠습니다.'
    let $pli=$('#mainVisual .paging li');
    let $bannerli=$('#mainVisual .main-banner li');
    let $h2=$('#mainVisual h2');
    
    let current=0;
    let old=0;
    let size=$bannerli.length;
    let timer=null,interval=6000;

    timer=setInterval(make,interval);
    function make(){
        current++;
        if(current>size-1){
            current=0;
        }
        banner()
    }

    $pli.on('click',function(){
        current=$(this).index();
        banner()
    })

    function banner(){
        if(current !=old){
                
            $bannerli.eq(current).css({opacity:0}).animate({opacity:1},800);
            $bannerli.eq(old).css({opacity:1}).animate({opacity:0},800);
            $pli.removeClass('on');
            $pli.eq(current).addClass('on');
            $h2.html(arrh2[current]);
            old=current;
            clearInterval(timer);
            timer=setInterval(make,interval);
        }
    }

 }

function con_system(){
    let arrh3=['창고관리(NH-WMS)','배송관리(NH-TMS)','차량관제(NH-CVO)']
    let arrp=[];
    arrp[0]='주문관리, 입/출고 데이터관리, 재고관리 등 정확하고 체계적인 창고관리 시스템을 통한 물류센터의 효율적 운영'
    arrp[1]='물류자원, 배송루트관리등 효율적인 배송시스템 구축.  고객주문정보를 바탕으로 배송량 집계 및 운송 계획을 수립. 효율적인 배차지시와 운송과정을 관리하고 고객에게 배송현황을 지원하는 시스템'
    arrp[2]='물류배송 차량 관제 및 배송현황 모니터링 지원시스템. 물류배송차량을 실시간으로 관제함으로써 기업의 인적, 물적자원을 효율적으로 운용하기위한 시스템'
    let imgurl='',idx=0,timer=null,interval=4000;
    let $pli=$('.main .system .txt .paging li');
    let $bigimg=$('.main .system .bigimg img');
    let $h3=$('.main .system .txt h3');
    let $p=$('.main .system .txt h3+p');
    let size=$pli.length;

    banner();

    timer=setInterval(make,interval);
    function make(){
        idx++;
        if(idx>size-1){
            idx=0;
        }
        banner()
    }

    $pli.on('click',function(){
        idx=$(this).index()
        banner();

    })

    function banner(){
        imgurl=`images/system${idx+1}.jpg`
        $bigimg.attr('src',imgurl).hide().show();
        $h3.text(arrh3[idx]);
        $p.html(arrp[idx]);
        clearInterval(timer);
        timer=setInterval(make,interval);
        $pli.removeClass('on');
        $pli.eq(idx).addClass('on');
    }

}


function con_business(){
    let arrPosX=[0,-277,-554,-831,];
    let cnt=0;


    $('.main .business .next').on('click',function(){
        cnt++
        if(cnt>5){
            cnt=5
        }
        $('.main .business ul').animate({left:(cnt)*-277},300);
    })

    $('.main .business .prev').on('click',function(){
        cnt--
        if(cnt<0){
            cnt=0
        }
        $('.main .business ul').animate({left:(cnt)*-277},300);
    })
}


function family_site(){
    $('#footer .family').on('click',function(){
        $('#footer .family div').css({opacity:1})
    })
    $('#footer .family').on('mouseleave',function(){
        $('#footer .family div').css({opacity:0})
    })
}


function top_btn(){
    let navOffset=$('.nav').offset().top;
    let top=0;
    $(window).on('scroll',function(){
        top=$(this).scrollTop()
        //console.log(top)
        if(top>navOffset){
            $('.nav').addClass('fixed');
        }else{
            $('.nav').removeClass('fixed');
        }

        if(top>500){
            $('.topbtn').addClass('show');
        }else{
            $('.topbtn').removeClass('show');
        }

    })
}