import {
  DimentionsType,
  TextSizeType,
  TextWeightType,
  ColorType,
  RoundedType,
  ShadowType,
} from "./types";
/* 
  editable conditions 
*/
export const gapMix = (value: DimentionsType) => {
  return {
    "": value === null,
    "gap-1": value === "xs",
    "gap-2": value === "sm",
    "gap-4": value === "md",
    "gap-6": value === "lg",
    "gap-9": value === "xl",
    "gap-12": value === "2xl",
  };
};

export const paddingxMix = (value: DimentionsType) => {
  return {
    "": value === null,
    "px-2": value === "sm",
    "px-4": value === "md",
    "px-6": value === "lg",
    "px-9": value === "xl",
    "px-12": value === "2xl",
  };
};

export const paddingyMix = (value: DimentionsType) => {
  return {
    "": value === null,
    "py-2": value === "sm",
    "py-4": value === "md",
    "py-6": value === "lg",
    "py-9": value === "xl",
    "py-14": value === "2xl",
  };
};

export const paddingbMix = (value: DimentionsType) => {
  return {
    "": value === null,
    "pb-2": value === "sm",
    "pb-4": value === "md",
    "pb-6": value === "lg",
    "pb-9": value === "xl",
    "pb-12": value === "2xl",
  };
};

/* coreersponding with tailwind config */

export const textSizeMix = (value: TextSizeType) => {
  return {
    "text-xs": value === "xs",
    "text-sm": value === "sm",
    "text-base": value === "base",
    "text-md": value === "md",
    "text-lg": value === "lg",
    "text-xl": value === "xl",
    "text-2xl": value === "2xl",
    "text-4xl": value === "3xl",
  };
};

export const textWeightMix = (value: TextWeightType) => {
  return {
    "font-normal": value === "normal",
    "font-bold": value === "bold",
    "font-bold uppercase": value === "upbold",
  };
};

/* todo: add active state color condition */
export const textColorMix = (value: ColorType) => {
  return {
    "text-primary-500": value === "primary",
    "text-primary-50": value === "primary-light",
    "text-secondary-900": value === "secondary",
    "text-secondary-100": value === "secondary-light",
    "text-tertiary-600": value === "tertiary",
    "text-tertiary-100": value === "tertiary-light",
    "text-red-600": value === "error",
    "text-red-100": value === "error-light",
    "text-green-700": value === "success",
    "text-green-100": value === "success-light",
    "text-amber-600": value === "warning",
    "text-amber-100": value === "warning-light",
    "text-blue-500": value === "info",
    "text-gray-300": value === "gray-light",
    "text-gray-600": value === "gray",
    "text-white": value === "white",
  };
};

/* todo: add active state color condition */
export const borderColorMix = (value: ColorType, active?: boolean) => {
  return {
    "border-primary-500": value === "primary",
    "border-secondary-900": value === "secondary",
    "border-tertiary-600": value === "tertiary",
    "border-red-600": value === "error",
    "border-green-700": value === "success",
    "border-green-100": value === "success-light",
    "border-amber-600": value === "warning",
    "border-amber-100": value === "warning-light",
    "border-blue-500": value === "info",
    "border-white": value === "white",
  };
};

export const textHoverColorMix = (value: ColorType) => {
  return {
    "hover:text-primary-500 active:text-primary-700": value === "primary",
    "hover:text-secondary-600 active:text-secondary-700": value === "secondary",
    "hover:text-tertiary-600 active:text-tertiary-700": value === "tertiary",
    "hover:text-red-700 active:text-red-800": value === "error",
    "hover:text-green-400 active:text-green-500": value === "success",
    "hover:text-yellow-400 active:text-yellow-500": value === "warning",
    "hover:text-blue-400 active:text-blue-500": value === "info",
  };
};

export const bgMix = (value: ColorType) => {
  return {
    "bg-primary-500": value === "primary",
    "bg-primary-50": value === "primary-light",
    "bg-secondary-900": value === "secondary",
    "bg-secondary-100": value === "secondary-light",
    "bg-tertiary-600": value === "tertiary",
    "bg-tertiary-100": value === "tertiary-light",
    "bg-red-700": value === "error",
    "bg-red-300 bg-opacity-20": value === "error-light",
    "bg-green-700": value === "success",
    "bg-green-300 bg-opacity-20": value === "success-light",
    "bg-yellow-400": value === "warning",
    "bg-yellow-50": value === "warning-light",
    "bg-blue-700": value === "info",
    "bg-blue-300 bg-opacity-20": value === "info-light",
    "bg-white": value === "white",
    "bg-gray-50": value === "gray-light",
    "bg-gray-300": value === "gray",
  };
};

export const bgHoverColorMix = (value: ColorType) => {
  /* todo: update colors to all color type items */
  return {
    "hover:bg-primary-600 active:bg-primary-700": value === "primary",
    "hover:bg-opacity-80 active:bg-secondary-700": value === "secondary",
    "hover:bg-tertiary-700 active:bg-tertiary-800": value === "tertiary",
    "hover:bg-red-800 active:bg-red-900": value === "error",
    "hover:bg-green-500 active:bg-green-600": value === "success",
    "hover:bg-yellow-500 active:bg-yellow-600": value === "warning",
    "hover:bg-blue-500 active:bg-blue-600": value === "info",
    "hover:bg-gray-200 active:bg-gray-300": value === "gray-light",
    "hover:bg-gray-400 active:bg-gray-500": value === "gray",
  };
};

export const roundedMix = (value: RoundedType) => {
  return {
    rounded: value === "md",
    "rounded-md": value === "lg",
    "rounded-xl": value === "xl",
    "rounded-full": value === "full",
  };
};

export const shadowMix = (value: ShadowType) => {
  return {
    shadow: value === "md",
    "shadow-lg": value === "lg",
    "shadow-xl": value === "xl",
    "shadow-inner": value === "inner",
  };
};

export const transition = () => {
  return {
    "transition duration-150 ease-in-out": true,
  };
};

/* 
    methods
  */
export const mixClass = (conditionsObject: any) => {
  let out = "";
  Object.keys(conditionsObject).map((k: string) =>
    conditionsObject[k] ? (out = out + " " + k) : null
  );
  return out;
};

/* 
    export types
  */
export * from "./types";
