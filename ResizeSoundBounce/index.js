

let bongo = new Audio('tuba.mp3');
let trombone = new Audio('trombone.mp3');
let cello = new Audio('basoon.mp3');
let washboard = new Audio('bass.mp3');

let sounds = [bongo, trombone, cello, washboard]

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
            render: {
                visible: true,
                strokeStyle: circStroke,
            }
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
        new Wall(midWidth, -halfThick, width * 10, wallThickness, MatterComps, {soundId: 0})

    const bottom =  
        new Wall(midWidth, height + halfThick, width * 10, wallThickness, MatterComps, {soundId: 1})

    const left =    
        new Wall(-halfThick, midHeight, wallThickness, height * 10, MatterComps, {soundId: 2})
        
    const right =   
        new Wall(width + halfThick,  midHeight, wallThickness, height * 10,   MatterComps, {soundId: 3})

    const wallComposite = Matter.Composite.create();
    Matter.Composite.add(wallComposite, [top.body, left.body, bottom.body, right.body]) 
    World.add(engine.world, wallComposite)

    /////////////////////////
    /// Add Bouncing Circles

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

    $("#clearToggle").click(function() {
        Matter.Composite.clear(movingCirclesComposite)
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
                Object.assign(prefabCircles[prefabCircles.length - 1].render, prefabRenderHover);
            } else {
                prefabCirclesComposite.bodies.map(c => Object.assign(c.render, circleRenderBase));
            }
        }
        if(movingCirclesComposite.bodies.length > 0) {
            if(!$('#clearToggle').hasClass("starting")) {
                $('#clearToggle').fadeIn();
            }
        } else {
            $('#clearToggle').fadeOut();
        }
    }, 80)

    $(window).click(e => {
        window.mousePos = {x: e.clientX, y: e.clientY}; 
        let movingCircles = Matter.Query.point(movingCirclesComposite.bodies, window.mousePos);
        let prefabCircles = Matter.Query.point(prefabCirclesComposite.bodies, window.mousePos);
        
        if(movingCircles.length > 0 && prefabCircles.length <= 0) {
            Matter.Composite.remove(movingCirclesComposite, movingCircles[0])
        } 
        if(prefabCircles.length > 0) {
            if($('body').hasClass("starting")) {
                $('body').removeClass("starting");
                $('#projectTitle').slideToggle("slow");
                $('.tutorial').slideToggle("slow", _ => {
                    setTimeout(_ => {
                        $('#clearToggle').slideToggle(666);
                        $('#clearToggle').removeClass("starting");

                        setTimeout(_ => {
                        let prefab = prefabCircles[prefabCircles.length - 1]
                        let r = 5 + (5 - parseInt(prefab.label)) * 15
            
                        let newCircle = new Circle(prefab.position.x, prefab.position.y, r, MatterComps)
                        // let newCircle = new Circle(100, 100, 80, MatterComps);
                        Matter.Composite.add(movingCirclesComposite, newCircle.body)
                        }, 666)
                    }, 333)
                }); 
            } else {
                let prefab = prefabCircles[prefabCircles.length - 1]
                let r = 5 + (5 - parseInt(prefab.label)) * 15
    
                let newCircle = new Circle(prefab.position.x, prefab.position.y, r, MatterComps)
                // let newCircle = new Circle(100, 100, 80, MatterComps);
                Matter.Composite.add(movingCirclesComposite, newCircle.body)
            }
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

    function addSound(soundId, volume, speed) {
        let sound = sounds[soundId].cloneNode();

        sound.volume = volume;
        sound.playbackRate = speed; 
        sound.play();

        sound.onended = function() {
            $(this).remove();
        }
    }

    function addText(r, w) {
        let ran = Math.random * 30; 
        let color = `rgba(${138 + ran}, ${25 - (ran / 2)}, ${5}, ${0.945})`;
        console.log((w.id + 1) * r * 3 + 10)

        let $text = $("<span>")
            .text(String.fromCharCode(Math.round((w.id + 1) * r * 3 + 11)))
            .addClass("textNode")
            .css({
                fontSize: r * 3.5,
                color: color,
                // transform: `translate(${-width / 2}px, ${-width / 2}px)`
            });

        

        let $textContainer = $('#centerText');
        $textContainer.append($text);
        $text.delay(1000).animate({
            fontSize: 0,
        }, 666, function() {
            $(this).remove();
        })
    }

    function addCol(x, y, r) {
        let width = r * 5; 
        let $col = $("<div>")
            .addClass("collider")
            .css({
                width: width,
                height: width,
                top: y,
                left: x, 
                transform: `translate(${-width / 2}px, ${-width / 2}px)`
            });

        let spread = 100; 
        let $border = $('#border');
        $border.append($col);
        $col.animate({
            opacity: 0,
            height: `+=${spread}`,
            width: `+=${spread}`,
            top: `-=${spread/2}`,
            left: `-=${spread/2}`,
        }, 888, function() {
            $(this).remove();
        })
    }

    let areaScale = linearScale([1000, 20000],[0.4, 0.8])
    let playbackScale = linearScale([1236, 19911],[3, 0.3])

    function onCollision(event) {
        event.pairs.map(e => {
            let bodyA = e.bodyA;
            let bodyB = e.bodyB;
            let volume = 0;
            let playbackRate = 1; 
            let r = 1; 
            let pos = {x: 0, y: 0}; 
            let soundId = 0; 

            if(bodyA.label !== "wall") {
                volume = areaScale(bodyA.area)
                playbackRate = playbackScale(bodyA.area)
                r = Math.sqrt(bodyB.area) / Math.PI;
                pos = bodyB.position;

                addCol(pos.x, pos.y, r)
            }
            if(bodyB.label !== "wall") {
                volume = areaScale(bodyB.area)
                playbackRate = playbackScale(bodyB.area)

                r = Math.sqrt(bodyB.area) / Math.PI;
                pos = bodyB.position;

                addCol(pos.x, pos.y, r)
                addText(r, bodyA)
            }

            if(bodyA.label === "wall") {
                if(window.shouldPlayAudio) {
                    soundId = bodyA.soundId; 
                    addSound(soundId, volume, playbackRate)
                }
            }
            if(bodyB.label === "wall") {
                if(window.shouldPlayAudio) {
                    soundId = bodyB.soundId; 
                    addSound(soundId, volume, playbackRate)
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