function startAnimation() {
    $(".swiper-slide0").animate({
        opacity: 1
    }, 2500, function () {
        $(".people").animate({
//                left: '30px'
        }, function () {
            $(".people").css({
                display: "block"
            })
            $(".people").addClass("fadeIn")

            $(".showdow").animate({
                height: "100%"
            }, 1200, function () {
                $(".headyarn").animate({
                    //
                }, function () {
                    $(".headyarn").css({
                        display: "block"
                    })
                    // $(".headyarn").addClass("rotateInDownLeft")
                    setTimeout(function () {
                        $(".headyarn").addClass("Twinkle")
                        //var items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
                        $('.one').animate({
                            height: "90px"
                        }, 1200, function () {
                            $('.two').animate({
                                height: "90px"
                            }, 1200, function () {
                                $('.three').animate({
                                    height: "90px"
                                }, 1200, function () {
                                    $('.four').animate({
                                        height: "90px"
                                    }, 1200, function () {
                                        $('.five').animate({
                                            height: "90px"
                                        }, 1200, function () {
                                            $('.six').animate({
                                                height: "90px"
                                            }, 1200, function () {
                                                $('.seven').animate({
                                                    height: "90px"
                                                }, 1200, function () {
                                                    $('.eight').animate({
                                                        height: "90px"
                                                    }, 1200)
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                        //for (var i = 0; i < items.length; i++) {
                        //    $('.' + items[i]).animate({
                        //        height: "90px"
                        //    }, 2000)
                        //
                        //}


                        $(".word1").animate({
                            width: '100%'
                        }, 2000, function () {
                            $(".word2").animate({
                                width: '100%'
                            }, 2000, function () {
                                $(".word3").animate({
                                    width: '100%'
                                }, 2000, function () {
                                    $(".word4").animate({
                                        width: '100%'
                                    }, 2000, function () {
                                        $('.word5').animate({
                                            width: '100%'
                                        }, 2000, function () {
                                            //$(".love").css({
                                            //    display: "block"
                                            //})
                                            //$(".stay").css({
                                            //    display: "block"
                                            //})
                                            //$(".love").addClass('fadeInLeft')
                                            //$(".stay").addClass('fadeInRight')
                                            $(".loving").css({
                                                display: "block"
                                            })
                                            var animates = ['zoomIn', 'fadeInDownBig', 'zoomIn', 'slideInUp', 'slideInLeft', 'slideInRight', 'slideInLeft']
                                            for (var i = 0; i < 7; i++) {
                                                $(".loving_" + i).addClass(animates[i])
                                            }


                                            setTimeout(function () {
                                                $('.lasttext').animate({
                                                    width: '105px'
                                                }, 1000, function () {
                                                    $(".mouse1").css({
                                                        display: "block"
                                                    })
                                                    $(".mouse1").addClass('Twinkle')
                                                })
                                            }, 1000)
                                        })
                                    })
                                })
                            })
                        })

                    }, 1000)
                })
            })
        })
    });
}


function next_2() {


    var animates = ['zoomIn', 'fadeInDownBig', 'zoomIn', 'slideInUp', 'slideInLeft', 'slideInRight', 'slideInLeft', 'slideInUp', 'fadeInDownBig', 'fadeInDown']
    setTimeout(function () {
        $(".next_2").css({
            display: "block"
        })
        for (var i = 0; i < 9; i++) {
            $(".next_2_" + i).addClass(animates[i])
        }
    },1200)
    $('.next_2_9').animate({
        left:'0px'
    },1200,function () {

    })


    setTimeout(function () {
        $(".word_2_1").animate({
            width: '100%'
        }, 1200, function () {
            $(".word_2_2").animate({
                width: '100%'
            }, 1200, function () {
                $(".word_2_3").animate({
                    width: '100%'
                }, 1200, function () {
                    $(".word_2_4").animate({
                        width: '100%'
                    }, 1200, function () {
                        $(".word_2_5").animate({
                            width: '100%'
                        }, 1200, function () {
                            $(".word_2_6").animate({
                                width: '100%'
                            }, 1200, function () {
                                $(".loving_next2").css({
                                    display: "block"
                                })
                                var animates_next = ['zoomIn', 'fadeInDownBig', 'zoomIn', 'slideInUp', 'slideInLeft', 'slideInRight', 'slideInLeft']
                                for (var i = 0; i < 7; i++) {
                                    $(".loving_2_" + i).addClass(animates_next[i])
                                }

                                setTimeout(function () {
                                    $('.lasttextnext2').animate({
                                        width: '105px'
                                    }, 1000)
                                }, 1000)
                            })
                        })
                    })
                })
            })
        })
    }, 2000)


}
window.onload = function () {
    $('.loading').remove();
}

