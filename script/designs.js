

function myMenuButton() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

$('#title').fadeOut(8000);

function createSquares(side) {
    var boxes = $(side);
    for (let i = 0; i <= 140; i++) {
        if (side==='#right') {
            switch (i) {
                case 0:
                    boxes.append('<a href="https://nl.linkedin.com/in/sander-dudok-34675488" target="_blank"><i class="fa fa-linkedin-square" style="font-size:4.2vw;color:#617B6F"></i></a>');
                    break;
                case 1:
                    boxes.append('<a href="https://github.com/dudok" target="_blank"><i class="fa fa-github-square" style="font-size:4.2vw;color:#617B6F"></i></a>');
                    break;
                case 2:
                    boxes.append('<a href="#sander.dudok@gmail.com"><i class="fa fa-envelope-square" style="font-size:4.2vw;color:#617B6F"></i></a>');
                    break;
                default:  
                    boxes.append('<i class="fa fa-square" style="font-size:4.2vw;color:#617B6F"></i>'); 
            }
        } else {
            boxes.append('<i class="fa fa-square" style="font-size:4.2vw;color:#617B6F"></i>');
        }
    }
    $('.boxes').children().each( function() {
        if (Math.random() >=0.7 ) {
            $(this).css("color", "#333");
        }
    });
}

createSquares('#left');
createSquares('#right');