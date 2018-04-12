#define sc_menu_create
//This script is just for setting up the menu. It is called in the create event of o_master.

//Main Menu //
menu_main = sc_menu_add(room_width/2,300,1.5,true,0,"Main Menu");
sc_menu_add_button("Start","MenuGoto(menu_info)");
sc_menu_add_button("Quit","game_end()");

//Info Menu //
menu_info = sc_menu_add(room_width/2,300,1.5,true,0,"Info Menu");
sc_menu_add_button("Show Info","sc_show_message('Hey!#This is some info about the menu. These menus can be edited in a matter of minutes - as long as you understand how it works! Just make sure you read the tutorial, which can be found in the GMC topic. =D','Information')");
sc_menu_add_button("Back","MenuGoto(menu_main)");
#define sc_menu_add
//Adds a menu to keep buttons in/on.
//NOTE: You cant add buttons in any other event than the create event.
// Arg0 = x
// Arg1 = y
// Arg2 = Size (1 = normal size)
// Arg3 = Animated Background?
// Arg4 = Width (Set to 0 to enable auto-sizing)
// Arg5 = Menu Title (String) (Leave string empty if no title is needed)

b_menu_append += 1;

var i;
i = b_menu_append;

b_x[i] = argument0;
b_y[i] = argument1;
m_scale[i] = argument2;
b_anim[i] = argument3;
menu_width[i] = argument4;
b_num[i] = 1;
m_num += 1;
b_place = 0;
menu_title[i] = string(argument5);

if (string(argument5) = "0")
{
    menu_title[i] = "";
}

return i;
#define sc_menu_add_button
//Adds a button to the menu.
// Arg0 = String
// Arg1 = Action (Code in string - executed when button is pressed)
// Arg2 = Type of button (0 = normal 1 = scrolling (ie-Something happens when you press left or right on it))
//(If you dont put an argument, normal type is used)
// - Arg3, 4 and 5 only needs arguments if type (Arg2) = 1.
// Arg3 = Action for left pressed (Code in string)
// Arg4 = Action for right pressed (Code in string)
// Arg5 = Variable attached (as a string) (This variable is added to the string of the variable - for when the button controls a variable)
//NOTE: Arg 5 can only be a local variable.

b_place += 1;

var i, n;
i = b_menu_append;
n = b_place;
//n = Button id, i = Menu id

b_effect[n,i] = 0;
b_str[n,i] = argument0;
b_action[n,i] = argument1;
b_num[i] += 1;
b_inputvar[n,i] = "";
b_separator[n,i] = false;
b_active[n,i] = true;

if (argument2 = 1)
{
    b_action_l[n,i] = argument3;
    b_action_r[n,i] = argument4;
    b_effect_l[n,i] = 0;
    b_effect_r[n,i] = 0;
}
else
{
    b_action_l[n,i] = "";
    b_action_r[n,i] = "";
}

if (string(argument5)="0") { b_variable[n,i] = "" } else { b_variable[n,i] = argument5 }
#define sc_MenuSetColor
//Set colors for menu:
// - sc_MenuSetColor(background, buttons, outline)

//Backdrop:
b_col1 = argument0;
//Buttons
b_col2 = argument1;
//Outline
b_col3 = argument2
#define sc_MenuSetBackAlpha
//Set alpha value of background for all menus:
// - sc_MenuSetBackAlpha(alpha)

//Backdrop alpha:
b_back_a = argument0;
#define sc_MenuSetFont
//Set font for all menus:
// - sc_MenuSetFont(font)

//Set font:
menu_font = argument0;
#define MenuGoto
//Go to a different menu in the system.
// - sc_MenuGoto(menu_id)

menu_previous = b_menu;
b_menu = argument0;
b_button = 1;
b_roll_to = 0;
#define sc_show_message
//Shows a message on screen, and makes menu inactive.
sm_string = string(argument0);
sm_title = string(argument1);
sm_active = true;
sm_keygrab = false;
sound_play(menu_snd_message);
#define sc_show_keygrab
//Shows a message on screen, and makes menu inactive as well as set value of variable in argument2 to last keyboard key.
sm_string = string(argument0);
sm_title = string(argument1);
sm_active = true;
sm_keygrab = true;
sm_keygrab_var = argument2;
sound_play(menu_snd_message);
#define sc_button_active
//Deactivates/Activates a button, making it invisible/visible.
// Arg0 = Button id
// Arg1 = menu id
// Arg2 = Activate, or De-Activate? (true = active - false = inactive)

b_active[argument0,argument1] = argument2;
#define sc_MenuSetButtonSpeed
//Slowness of buttons: (more = slower)
b_spd = argument0;
#define sc_menu_add_input
//Adds an input button to the menu.
// Arg0 = String
// Arg1 = Action (in code, as string) (executed when user has input a value, and has pressed enter -
//Useful for when you want something to happen depending on what the user has input.)
// Arg2 = Variable that user can input a value into. (as string)
//NOTE: This only lets the user input a string - not real values.

sc_menu_add_button(argument0, argument1);
var i, n;
i = b_menu_append;
n = b_place;
//n = Button id, i = Menu id

b_inputvar[n,i] = argument2;
#define sc_menu_add_separator
//Adds a separator between the last button and the next button.

var i, n;
i = b_menu_append;
n = b_place;
//n = Button id, i = Menu id

b_separator[n,i] = true;
#define sc_menu_init
////////////////////////////////////////////
//  PROFESSIONAL MENU SCRIPT 1.0 MADE BY  //
//                Mordi                   //
//                                        //
//    Please mention me in the credits    //
//         if you use this! :D            //
//     Maybe even in the game topic?      //
//                                        //
////////////////////////////////////////////

