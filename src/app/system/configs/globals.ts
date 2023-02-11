import { Section, THEME } from "../../core/interfaces/system.interfaces";

export class Globals {
    static THEMES: THEME[] = [
        // {
        //     NAME: "Blue (Default)",
        //     PRIMARY_COLOR: "#1F4E79",
        //     SECONDARY_COLOR: "#BDD7EE",
        //     ACCENT_COLOR: "#2E75B6",
        //     TEXT_COLOR: "#001E5B",
        //     SEPARATOR_COLOR: "#5999d4",
        //     MAIN_LINK_COLOR: "#0d6efd",
        // },
        // {
        //     NAME: "Green",
        //     PRIMARY_COLOR: "#1F7958",
        //     SECONDARY_COLOR: "#D7EEC5",
        //     ACCENT_COLOR: "#2EB676",
        //     TEXT_COLOR: "#005B1E",
        //     SEPARATOR_COLOR: "#59D45C",
        //     MAIN_LINK_COLOR: "#01d554",
        // },
        // {
        //     NAME: "Yellow",
        //     PRIMARY_COLOR: "#79791F",
        //     SECONDARY_COLOR: "#EEEEBD",
        //     ACCENT_COLOR: "#B6B62E",
        //     TEXT_COLOR: "#5B5B00",
        //     SEPARATOR_COLOR: "#D4D459",
        //     MAIN_LINK_COLOR: "#eaea05",
        // },
        // {
        //     NAME: "Orange",
        //     PRIMARY_COLOR: "#794E1F",
        //     SECONDARY_COLOR: "#EED7BD",
        //     ACCENT_COLOR: "#B6752E",
        //     TEXT_COLOR: "#5B1E00",
        //     SEPARATOR_COLOR: "#D45999",
        //     MAIN_LINK_COLOR: "#FD6E0D",
        // },
        // {
        //     NAME: "Brown",
        //     PRIMARY_COLOR: "#79421F",
        //     SECONDARY_COLOR: "#EED9BD",
        //     ACCENT_COLOR: "#B6572E",
        //     TEXT_COLOR: "#5B2900",
        //     SEPARATOR_COLOR: "#D48159",
        //     MAIN_LINK_COLOR: "#FD4D0D",
        // },
        // {
        //     NAME: "Purple",
        //     PRIMARY_COLOR: "#791F4E",
        //     SECONDARY_COLOR: "#EED7BD",
        //     ACCENT_COLOR: "#B62E75",
        //     TEXT_COLOR: "#5B001E",
        //     SEPARATOR_COLOR: "#D45999",
        //     MAIN_LINK_COLOR: "#FD0D6E",
        // },
        //
        // {
        //     NAME: "Blue",
        //     PRIMARY_COLOR: "#1F4E79",
        //     SECONDARY_COLOR: "#BDD7EE",
        //     ACCENT_COLOR: "#2E75B6",
        //     TEXT_COLOR: "#001E5B",
        //     SEPARATOR_COLOR: "#5999D4",
        //     MAIN_LINK_COLOR: "#0D6EFD",
        // },
        // {
        //     NAME: "Green",
        //     PRIMARY_COLOR: "#167051",
        //     SECONDARY_COLOR: "#C8E6C9",
        //     ACCENT_COLOR: "#2E8B57",
        //     TEXT_COLOR: "#006400",
        //     SEPARATOR_COLOR: "#50C878",
        //     MAIN_LINK_COLOR: "#00FF00",
        // },
        // {
        //     NAME: "Red",
        //     PRIMARY_COLOR: "#731F1F",
        //     SECONDARY_COLOR: "#F5A9A9",
        //     ACCENT_COLOR: "#B22222",
        //     TEXT_COLOR: "#8B0000",
        //     SEPARATOR_COLOR: "#FF0000",
        //     MAIN_LINK_COLOR: "#FF6347",
        // },
        // {
        //     NAME: "Blue",
        //     PRIMARY_COLOR: "#1F4E79",
        //     SECONDARY_COLOR: "#BDD7EE",
        //     ACCENT_COLOR: "#2E75B6",
        //     TEXT_COLOR: "#001E5B",
        //     SEPARATOR_COLOR: "#5999D4",
        //     MAIN_LINK_COLOR: "#0D6EFD",
        // },
        // {
        //     NAME: "Green",
        //     PRIMARY_COLOR: "#167051",
        //     SECONDARY_COLOR: "#C8E6C9",
        //     ACCENT_COLOR: "#2E8B57",
        //     TEXT_COLOR: "#006400",
        //     SEPARATOR_COLOR: "#50C878",
        //     MAIN_LINK_COLOR: "#2E8B57",
        // },
        // {
        //     NAME: "Red",
        //     PRIMARY_COLOR: "#731F1F",
        //     SECONDARY_COLOR: "#F5A9A9",
        //     ACCENT_COLOR: "#B22222",
        //     TEXT_COLOR: "#8B0000",
        //     SEPARATOR_COLOR: "#FF0000",
        //     MAIN_LINK_COLOR: "#B22222",
        // },
        // {
        //     NAME: "Purple",
        //     PRIMARY_COLOR: "#4E2E4E",
        //     SECONDARY_COLOR: "#D8BFD8",
        //     ACCENT_COLOR: "#9400D3",
        //     TEXT_COLOR: "#4B0082",
        //     SEPARATOR_COLOR: "#BA55D3",
        //     MAIN_LINK_COLOR: "#9400D3",
        // },
        // {
        //     NAME: "Orange",
        //     PRIMARY_COLOR: "#CC6600",
        //     SECONDARY_COLOR: "#FFE5B4",
        //     ACCENT_COLOR: "#FFA500",
        //     TEXT_COLOR: "#FF7F00",
        //     SEPARATOR_COLOR: "#FFD700",
        //     MAIN_LINK_COLOR: "#FFA500",
        // },
        // {
        //     NAME: "Yellow",
        //     PRIMARY_COLOR: "#CCCC00",
        //     SECONDARY_COLOR: "#FFFFE0",
        //     ACCENT_COLOR: "#FFFF00",
        //     TEXT_COLOR: "#808000",
        //     SEPARATOR_COLOR: "#FFFFE0",
        //     MAIN_LINK_COLOR: "#FFFF00",
        // },
        // {
        //     NAME: "Pink",
        //     PRIMARY_COLOR: "#CC0066",
        //     SECONDARY_COLOR: "#FFB6C1",
        //     ACCENT_COLOR: "#FF69B4",
        //     TEXT_COLOR: "#8B008B",
        //     SEPARATOR_COLOR: "#FF1493",
        //     MAIN_LINK_COLOR: "#FF69B4",
        // },
        // {
        //     NAME: "Brown",
        //     PRIMARY_COLOR: "#996633",
        //     SECONDARY_COLOR: "#FFF8DC",
        //     ACCENT_COLOR: "#A52A2A",
        //     TEXT_COLOR: "#663300",
        //     SEPARATOR_COLOR: "#8B4513",
        //     MAIN_LINK_COLOR: "#A52A2A",
        // },
        // {
        //     NAME: "Teal",
        //     PRIMARY_COLOR: "#008080",
        //     SECONDARY_COLOR: "#E0FFFF",
        //     ACCENT_COLOR: "#00FFFF",
        //     TEXT_COLOR: "#003366",
        //     SEPARATOR_COLOR: "#AFEEEE",
        //     MAIN_LINK_COLOR: "#00FFFF",
        // },
        // {
        //     NAME: "Purple",
        //     PRIMARY_COLOR: "#6600CC",
        //     SECONDARY_COLOR: "#DCDCDC",
        //     ACCENT_COLOR: "#800080",
        //     TEXT_COLOR: "#4B0082",
        //     SEPARATOR_COLOR: "#BA55D3",
        //     MAIN_LINK_COLOR: "#800080",
        // },

        {
            NAME: "Sleek Blue",
            PRIMARY_COLOR: "#1F4E79",
            SECONDARY_COLOR: "#BDD7EE",
            ACCENT_COLOR: "#0D6EFD",
            TEXT_COLOR: "#001E5B",
            SEPARATOR_COLOR: "#5999D4",
            MAIN_LINK_COLOR: "#0D6EFD",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Ocean Blue",
            PRIMARY_COLOR: "#17a2b8",
            SECONDARY_COLOR: "#BDD7EE",
            ACCENT_COLOR: "#007bff",
            TEXT_COLOR: "#000000",
            SEPARATOR_COLOR: "#5999D4",
            MAIN_LINK_COLOR: "#007bff",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Vibrant Blue",
            PRIMARY_COLOR: "#17a2b8",
            SECONDARY_COLOR: "#BDD7EE",
            ACCENT_COLOR: "#FDAE47",
            TEXT_COLOR: "#000000",
            SEPARATOR_COLOR: "#5999D4",
            MAIN_LINK_COLOR: "#FDAE47",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Turquoise Blue",
            PRIMARY_COLOR: "#1ab394",
            SECONDARY_COLOR: "#BDD7EE",
            ACCENT_COLOR: "#1C84C6",
            TEXT_COLOR: "#000000",
            SEPARATOR_COLOR: "#5999D4",
            MAIN_LINK_COLOR: "#1C84C6",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Bright Green",
            PRIMARY_COLOR: "#18A64A",
            SECONDARY_COLOR: "#A9F5D0",
            ACCENT_COLOR: "#18A64A",
            TEXT_COLOR: "#001E5B",
            SEPARATOR_COLOR: "#A9F5D0",
            MAIN_LINK_COLOR: "#18A64A",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Classic Blue",
            PRIMARY_COLOR: "#1F4E79",
            SECONDARY_COLOR: "#BDD7EE",
            ACCENT_COLOR: "#2E75B6",
            TEXT_COLOR: "#001E5B",
            SEPARATOR_COLOR: "#5999D4",
            MAIN_LINK_COLOR: "#2E75B6",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Dark Burgundy",
            PRIMARY_COLOR: "#8E2323",
            SECONDARY_COLOR: "#FFC8C8",
            ACCENT_COLOR: "#D90429",
            TEXT_COLOR: "#001E5B",
            SEPARATOR_COLOR: "#FFC8C8",
            MAIN_LINK_COLOR: "#D90429",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Gentle Peach",
            PRIMARY_COLOR: "#FFE5B4",
            SECONDARY_COLOR: "#FFB347",
            ACCENT_COLOR: "#FFB347",
            TEXT_COLOR: "#001E5B",
            SEPARATOR_COLOR: "#FFB347",
            MAIN_LINK_COLOR: "#FFB347",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Deep Purple",
            PRIMARY_COLOR: "#7D26CD",
            SECONDARY_COLOR: "#D9B3FF",
            ACCENT_COLOR: "#7D26CD",
            TEXT_COLOR: "#001E5B",
            SEPARATOR_COLOR: "#D9B3FF",
            MAIN_LINK_COLOR: "#7D26CD",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Teal",
            PRIMARY_COLOR: "#008080",
            SECONDARY_COLOR: "#B2DFDB",
            ACCENT_COLOR: "#009688",
            TEXT_COLOR: "#004C4C",
            SEPARATOR_COLOR: "#4DB6AC",
            MAIN_LINK_COLOR: "#00BFA5",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Navy",
            PRIMARY_COLOR: "#001F3F",
            SECONDARY_COLOR: "#ADD8E6",
            ACCENT_COLOR: "#000080",
            TEXT_COLOR: "#00001C",
            SEPARATOR_COLOR: "#5F9EA0",
            MAIN_LINK_COLOR: "#0000FF",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Maroon",
            PRIMARY_COLOR: "#800000",
            SECONDARY_COLOR: "#FFE4E1",
            ACCENT_COLOR: "#8B0000",
            TEXT_COLOR: "#4C0000",
            SEPARATOR_COLOR: "#A52A2A",
            MAIN_LINK_COLOR: "#FF0000",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Green",
            PRIMARY_COLOR: "#3CB371",
            SECONDARY_COLOR: "#90EE90",
            ACCENT_COLOR: "#006400",
            TEXT_COLOR: "#003300",
            SEPARATOR_COLOR: "#2E8B57",
            MAIN_LINK_COLOR: "#008000",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Purple",
            PRIMARY_COLOR: "#800080",
            SECONDARY_COLOR: "#E6E6FA",
            ACCENT_COLOR: "#663399",
            TEXT_COLOR: "#330033",
            SEPARATOR_COLOR: "#9370DB",
            MAIN_LINK_COLOR: "#FF00FF",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Mint Green",
            PRIMARY_COLOR: "#229954",
            SECONDARY_COLOR: "#A2D9CE",
            ACCENT_COLOR: "#48C9B0",
            TEXT_COLOR: "#006600",
            SEPARATOR_COLOR: "#1ABC9C",
            MAIN_LINK_COLOR: "#48C9B0",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Deep Purple",
            PRIMARY_COLOR: "#663399",
            SECONDARY_COLOR: "#D7BDE2",
            ACCENT_COLOR: "#9B59B6",
            TEXT_COLOR: "#240066",
            SEPARATOR_COLOR: "#8E44AD",
            MAIN_LINK_COLOR: "#9B59B6",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Bright Orange",
            PRIMARY_COLOR: "#FF5733",
            SECONDARY_COLOR: "#FFE5CC",
            ACCENT_COLOR: "#FFC300",
            TEXT_COLOR: "#663300",
            SEPARATOR_COLOR: "#FFA07A",
            MAIN_LINK_COLOR: "#FFC300",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Steel Gray",
            PRIMARY_COLOR: "#708090",
            SECONDARY_COLOR: "#C7CCD1",
            ACCENT_COLOR: "#C0C0C0",
            TEXT_COLOR: "#333",
            SEPARATOR_COLOR: "#BFBFBF",
            MAIN_LINK_COLOR: "#C0C0C0",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Sapphire Blue",
            PRIMARY_COLOR: "#0F52BA",
            SECONDARY_COLOR: "#BFD8EE",
            ACCENT_COLOR: "#0077C9",
            TEXT_COLOR: "#003366",
            SEPARATOR_COLOR: "#5499C7",
            MAIN_LINK_COLOR: "#0077C9",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Vibrant Blue",
            PRIMARY_COLOR: "#1F4E79",
            SECONDARY_COLOR: "#BDD7EE",
            ACCENT_COLOR: "#2E75B6",
            TEXT_COLOR: "#001E5B",
            SEPARATOR_COLOR: "#5999D4",
            MAIN_LINK_COLOR: "#2E75B6",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Electric Purple",
            PRIMARY_COLOR: "#4B0082",
            SECONDARY_COLOR: "#D6D6D6",
            ACCENT_COLOR: "#9400D3",
            TEXT_COLOR: "#3F3F3F",
            SEPARATOR_COLOR: "#7B68EE",
            MAIN_LINK_COLOR: "#9400D3",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Fiery Red",
            PRIMARY_COLOR: "#800000",
            SECONDARY_COLOR: "#F5F5DC",
            ACCENT_COLOR: "#FF4500",
            TEXT_COLOR: "#3F3F3F",
            SEPARATOR_COLOR: "#B22222",
            MAIN_LINK_COLOR: "#FF4500",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Sunny Yellow",
            PRIMARY_COLOR: "#FFD700",
            SECONDARY_COLOR: "#FFFFE0",
            ACCENT_COLOR: "#FFFF00",
            TEXT_COLOR: "#3F3F3F",
            SEPARATOR_COLOR: "#EEE8AA",
            MAIN_LINK_COLOR: "#FFFF00",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Forest Green",
            PRIMARY_COLOR: "#228B22",
            SECONDARY_COLOR: "#90EE90",
            ACCENT_COLOR: "#32CD32",
            TEXT_COLOR: "#3F3F3F",
            SEPARATOR_COLOR: "#98FB98",
            MAIN_LINK_COLOR: "#32CD32",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Tropical Teal",
            PRIMARY_COLOR: "#1F9D71",
            SECONDARY_COLOR: "#B5EAD7",
            ACCENT_COLOR: "#3EBE9E",
            TEXT_COLOR: "#005C4F",
            SEPARATOR_COLOR: "#5ED5A5",
            MAIN_LINK_COLOR: "#3EBE9E",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Royal Purple",
            PRIMARY_COLOR: "#800080",
            SECONDARY_COLOR: "#E6E6FA",
            ACCENT_COLOR: "#9370DB",
            TEXT_COLOR: "#3F3F3F",
            SEPARATOR_COLOR: "#DDA0DD",
            MAIN_LINK_COLOR: "#9370DB",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Sunset Orange",
            PRIMARY_COLOR: "#FF5733",
            SECONDARY_COLOR: "#FFD6B3",
            ACCENT_COLOR: "#FF7C4D",
            TEXT_COLOR: "#663500",
            SEPARATOR_COLOR: "#FFA347",
            MAIN_LINK_COLOR: "#FF7C4D",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Majestic Purple",
            PRIMARY_COLOR: "#7B3F8D",
            SECONDARY_COLOR: "#D3C3F2",
            ACCENT_COLOR: "#966FD6",
            TEXT_COLOR: "#410066",
            SEPARATOR_COLOR: "#A78DF2",
            MAIN_LINK_COLOR: "#966FD6",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Vibrant Red",
            PRIMARY_COLOR: "#D60A0A",
            SECONDARY_COLOR: "#F2C3C3",
            ACCENT_COLOR: "#FF0D0D",
            TEXT_COLOR: "#660000",
            SEPARATOR_COLOR: "#F25A5A",
            MAIN_LINK_COLOR: "#FF0D0D",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Ocean Blue",
            PRIMARY_COLOR: "#0D6EFD",
            SECONDARY_COLOR: "#BDD7EE",
            ACCENT_COLOR: "#1F87D9",
            TEXT_COLOR: "#001E5B",
            SEPARATOR_COLOR: "#5999D4",
            MAIN_LINK_COLOR: "#1F87D9",
            BACKGROUND_COLOR: "#FFFFFF",
        },
        {
            NAME: "Midnight Black",
            PRIMARY_COLOR: "#0E2E40",
            SECONDARY_COLOR: "#1B1E2D",
            ACCENT_COLOR: "#3F7CAC",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#3F7CAC",
            MAIN_LINK_COLOR: "#3F7CAC",
            BACKGROUND_COLOR: "#3A3A3A",
        },
        {
            NAME: "Dark Maroon",
            PRIMARY_COLOR: "#7f1d1d",
            SECONDARY_COLOR: "#2b0e0e",
            ACCENT_COLOR: "#d13b3b",
            TEXT_COLOR: "#f9f9f9",
            SEPARATOR_COLOR: "#cc5c5c",
            MAIN_LINK_COLOR: "#f9f9f9",
            BACKGROUND_COLOR: "#1d1d1d",
        },
        {
            NAME: "Deep Purple",
            PRIMARY_COLOR: "#4b0082",
            SECONDARY_COLOR: "#1d1d1d",
            ACCENT_COLOR: "#9a32cd",
            TEXT_COLOR: "#f9f9f9",
            SEPARATOR_COLOR: "#7a5bcc",
            MAIN_LINK_COLOR: "#f9f9f9",
            BACKGROUND_COLOR: "#1d1d1d",
        },
        {
            NAME: "Mystical Black",
            PRIMARY_COLOR: "#0f0f0f",
            SECONDARY_COLOR: "#1d1d1d",
            ACCENT_COLOR: "#5b5b5b",
            TEXT_COLOR: "#f9f9f9",
            SEPARATOR_COLOR: "#2b2b2b",
            MAIN_LINK_COLOR: "#f9f9f9",
            BACKGROUND_COLOR: "#1d1d1d",
        },
        {
            NAME: "Dark Sapphire",
            PRIMARY_COLOR: "#0f0f5b",
            SECONDARY_COLOR: "#1d1d7a",
            ACCENT_COLOR: "#3b3bd1",
            TEXT_COLOR: "#f9f9f9",
            SEPARATOR_COLOR: "#5b5bcc",
            MAIN_LINK_COLOR: "#f9f9f9",
            BACKGROUND_COLOR: "#1d1d1d",
        },
        {
            NAME: "Midnight Navy",
            PRIMARY_COLOR: "#00005b",
            SECONDARY_COLOR: "#1d1d7a",
            ACCENT_COLOR: "#3b3bbb",
            TEXT_COLOR: "#f9f9f9",
            SEPARATOR_COLOR: "#5b5b99",
            MAIN_LINK_COLOR: "#f9f9f9",
            BACKGROUND_COLOR: "#1d1d1d",
        },
        {
            NAME: "Dark Ocean",
            PRIMARY_COLOR: "#053C5C",
            SECONDARY_COLOR: "#0B3E3E",
            ACCENT_COLOR: "#0B8080",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#1F9D71",
            MAIN_LINK_COLOR: "#0B8080",
            BACKGROUND_COLOR: "#0B3E3E",
        },
        {
            NAME: "Midnight Purple",
            PRIMARY_COLOR: "#360033",
            SECONDARY_COLOR: "#1A003D",
            ACCENT_COLOR: "#5D0072",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#1F9D71",
            MAIN_LINK_COLOR: "#5D0072",
            BACKGROUND_COLOR: "#1A003D",
        },
        {
            NAME: "Elegant Black",
            PRIMARY_COLOR: "#000000",
            SECONDARY_COLOR: "#1A1A1A",
            ACCENT_COLOR: "#808080",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#1F9D71",
            MAIN_LINK_COLOR: "#808080",
            BACKGROUND_COLOR: "#1A1A1A",
        },
        {
            NAME: "Gothic Grey",
            PRIMARY_COLOR: "#383838",
            SECONDARY_COLOR: "#2E2E2E",
            ACCENT_COLOR: "#6E6E6E",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#1F9D71",
            MAIN_LINK_COLOR: "#6E6E6E",
            BACKGROUND_COLOR: "#2E2E2E",
        },
        {
            NAME: "Mysterious Dark",
            PRIMARY_COLOR: "#0B3E3E",
            SECONDARY_COLOR: "#053C5C",
            ACCENT_COLOR: "#0B8080",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#1F9D71",
            MAIN_LINK_COLOR: "#0B8080",
            BACKGROUND_COLOR: "#053C5C",
        },
        {
            NAME: "Mystical Black",
            PRIMARY_COLOR: "#0E0E0E",
            SECONDARY_COLOR: "#1C1C1C",
            ACCENT_COLOR: "#686868",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#484848",
            MAIN_LINK_COLOR: "#686868",
            BACKGROUND_COLOR: "#232323",
        },
        {
            NAME: "Midnight Blue",
            PRIMARY_COLOR: "#0E0E3F",
            SECONDARY_COLOR: "#1C1C5E",
            ACCENT_COLOR: "#6868B8",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#4848A0",
            MAIN_LINK_COLOR: "#6868B8",
            BACKGROUND_COLOR: "#232359",
        },
        {
            NAME: "Midnight Blue Darker",
            PRIMARY_COLOR: "#1c2331",
            SECONDARY_COLOR: "#0d0d1a",
            ACCENT_COLOR: "#0652DD",
            TEXT_COLOR: "#FFFFFF",
            SEPARATOR_COLOR: "#5999D4",
            MAIN_LINK_COLOR: "#0652DD",
            BACKGROUND_COLOR: "#0C1E3F",
        },
        {
            NAME: "Dark Forest",
            PRIMARY_COLOR: "#0E3F0E",
            SECONDARY_COLOR: "#042104",
            ACCENT_COLOR: "#68B868",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#48A048",
            MAIN_LINK_COLOR: "#68B868",
            BACKGROUND_COLOR: "#235E23",
        },
        {
            NAME: "Charcoal Gray",
            PRIMARY_COLOR: "#3F3F3F",
            SECONDARY_COLOR: "#4c4c4c",
            ACCENT_COLOR: "#B8B8B8",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#A0A0A0",
            MAIN_LINK_COLOR: "#B8B8B8",
            BACKGROUND_COLOR: "#5E5E5E",
        },
        {
            NAME: "Shadowy Black",
            PRIMARY_COLOR: "#0F0F0F",
            SECONDARY_COLOR: "#1E1E1E",
            ACCENT_COLOR: "#696969",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#494949",
            MAIN_LINK_COLOR: "#696969",
            BACKGROUND_COLOR: "#222222",
        },
        {
            NAME: "Mysterious Black",
            PRIMARY_COLOR: "#2F2E41",
            SECONDARY_COLOR: "#17181E",
            ACCENT_COLOR: "#C1C1CC",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#3C3B4D",
            MAIN_LINK_COLOR: "#7D7D86",
            BACKGROUND_COLOR: "#0D0D0D",
        },
        {
            NAME: "Midnight Gray",
            PRIMARY_COLOR: "#2F2E41",
            SECONDARY_COLOR: "#3C3B4D",
            ACCENT_COLOR: "#C1C1CC",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#17181E",
            MAIN_LINK_COLOR: "#7D7D86",
            BACKGROUND_COLOR: "#121212",
        },
        {
            NAME: "Dark Knight",
            PRIMARY_COLOR: "#17181E",
            SECONDARY_COLOR: "#3C3B4D",
            ACCENT_COLOR: "#C1C1CC",
            TEXT_COLOR: "#F9F9F9",
            SEPARATOR_COLOR: "#2F2E41",
            MAIN_LINK_COLOR: "#7D7D86",
            BACKGROUND_COLOR: "#0D0D0D",
        },
    ];

