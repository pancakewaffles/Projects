#define draw_hpbar
/*
Draw Healthbar Script

draw_hpbar(x,y,value);
x - x position to draw the bar at
y - y position to draw the bar at
w - previously initiated variable to define the width or height displayed in the bar.

*/

var xx, yy, w;
xx=argument0;
yy=argument1;
w=argument2;

for (i=1; i<5; i+=1)
{
    draw_sprite_part(spr_bar,i,0,0,0+w,sprite_height,xx,yy);
};

draw_sprite(spr_bar,0,xx,yy);