//NOTE: Some of the variables in this script are set automatically,
//and changing their value wont change anything!

//First set alpha values for sprites:
sprite_set_alpha_from_sprite(s_boxcorner1,s_boxcornerA);
sprite_set_alpha_from_sprite(s_boxcorner2,s_boxcornerA);
sprite_set_alpha_from_sprite(s_boxcorner3,s_boxcornerA);
sprite_set_alpha_from_sprite(s_boxcorner4,s_boxcornerA);
sprite_set_alpha_from_sprite(s_boxside_light,s_boxsideA);
sprite_set_alpha_from_sprite(s_boxside_dark,s_boxsideA);
sprite_set_alpha_from_sprite(s_box_gloss,s_box_glossA);
sprite_set_alpha_from_sprite(s_box_shadow,s_box_shadowA);
sprite_set_alpha_from_sprite(s_box_shine_side,s_box_shine_sideA);
sprite_set_alpha_from_sprite(s_box_shine_corner,s_box_shine_cornerA);
sprite_set_alpha_from_sprite(s_cursor,s_cursorA);

//Initiates arrays and sets text for buttons.

//Current button:
b_button = 1;
//Current menu:
b_menu = 1;
//Previous menu:
menu_previous = 1;

//Colors for menu:
//Backdrop:
b_col1 = c_blue;
//Buttons
b_col2 = c_white;
//Outline
b_col3 = c_red

//Draw a shadow effect behind buttons?
b_shadows = true;
//Backdrop alpha value.
b_back_a = 1;
//Animated boxes?
m_anim = true;

//Slowness of menu:
m_slowness = 25;
//Friction of menu:
m_friction = 1.25

//Button size effect (more = less effect) (Minimum 2!)
b_eff = 4;
if b_eff<2 { b_eff = 2; }
//Slowness of buttons: (more = slower)
b_spd = 1;
//Space between buttons:
b_spc = 0;
//If we need some extra space between the buttons:
b_space_ex = 3;
//Variables for scrolling through buttons faster.
//Vertical:
b_scroll_up = 0;
b_scroll_down = 0;
b_set_up = false;
b_set_down = false;
b_scroll_timer_up = 0;
b_scroll_timer_down = 0;
//Horizontal:
b_scroll_timer_left = 0;
b_scroll_timer_right = 0;

//Variables for scrolling the menu.
b_roll = 0;
b_roll_to = 0;
b_roll_spd = 2;
b_roll_active = false;
//To keep track of button placements, only used in this event:
b_place = 0;
//To keep track of how many menus we have in the system:
m_num = 0;
//To keeo track of what menu was last created:
b_menu_append = 0;

//Box outline type:
box_outl = 2;
box_gloss = 0.5;
box_shadow = 0.7;
box_anim = s_boxanim;
box_anim_spd = 0.32;
box_anim_img = 0;

//Message variables:
sm_string = "";
sm_title = "";
sm_active = false;
sm_width = 400;
sm_bscale = 0;
sm_keygrab = false;
sm_keygrab_var = "";

//Some mouse variables:
mouse_xprev = mouse_x;
mouse_yprev = mouse_y;
mouse_visible = 0;
mouse_visible_timer = 0;

//Variables used for input:
input_active = 0;
input_alpha = 0;
input_alpha_timer = 0;
input_oldvalue = "";

//Font variable:
menu_font = 0;

//Does the menu use the keyboard or the mouse? (0 = both - 1 = keyboard - 2 = mouse)
menu_control = 0;
#define sc_action
//Performs the action for the currently highlighted button.
//If string is empty, no action is performed.

if (b_action[b_button,b_menu] = "") { exit }

sound_play(menu_snd_action)
var i;
execute_string(b_action[b_button,b_menu])
b_scroll = 0;    
for(i=1; i<b_num[b_menu]; i+=1) { b_effect[b_menu,i]=0; }
#define sc_hide_message
//Hide the current message shown:
sm_active = false;
#define sc_wiggle_init
// Use like this in a constant (step, draw) event:
// - sc_wiggle_init(number_of_wiggle_vars)
// Written by Mordi

var n, i;
i = b_menu_append+1;

for(n = 0; n<i; n+=1)
{
    spd[n] = 0;
    scroll_to[n] = 0;
    scroll[n] = 0;
}
#define sc_wiggle
// Use like this a constant (step, draw) event:
// - sc_wiggle(x, target_x, friction, slowness,id)
// Written by Mordi

var dis, xx, tar, fric, i;
xx=argument0
tar=argument1
slow=argument2
fric=argument3
i = argument4


dis=point_distance(xx,xx,tar,tar)/2

if xx<tar { spd[i]+=dis/slow }
if xx>tar { spd[i]-=dis/slow }

spd[i]=spd[i]/fric
xx+=spd[i]

return xx;
#define sc_wiggle_process
var n, i;
n = argument0;
for(i=0; i<n; i+=1)
{
    scroll[i] = sc_wiggle(scroll[i], scroll_to[i], m_slowness, m_friction, i)
    if i+1 = b_menu { scroll_to[i] = 10 } else { scroll_to[i] = 0 }
}
#define sc_menu_draw
//Script written by Mordi

//First of all, set the font to use:
draw_set_font(menu_font);

//Set draw variables:
draw_set_halign(1);
draw_set_valign(1);
//(Needs to be like this, or else you will have an ugly looking menu.)

