import React, {Component} from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
class PvE extends Component{
  player;
  isTurned = false;
  platform;
  constructor(props) {
    super(props);

    this.state = {
      initialize: true,
      game: {
        width : "100%",
        backgroundColor : "#282828",
        type: Phaser.AUTO,
        physics: {
          default: "arcade",
          arcade: {
          }

        },
        scene: {
          init:
            function() {
            },
            preload: function() {
              this.load.image("albert", "assets/walk1.png")
  
              this.load.spritesheet('gatorWalkRight', "assets/walkv4.png", {frameWidth: 400, frameHeight: 400} )
              this.load.spritesheet('gatorWalkLeft',"assets/walkmirrorr.png", {frameWidth: 400, frameHeight: 400} )
  
              this.load.spritesheet('gatorWalkIdle',"assets/idlv4.png", {frameWidth: 400, frameHeight: 400})
              this.load.spritesheet('gatorWalkIdleMirror',"assets/idlemirror.png", {frameWidth: 400, frameHeight: 400})
  
              this.load.spritesheet('gatorCronch', "assets/bnitev4.png", {frameWidth: 400, frameHeight:400})
              this.load.spritesheet('gatorCronchMirror', "assets/chompmirror.png",{frameWidth: 400, frameHeight: 400})
  
              this.load.spritesheet('gatorSwipe', "assets/swipev4.png", {frameWidth: 400, frameHeight:400})
              this.load.spritesheet('gatorSwipeMirror', "assets/swipeMirror.png",{frameWidth: 400, frameHeight: 400});
  
              this.load.spritesheet('gatorBlock', "assets/blockv4.png",{frameWidth: 400, frameHeight: 400})
              this.load.spritesheet('gatorBlockMirror', "assets/blocokedlong mirror.png",{frameWidth: 400, frameHeight: 400})
  
              this.load.spritesheet('gatorJump', "assets/jumpvf.png",{frameWidth: 400, frameHeight: 400})
              this.load.spritesheet('gatorJumpMirror', "assets/jumpmirror.png",{frameWidth: 400, frameHeight: 400})

  
            },
            create:function(){
              this.player = this.physics.add.sprite(200,500, "albert");

              this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
              this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
              this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
              this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
              this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
              this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);


              this.player.setBounce(0.2);
              this.player.setCollideWorldBounds(true);
              this.player.body.setGravity(0, 400);
              
              this.physics.add.collider(this.player,this.platform);
               this.anims.create({
              key: 'right',
              frames: this.anims.generateFrameNumbers('gatorWalkRight', { start: 0, end: 8 }),
              frameRate: 10,
              repeat: -1


            });
            this.anims.create({
              key: 'left',
              frames: this.anims.generateFrameNumbers('gatorWalkLeft', { start: 0, end: 8 }),
              frameRate: 10,
              repeat: -1
            });
            this.anims.create({
              key: 'idle',
              frames: this.anims.generateFrameNumbers('gatorWalkIdle', {start:0, end: 3}),
              frameRate: 3,
              repeat: -1
            })
            this.anims.create({
              key: 'idleMirror',
              frames: this.anims.generateFrameNumbers('gatorWalkIdleMirror', {start:0, end: 3}),
              frameRate: 3,
              repeat: -1
            })
            this.anims.create({
              key: 'cronch',
              frames: this.anims.generateFrameNumbers('gatorCronch', {start:0, end: 8}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'cronchMirror',
              frames: this.anims.generateFrameNumbers('gatorCronchMirror', {start:0, end: 8}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'swipe',
              frames: this.anims.generateFrameNumbers('gatorSwipe', {start:0, end: 3}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'swipeMirror',
              frames: this.anims.generateFrameNumbers('gatorSwipeMirror', {start:0, end: 3}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'block',
              frames: this.anims.generateFrameNumbers('gatorBlock', {start:0, end: 7}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'blockMirror',
              frames: this.anims.generateFrameNumbers('gatorBlockMirror', {start:0, end: 7}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'jump',
              frames: this.anims.generateFrameNumbers('gatorJump', {start:0, end: 4}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'jumpMirror',
              frames: this.anims.generateFrameNumbers('gatorJumpMirror', {start:0, end: 4}),
              frameRate: 10,
              repeat: 0
            })
            },
            update:  function() {
              if(this.keyD.isDown){
                this.player.x += 4;
                this.player.anims.play('right', true);
                this.isTurned = false;

              }
              else if(this.keyA.isDown){
                this.player.x -= 4;
                this.player.anims.play('left', true);
                this.isTurned = true;

              }
              if(this.keyW.isDown &&  this.player.body.onFloor()){
                  if (this.isTurned)
                  {
                    this.player.anims.play('jumpMirror', true);

                  }
                  else {
                    this.player.anims.play('jump', true);
                  }
                  this.player.setVelocityY(-300);

              }
              else if(this.keyQ.isDown)
              {
                if (this.isTurned)
                {
                  this.player.anims.play('cronchMirror', 8, true);
                } else {
                  this.player.anims.play('cronch', 8, true);
                }
                
              }
              else if(this.keyE.isDown)
              {
                if(this.isTurned)
                {
                  this.player.anims.play('swipeMirror',true);
                }
                else
                {
                  this.player.anims.play('swipe', true);
                }
              }
              else
              {
                if(this.isTurned)
                {
                  this.player.anims.play('idleMirror',true);
                }
                else
                {
                  this.player.body.setSize(180,400,true);
                  this.player.anims.play('idle',true);
                }
              }
              
            }
          }
        }
      }
    }
  render(){
    const { initialize, game } = this.state
    return (
    <IonPhaser game={game} initialize = {initialize} />
  )
  }
}

export default PvE;