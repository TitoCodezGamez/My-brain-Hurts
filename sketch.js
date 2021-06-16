/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

/* General Variables */ var gameState;

/* Platforms */ var SmallGrassPlatform, MediumGrassPlatform, LargeGrassPlatform;
/* Platforms Image */ var SmallGrassPlatformI, MediumGrassPlatformI, LargeGrassPlatformI;

/* Loading Screens */ var GrassMenu ;
/* Loading Screens Image */ var GrassMenuI;

/* Backgrounds */ var CityBackground;
/* Background Images */ var CityBackgroundI;


function preLoad(){
    // Platforms
    SmallGrassPlatformI = loadImage("Textures/Platforms/Grass/SmallGrassPlatform.png");
    MediumGrassPlatformI = loadImage("Textures/Platforms/Grass/MediumGrassPlatform.png");
    LargeGrassPlatformI = loadImage("Textures/Platforms/Grass/LargeGrassPlatform.png");

    //Menus
    GrassMenuI = loadImage("Textures/Menus/GrassStartMenu.png");

    //Backgrounds
    CityBackgroundI = loadImage(/*"Textures/Backgrounds/CityBackground.png"*/"Hi.png");
}

function setup(){
    createCanvas(displayWidth, displayHeight);

    CityBackground = createSprite(10800,displayHeight/2);
    CityBackground.addImage("labless",CityBackgroundI);
    

    /*GrassMenu = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    GrassMenu.addImage("labless",GrassMenuI);*/

   /* GrassMenu = createImg('Textures/Menus/GrassStartMenu.png');
    GrassMenu.position(displayWidth/2, displayHeight/2);
    GrassMenu.size(displayWidth, displayHeight);*/

   // image(GrassMenuI,width/2, height/2, width, height);

}

function draw(){
    background(99);
    drawSprites();
}
