"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @type {import('next-seo').DefaultSeoProps} */ const defaultSEOConfig = {
    title: "Liquede",
    titleTemplate: "%s | Save",
    defaultTitle: "Liquede",
    description: "Save",
    canonical: "https://liquede.com",
    openGraph: {
        url: "https://liquede.com",
        title: "Liquede",
        description: "Save",
        images: [
            {
                url: "/assets/logo.png",
                alt: "Liquede"
            }, 
        ],
        site_name: "Liquede"
    },
    twitter: {
        handle: "@sozonome",
        cardType: "summary_large_image"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultSEOConfig);


/***/ }),

/***/ 6227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ UserProvider)
/* harmony export */ });
/* unused harmony export UserContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const UserProvider = ({ children  })=>{
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: admin , 1: setAdmin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            user,
            setUser,
            admin,
            setAdmin
        },
        children: children
    });
};


/***/ }),

/***/ 3066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/lib/layout/Footer.tsx



function Footer() {
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        w: "full",
        bgColor: "brand.200",
        display: router.pathname.startsWith("/admin") ? "none" : "block",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            bgColor: "black",
            w: "full",
            py: "4rem",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                w: "80%",
                mx: "auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                        templateColumns: "repeat(3, 1fr)",
                        rowGap: "2rem",
                        mb: "2.5rem",
                        display: [
                            "grid",
                            "flex"
                        ],
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                        borderColor: "brand.300"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: [
                            "11px",
                            "14px",
                            "18px"
                        ],
                        color: "white",
                        my: "1.2rem",
                        children: "Liquede is a product of Liquede Limited, a subsidiary of Oxygen Holdings. Banking services on Liquede are provided by Bank Limited, which is registered with the Central Bank of Nigeria. Payments on Liquede are made via Interswitch; a PCI DSS certified payment platform with bank-level security to ensure your transactions and financial information are kept safe at all times."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                        borderColor: "brand.300"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: [
                            ".8rem",
                            "1rem"
                        ],
                        color: "white",
                        mt: "2.5rem",
                        children: "\xa9 2020 Liquede Limited. All rights reserved."
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/lib/layout/Header.tsx




function Header() {
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        w: "full",
        bgColor: "black",
        display: router.pathname.startsWith("/admin") ? "none" : "block",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            maxW: [
                "full",
                "90%"
            ],
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                justify: "space-between",
                alignItems: "center",
                h: "6rem",
                zIndex: "5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        cursor: "pointer",
                        w: [
                            "95px",
                            "126px"
                        ],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                src: "/assets/logo.png",
                                w: "full",
                                h: "auto"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            color: "black",
                            bgColor: "#E3BC6A",
                            w: "10rem",
                            fontWeight: "bold",
                            children: "Get Liquede"
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./src/lib/layout/index.tsx





const Layout = ({ children  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "main",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 9422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ styles_customTheme)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/lib/styles/customTheme/colors.ts
/** extend additional color here */ const extendedColors = {
    brand: {
        100: "#191919",
        200: "#1B345B",
        300: "rgba(227,188,106,1)",
        400: "rgba(5, 156, 159, 0.36)",
        500: "#FCC13F",
        600: "#323232",
        700: "#DFF8F9",
        800: "#F5FDFE",
        900: "#0D73FF"
    }
};
/** override chakra colors here */ const overridenChakraColors = {};
const colors = {
    ...overridenChakraColors,
    ...extendedColors
};
/* harmony default export */ const customTheme_colors = (colors);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/components/button.ts
const Button = {
    baseStyle: {
        borderRadius: "5px"
    },
    variants: {
        outline: {
            backgroundColor: "transparent",
            border: "1px solid #E3BC6A",
            color: "#E3BC6A",
            width: "11rem",
            height: "3.12rem",
            _hover: {
                backgroundColor: "brand.100",
                color: "white",
                transition: "all .5s ease"
            },
            _focus: {
                boxShadow: "0"
            }
        },
        solid: {
            backgroundColor: "brand.100",
            color: "white",
            width: "18rem",
            height: "2.4rem",
            fontSize: "1rem",
            fontWeight: "bold",
            _hover: {
                backgroundColor: "brand.200",
                transition: "all .5s ease",
                color: "white"
            },
            _focus: {
                boxShadow: "0"
            }
        }
    }
};
/* harmony default export */ const components_button = (Button);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/fonts.ts
const fonts = {
    body: '"Baloo Bhai 2", cursive',
    heading: "Poppins, serif"
};
/* harmony default export */ const customTheme_fonts = (fonts);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/components/input.ts
const Input = {
    variants: {
        outline: {
            field: {
                borderRadius: "5px",
                background: "white",
                boxSizing: "border-box",
                height: "4rem",
                borderColor: "brand.100",
                border: "1px solid",
                boxShadow: "0px 0px 9px rgba(0, 127, 130, 0.37)",
                _focus: {
                    borderColor: "brand.200",
                    border: "1px solid"
                },
                _placeholder: {
                    fontSize: ".8rem"
                }
            }
        },
        filled: {
            field: {
                borderRadius: "5px",
                background: "rgba(0, 127, 130, 0.2)",
                boxSizing: "border-box",
                height: "4rem",
                border: "none",
                _focus: {
                    borderColor: "brand.200",
                    border: "1px solid",
                    background: "rgba(0, 127, 130, 0.2)"
                },
                _placeholder: {
                    fontSize: ".8rem"
                }
            }
        }
    }
};
/* harmony default export */ const input = (Input);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/components/textarea.ts
const Textarea = {
    variants: {
        outline: {
            field: {
                borderRadius: "5px",
                background: "white",
                boxSizing: "border-box",
                height: "4rem",
                borderColor: "brand.100",
                border: "1px solid",
                boxShadow: "0px 0px 9px rgba(0, 127, 130, 0.37)",
                _focus: {
                    borderColor: "brand.200",
                    border: "1px solid"
                },
                _placeholder: {
                    fontSize: ".8rem"
                }
            }
        },
        filled: {
            field: {
                borderRadius: "5px",
                background: "rgba(0, 127, 130, 0.2)",
                boxSizing: "border-box",
                height: "4rem",
                border: "none",
                _focus: {
                    borderColor: "brand.200",
                    border: "1px solid",
                    background: "rgba(0, 127, 130, 0.2)"
                },
                _placeholder: {
                    fontSize: ".8rem"
                }
            }
        }
    }
};
/* harmony default export */ const components_textarea = (Textarea);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/index.ts






const customTheme = (0,react_.extendTheme)({
    fonts: customTheme_fonts,
    colors: customTheme_colors,
    components: {
        Button: components_button,
        Input: input,
        Textarea: components_textarea
    }
});
/* harmony default export */ const styles_customTheme = (customTheme);


/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_openapi_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9677);
/* harmony import */ var react_openapi_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_openapi_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_styles_customTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9422);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(666);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5927);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lib_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3066);
/* harmony import */ var lib_Utils_MainContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6227);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_10__]);
js_cookie__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable react/jsx-props-no-spreading */ 










const MyApp = ({ Component , pageProps  })=>{
    let headers;
    headers = {
        cor: "no-cors"
    };
    if (false) {}
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _lib_styles_customTheme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_openapi_client__WEBPACK_IMPORTED_MODULE_4__.OpenAPIProvider, {
            definition: "/api-schema.json",
            axiosConfigDefaults: {
                withCredentials: true,
                headers,
                baseURL: "https://flypalapi.herokuapp.com"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "viewport",
                            content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/assets/fav.png",
                            type: "image/x-icon"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {
                    ..._next_seo_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_Utils_MainContext__WEBPACK_IMPORTED_MODULE_9__/* .UserProvider */ .d, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__.ToastProvider, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9677:
/***/ ((module) => {

module.exports = require("react-openapi-client");

/***/ }),

/***/ 5927:
/***/ ((module) => {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();