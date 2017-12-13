$(document).ready(function(){
	var SOURCE_CLASS_NAME = ".interactive-view-container";
	var DEST_TAG_NAME = "xmp";

	var _interactiveHtmlElements = $(SOURCE_CLASS_NAME);
	_interactiveHtmlElements.each(function(index){
		var dataId = $(this).data("id");
		$("xmp[data-id='"+dataId+"']").html($(this).find(".sg-demo-wrapper").html());
	});


	function copyToClipboard(data) {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.text(data).select();
		document.execCommand("copy");
		$temp.remove();
	}

	// Copy event
	$(".copyToClipBoard").on("click",function(evt){
		copyToClipboard($("xmp[data-id='"+ $(this).attr("copy-id") +"']").html());

	});

	//

	              $('.toggle').click(function(e) {
                    e.preventDefault();
                
                    var $this = $(this);
                
                    if ($this.next().hasClass('show')) {
                        $this.next().removeClass('show');
                        $this.next().slideUp(350);
                    } else {
                        $this.parent().parent().find('li .inner').removeClass('show');
                        $this.parent().parent().find('li .inner').slideUp(350);
                        $this.next().toggleClass('show');
                        $this.next().slideToggle(350);
                    }
                });

});