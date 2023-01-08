import { HeroIcon, IconFormat, PossibleIcons } from "./types";
/**
 * Lookup an icon by its name. Useful when you want to import dynamically an icon, from a database, for instance.
 * @param iconName The name of the possible icon you wish to import dynamically. If the name does not exist, it will throw an error.
 * @param format The format of the icon you wish to import.
 * @returns A hero icon react component that you can render.
 */
export declare const lookupIcon: (iconName: PossibleIcons, format?: IconFormat) => HeroIcon;
//# sourceMappingURL=lookupIcon.d.ts.map