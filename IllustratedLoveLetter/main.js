

$(function() {
    let vert = $("#phoneVert")
    let horz = $("#phoneHorz")
    let big = $("#screen")
    
    let fadeInTime = 666; 
    let fadeOutTime = 999; 
    let showTime = 6000; 

    function showScreens() {
        horz
            .fadeIn(fadeInTime)
            .delay(showTime)
            .fadeOut(fadeOutTime, _ => {
                vert
                    .fadeIn(fadeInTime)
                    .delay(showTime)
                    .fadeOut(fadeOutTime, _ => {
                        big
                            .fadeIn(fadeInTime)
                            .delay(showTime)
                            .fadeOut(fadeOutTime, _ => {
                                showScreens(); 
                            })
                    })

            })
    }
    showScreens(); 
})