//Draws one of the menus.
var m_c;
m_c = 0;
for(o=1; o<m_num+1; o+=1)
{
//We dont draw menus that shouldnt be drawn.
if scroll[o-1] > 0.2
{

m_c = o-1;

var i, xx, yy, w, h, h_ex, col1, col2, col3, sc, alpha, menu, anim;
//What menu is to be drawn?
menu = m_c+1
//Positions:
xx = b_x[menu];
yy = b_y[menu]+(scroll[m_c]-10)*40;
//Width:
w = 0;
//Height:
h = 0;
//Extra Height:
h_ex = 0;
//Colors:
col1 = b_col1;
col2 = b_col2;
col3 = b_col3;
//Scale:
sc = m_scale[m_c+1]
//Alpha value:
alpha = scroll[m_c]/10
if alpha>1 { alpha=1 }

//Animated background variable:
anim = b_anim[menu]

//First we get how wide this menu is:
for(i=1; i<b_num[menu]; i+=1)
{

if (b_active[i,menu]=true)
{

    var w_str, str_ex;
    str_ex = "";
    if (b_inputvar[i,menu] != "")
    {
        if (input_active = 0)
        { str_ex += string(variable_local_get(b_inputvar[i,menu])); } else { str_ex += keyboard_string; }
    }        
    if (b_variable[i,menu] != "") { str_ex += string(variable_local_get(b_variable[i,menu])); str_ex += "0." }
    w_str = b_str[i,menu] + str_ex;
    if (menu_width[menu]=0)
    {
        if (string_width(w_str)*sc>w) { w = string_width(w_str)*(sc) }
    }
    else
    {
        w = menu_width[menu];
    }
    if (string_height(w_str)*sc>h) { b_spc = string_height(w_str)*(sc) + b_space_ex }
    
    if (b_separator[i,menu] = true)
    {
        h_ex += 10*sc;
    }

}
    
}
b_spc -= sc*9;

//Get the height of the menu:
for(i=1; i<b_num[menu]; i+=1)
{
    if (b_active[i,menu] = true)
    {
        h += b_spc;
    }
}

h += h_ex;

//We must expand the width and height slightly, to get some air between borders and buttons:
w += 4
h += 8*sc;

//Do we need to roll up the menu?
if (b_roll_active = true)
{
    if (round(yy) = b_y[menu] and b_menu = menu and ( (yy)+(b_num[menu]*b_spc)>room_height ))
    {
        if (yy)+(b_button*b_spc)+(b_spc*3) > room_height+b_roll
        {
            b_roll_to = round((yy)+(b_button*b_spc)+(b_spc*3)-room_height);
        }
        else
        {
            if round((yy)+(b_button*b_spc)-b_roll)-(b_spc*3) < 0 and b_button!=0
            {
                b_roll_to = round((yy)+(b_button*b_spc))-(b_spc*3);
            }
        }
    }
}
else
{
b_roll_to = 0;
} 

//Take into effect the rolling of the menu:
yy -= b_roll;

//Now we draw the menu's backdrop:
draw_set_color(col1)
draw_set_alpha(alpha*b_back_a)
draw_box(xx-w/2,yy-2,xx+w/2,yy+h, 1, draw_get_alpha(), alpha, anim, menu_title[menu]);

//Some y offset so the text is drawn perfectly into the menu:
yy -= 0.38*b_spc;

//Check if mouse is on the buttons:
if (menu_control != 1 and menu = b_menu)
{
    var yym;
    yym = 0;
    for(i=1; i<b_num[menu]; i+=1)
    {
        if (b_active[i,menu]=false) { yym += b_spc; }
        var m_in;
        m_in = mouse_area(xx-w/2,yy -yym -b_spc/2-b_spc+i*(b_spc)+b_spc,xx+w/2,yy -yym +b_spc/2+i*(b_spc));
        if (m_in = true and input_active = 0 and (sm_active = false and scroll[m_num]<5) and b_active[i,menu]=true) {
        if (b_button != i) and !(mouse_x=mouse_xprev and mouse_y=mouse_yprev) { sound_play(menu_snd_select) b_button = i; }
        if mouse_check_button_pressed(mb_left) and mouse_visible > 0 and b_button!=0
        {
        if !(b_action_l[b_button,b_menu]="") {
            if (mouse_area(xx-w/2,yy -yym -b_spc/2-b_spc+i*(b_spc)+b_spc,xx-w/2+w/8,yy -yym +b_spc/2+i*(b_spc)))
                {
                sound_play(menu_snd_select);
                execute_string(b_action_l[b_button,b_menu]);
                } }
        if !(b_action_r[b_button,b_menu]="") {
            if (mouse_area(xx+w/2-w/8,yy -yym -b_spc/2-b_spc+i*(b_spc)+b_spc,xx+w/2,yy -yym +b_spc/2+i*(b_spc)))
                {
                sound_play(menu_snd_select);
                execute_string(b_action_r[b_button,b_menu]);
                } }
        if ( !(b_action_l[b_button,b_menu]="" and b_action_r[b_button,b_menu]="") and (mouse_area(xx-w/2+w/8,yy -yym -b_spc/2-b_spc+i*(b_spc)+b_spc,xx+w/2-w/8,yy -yym +b_spc/2+i*(b_spc))) ) or (b_action_l[b_button,b_menu]="" and b_action_r[b_button,b_menu]="")
            {
                b_button = i;
                
                if (b_inputvar[i,menu]!="")
                {
                sound_play(menu_snd_select);
                input_active = i;
                keyboard_string = string(variable_local_get(b_inputvar[i,menu]));
                input_oldvalue = string(variable_local_get(b_inputvar[b_button,b_menu]));
                }
                else
                {
                sc_action();
                }
                
            }
        } break; }
        else { if (m_in = false and b_button = i and (mouse_x!=mouse_xprev and mouse_y!=mouse_yprev)) and (input_active = 0 and sm_active = false) { b_button = 0; } }
    }
}
  
//Now draw the buttons:
draw_set_color(col2)
var str;
for(i=1; i<b_num[menu]; i+=1)
{

if (b_active[i,menu] = true)
{

    str = b_str[i,menu]
    if (b_button = i or input_active = i) and sm_active = false {
    if (b_effect[i,menu])<1 and b_menu = menu {
    b_effect[i,menu] += (b_spd/10)-b_effect[i,menu]/(b_spd*10) } }
    else { if (b_effect[i,menu]) > 0 { b_effect[i,menu] -= b_effect[i,menu]/(b_spd*10) } }
    
    var bs;
    //Button scale:
    bs = (b_effect[i,menu]/(b_eff)+(0.7))*sc;
    
    draw_set_alpha((b_effect[i,menu]*2+0.5)*alpha)
    if !(b_action_l[i,menu]="" and b_action_r[i,menu]="")
        {
            draw_set_halign(0)
            
            //Handle effect for the arrows:            
            if (mouse_visible > 0 and input_active = 0 and sm_active = false)
            {
                if (mouse_area(xx-w/2,yy-b_spc/2-b_spc+i*(b_spc)+b_spc,xx-w/2+w/8,yy+b_spc/2+i*(b_spc)))
                {
                    if b_effect_l[i,menu]<sc*0.5 { b_effect_l[i,menu] += 0.1; }
                }
                else
                {
                    if b_effect_l[i,menu]>0 { b_effect_l[i,menu] -= 0.1; }
                }
                if (mouse_area(xx+w/2-w/8,yy-b_spc/2-b_spc+i*(b_spc)+b_spc,xx+w/2,yy+b_spc/2+i*(b_spc)))
                {
                    if b_effect_r[i,menu]<sc*0.5 { b_effect_r[i,menu] += 0.1; }
                }
                else
                {
                    if b_effect_r[i,menu]>0 { b_effect_r[i,menu] -= 0.1; }
                }
            }
            else
            {
                if b_effect_l[i,menu]>0 { b_effect_l[i,menu] -= 0.1; }
                if b_effect_r[i,menu]>0 { b_effect_r[i,menu] -= 0.1; }
            }
            
            if (b_variable[i,menu]!="")
            {
                //Button variable value:
                var str_;
                str_ = string(variable_local_get(b_variable[i,menu]));
                draw_set_halign(2)
                if (b_shadows = true)
                { draw_text_transformed_color(xx+w/2-(sc*18),yy+i*(b_spc)+2,str_, bs, bs, 0,c_black,c_black,c_black,c_black,draw_get_alpha()/2) }
                draw_text_transformed(xx+w/2-(sc*18)-2,yy+i*(b_spc),str_, bs, bs, 0)
                draw_set_halign(0)
            }
            
            //Main button string:
            if (b_shadows = true)
            { draw_text_transformed_color(xx-w/2+(sc*18)+2,yy+i*(b_spc)+2,str, bs, bs, 0,c_black,c_black,c_black,c_black,draw_get_alpha()/2) }
            draw_text_transformed(xx-w/2+(sc*18),yy+i*(b_spc),str, bs, bs, 0)
            
            //Arrows:
            draw_set_halign(1)
            
            if (b_shadows = true)
            { draw_text_transformed_color(xx+w/2-(sc*7)-(b_effect_r[i,menu]*4),yy+i*(b_spc)+2,">", bs + b_effect_r[i,menu], bs + b_effect_r[i,menu], 0,c_black,c_black,c_black,c_black,draw_get_alpha()/2) }
            draw_text_transformed(xx+w/2-(sc*7)-2-(b_effect_r[i,menu]*4),yy+i*(b_spc),">", bs + b_effect_r[i,menu], bs + b_effect_r[i,menu], 0)
            
            if (b_shadows = true)
            { draw_text_transformed_color(xx-w/2+(sc*7)+2+(b_effect_l[i,menu]*4),yy+i*(b_spc)+2,"<", bs + b_effect_l[i,menu], bs + b_effect_l[i,menu], 0,c_black,c_black,c_black,c_black,draw_get_alpha()/2) }
            draw_text_transformed(xx-w/2+(sc*7)+(b_effect_l[i,menu]*4),yy+i*(b_spc),"<", bs + b_effect_l[i,menu], bs + b_effect_l[i,menu], 0)
        }
        else
        {
        
            if (b_variable[i,menu]!="" or b_inputvar[i,menu]!="")
            {
                //A variable is attached:
                var str_;
                str_ = "";
                if b_inputvar[i,menu]!=""
                {
                    if (input_active = i)
                    {
                    str_ = keyboard_string;
                        if input_alpha = 1
                        {
                            draw_rectangle_color(xx+w/2-(sc*20),yy-(b_spc/2)+(i*b_spc)-(sc*2),xx+w/2,yy+(b_spc/2)+(i*b_spc),c_black,c_black,c_black,c_black,0)
                        }
                    }
                    else
                    {
                        str_ = string(variable_local_get(b_inputvar[i,menu]));
                    }
                }
                
                if b_variable[i,menu]!="" { str_ = string(variable_local_get(b_variable[i,menu])); }
                
                draw_set_halign(0)
                if (b_shadows = true)
                { draw_text_transformed_color(xx-w/2+2+(sc*3),yy+i*(b_spc)+2,str, bs, bs, 0,c_black,c_black,c_black,c_black,draw_get_alpha()/2) }
                draw_text_transformed(xx-w/2+(sc*3),yy+i*(b_spc),str, bs, bs, 0)
                
                draw_set_halign(2)
                if (b_shadows = true)
                { draw_text_transformed_color(xx+w/2+2-(sc*3),yy+i*(b_spc)+2,str_, bs, bs, 0,c_black,c_black,c_black,c_black,draw_get_alpha()/2) }
                draw_text_transformed(xx+w/2-(sc*3),yy+i*(b_spc),str_, bs, bs, 0)
                
            }
            else
            {
                //Its just a regular button:
                draw_set_halign(1)
                if (b_shadows = true)
                { draw_text_transformed_color(xx+2,yy+i*(b_spc)+2,str, bs, bs, 0,c_black,c_black,c_black,c_black,draw_get_alpha()/2) }
                draw_text_transformed(xx,yy+i*(b_spc),str, bs, bs, 0)
            }
        }
        
        //Now we check for separators here:
        if (b_separator[i,menu] = true)
        {
            yy += 10*sc;
            draw_set_alpha(1);
            //Draw separator sprite:
            draw_sprite_ext(s_boxside_light, box_outl, xx+w/2, yy+(i*b_spc)+(12*sc), 1, w, 270, b_col3, alpha)
            var shine_w;
            if (w<300) { shine_w = w/300 } else { shine_w = 1 }
            draw_sprite_ext(s_box_shine_side, box_outl, xx+w/2, yy+(i*b_spc)+10, 1, shine_w, 270, c_white, alpha)
        }
        
}
else
    {
        //Button is not active, so we shouldnt make the next buttons bump down:
        yy-=b_spc;
    }
}
}
}

