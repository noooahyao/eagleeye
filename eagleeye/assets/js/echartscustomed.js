(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('customed', {
        "color": [
            "#62d0c7",
            "#f96396",
            "#59abfa",
            "#af7bf1"
        ],
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#12203d"
            },
            "subtextStyle": {
                "color": "#bbc0d4"
            }
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 2
                }
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 2
                }
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 0,
                    "barBorderColor": "#faeeee"
                },
                "emphasis": {
                    "barBorderWidth": 0,
                    "barBorderColor": "#faeeee"
                }
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c23531",
                    "color0": "#314656",
                    "borderColor": "#c23531",
                    "borderColor0": "#314656",
                    "borderWidth": 1
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#faeeee"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "color": "#aaa"
                }
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#62d0c7",
                "#f96396",
                "#59abfa",
                "#af7bf1"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eee"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eee",
                    "borderColor": "#444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eee",
                    "borderColor": "#444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#bbc0d4"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#bbc0d4"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#bbc0d4"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#bbc0d4"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#bbc0d4"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#bbc0d4"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#bbc0d4"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#bbc0d4"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#bbc0d4"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#bbc0d4"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#bbc0d4"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#bbc0d4"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#bbc0d4"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#bbc0d4"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999"
                },
                "emphasis": {
                    "borderColor": "#666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#bbc0d4"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#ccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#ccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#bbc0d4",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#bbc0d4",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#59abfa"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#bbc0d4",
                    "borderColor": "#bbc0d4",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#bbc0d4",
                    "borderColor": "#bbc0d4",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#59abfa",
                "borderColor": "rgba(89,171,250,0.49)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#bbc0d4"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#bbc0d4"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#bf444c"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eee"
                    }
                }
            }
        }
    });
}));
