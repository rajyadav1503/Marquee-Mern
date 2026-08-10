
const canvas = document.getElementById("myCanvas");

//Ab hume canvas ke saree tools , jo js me available hai wo use kerne ke liye ek context/environment banana hoga.
// ek variable lenge , ex here ctx , we can take pencil or context or anything , but conventionally we take ctx (short form of ctx);

const ctx = canvas.getContext("2d");
//Here canvas.getContext() contains diff tools for drwaing on the canvas .
// 2d means the 2-dimentyional drawing tools for the canvas. (x-axis and y-axis).

//Set the actual canvas size
// css me jo canvass ka hight aur width set kiya hai wo bas display ke liye hai .
// but actuall me jo drawing area hai canvas me wo default 300px * 150px hota hai.
// isse hoga kya agar humara cnavas ka size kuch aur hai to wo actual drawing area size se match nhi hoga .
// ex image ko stretch kerte hai to blurr ho jata hai.

// clientWidth  -> Content + Padding (NO border)
// offsetWidth  -> Content + Padding + Border

// For canvas, use clientWidth/clientHeight
// because the drawable area should not include the border.
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

// Drawing state check kerne ke liye just ek variable , jab mouse press hoga tab true ker denge nhi to false.
//ex jese jab mousedown hoga tab isDrawing true ho jaega . nhi to false .
let isDrawing = false;

// Start drawing
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;  // Drawing start hogi.

    ctx.beginPath();  // ek naya path start kerna har baar jab mousedown matlab mouse click hoga.
                      // bginparth ke bina last drawing ke path se continue hoga drawing.

    ctx.moveTo(e.offsetX, e.offsetY);   // we use moveTo here to set starting point of the drawing pen.
                                        // example jab hum draw kerte hai to pen copy pe rakhte hai , wo jagah wo cordinates pata kerne ke liye.

                                    // offsetX,offsetY canvas ke andar ka x and y cordinates pata kerne ke liye.
});

// Draw while moving the mouse
canvas.addEventListener("mousemove", (e) => {

    if (!isDrawing) return;  // agar click kiye bina mouse move ho rha hai to.

    ctx.lineTo(e.offsetX, e.offsetY);  // Draw a line from the current pen position to this new position.
    ctx.stroke();    // Yahi actually path/line draw kerta hai . This actually draws the path on the canvas.
                    // without stroke() Nothing appears on the screen.
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
    isDrawing = false;    // jab mouse click hata denge tab drawing band.
                         // agar ye nhi kerenge to mouse release kerne par bhi draw hote rehega.
});

// If mouse leaves canvas, stop drawing
canvas.addEventListener("mouseleave", () => {
    isDrawing = false;    // agar canvas se bahar gaya to bhi drawing band.
});


// Ab color picker ki baari .

const colorPicker = document.getElementById("color-btn");

//Ab we will use strokeStyle , jo decide kerta hai jo line/path stroke se ban rhi thi wo konse color ki hogi.
ctx.strokeStyle = "red";

// Ab ek colorPicker ke input value pe eventlistner bana ke pen/stroke ka color change ker skte hai.

colorPicker.addEventListener("input" , () => {
    ctx.strokeStyle = colorPicker.value;
});

colorPicker.addEventListener("mouseover" , ()=>{
    colorPicker.style.cursor = "pointer";
})

// here agar hum shapes banate aur usse fill kerna hota to fillStyle use kerte.

ctx.lineCap = "round";
ctx.lineJoin = "round";


//Now the size slider .

const sizeSlider = document.getElementById("size-slider");
// first set the default size .
//The size of the pen/stroke line is given by using 'linewidth'.
//linewidth decides how thick the line will be.

//ex linewidth is 10 thiner line and linewidth = 30 , line will be thicker.

ctx.lineWidth = sizeSlider.value;

//now add eventListner to the input value of sizeSlider 
sizeSlider.addEventListener("input" , ()=>{
    ctx.lineWidth = sizeSlider.value;
    
});

sizeSlider.addEventListener("mouseenter" , ()=>{
    sizeSlider.style.cursor = "pointer";
    
});

// Now the clear button .

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click" , () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height); // this means clear a rectangular area of the canvas .
        
        //clearReact(0,0,100,100) here 0,0 means starting cordinate 0,0
        
});

clearBtn.addEventListener("mouseover" , ()=>{
    clearBtn.style.cursor = "pointer";
})

//border color change;


canvas.addEventListener("mouseover" , () => {
    canvas.style.border = "solid yellow";
    canvas.style.cursor= "pointer";
})

canvas.addEventListener("mouseleave" , () => {
    canvas.style.border = "solid darkgreen";
    canvas.style.cursor = "default";
})