//Update mouse previous coordinates:
mouse_xprev = mouse_x;
mouse_yprev = mouse_y;

//Draw message if it activated:
if (scroll[m_num]>0.1)
{
    var mx, my, mw, mh;
    mx = room_width/2;
    my = room_height/2+scroll[m_num]*30-300;
    mw = sm_width;
    
    draw_set_alpha(scroll[m_num]/20);
    draw_set_color(c_black);
    draw_rectangle(0,0,room_width,room_height,0);
    
    draw_textbox(sm_string, mx, my, mw, 28, 1, m_num+1, sm_title,0);
    
    if (sm_keygrab = false)
    {
        //Okay: Here comes some hard-code for making one button. This needed to be done to achieve the desired effect. 
        var yyy, www, hhh, btstr, aaa, scale;
        btstr = "OK";
        www = string_width_ext(btstr,28,mw)+3;
        hhh = string_height_ext(btstr,28,mw);
        yyy = my+(string_height_ext(sm_string,28,mw))/2+hhh;
        aaa = scroll[m_num]/10
        scale = sm_bscale;
        
        //Check mouse actions for button:
        if (mouse_area(mx-www/2, yyy-hhh/2, mx+www/2, yyy+hhh/2)) and (scroll[m_num]>9.5)
        {
            if (sm_bscale < 1) { sm_bscale += 0.1-sm_bscale/10; }
            if (sm_bset = false) { sound_play(menu_snd_select); }
            sm_bset = true;
            if (mouse_check_button_pressed(mb_left))
            {
                sc_hide_message();
            }
        }
        else
        {
        if (sm_bscale > 0) { sm_bscale -= sm_bscale/10; }
        sm_bset = false;
        }
        
        //Draw small back-box:
        draw_box(mx-www/2,yyy-hhh/2-2,mx+www/2,yyy+hhh/2, 1, b_back_a*aaa, aaa, anim, "");
        
        //Its just a regular button:
        draw_set_halign(1)
        if (b_shadows = true)
        { draw_text_transformed_color(mx+2,yyy+2,btstr, scale*0.5+0.5, scale*0.5+0.5, 0,c_black,c_black,c_black,c_black,draw_get_alpha()/2) }
        draw_text_transformed(mx,yyy,btstr, scale*0.5+0.5, scale*0.5+0.5, 0)
    }
}

