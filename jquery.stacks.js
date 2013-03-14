/**
 * Stacks v. 1.0.0
 * Create iOS style stackable list/content headers
 * Made by Mike Smedley
 *
 * Arguments:
 * @body: The parent container holding your title.  A container is needed for each individual title
 * @title: The title that you want to scroll down the page
 * @margin: Because the title gets absolutely positioned when it hits the bottom, you might need to supply a negative margin to counter any padding/margin on your parent element
 */

(function( $ ) {
  $.fn.stacks = function(options) {

  	var settings = $.extend( {
		body: '.stickyparent',
		title  : '.header',
		margin : 0
    }, options);

    $margin = 0 + settings.margin;



    $.each(this.find(settings.body+' '+settings.title),function(k,v){

    	$(window).resize(function(){
			$.each($(settings.body+' '+settings.title),function(k,v){
				var offset = $(v).offset();
				$offset = offset.left;
				//get padding values
				$paddleft = $(v).css('padding-left').substring(0,$(v).css('padding-left').indexOf('p'));
				$paddright = $(v).css('padding-right').substring(0,$(v).css('padding-left').indexOf('p'));
				$width = $(v).parent().width() - $paddleft - $paddright;
				$(v).css({'left':$offset,'width':$width});
			});
		})

		var offset = $(v).offset();

		$(window).scroll(function(){

				//console.log(offset.top);
			 if(($(window).scrollTop()+$(v).outerHeight(true)) >= ($(v).closest(settings.body).offset().top + $(v).closest(settings.body).outerHeight(true)+$margin))
			{
				/* stop at bottom */
				$(v).removeClass('fixed').addClass('absolute').removeAttr('style');
			}
			else if($(document).scrollTop() >= (offset.top))
			{
				//console.log("top");
				/* scroll from top */
				$offset = offset.left;
				$awidth = $(v).width();
				$(v).removeClass('absolute').addClass('fixed').css({'left':$offset,'width':$awidth});
				if($(v).siblings('#filler').length < 1)
				{
					$('<div id="filler" />').css('height',$(v).outerHeight(true)).insertAfter($(v));
				}
			}
			else
			{
				$(v).removeClass('fixed');
				$(v).removeAttr('style');
				$(v).siblings('#filler').remove();
			}
		});


	})
  };
})( jQuery );