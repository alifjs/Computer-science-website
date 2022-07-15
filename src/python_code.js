import play_snake_game from "./snake_game"

function play_python_code(ctx,canvas,ctx2,canvas2){
    //console.log(a)
    // ctx.font='300 20px Courier New'//sans-serif'
    // ctx.fillStyle='white'
    let lines=[
    'def move():',
    '  if (counter % 10 == 0):',
    '    change_dx_and_dy()',
    '    for i in range(0,len(snake)):',
    '      snake[i].x += snake[i].dx',
    '      snake[i].y += snake[i].dy',
    '    if (collision_check() == True):',
    '      ctx.fillText("Game over !")',
    '      return ',
    '    if (did_snake_eat()== True):',
    '      grow_snake()',
    '      score=score+1',
    '      generate_new_food_coordinates()']
    let i=0
    let j=0
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        let y_coordinate=40
        for(let w=0;w<i;w++){
            ctx.font='300 20px Courier New'//sans-serif'
            ctx.fillStyle='white'
            ctx.fillText(lines[w],30,y_coordinate)
            y_coordinate+=30
        }
        ctx.font='300 20px Courier New'//sans-serif'
        ctx.fillStyle='white'
        ctx.fillText(lines[i].slice(0,j+1),30,y_coordinate)
        if (j+1>=lines[i].length){
            i++
            j=0
        }else{
            j+=1
        }
        if(i==lines.length){
            play_snake_game(ctx2,canvas2)
        }
        requestAnimationFrame(animate)
    }
    animate()
}
export default play_python_code

// ctx.fillText('def move():',30,40)
// ctx.fillText('   if (counter % 10 == 0 && counter != 0):',30,70)
// ctx.fillText('       change_dx_and_dy()',30,100)
// ctx.fillText('        for i in range(0,len(snake)):',30,130)
// ctx.fillText('           snake[i].x += snake[i].dx',30,160)
// ctx.fillText('           snake[i].y += snake[i].dy',30,190)
// ctx.fillText('        if (collision_check() == True):',30,220)
// ctx.fillText('           ctx.fillText("Game over !")',30,250)
// ctx.fillText('           return ',30,280)
        // reset_direction_coordinates()
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        // for i in range(0,len(snake)):
        //     ctx.beginPath()
        //     ctx.fillStyle = "black"
        //     ctx.fillRect(snake[i].x, snake[i].y, 20, 20)
        //     ctx.beginPath()
        //     ctx.fillStyle = "purple"
        //     ctx.fillRect(snake[i].x + 2, snake[i].y + 2, 16, 16)
///the code below is important//////////////////////////////////////////////////
        // ctx.fillText('def move():',30,40)
        // ctx.fillText('  if (counter % 10 == 0):',30,70)
        // ctx.fillText('    change_dx_and_dy()',30,100)
        // ctx.fillText('    for i in range(0,len(snake)):',30,130)
        // ctx.fillText('      snake[i].x += snake[i].dx',30,160)
        // ctx.fillText('      snake[i].y += snake[i].dy',30,190)
        // ctx.fillText('    if (collision_check() == True):',30,220)
        // ctx.fillText('      ctx.fillText("Game over !")',30,250)
        // ctx.fillText('      return ',30,280)
        // ctx.fillText('    if (did_snake_eat()== True):',30,310)
        // ctx.fillText('      grow_snake()',30,340)
        // ctx.fillText('      score=score+1',30,370)
        // ctx.fillText('      generate_new_food_coordinates()',30,400)