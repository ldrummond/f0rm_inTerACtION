

let bongo = new Audio('bongo.wav');
let trombone = new Audio('trombone.mp3');
let cello = new Audio('cello.mp3');
let washboard = new Audio('washboard.mp3');

window.shouldPlayAudio = false;
window.resizeTimeout;
window.audioQueue = [];

let circFill = "#ecceb8";
let circStroke = "#1139e9";
let circFillHover = "#ecceb8";
let circStrokeHover = "#1139e9";

/*
* Wall
*/
class Wall {
    constructor(x, y, width, height, MatterComps, Props) {
        this.props = Object.assign(Props, {
            friction: 0,
            frictionAir: 0,
            frictionStatic: 0,
            restitution: 1,
            label: "wall",
            isStatic: true, 
            // render: {visible: false}
        })

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        this.body = MatterComps.Bodies.rectangle(
            x, y, width, height, this.props
        ); 
    }

    updatePos(newX, newY) {
        Matter.Body.setPosition(this.body, {x: newX, y: newY});
    }
}

let circleRenderBase = {
    fillStyle: circFill,// '#81f7f7',
    strokeStyle: circStroke,
    lineWidth: 1,
    filter: "url('#neonGlow')"
}

function scaleVelocity(r) {
    let x = 1 / r,
        y = 1 / r;
    return {x: x, y: y}
}

/*
* Circle
*/
class Circle {
    constructor(x, y, r, MatterComps, Props = {}, Render = {}) {
        this.x = x,
            y = y,
            r = r; 

        this.props = Object.assign(Props, {
                inertia: Infinity,
                friction: 0,
                frictionAir: 0,
                frictionStatic: 0,
                restitution: 1,
                collisionFilter: {group : -1},
                force : {x : 100, y : 100},
                mass: 10000,
                render: Object.assign(circleRenderBase, Render),
        })

        this.body = MatterComps.Bodies.circle(
            x, y, r, this.props
        );
    }

    updatePos(newX, newY) {
        Matter.Body.setPosition(this.body, {x: newX, y: newY});
    }
}

