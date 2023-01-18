"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupIcon = void 0;
const solidIcons_1 = require("./solidIcons");
const outlineIcons_1 = require("./outlineIcons");
const miniIcons_1 = require("./miniIcons");
const types_1 = require("./types");
/**
 * Lookup an icon by its name. Useful when you want to import dynamically an icon, from a database, for instance.
 * @param iconName The name of the possible icon you wish to import dynamically. If the name does not exist, it will throw an error.
 * @param format The format of the icon you wish to import.
 * @returns A hero icon react component that you can render.
 */
const lookupIcon = (iconName, format = "solid") => {
    if (!types_1.PossibleIconsArray.includes(iconName)) {
        throw Error(`The icon name '${iconName}' you provided does not exist in the library. Please check the name and try again.`);
    }
    if (format === "solid") {
        return solidIcons_1.lookup[iconName];
    }
    else if (format == "mini") {
        return miniIcons_1.lookup[iconName];
    }
    return outlineIcons_1.lookup[iconName];
};
exports.lookupIcon = lookupIcon;
//# sourceMappingURL=lookupIcon.js.map