//Lastly: Draw the mouse cursor, if it should be drawn.
if (mouse_visible>0)
{
draw_sprite_ext(s_cursor,0,mouse_x,mouse_y,1,1,0,c_white,mouse_visible);
}
#define sc_menu_input
//Processes input and makes menu react to it.
//Note: A lot or all of mouse input is handled in the sc_menu_draw script because of temp vars.
//Script written by Mordi

if (sm_active = true and sm_keygrab = true)
{
    //Set variable to last key pressed:
    if (keyboard_check_pressed(vk_anykey))
    {
        variable_global_set(sm_keygrab_var,keyboard_lastkey);
        variable_local_set(b_variable[b_button, b_menu],global.key_str[keyboard_lastkey])
        sm_active = false;
    }
    //Set variable to last mousebutton pressed:
    if (mouse_check_button_pressed(mb_any))
    {
        variable_global_set(sm_keygrab_var,mouse_lastbutton);
        variable_local_set(b_variable[b_button, b_menu],global.key_str[mouse_lastbutton])
        sm_active = false;
    }
    exit;
}

if keyboard_check_pressed(vk_escape)
{

    //If we are showing a message, we must hide it:
    if (sm_active = true) and (scroll[m_num]>9.5)
    {
        sc_hide_message();
        sound_play(menu_snd_cancel);
        exit;
    } 
    
    //If input is active, we must return into normal mode, but...
    //...since we pressed ESC, we want to return to the old value:
    if (input_active > 0) and (string_length(keyboard_string)>0)
    {
        variable_local_set(b_inputvar[b_button,b_menu],input_oldvalue);
        keyboard_string = "";    
        input_active = 0;
        sound_play(menu_snd_cancel);
        exit;
    }
    
}

if keyboard_check_pressed(vk_enter)
{
    
    //If we are showing a message, we must hide it:
    if (sm_active = true) and (scroll[m_num]>9.5)
    {
        sc_hide_message();
        sound_play(menu_snd_select);
        exit;
    }
    
    //If input is active, we must return into normal mode:
    if (input_active > 0) and (string_length(keyboard_string)>0)
    {
        variable_local_set(b_inputvar[b_button,b_menu],keyboard_string);
        keyboard_string = "";    
        input_active = 0;
        sc_action();
        exit;
    }
}