/*
* On Page Load
*/
$(function() {
    /////////////////////////
    // Setup Engine 

    var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Events = Matter.Events,
        Composite = Matter.Composite; 

    let MatterComps = {
        "Engine" : Engine,
        "Render" : Render,
        "World" : World,
        "Bodies" : Bodies,
        "Body" : Body,
        "Events" : Events,
    }

    // create an engine
    var engine = Engine.create();   
    engine.world.gravity.y = 0;

    var width = $('#matterContainer').width(),
        height = $('#matterContainer').height();

    // create a renderer
    render = Render.create({
        element: document.getElementById("matterContainer"),
        engine: engine,
        options: {
            width: width,
            height: height,
            background: '#ecceb8',
            strokeStyle: "transparent",
            lineWidth: 0,
            wireframes: false,
            showAngleIndicator: false
        }
    });

    // Bind engine collision events
    Events.on(engine, 'collisionStart', onCollision);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);

    /////////////////////////
    /// Add walls

    const wallThickness = 200; 
    const halfThick = wallThickness / 2; 
    const midWidth = width / 2; 
    const midHeight = height / 2; 
    
    const top =
        new Wall(midWidth, -halfThick, width * 10, wallThickness, MatterComps, {sound: washboard})

    const bottom =  
        new Wall(midWidth, height + halfThick, width * 10, wallThickness, MatterComps, {sound: cello})

    const left =    
        new Wall(-halfThick, midHeight, wallThickness, height * 10, MatterComps, {sound: bongo})
        
    const right =   
        new Wall(width + halfThick,  midHeight, wallThickness, height * 10,   MatterComps, {sound: trombone})

    const wallComposite = Matter.Composite.create();
    Matter.Composite.add(wallComposite, [top.body, left.body, bottom.body, right.body]) 
    World.add(engine.world, wallComposite)

    /////////////////////////
    /// Add Bouncing Circles

    const circle = new Circle(100, 100, 80, MatterComps);
    const circle2 = new Circle(100, 20, 80, MatterComps); 
    
    let movingCirclesComposite = Matter.Composite.create(); 
    // Matter.Composite.add(movingCirclesComposite, [circle.body, circle2.body])
    World.add(engine.world, movingCirclesComposite)

    /////////////////////////
    /// Add Circle Prefabs

    const padding = {top: 140, left: -30, right: 0, bottom: 0,}
    const circlePrefabs = [0, 0, 0, 0, 0].map((c, i, v) => {
        let padWidth = width - padding.left - padding.right;
        let x = width / 2;//padding.left + padWidth / v.length; 
        let y = height / 2; 
        let r = 10 + (v.length - i) * 15; 
        let label = i

        return new Circle(x, y, r, MatterComps, 
            {label: label, "isStatic": true}, 
            {
                fillStyle: circFill,
                strokeStyle: circStroke,
                lineWidth: 1,
            }); 
    })

    const prefabCirclesComposite = Matter.Composite.create();
    Matter.Composite.add(prefabCirclesComposite, circlePrefabs.map(c => c.body)); 
    World.add(engine.world, prefabCirclesComposite);

    function updatePrefabs() {
        prefabCirclesComposite.bodies.map(b => {
            Matter.Body.setPosition(b, {x: width / 2 , y: height / 2});
        })
    }

    /////////////////////////
    /// Events

    // Bind and store mouse pos on move for hover checks. 
    $(window).mousemove(e => { 
        window.mousePos = {x: e.clientX, y: e.clientY}; 
    });

    // Bind resize event. 
    $(window).resize(_ => {
        updateWidthHeight(); 
        render.canvas.width = width;
        render.canvas.height = height;
        updateBounds(); 
        updatePrefabs(); 
        if(window.resizeTimeout) {
            clearTimeout(window.resizeTimeout);
        }
        engine.timing.timeScale = 0.1;
        window.resizeTimeout = setTimeout(_ => {
            engine.timing.timeScale = 1; 
        }, 333); 
    })

    // Bind click to audio toggle. 
    $("#playToggle").click(function() {
        if($(this).hasClass("playing")) {
            $(this).removeClass("playing");
            $(this).html("Play Audio")
            shouldPlayAudio = false; 
        } else {
            $(this).addClass("playing");
            $(this).html("Mute")
            shouldPlayAudio = true; 
        }
    })

    let circleRenderHover = {
        fillStyle: circFillHover,
        strokeStyle: circStrokeHover,
        lineWidth: 5,
    }

    let prefabRenderHover = {
        fillStyle: circFillHover,
        strokeStyle: circStrokeHover,
        lineWidth: 5,
    }

    // HOVER EVENT
    $(window).checkHover = setInterval(_ => {
        if(window.mousePos) {
            let movingCircles = Matter.Query.point(movingCirclesComposite.bodies, window.mousePos);
            let prefabCircles = Matter.Query.point(prefabCirclesComposite.bodies, window.mousePos);

            if(movingCircles.length > 0) {
                movingCirclesComposite.bodies.map(c => Object.assign(c.render, circleRenderBase));
                movingCircles.map(b => {
                    Object.assign( b.render, circleRenderHover)
                });
            } else {
                movingCirclesComposite.bodies.map(c => Object.assign(c.render, circleRenderBase));
            }

            if(prefabCircles.length > 0) {
                prefabCirclesComposite.bodies.map(c => Object.assign(c.render, circleRenderBase));
                Object.assign(prefabCircles[prefabCircles.length - 1].render, prefabRenderHover)
            } else {
                prefabCirclesComposite.bodies.map(c => Object.assign(c.render, circleRenderBase));
            }
        }
        movingCirclesComposite.bodies.map(c => {

        });
    }, 80)

    $(window).click(e => {
        window.mousePos = {x: e.clientX, y: e.clientY}; 
        let movingCircles = Matter.Query.point(movingCirclesComposite.bodies, window.mousePos);
        let prefabCircles = Matter.Query.point(prefabCirclesComposite.bodies, window.mousePos);
        
        if(movingCircles.length > 0 && prefabCircles.length <= 0) {
            Matter.Composite.remove(movingCirclesComposite, movingCircles[0])
        } 
        if(prefabCircles.length > 0) {
            let prefab = prefabCircles[prefabCircles.length - 1]
            let r = 5 + (5 - parseInt(prefab.label)) * 15

            let newCircle = new Circle(prefab.position.x, prefab.position.y, r, MatterComps)
            // let newCircle = new Circle(100, 100, 80, MatterComps);
            Matter.Composite.add(movingCirclesComposite, newCircle.body)
        } 
    })

    /////////////////////////
    /// Helper Functions

    function updateWidthHeight() {
        width = $('#matterContainer').width(),
        height = $('#matterContainer').height();
    }

    function updateBounds() {
        bottom.updatePos(width / 2, height + wallThickness / 2)
        right.updatePos(width + wallThickness / 2, height / 2)
    }

    let areaScale = linearScale([1000, 20000],[0.2, 1])
    let playbackScale = linearScale([1236, 19911],[3, 0.3])
    let $col = $('#collider'); 

    function onCollision(event) {
        event.pairs.map(e => {
            console.log(e)
            let bodyA = e.bodyA;
            let bodyB = e.bodyB;
            let volume = 0;
            let playbackRate = 1; 

            if(bodyA.label !== "wall") {
                volume = areaScale(bodyA.area)
                playbackRate = playbackScale(bodyA.area)
                let pos = bodyA.position;
                $col.css({
                    top: pos.y,
                    left: pos.x,
                })
            }
            if(bodyB.label !== "wall") {
                volume = areaScale(bodyB.area)
                playbackRate = playbackScale(bodyB.area)
                console.log(bodyB.area)

                let pos = bodyB.position;
                $col.css({
                    top: pos.y,
                    left: pos.x,
                })
            }

            if(bodyA.label === "wall") {
                if(window.shouldPlayAudio) {
                    bodyA.sound.currentTime = 0; 
                    bodyA.sound.volume = volume; 
                    bodyA.sound.playbackRate = playbackRate; 
                    bodyA.sound.play();
                }
            }
            if(bodyB.label === "wall") {
                if(window.shouldPlayAudio) {
                    bodyB.sound.currentTime = 0;
                    bodyA.sound.volume = volume;
                    bodyA.sound.playbackRate = playbackRate; 
                    bodyB.sound.play();
                }
            }
        })
    }
})


var linearScale = function(domain, range){
    var istart = domain[0],
        istop  = domain[1],
        ostart = range[0],
        ostop  = range[1];
  
    return function scale(value) {
        return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }
};