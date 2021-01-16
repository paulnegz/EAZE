var triggered = false;

$(window).scroll(function() {
    var counterTop = $("#counter-container").offset().top - window.innerHeight + $("#counter-container").children(".counter").outerHeight(false);

    if(!triggered && counterTop < $(window).scrollTop()) {

        var delay = 0;

        $(".counter").each(function() {
            var $this = $(this);
            var $count = $(this).children("h1");
            var countLimit = $count.text();

            var dur = 0;
            if(countLimit < 10) { dur = 500; }
            else if(countLimit < 100) { dur = 1500; }
            else { dur = 2000; }

            $count.text("");

            $this.delay(delay).fadeTo("slow",1);

            $({num: $count.text()}).delay(delay).animate(
                {
                    num: countLimit
                },
                {
                    duration: dur,
                    easing: "swing",
                    step: function() {
                        $count.text(Math.ceil(this.num));
                    },
                    complete: function() {
                        $count.text(countLimit);
                    }
                }
            );

            delay += dur;
        });

        triggered = true;
    }
});

//-----------------------------------------------------------------------------------------------------
//Youtube Embed
//-----------------------------------------------------------------------------------------------------

var youtube = document.querySelectorAll( ".youtube" );

for (var i = 0; i < youtube.length; i++) {
 
    // thumbnail image source.
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg"; 
    
    // Load the image asynchronously
    var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        }( i ) );
        
        youtube[i].addEventListener( "click", function() {

        var iframe = document.createElement( "iframe" );
    
            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
    
            this.innerHTML = "";
            this.appendChild( iframe );
    } );
}