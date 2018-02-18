

function myMenuButton() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

$('#title').fadeOut(5000);

function randColor(tag) {
    rand = Math.random();
    if ($(tag).hasClass('fa fa-square')) {
        if (rand <= 0.05) {
            color='#375235';//'#7CA26E';
        } else if (rand > 0.05 && rand <= 0.1) {
            color='#42633F';
        }
        
        
        else if (rand > 0.1 && rand <= 0.7) {
            color='#617B6F';
        } else {
            color='#333333';
        }
    } else {
        color='#617B6F';
    }
    return color
}

function appendBoxes(tag, side, size='3.5vw') {
    
    $(tag).appendTo($(side)).css({'font-size':size, 'color':randColor(tag)});
}

function createBoxes(side) {
    let tag;
    for (let i = 0; i <= 140; i++) {
        if (side==='#left') {
            switch (i) {
                case 0:
                    tag = '<a href="https://nl.linkedin.com/in/sander-dudok-34675488" target="_blank"><i class="fa fa-linkedin-square"></i></a>';
                    break;
                case 1:
                    tag = '<a href="https://github.com/dudok" target="_blank"><i class="fa fa-github-square"></i></a>';
                    break;
                case 2:
                    tag = '<a href="#sander.dudok@gmail.com"><i class="fa fa-envelope-square"></i></a>';
                    break;
                default:  
                    tag = '<i class="fa fa-square"></i>'; 
            }
        } else {
            tag = '<i class="fa fa-square"></i>';
        }
        appendBoxes(tag, side);
    };
};

createBoxes('#left');
createBoxes('#right');