//This script handles keyboard only. Mouse is handled in draw script.
if (menu_control = 2 or input_active > 0 or sm_active = true) { exit; }

//Make selector scroll up faster than we normally would.
if keyboard_check_direct(vk_up) and !(keyboard_check_direct(vk_down))
{
    if b_button>1 { if b_scroll_up<1 { b_scroll_up += 0.02 } else { b_set_up = true } }
    if b_set_up = true {
    b_button -= 1
    b_set_up = false
    if b_scroll_timer_up<0.96 { b_scroll_timer_up += 0.02 }
    b_scroll_up = b_scroll_timer_up
    sound_play(menu_snd_select)  }        
}
else
{
    b_scroll_up = 0;
    b_scroll_timer_up = 0.8
    b_set_up = false
}

//Make selector scroll up faster than we normally would.
if keyboard_check_direct(vk_down) and !(keyboard_check_direct(vk_up))
{
    if b_button<b_num[b_menu]-1 { if b_scroll_down<1 { b_scroll_down += 0.02 } else { b_set_down = true } }
    if b_set_down = true {
    b_button += 1
    b_set_down = false
    if b_scroll_timer_down<0.96 { b_scroll_timer_down += 0.02 }
    b_scroll_down = b_scroll_timer_down
    sound_play(menu_snd_select)  }
}
else
{
    b_scroll_down = 0;
    b_scroll_timer_down = 0.8
    b_set_down = false
}    

if (b_num[b_menu] > 1) //If there is more than one button in the current menu:
{
    if keyboard_check_pressed(vk_up)
    {
        sc_button_up();
    }
    
    if keyboard_check_pressed(vk_down)
    {
        sc_button_down();
    }
}

if keyboard_check_pressed(vk_enter) and b_button!=0
{
    if (b_inputvar[b_button,b_menu]!="")
    {
        sound_play(menu_snd_select);
        input_active = b_button;
        keyboard_string = string(variable_local_get(b_inputvar[b_button,b_menu]));
        input_oldvalue = string(variable_local_get(b_inputvar[b_button,b_menu]));
    }
    else
    {
        sc_action();
    }
}

if keyboard_check_pressed(vk_left) and b_button>0
{
    if !(b_action_l[b_button,b_menu]="")
    {
        sound_play(menu_snd_select);
        b_effect_l[b_button,b_menu] = m_scale[b_menu]*0.5;
        execute_string(b_action_l[b_button,b_menu]);
    }
}

if keyboard_check_pressed(vk_right) and b_button>0
{
    if !(b_action_r[b_button,b_menu]="")
    {
        sound_play(menu_snd_select);
        b_effect_r[b_button,b_menu] = m_scale[b_menu]*0.5;
        execute_string(b_action_r[b_button,b_menu]);
    }
}
#define sc_menu_process
//Process menu variables, etc.
//Script written by Mordi

//Process input:
sc_menu_input();

//Process slide-effect:
sc_wiggle_process(m_num);

//Process menu rolling up/down when its too large:
if b_roll_to > b_roll { b_roll += (b_roll_spd/10)+( b_roll_to - b_roll )/(b_roll_spd*10) }
if b_roll_to < b_roll { b_roll -= ( b_roll - b_roll_to )/(b_roll_spd*10) }

//Handle mouse disappearing:
if !(mouse_x=mouse_xprev and mouse_y=mouse_yprev) or (mouse_check_button(mb_left)) { mouse_visible_timer = room_speed*6; }
if mouse_visible_timer<0 { mouse_visible_timer = 0; }
if mouse_visible_timer=0 { if mouse_visible>0 { mouse_visible -= 0.05; } }
else { if mouse_visible < 1 { mouse_visible+=0.05; } }
mouse_visible_timer -= 1;

//Handle backdrop animation:
box_anim_img += box_anim_spd;

//Handle input blinking indicator:
if (input_alpha_timer > 0) { input_alpha_timer -= 1; }
else
{
if (input_alpha = 1) { input_alpha = 0; } else { input_alpha = 1; }
input_alpha_timer = room_speed/3;
}

//Some characters shouldnt be allowed when inputting strings, so:
if (input_active > 0)
{
    if (string_count("#",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"#",""); }
    if (string_count("¤",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"¤",""); }
    if (string_count("§",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"§",""); }
    if (string_count("£",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"£",""); }
    if (string_count("~",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"~",""); }
    if (string_count("¨",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"¨",""); }
    if (string_count("Æ",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"Æ",""); }
    if (string_count("Ø",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"Ø",""); }
    if (string_count("Å",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"Å",""); }
    if (string_count("æ",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"æ",""); }
    if (string_count("ø",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"ø",""); }
    if (string_count("å",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"å",""); }
    if (string_count("  ",keyboard_string)) { keyboard_string = string_replace_all(keyboard_string,"  "," "); }
    if (input_active > 0)
    { draw_set_font(menu_font) while(string_width(keyboard_string)>300) { keyboard_string = string_copy(keyboard_string, 1, string_length(keyboard_string)-1) } }
}

//Handle message scrolling: (We use the last scroll arrays for in/out effects for the messages)
scroll[m_num] = sc_wiggle(scroll[m_num], sm_active*10, m_slowness, m_friction, m_num)
#define mouse_area
//Returns true if mouse cursor is within the area specified.
// mouse_area(x1, y1, x2, y2)

if (mouse_x>argument0 && mouse_y>argument1 && mouse_x<argument2 && mouse_y<argument3) { return true }
else { return false }
#define draw_box
//Draws a thick outline from and x and y to an x and a y.
//Script written by Mordi
// - draw_box(x1, y1, x2, y2, scale, alpha_back, alpha_outline, animated?, title)

