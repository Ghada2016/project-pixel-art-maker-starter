// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    'use strict';
    let grid;
    
    
    for(let i = 0 ; i< height;i++){
        grid+=('<tr>')
        
        for(let j = 0; j< width;j++){
            grid+=('<td></td>')
        }
        grid+=('</tr>');
    }
    $('#pixel_canvas').html(grid);
}

/* submit button*/

$(document).ready(function(){
    $('#sub-btn').click(function(evt){
        let height  = $('#input_height').val();
        let width   = $('#input_width').val();
        evt.preventDefault();
        makeGrid(height,width);
        
    });
    
});

/*Click a cell in the grid to fill that cell with the chosen color*/

let color, cell;

color = $('#colorPicker');
cell  = $('#pixel_canvas');
cell.click(function(evt){
    color = $('#colorPicker').val();
    $(evt.target).css("background-color", color);
});
    



