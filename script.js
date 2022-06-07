let DEFAULT_GRID_SIZE = 16;
const AUTO_TEXT = "auto ";
let is_rainbow_mode = false;
let current_size = DEFAULT_GRID_SIZE;
let color = "#000000";

function default_load_grid(){
    document.getElementById("grid-container").style.gridTemplateColumns = "repeat(16,1fr)";
    for(let i = 0; i<Math.pow(DEFAULT_GRID_SIZE,2); i++){
            document.getElementById("grid-container").innerHTML += "<div class='square' id='square' onmouseover='change_colour(this)'></div>";
    }
}

function load_new_grid(new_size){
    let grid_container = document.getElementById("grid-container");
    grid_container.style.gridTemplateColumns = "repeat(" + new_size + ",1fr)";
    grid_container.innerHTML = "";
    current_size = new_size;
    let grid_code = "";

    for(let i = 0; i < Math.pow(new_size,2);i++){
        grid_code += "<div class='square' id='square' onmouseover='change_colour(this)'></div>";
    }

    grid_container.innerHTML = grid_code;
}

function change_colour(square){
    if(is_rainbow_mode){
        let red_number = Math.floor(Math.random() * (255 - 0 + 1));
        let green_number = Math.floor(Math.random() * (255 - 0 + 1));
        let blue_number = Math.floor(Math.random() * (255 - 0 + 1));
        let rgb_value = "rgb(" + red_number.toString() + "," + green_number.toString() + "," + blue_number.toString() + ")";
        square.style.backgroundColor = rgb_value;
    } else{
        square.style.backgroundColor = color;

}
}

function set_color(new_color){
    color = new_color;
}

function toggle_rainbow_mode(){
    if(!is_rainbow_mode){
        is_rainbow_mode = true;
        document.getElementById("rainbow-mode-label").innerText = "Rainbow Mode OFF"
    } else{
        is_rainbow_mode = false;
        document.getElementById("rainbow-mode-label").innerText = "Rainbow Mode ON"
    }
}

function clear_board(current_size){
    load_new_grid(current_size);
}

window.onload = () => {
    default_load_grid();
}