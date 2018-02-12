var boxes;

function myMenuButton() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

$('#title').fadeOut(8000);

function appendBoxes(tag, side, size='3.5vw', color='#617B6F' ) {
    boxes = $(side);
    $(tag).appendTo(boxes).css({'font-size':size, 'color':color});
}


function createSquares(side) {
    for (let i = 0; i <= 140; i++) {
        if (side==='#left') {
            switch (i) {
                case 0:
                    appendBoxes('<a href="https://nl.linkedin.com/in/sander-dudok-34675488" target="_blank"><i class="fa fa-linkedin-square"></i></a>', '#left');
                    break;
                case 1:
                    appendBoxes('<a href="https://github.com/dudok" target="_blank"><i class="fa fa-github-square"></i></a>', "#left");
                    break;
                case 2:
                    appendBoxes('<a href="#sander.dudok@gmail.com"><i class="fa fa-envelope-square"></i></a>', "#left");
                    break;
                default:  
                    appendBoxes('<i class="fa fa-square"></i>', "#left"); 
            }
        } else {
            appendBoxes('<i class="fa fa-square"></i>', '#right');
        }
    }
    $('.boxes').children().each( function() {
        if (Math.random() >=0.7 && $(this).hasClass('fa fa-square')) {
            $(this).css("color", "#333");
        }
    });
}

createSquares('#left');
createSquares('#right');