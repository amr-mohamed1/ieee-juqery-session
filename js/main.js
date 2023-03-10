$(document).ready(function(){

    $('#btn').click(function(){
        $('.first').animate(
            {width : '50%'},
            1000
        );
        $(window).scrollTop(500);
    });

    $('#btn2').click(function(){
        // $('.first').stop()

        // $('.first').text('<h1>hello from jquery</h1>')
        // $('.first').attr({
        //     'class':'gquery_class',
        //     'class':'gquery_class',
        // })

        // $('.first').append('<h3>hello</h3>')
        // $('.first').prepend('<h3>hello</h3>')
        // $('.first').addClass('sec third fourth');
        // console.log($('.first').hasClass('first'));
        // $('.first').css({
        //     'color' : 'red'
        // });
        // $('.first').width('200')

        // $('h3').nextAll().css({
        //     'color':'red'
        // })
        console.log($('input').val())

        // $('<h3>hello</h3>').prepend('div')
    });

    // $('#btn').hover(function(){
    //     console.log('hello')
    // } , function(){
    //     console.log('bye')
    // })


    // $('.input').on('keyup click',function(){
    //     $('h3').empty();
    //     $('h3').append($(this).val())
    //     console.log("hello")
    // })
    // $('#top_btn').click(function(){
    //     $(window).scrollTop(0);
    // });
    // $(window).on('scroll',function(){
    //     if($(window).scrollTop() >= 550){
    //         $('#top_btn').show();
            

    //     }else{
    //         $('#top_btn').hide();
    //     }
    // })

    // $('html').mousemove(function(e){
    //     console.log(e.pageX);
    // })
// $('#top_btn').delay(3000).fadeIn(2000);

    $('#btn2').click(function(){
        // var text = $('p').text();
        // $('h3').text(text);
        // $('p').clone().appendTo('h3');

        // $('p').offset({
        //     'left'  : 200,
        //     'top'   : 300
        // })

        
        // $('p').replaceWith('<span>hello from jquery</span>')
        // $('p').wrap("<div style='asdf'></div>")
        // $('p').wrap('<div style=\'asdf\'></div>')
        // $('p').unwrap()
        console.log($('#password').val().length);
    });
    // console.log($('div').has("p").css('color','red'))

    // $('ul').each(function(){
    //     $(this).has('.test').css('color','red');
    // })

// if($('p').parent().has('dsasdiv')){
//     $('p').css('color','red')
// }

// console.log($('p').parent().has('dsasdiv'))


$('#submit_btn').click(function(amr){
    amr.preventDefault();
    Swal.fire(
        'Error!',
        'Please Enter Username Vkaue',
        'success'
      )
    // toastr.error("asdjhkasjdhkjasd");
})


})



