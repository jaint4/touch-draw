var last_position_of_x, last_position_of_y;
color="black";
width_of_line=2;

canvas=document.getElementById("my canvas")
ctx=canvas.getContext("2d");

var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 300;
    if(width< 992)
    {
        document.getElementById("myCanvas").width =new_width;
        document.getElementById("mycanvas").height=new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        //Additional Activity
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //End Additional Activity
               
          last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
          last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
      }
      
      canvas.addEventListener("touchmove", my_touchmove);
      
      function my_touchmove(e) 
      {
      
          console.log("my_touchMove");
          current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
          current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
      
          // old same old as the paint web app
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.lineWidth = width_of_line;
      
    }