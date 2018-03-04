function add(id){
    $(id).val( parseInt($(id).val()) + 1);
     $(id).val(parseInt($(id).val()) || 1);
}

function subtract(id){
    $(id).val( parseInt($(id).val()) - 1);    
}

$("#general-teleop-switch-cubes-plus").click(function(){
   add('#general-teleop-switch-cubes-input');
});

$("#general-auto-div-cubes-picked-up-minus").click(function(){
   subtract('#general-auto-cubes-picked-up-number-input');
});

$("#general-auto-div-cubes-picked-up-plus").click(function(){
   add('#general-auto-cubes-picked-up-number-input');
});

$("#general-teleop-switch-cubes-minus").click(function(){
   subtract('#general-teleop-switch-cubes-input');
});

$("#general-teleop-scale-cubes-plus").click(function(){
   add('#general-teleop-scale-cubes-input');
});

$("#general-teleop-scale-cubes-minus").click(function(){
   subtract('#general-teleop-scale-cubes-input');
});

$("#general-teleop-portal-cubes-plus").click(function(){
   add('#general-teleop-portal-cubes-input');
});

$("#general-teleop-portal-cubes-minus").click(function(){
   subtract('#general-teleop-portal-cubes-input');
});

$("#general-teleop-exchange-cubes-plus").click(function(){
   add('#general-teleop-exchange-cubes-input');
});

$("#general-teleop-exchange-cubes-minus").click(function(){
   subtract('#general-teleop-exchange-cubes-input');
});

$("#general-teleop-ground-cubes-plus").click(function(){
   add('#general-teleop-ground-cubes-input');
});

$("#general-teleop-ground-cubes-minus").click(function(){
   subtract('#general-teleop-ground-cubes-input');
});

$("#general-teleop-accuracy-cubes-plus").click(function(){
   add('#general-teleop-accuracy-cubes-input');
});

$("#general-auto-div-switch-minus").click(function(){
   subtract('#general-auto-switch-number-input');
});

$("#general-auto-div-scale-plus").click(function(){
   add('#general-auto-switch-number-input');
});

$("#general-auto-div-scale-minus").click(function(){
   subtract('#general-auto-scale-number-input');
});

$("#general-auto-div-switch-plus").click(function(){
   add('#general-auto-scale-number-input');
});

$("#general-auto-div-exchange-minus").click(function(){
   subtract('#general-auto-exchange-number-input');
});

$("#general-auto-div-exchange-plus").click(function(){
   add('#general-auto-exchange-number-input');
});


$("#general-auto-div-picked-up-minus").click(function(){
   subtract('#general-auto-picked-up-number-input');
});

$("#general-auto-div-picked-up-plus").click(function(){
   add('#general-auto-picked-up-number-input');
});