var x1, y1, x2, y2, a, sc, col, col2, sc, w, h, anim, shine, i, title;

x1 = argument0;
y1 = argument1;
x2 = argument2;
y2 = argument3;
col = b_col3
col2 = b_col1
sc = argument4;
a1 = argument5;
a2 = argument6;
anim = argument7;
shine = true;
title = string(argument8);

if (m_anim = false) { anim = false; }

//Width and height:
w = x2-x1;
h = y2-y1;

//Draw title string with box:
if title!=""
{
    var tw, th, tx, ty;
    tx = (x1+x2)/2;
    ty = y1-2;
    tw = string_width(title)*sc+(5*sc);
    th = string_height(title)*sc+(10*sc);
    
    //Middle
    draw_sprite_ext(s_box, 0, tx-tw/2+(1*sc), ty-th+(1*sc), tw, th, 0, col, a1) 
    
    //Upper left corner:
    draw_sprite_ext(s_boxcorner1, box_outl, tx-tw/2, ty-th, sc, sc, 0, col, a2)
    //Top:
    draw_sprite_ext(s_boxside_light, box_outl, tx+tw/2, ty-th, sc, tw, 270, col, a2)
    //Upper right corner:
    draw_sprite_ext(s_boxcorner2, box_outl, tx+tw/2+(2*sc), ty-th, -sc, sc, 0, col, a2)
    //Right:
    draw_sprite_ext(s_boxside_dark, box_outl, tx+tw/2+(1*sc), ty, sc, th+(1*sc), 180, col, a2)
    //Left:
    draw_sprite_ext(s_boxside_light, box_outl, tx-tw/2, ty-th+(1*sc), sc, th, 0, col, a2)
    
    if (tw>w)
    {
        //Lower left corner:
        draw_sprite_ext(s_boxcorner4, box_outl, tx-tw/2, ty+(2*sc), sc, -sc, 0, col, a2)
        //Lower right corner:
        draw_sprite_ext(s_boxcorner3, box_outl, tx+tw/2+(2*sc), ty+(2*sc), -sc, -sc, 0, col, a2)
        //Bottom (Left):
        draw_sprite_ext(s_boxside_dark, box_outl, tx-tw/2+(1*sc), ty+(1*sc), sc, (tw-w)/2, 90, col, a2)
        //Bottom (Right):
        draw_sprite_ext(s_boxside_dark, box_outl, tx+tw/2+(1*sc), ty+(1*sc), sc, -(tw-w)/2, 90, col, a2)
    }
    
    //Shadow
    if (box_shadow > 0)
    {
        var ssc;
        if th>400 { ssc = 1 } else { ssc = th/400 }
        draw_sprite_ext(s_box_shadow, 0, tx-tw/2+(1*sc), ty-th+(1*sc)+th, tw, -ssc, 0, col, box_shadow*a1)   
    }
    
    //Gloss
    if (box_gloss > 0)
    {
        var gsc;
        gsc = 1;
        if th<50 { gsc = th/50 }
        draw_sprite_ext(s_box_gloss, 0, tx+(1*sc), ty-th+(1*sc), tw/397, gsc, 0, c_white, box_gloss*a1)
    }
    
    var shysc, shxsc;
    if (th<300) { shysc = th/300 } else { shysc = 1 }
    if (tw<300) { shxsc = tw/300 } else { shxsc = 1 }
    draw_sprite_ext(s_box_shine_side, box_outl, tx-tw/2-(8*sc), ty-th, sc, shysc, 0, c_white, a2);
    draw_sprite_ext(s_box_shine_corner, box_outl, tx-tw/2-(1*sc), ty-th-(1*sc), sc, sc, 0, c_white, a2);
    draw_sprite_ext(s_box_shine_side, box_outl, tx-tw/2, ty-th-(7*sc), sc, shxsc, 90, c_white, a2);
    
    //Draw title string:
    draw_set_valign(1)
    draw_set_halign(1)
    draw_set_alpha(a2*0.5);
    draw_set_color(c_black);
    draw_text_transformed(tx+sc,ty-th/2+sc-3,title,sc,sc,0);
    draw_set_alpha(a2);
    draw_set_color(c_white);
    draw_text_transformed(tx,ty-th/2-3,title,sc,sc,0);
    
}

//Upper left corner:
draw_sprite_ext(s_boxcorner1, box_outl, x1, y1, sc, sc, 0, col, a2)
//Top:
draw_sprite_ext(s_boxside_light, box_outl, x1+w, y1, sc, w, 270, col, a2)
//Upper right corner:
draw_sprite_ext(s_boxcorner2, box_outl, x1+w+(2*sc), y1, -sc, sc, 0, col, a2)
//Right:
draw_sprite_ext(s_boxside_dark, box_outl, x1+w+(1*sc), y1+h, sc, h+(1*sc), 180, col, a2)
//Lower right corner:
draw_sprite_ext(s_boxcorner3, box_outl, x1+w+(2*sc), y1+h+(2*sc), -sc, -sc, 0, col, a2)
//Bottom:
draw_sprite_ext(s_boxside_dark, box_outl, x1+(1*sc), y1+h+(1*sc), sc, w, 90, col, a2)
//Lower left corner:
draw_sprite_ext(s_boxcorner4, box_outl, x1, y1+h+(2*sc), sc, -sc, 0, col, a2)
//Left:
draw_sprite_ext(s_boxside_light, box_outl, x1, y1+(1*sc), sc, h, 0, col, a2)

