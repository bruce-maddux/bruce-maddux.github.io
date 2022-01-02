import React, { Component } from "react";
import Phaser from "phaser";
import {IonPhaser} from "@ion-phaser/react";


import "./PvE.css";
let player1on2 = false
let player2on1 = false

let player1Health = 100;
let player2Health = 100;

let winner = null;

class Gator extends Component {
  player;
  player2;
  isTurnedP1 = false;
  isTurnedP2 = false;
  isPushedP1 = false;
  isPushedP2 = false;
  platform;

  constructor(props) {
    super(props);

    this.state = {
      player1Health: 100,
      player2Health: 100
    }

    this.bait= {
      initialize: true,
      game: {
      }
    }

  }

  componentDidMount() {

    this.bait = {
      initialize: true,
      game: {
        width: "100%",
        height: "100%",
        type: Phaser.AUTO,
        physics: {
          default: "arcade",
          arcade: {
          }

        },
        scene: {
          init:
            function() {
              this.cameras.main.setBackgroundColor('#24252A')
            },
          preload: function() {
            console.log("first")
            this.load.image('marston', "./background2saturation.png")
            this.load.image('albert', "./walk1.png")
            this.load.image('invertedAlbert', "./walk1invert.png")
            this.load.image('ground', "./ground.png")
            this.load.image('platform', "./ground2.png")
            this.load.image('covid', "./corona.png")

            this.load.spritesheet('gatorWalkRight',"./walkv4.png", {frameWidth: 400, frameHeight: 400} )
            this.load.spritesheet('gatorWalkLeft',"./walkmirrorr.png", {frameWidth: 400, frameHeight: 400} )

            this.load.spritesheet('gatorWalkIdle',"./idlv4.png", {frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('gatorWalkIdleMirror',"./idlemirror.png", {frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('gatorCronch', "./bnitev4.png", {frameWidth: 400, frameHeight:400})
            this.load.spritesheet('gatorCronchMirror', "./chompmirror.png",{frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('gatorSwipe', "./swipev4.png", {frameWidth: 400, frameHeight:400})
            this.load.spritesheet('gatorSwipeMirror', "./swipeMirror.png",{frameWidth: 400, frameHeight: 400});

            this.load.spritesheet('gatorBlock', "./blockv4.png",{frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('gatorBlockMirror', "./blocokedlong mirror.png",{frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('gatorJump', "./jumpvf.png",{frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('gatorJumpMirror', "./jumpmirror.png",{frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('gatorDamage', "./hurtv4.png", {frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('gatorDamageMirror', "./damadgemirror.png", {frameWidth: 400, frameHeight: 400})


          },
          create:function() {
            this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
            this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
            this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
            this.keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);



            this.cursors = this.input.keyboard.createCursorKeys();

            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            this.platform = this.physics.add.staticGroup();
            this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'marston');
            this.bg.setDisplaySize(windowWidth,  windowHeight);
            this.add.sprite(windowWidth / 2, windowHeight - 250, "ground");

            this.player = this.physics.add.sprite(160,windowHeight - 250, 'albert');
            this.player2 = this.physics.add.sprite(windowWidth - 160,windowHeight - 250, 'invertedAlbert');


            this.player.setBounce(0.2);
            this.player.setCollideWorldBounds(true);

            this.player2.setBounce(0.2);
            this.player2.setCollideWorldBounds(true);

            this.player.body.setGravity(0, 600);
            this.player2.body.setGravity(0, 600);

            this.platform.create(windowWidth/2, windowHeight - 50, 'platform');

            this.physics.add.collider(this.player,this.platform);
            this.physics.add.collider(this.player2, this.platform);
            this.physics.add.collider(this.player, this.player2);


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
              frameRate: 20,
              repeat: 0
            })
            this.anims.create({
              key: 'cronchMirror',
              frames: this.anims.generateFrameNumbers('gatorCronchMirror', {start:0, end: 8}),
              frameRate: 20,
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
            this.anims.create({
              key: 'damage',
              frames: this.anims.generateFrameNumbers('gatorDamage', {start:0, end: 5}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'damageMirror',
              frames: this.anims.generateFrameNumbers('gatorDamageMirror', {start:0, end: 5}),
              frameRate: 10,
              repeat: 0
            })

            //ATTACK NORMAL GATOR

            this.anims.create({
              key: 'rightInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorWalkRight', { start: 0, end: 8 }),
              frameRate: 10,
              repeat: -1
            });
            this.anims.create({
              key: 'leftInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorWalkLeft', { start: 0, end: 8 }),
              frameRate: 10,
              repeat: -1
            });
            this.anims.create({
              key: 'idleInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorWalkIdle', {start:0, end: 3}),
              frameRate: 3,
              repeat: -1
            })
            this.anims.create({
              key: 'idleMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorWalkIdleMirror', {start:0, end: 3}),
              frameRate: 3,
              repeat: -1
            })
            this.anims.create({
              key: 'cronchInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorCronch', {start:0, end: 8}),
              frameRate: 20,
              repeat: 0
            })
            this.anims.create({
              key: 'cronchMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorCronchMirror', {start:0, end: 8}),
              frameRate: 20,
              repeat: 0
            })
            this.anims.create({
              key: 'swipeInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorSwipe', {start:0, end: 3}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'swipeMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorSwipeMirror', {start:0, end: 3}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'blockInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorBlock', {start:0, end: 7}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'blockMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorBlockMirror', {start:0, end: 7}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'jumpInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorJump', {start:0, end: 4}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'jumpMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorJumpMirror', {start:0, end: 4}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'damageInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorDamage', {start:0, end: 5}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'damageMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorDamageMirror', {start:0, end: 5}),
              frameRate: 10,
              repeat: 0
            })

            },
        },
      }
    }
    this.forceUpdate()

  }


  render() {
    const { initialize, game } = this.bait
    return (
      <>
        <div className="player1">Player 1</div>


        <IonPhaser game={game} initialize={initialize} style={{    marginBottom: "-4px",
          overflow: "hidden"}} />
      </>

    )
  }
}

export default Gator;
// <div className="healthbar2" style={{ position: "absolute", width: "400px", height: "50px" }}>          </div>
//
// <div className="health2" style={{ position: "absolute", width: (player2Health)*4, height: "50px"}}>
