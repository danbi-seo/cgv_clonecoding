jQuery(function($){
/* S TAB */
    $('[data-type="cgvTab"]').on({
        click:function(e){
            var target = e.target;
            var currentTarget = e.currentTarget;
            var targetTagName = target.tagName;
            var activeIdx = $(target).parent('li').index();

            if(targetTagName == 'A'){
                e.preventDefault();
                $(target).parent('li').addClass('active').siblings('li').removeClass('active');
                $(currentTarget).siblings('[data-type="cgvTabContent"]').children('li').eq(activeIdx).addClass('active').siblings('li').removeClass('active');
            }
        }
    });
/* E TAB */
/* S 약관 */
    $('[data-terms]').on({
        change:function(e){
            var $target = $(e.target);
            var txtTermsType = $(this).data('terms');
            var txtTermsName = $(this).data('termsName');
            var isChecked = $(this).is(':checked');
            
            switch(txtTermsType){
                case 'allChecker':
                    $('[data-terms-name = ' + txtTermsName + ']').prop('checked', isChecked);
                    $('[data-terms-name = ' + txtTermsName + '][data-terms = allChecker').attr('data-required', isChecked);
                break;
                case 'checker':
                    var isRequired = $target.prop('required');
                    var isAllChecked = $.fnAllChecker($('[data-terms-name = ' + txtTermsName + '][data-terms = ' + txtTermsType + ']'));

                    
                    if(isAllChecked){
                        $('[data-terms-name = ' + txtTermsName + ']').prop('checked', isAllChecked);
                    }else{
                        $('[data-terms-name = ' + txtTermsName + '][data-terms = allChecker]').prop('checked', isAllChecked);
                    }
                    
                    if(isRequired){
                        var isRequiredChecked = $.fnRequiredChecker($('[data-terms-name = ' + txtTermsName + '][data-terms = ' + txtTermsType + '][required]'));
                        $('[data-terms-name = ' + txtTermsName + '][data-terms = allChecker').attr('data-required', isRequiredChecked);
                    }

                break;
                default: break;
            }
        }
    });

    $.fnAllChecker = function( obj ){   // 전체 체크여부
        var totalLen = obj.length;
        var isState = totalLen;

        obj.each(function(idx){
            if(obj.eq(idx).is(':checked')){
            }else{
                isState--;
            }
        });
        return (totalLen == isState)?true:false;
    }

    $.fnRequiredChecker = function( obj ){
        var totalLen = obj.length;
        var isState = totalLen;

        obj.each(function(idx){
             if(obj.eq(idx).is(':checked')){
             }else{
                 isState--;
             }
        });
        return (totalLen == isState)?true:false;
    }
/* E 약관 */
/* S POPUP */
    $('[data-popup]').on({
        click:function(e){
            // var target = e.target;
            var currentTarget = e.currentTarget;
            var popupName = $(currentTarget).data('popup');

            var isVisable = $('.popup_wrap').hasClass('active');

            if(isVisable){

            }else{
                $('.popup_wrap').addClass('active');
                $('.' + popupName).addClass('active');
                $('.btn_popupClose').on({
                    click:function(){
                        $('.popup_wrap').removeClass('active');
                        $('.' + popupName).removeClass('active');
                        $(this).off('click');
                    }
                });
            }
        }
    });

    $.fn.openPopup = function( target ){


        var $target = $('.' + target);

        $('.popup_wrap').addClass('active');
        $target.addClass('active');
        $('.btn_popupClose').on({
            click:function(){
                $('.popup_wrap').removeClass('active');
                $target.removeClass('active');
                $(this).off('click');
            }
        });

    }

    // $.fn.closePopup = function( target ){
    // }
/* E POPUP */
});