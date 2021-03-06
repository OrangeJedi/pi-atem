var msg = {
    "topology": {
        "numberOfMEs": 2,
        "numberOfSources": 47,
        "numberOfColorGenerators": 2,
        "numberOfAUXs": 6,
        "numberOfDownstreamKeys": 2,
        "numberOfStingers": 1,
        "numberOfDVEs": 4,
        "numberOfSuperSources": 1
    },
    "tallys": [
        0,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    "channels": {
        "0": {
            "name": "Black",
            "label": "Blk"
        },
        "1": {
            "name": "Camera 1",
            "label": "Cam1"
        },
        "2": {
            "name": "Camera 2",
            "label": "Cam2"
        },
        "3": {
            "name": "Camera 3",
            "label": "Cam3"
        },
        "4": {
            "name": "Camera 4",
            "label": "Cam4"
        },
        "5": {
            "name": "FBI Spy Camera 1",
            "label": "FBI"
        },
        "6": {
            "name": "Camera 6",
            "label": "Cam6"
        },
        "7": {
            "name": "Camera 7",
            "label": "Cam7"
        },
        "8": {
            "name": "Camera 8",
            "label": "Cam8"
        },
        "9": {
            "name": "Camera 9",
            "label": "Cam9"
        },
        "10": {
            "name": "Camera 10",
            "label": "Cm10"
        },
        "11": {
            "name": "Camera 11",
            "label": "Cm11"
        },
        "12": {
            "name": "Camera 12",
            "label": "Cm12"
        },
        "13": {
            "name": "Camera 13",
            "label": "Cm13"
        },
        "14": {
            "name": "Camera 14",
            "label": "Cm14"
        },
        "15": {
            "name": "Camera 15",
            "label": "Cm15"
        },
        "16": {
            "name": "Camera 16",
            "label": "Cm16"
        },
        "17": {
            "name": "Camera 17",
            "label": "Cm17"
        },
        "18": {
            "name": "Camera 18",
            "label": "Cm18"
        },
        "19": {
            "name": "Camera 19",
            "label": "Cm19"
        },
        "20": {
            "name": "Camera 20",
            "label": "Cm20"
        },
        "1000": {
            "name": "Color Bars",
            "label": "Bars"
        },
        "2001": {
            "name": "Color 1",
            "label": "Col1"
        },
        "2002": {
            "name": "Color 2",
            "label": "Col2"
        },
        "3010": {
            "name": "Media Player 1",
            "label": "MP1"
        },
        "3011": {
            "name": "Media Player 1 Key",
            "label": "MP1K"
        },
        "3020": {
            "name": "Media Player 2",
            "label": "MP2"
        },
        "3021": {
            "name": "Media Player 2 Key",
            "label": "MP2K"
        },
        "4010": {
            "name": "ME 1 Key 1 Mask",
            "label": "M1K1"
        },
        "4020": {
            "name": "ME 1 Key 2 Mask",
            "label": "M1K2"
        },
        "4030": {
            "name": "ME 2 Key 1 Mask",
            "label": "M2K1"
        },
        "4040": {
            "name": "ME 2 Key 2 Mask",
            "label": "M2K2"
        },
        "5010": {
            "name": "DSK 1 Mask",
            "label": "DK1M"
        },
        "5020": {
            "name": "DSK 2 Mask",
            "label": "DK2M"
        },
        "6000": {
            "name": "SuperSource",
            "label": "SSrc"
        },
        "7001": {
            "name": "Clean Feed 1",
            "label": "Cfd1"
        },
        "7002": {
            "name": "Clean Feed 2",
            "label": "Cfd2"
        },
        "8001": {
            "name": "Auxiliary 1",
            "label": "Aux1"
        },
        "8002": {
            "name": "Auxiliary 2",
            "label": "Aux2"
        },
        "8003": {
            "name": "Auxiliary 3",
            "label": "Aux3"
        },
        "8004": {
            "name": "Auxiliary 4",
            "label": "Aux4"
        },
        "8005": {
            "name": "Auxiliary 5",
            "label": "Aux5"
        },
        "8006": {
            "name": "Auxiliary 6",
            "label": "Aux6"
        },
        "10010": {
            "name": "Program",
            "label": "Pgm1"
        },
        "10011": {
            "name": "Preview",
            "label": "Pvw1"
        },
        "10020": {
            "name": "ME 2 PGM",
            "label": "Pgm2"
        },
        "10021": {
            "name": "ME 2 PVM",
            "label": "Pvw2"
        }
    },
    "video": {
        "ME": [
            {
                "upstreamKeyState": [
                    false,
                    false
                ],
                "upstreamKeyNextState": [
                    false,
                    false
                ],
                "numberOfKeyers": 2,
                "programInput": 5,
                "previewInput": 5,
                "transitionStyle": 0,
                "upstreamKeyNextBackground": true,
                "transitionPreview": false,
                "transitionPosition": 0,
                "transitionFrameCount": 30,
                "fadeToBlack": false
            },
            {
                "upstreamKeyState": [
                    false,
                    false
                ],
                "upstreamKeyNextState": [
                    false,
                    false
                ],
                "numberOfKeyers": 2,
                "programInput": 3,
                "previewInput": 1,
                "transitionStyle": 0,
                "upstreamKeyNextBackground": true,
                "transitionPreview": false,
                "transitionPosition": 0,
                "transitionFrameCount": 30,
                "fadeToBlack": false
            }
        ],
        "downstreamKeyOn": [
            false,
            false
        ],
        "downstreamKeyTie": [
            false,
            false
        ],
        "auxs": {
            "0": 10010,
            "1": 1,
            "2": 1000,
            "3": 1000,
            "4": 1000,
            "5": 1000
        }
    },
    "audio": {
        "hasMonitor": true,
        "numberOfChannels": 0,
        "channels": {
            "1": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "2": {
                "on": false,
                "afv": false,
                "gain": 0.38904268824276167,
                "rawGain": 25436,
                "rawPan": 0
            },
            "3": {
                "on": false,
                "afv": false,
                "gain": 0.512855416711277,
                "rawGain": 33531,
                "rawPan": 0
            },
            "4": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "5": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "6": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "7": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "8": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "9": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "10": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "11": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "12": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "13": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "14": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "15": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "16": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "17": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "18": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "19": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "20": {
                "on": false,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "1001": {
                "on": true,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "1201": {
                "on": true,
                "afv": false,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "2001": {
                "on": false,
                "afv": true,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            },
            "2002": {
                "on": false,
                "afv": true,
                "gain": 0.5011853596610636,
                "rawGain": 32768,
                "rawPan": 0
            }
        },
        "master": {
            "afv": false,
            "gain": 0.4897753169881158,
            "rawGain": 32022
        }
    },
    "_ver0": 2,
    "_ver1": 20,
    "_pin": "ATEM 2 M/E Production Studio 4K",
    "model": 6
};


