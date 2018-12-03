

// $(main); 

// function main() {
//     $("#resizable").resizable(); 
// }

$(function() {
    $("#playAudio").click(playAudio); 

    $(".soundBlock")
        .draggable({grid: [100, 100]})
        .resizable({grid: [100, 100]})
        .resize(onBlockResize)
        .get()
        .map(block => {
            scaleAudioToElement(block);
        })
 });

let audioPlaying = false; 

function playAudio() {
    $(".soundBlock")
        .get()
        .map(block => {
            let audio = $(block).children("audio")[0];
            
            if(!audioPlaying) {
                audioPlaying = true;
                audio.play(); 
            } else {
                audioPlaying = false; 
                audio.pause(); 
            }
        })
}

function scaleVideoToElement(block) {

    let maxWidth = $(window).width(); 
    let maxHeight = $(window).height();

    let width = $(block).width();
    let height = $(block).height(); 
    
    let animationDurationScale = scale({domain: [0, maxWidth], range: [3, 0.0625]})

    block.style.animationDuration = "1s";

    // $(block).style({"animation-duration": `${scale(width)}s`})
}

function scaleAudioToElement(block) {
    let audio = $(block).children("audio")[0];

    let maxWidth = $(window).width(); 
    let maxHeight = $(window).height();

    let width = $(block).width();
    let height = $(block).height(); 

    let audioSpeedScale = scale({domain: [0, maxWidth], range: [3, 0.0625]})
    let audioVolumeScale = scale({domain: [10, maxHeight], range: [0, 0.5]})

    audio.playbackRate = audioSpeedScale(width).toPrecision(1); 
    audio.volume = audioVolumeScale(height);
}
 
function onBlockResize(event) {
    let block = event.currentTarget;
    scaleAudioToElement(block);
}

var scale = function(opts){
    var istart = opts.domain[0],
        istop  = opts.domain[1],
        ostart = opts.range[0],
        ostop  = opts.range[1];

    return function scale(value) {
        return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }
};

//  class SoundBlock {
//      constructor(selector) {
//         this.selector = selector; 
//      }

//      getWidth() {
//         return $(this.selector).width(); 
//      }

//      getHeight() {
//         return $(this.selector).height(); 
//      }
//  }

