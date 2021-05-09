const init = {
    sliderData : {
        data:{
            initialValue: 50,
            text: "Points/frame: ",
            bounds: {
                MIN: 1,
                MAX: 120,
                STEP: 1
            }
        },
        style:{
            div: {
                divClass: "",
                divWidth: '50%'
            },
            slider: {
                sliderWidth: '90%',
                sliderMaxWidth: '900px'
            }
        },
        funcs:{
        }
    },

    sliderFrames : {
        data:{
            initialValue: 60,
            text: "Frames/second: ",
            bounds: {
                MIN: 1,
                MAX: 120,
                STEP: 1
            }
        },
        style:{
            div: {
                divClass: "",
                divWidth: '50%'
            },
            slider: {
                sliderWidth: '90%',
                sliderMaxWidth: '900px'
            }
        },
        funcs:{
        }
    },

    sketchWindowConfig: {
        width: (window.innerWidth*.5),
        height: window.innerHeight
    },

    sketchConfig: {
        init:{
            initialValue: 50
        },
        window:{
            width: window.innerWidth,
            height: window.innerHeight,
            clear: false
        }
    }
}

export default init;