//Left shine
if shine = true
{
var shysc, shxsc;
if (h<300) { shysc = h/300 } else { shysc = 1 }
if (w<300) { shxsc = w/300 } else { shxsc = 1 }
draw_sprite_ext(s_box_shine_side, box_outl, x1-(8*sc), y1, sc, shysc, 0, c_white, a2)
draw_sprite_ext(s_box_shine_corner, box_outl, x1-(1*sc), y1-(1*sc), sc, sc, 0, c_white, a2)
draw_sprite_ext(s_box_shine_side, box_outl, x1, y1-(7*sc), sc, shxsc, 90, c_white, a2)

draw_sprite_ext(s_box_shine_side, box_outl, x1+w+(2*sc), y1+h-(5*sc), -sc, shysc, 180, c_white, a2/1.2)
draw_sprite_ext(s_box_shine_corner, box_outl, x1+w-(2*sc)-0.5, y1+h-(3*sc), -sc, -sc, 0, c_white, a2/1.2)
draw_sprite_ext(s_box_shine_side, box_outl, x1+w-(4*sc), y1+h+(4.5*sc), -sc, shxsc, 270, c_white, a2/1.2)
}


if (anim = false)
{
    //Middle
    draw_sprite_ext(s_box, 0, x1+(1*sc), y1+(1*sc), w, h, 0, col2, a1)
}
else
{
    //Animation
    //We must get height of the animation sprite:
    var sah, saw;
    saw = sprite_get_width(box_anim);
    sah = sprite_get_height(box_anim);
    
    for(i=0; i<h/sah; i+=1)
    {
        for(n=0; n<w/saw; n+=1)
        {
            if (i*sah+sah)<h
            {
                if (n*saw+saw)<w
                {
                draw_sprite_part_ext(box_anim, box_anim_img, 0, 0, saw, sah, x1+(1*sc)+n*saw, y1+(1*sc)+i*sah, 1, 1, col2, a1)
                }
                else
                {
                draw_sprite_part_ext(box_anim, box_anim_img, 0, 0, w-n*saw, sah, x1+(1*sc)+n*saw, y1+(1*sc)+i*sah, 1, 1, col2, a1)
                }
            }
            else
            {
                if (n*saw+saw)<w
                {
                draw_sprite_part_ext(box_anim, box_anim_img, 0, 0, saw, h-i*sah, x1+(1*sc)+n*saw, y1+(1*sc)+i*sah, 1, 1, col2, a1)
                }
                else
                {
                draw_sprite_part_ext(box_anim, box_anim_img, 0, 0, w-n*saw, h-i*sah, x1+(1*sc)+n*saw, y1+(1*sc)+i*sah, 1, 1, col2, a1)
                }
            }
        }
    }
}

//Shadow
if (box_shadow > 0)
{
    var ssc;
    if h>400 { ssc = 1 } else { ssc = h/400 }
    draw_sprite_ext(s_box_shadow, 0, x1+(1*sc), y1+(1*sc)+h, w, -ssc, 0, col, box_shadow*a1)   
}

//Gloss
if (box_gloss > 0)
{
    var gsc;
    gsc = 1;
    if h<50 { gsc = h/50 }
    draw_sprite_ext(s_box_gloss, 0, x1+w/2+(1*sc), y1+(1*sc), w/397, gsc, 0, c_white, box_gloss*a1)
}

#define draw_textbox
//Draws a box with text in it.
//Script written by Mordi.
//arg0 = string
//arg1 = x
//arg2 = y
//arg3 = width
//arg4 = sep
//arg5 = scale
//arg6 = menu_id
//arg7 = title string

//Set draw variables:
draw_set_halign(1);
draw_set_valign(1);


var str, xx, yy, sw, w, h, sc, sep, a, menu;
menu = argument6-1;

str = argument0;
xx = argument1;
yy = argument2-scroll[menu]*20+200;
sw = argument3;
sep = argument4;
sc = argument5;
title = string(argument7);
if (string(argument7)="0")
{
    title = "";
}

if ((scroll[menu]/10) < 0.02) { exit; }

a = scroll[menu]/10;

w = string_width_ext(str,sep,sw)*sc;
h = string_height_ext(str,sep,sw)*sc;

//We must heighten and widthen it so it fits perfectly.
w += 2;
h += 2;

draw_box(xx-w/2, yy-h/2, xx+w/2, yy+h/2, 1, b_back_a*a, 1*a,0,title);

yy = yy-h/2

draw_set_color(c_black)
draw_set_alpha(a/3)
draw_text_ext_transformed(xx+2,yy+2+h/2,str,sep,sw,sc,sc,0);

draw_set_alpha(a)
draw_set_color(b_col2)
draw_text_ext_transformed(xx,yy+h/2,str,sep,sw,sc,sc,0);

//The default valign should be 1.
draw_set_valign(1);
#define sc_button_up
//Selects the previous button (up)

//First we check if there are any active buttons in the menu (Or else we would get en eternal loop afterwards)
for(i=1; i<b_num[b_menu]; i+=1)
{
    if (b_active[i,b_menu]=true) { break; }
}

do
{
    if b_button>1
    {
        b_button -= 1
    }
    else
    {
        b_button = b_num[b_menu]-1
    }
}
until( b_active[b_button,b_menu]=true )
sound_play(menu_snd_select)
#define sc_button_down
//Selects the next button (down)

//First we check if there are any active buttons in the menu (Or else we would get en eternal loop afterwards)
for(i=1; i<b_num[b_menu]; i+=1)
{
    if (b_active[i,b_menu]=true) { break; }
}

do
{
    if b_button<b_num[b_menu]-1
    {
        b_button += 1
    }
    else
    {
        b_button = 1
    }
}
until( b_active[b_button,b_menu]=true )
sound_play(menu_snd_select)
