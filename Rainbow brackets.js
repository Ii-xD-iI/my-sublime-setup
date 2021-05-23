{
    "debug": false,

    "brackets": {
        "pairs": {
            "(": ")",
            // "[": "]",
            "{": "}"
        },

        "filetypes": {
            "default": {
                "opening": ["("/*, "["*/ , "{"],
                "ignored_scopes": [
                    "comment", "string"
                ]
            },

            "scheme": {
                "opening": ["(" /*, "["*/ , "{"],
                "ignored_scopes": [
                    "comment", "string", "constant.character", "symbol"
                ],
                "extensions": [
                    "scm",
                    "ss"
                ]
            },

            "json": {
                "opening": [/*"[",*/ "{"],
                "ignored_scopes": [
                    "comment", "string"
                ],
                "extensions": [
                    "json",
                    "sublime-settings",
                    "sublime-menu",
                    "sublime-build",
                    "sublime-keymap",
                    "sublime-commands",
                    "sublime-theme",
                    "sublime-color-scheme"
                ]
            }
        }
    },

    "rainbow_colors": {
        "matched": [
            "#FF0000",   /* level1  */
            "#FF6A00",   /* level2  */
            "#FFD800",   /* level3  */
            "#00FF00",   /* level4  */
            "#0094FF",   /* level5  */
            "#ADD8E6",   /* level6  Light Blue*/
            "#CBC3E3"    /* level7  Light purple*/
        ],
        "mismatched": "#FF0000"
    }
}
