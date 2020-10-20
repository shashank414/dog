
var food;
var dog;
function preload()
{
dogImage=loadImage("images/dogImg.png")
milkImage=loadImage("Milk (1).png")

}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  database.ref("food").on("value", (data) => {
    food = data.val();
    console.log("Get count "+ food);
})
dog=createSprite(400,200,40,30)
dog.addImage(dogImage)
dog.scale=0.1

}


function draw() { 
  background("orange") 
  text(food,30,30)
if (keyWentDown("DOWN_ARROW")) {
  if (food>0) {
    food=food-1
    database.ref('/').update({
      food: food })
      
  }
  


}
for (var i = 0; i < food; i=i+1) 
{
  image(milkImage,40*i + 50,150,40,60);
//   var milk= createSprite(40*i + 50,150)
//  milk.addImage(milkImage)
//  milk.scale=0.1

}
  drawSprites();
  

}