    static DEFAULTS = {
        THEME: Globals.THEMES[0],
        CONTACTS: {
            EMAIL: "",
            PHONE_NUMBERS: undefined,
            ADDRESS: "",
        },
        HEADER: {
            TITLE: "",
            INCLUDE_IMAGE: true,
            IMAGE: "",
        },
        CONFIGS: {
            MAIN_CONTENT_PADDING: 25,
            MAIN_CONTENT_PADDING_MIN: 10,
            MAIN_CONTENT_PADDING_MAX: 50,
            SIDEBAR_PADDING: 25,
            SIDEBAR_PADDING_MIN: 10,
            SIDEBAR_PADDING_MAX: 50,
            SIDEBAR_SPACE: 25,
            SIDEBAR_SPACE_MIN: 10,
            SIDEBAR_SPACE_MAX: 50,
            HEADER_FONT_SIZE: 30,
            HEADER_FONT_SIZE_MIN: 20,
            HEADER_FONT_SIZE_MAX: 50,
            IMAGE_WIDTH: 120,
            IMAGE_WIDTH_MIN: 120,
            IMAGE_WIDTH_MAX: 170,
            IMAGE_HEIGHT: 150,
            IMAGE_HEIGHT_MIN: 150,
            IMAGE_HEIGHT_MAX: 245,
            CONTACTS_FONT_SIZE: 15,
            CONTACTS_FONT_SIZE_MIN: 13,
            CONTACTS_FONT_SIZE_MAX: 20,
            CONTACTS_ICON_SIZE: 16,
            CONTACTS_ICON_SIZE_MIN: 14,
            CONTACTS_ICON_SIZE_MAX: 25,
            CONTACTS_SPACE: 10,
            CONTACTS_SPACE_MIN: 0,
            CONTACTS_SPACE_MAX: 20,
            CONTACTS_LIST_SPACE: 20,
            CONTACTS_LIST_SPACE_MIN: 10,
            CONTACTS_LIST_SPACE_MAX: 40,
            SECTION_TITLE_FONT_SIZE: 20,
            SECTION_TITLE_FONT_SIZE_MIN: 15,
            SECTION_TITLE_FONT_SIZE_MAX: 30,
            SECTION_TEXT_FONT_SIZE: 14,
            SECTION_TEXT_FONT_SIZE_MIN: 13,
            SECTION_TEXT_FONT_SIZE_MAX: 20,
            SECTION_SUB_TEXT_FONT_SIZE: 10,
            SECTION_SUB_TEXT_FONT_SIZE_MIN: 11,
            SECTION_SUB_TEXT_FONT_SIZE_MAX: 17,
            SECTION_TEXT_LINE_HEIGHT: 14,
            SECTION_TEXT_LINE_HEIGHT_MIN: 13,
            SECTION_TEXT_LINE_HEIGHT_MAX: 20,
            SECTION_SPACE: 16,
            SECTION_SPACE_MIN: 16,
            SECTION_SPACE_MAX: 30,
            SECTION_ITEM_SPACE: 5,
            SECTION_ITEM_SPACE_MIN: 0,
            SECTION_ITEM_SPACE_MAX: 10,
            SECTION_SEPARATOR_SPACE: 8,
            SECTION_SEPARATOR_SPACE_MIN: 2,
            SECTION_SEPARATOR_SPACE_MAX: 8,
            SECTION_LIST_ITEM_SPACE: 2,
            SECTION_LIST_ITEM_SPACE_MIN: 0,
            SECTION_LIST_ITEM_SPACE_MAX: 10,
        },
        SECTIONS: {
            SECTIONS: [] as Section[],
        },
        SIDEBAR: {
            SECTIONS: [] as Section[],
        },
    };
}
