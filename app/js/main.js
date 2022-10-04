$(function(){



});

//start select2
function custom_template(obj){
    var data = $(obj.element).data();
    var text = $(obj.element).text();
    if(data && data['img_src']){
        img_src = data['img_src'];
        template = $("<div class=\"" + 'select-row' + "\"><img src=\"" + img_src + "\" style=\";\"/><p style=\"\">" + text + "</p></div>");
        return template;
    }
}
var options = {
'templateSelection': custom_template,
'templateResult': custom_template,

}
$('.select').select2(options);

//end select 2

//input number
function testJump(x){
    var ml = ~~x.getAttribute('maxlength');
    if(ml && x.value.length >= ml){
        do{
            x = x.nextSibling;
        }
        while(x && !(/text/.test(x.type)));
        if(x && /text/.test(x.type)){
            x.focus();
        }
    }
}
//input number

$('.close img').click(function(){
    $('.payment-request-modal').fadeOut(300);
    $('.modal-content').removeClass('active');
})

$('.walet__items--transactions .walet__item').click(function(){
    $('.payment-request-modal').fadeIn(300);
    $('.modal-content').addClass('active');
})

