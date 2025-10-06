import { useEffect, useMemo } from "react";
import { Theme } from "@glideapps/glide-data-grid";
import React from "react";

function getCssVar(
  style: CSSStyleDeclaration,
  key: string,
): string | undefined {
  const result = style.getPropertyValue(key);
  return result ? result : undefined;
}

function convertToNumber(val: string | undefined): number | undefined {
  const result = Number(val);
  return !isNaN(result) ? result : undefined;
}

export function getThemeFromCss(element: HTMLDivElement): Partial<Theme> {
  const computedStyle = window.getComputedStyle(element);
  return {
    accentColor: getCssVar(computedStyle, "--dgw-accent-color"),
    accentFg: getCssVar(computedStyle, "--dgw-accent-fg"),
    accentLight: getCssVar(computedStyle, "--dgw-accent-light"),
    textDark: getCssVar(computedStyle, "--dgw-text-dark"),
    textMedium: getCssVar(computedStyle, "--dgw-text-medium"),
    textLight: getCssVar(computedStyle, "--dgw-text-light"),
    textBubble: getCssVar(computedStyle, "--dgw-text-bubble"),
    bgIconHeader: getCssVar(computedStyle, "--dgw-bg-icon-header"),
    fgIconHeader: getCssVar(computedStyle, "--dgw-fg-icon-header"),
    textHeader: getCssVar(computedStyle, "--dgw-text-header"),
    textGroupHeader: getCssVar(computedStyle, "--dgw-text-group-header"),
    textHeaderSelected: getCssVar(computedStyle, "--dgw-text-header-selected"),
    bgCell: getCssVar(computedStyle, "--dgw-bg-cell"),
    bgCellMedium: getCssVar(computedStyle, "--dgw-bg-cell-medium"),
    bgHeader: getCssVar(computedStyle, "--dgw-bg-header"),
    bgHeaderHasFocus: getCssVar(computedStyle, "--dgw-bg-header-has-focus"),
    bgHeaderHovered: getCssVar(computedStyle, "--dgw-bg-header-hovered"),
    bgBubble: getCssVar(computedStyle, "--dgw-bg-bubble"),
    bgBubbleSelected: getCssVar(computedStyle, "--dgw-bg-bubble-selected"),
    bgSearchResult: getCssVar(computedStyle, "--dgw-bg-search-result"),
    borderColor: getCssVar(computedStyle, "--dgw-border-color"),
    horizontalBorderColor: getCssVar(
      computedStyle,
      "--dgw-horizontal-border-color",
    ),
    drilldownBorder: getCssVar(computedStyle, "--dgw-drilldown-border"),
    linkColor: getCssVar(computedStyle, "--dgw-link-color"),
    cellHorizontalPadding: convertToNumber(
      getCssVar(computedStyle, "--dgw-cell-horizontal-padding"),
    ),
    cellVerticalPadding: convertToNumber(
      getCssVar(computedStyle, "--dgw-cell-vertical-padding"),
    ),
    headerFontStyle: getCssVar(computedStyle, "--dgw-header-font-style"),
    baseFontStyle: getCssVar(computedStyle, "--dgw-base-font-style"),
    markerFontStyle: getCssVar(computedStyle, "--dgw-marker-font-style"),
    fontFamily: getCssVar(computedStyle, "--dgw-font-family"),
    editorFontSize: getCssVar(computedStyle, "--dgw-editor-font-size"),
  };
}

export const darkTheme: Partial<Theme> = {
  accentColor: "#8c96ff",
  accentLight: "rgba(202, 206, 255, 0.253)",

  textDark: "#ffffff",
  textMedium: "#b8b8b8",
  textLight: "#a0a0a0",
  textBubble: "#ffffff",

  bgIconHeader: "#b8b8b8",
  fgIconHeader: "#000000",
  textHeader: "#c4c4c4",
  textHeaderSelected: "#000000",

  bgCell: "#1d1d1d",
  bgCellMedium: "#202027",
  bgHeader: "#262626",
  bgHeaderHasFocus: "#474747",
  bgHeaderHovered: "#404040",

  bgBubble: "#212121",
  bgBubbleSelected: "#000000",

  bgSearchResult: "#423c24",

  //borderColor: 'rgba(70,70,70,1)',
  borderColor: "rgba(225,225,225,0.2)",
  drilldownBorder: "rgba(225,225,225,0.4)",

  linkColor: "#353fb5",

  cellHorizontalPadding: 8,
  cellVerticalPadding: 3,

  headerIconSize: 18,

  headerFontStyle: "600 13px",
  baseFontStyle: "13px",
  markerFontStyle: "9px",
  fontFamily:
    "Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",
  editorFontSize: "13px",
  lineHeight: 1.4,

  accentFg: "#0a0a0a",
};

export const lightTheme: Theme = {
  accentColor: "#4F5DFF",
  accentFg: "#FFFFFF",
  accentLight: "rgba(62, 116, 253, 0.1)",

  textDark: "#222222",
  textMedium: "#737383",
  textLight: "#B2B2C0",
  textBubble: "#313139",

  bgIconHeader: "#737383",
  fgIconHeader: "#FFFFFF",
  textHeader: "#313139",
  textGroupHeader: "#313139BB",
  textHeaderSelected: "#FFFFFF",

  bgCell: "#FFFFFF",
  bgCellMedium: "#FAFAFB",
  bgHeader: "#E5E7EB",
  bgHeaderHasFocus: "#E9E9EB",
  bgHeaderHovered: "#EFEFF1",

  bgBubble: "#EDEDF3",
  bgBubbleSelected: "#FFFFFF",

  bgSearchResult: "#fff9e3",

  borderColor: "rgba(115, 116, 131, 0.16)",
  drilldownBorder: "rgba(0, 0, 0, 0)",

  linkColor: "#353fb5",

  cellHorizontalPadding: 8,
  cellVerticalPadding: 3,

  headerIconSize: 18,

  headerFontStyle: "600 13px",
  baseFontStyle: "13px",
  markerFontStyle: "9px",
  fontFamily:
    "Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",
  editorFontSize: "13px",
  lineHeight: 1.4,
};

// =================   BREAK   ==================

function useTheme(
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  className: string | undefined,
): Partial<Theme> {
  const [cssTheme, setCssTheme] = React.useState<Partial<Theme>>({});
  const [systemColorScheme, setSystemColorScheme] = React.useState<
    "light" | "dark"
  >("light");
  useEffect(() => {
    if (!window.matchMedia) return;
    setSystemColorScheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    );
    const listener = (event: MediaQueryListEvent) => {
      setSystemColorScheme(event.matches ? "dark" : "light");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
    };
  }, []);
  useEffect(() => {
    if (!containerRef.current) return;
    setCssTheme(getThemeFromCss(containerRef.current));
  }, [className, containerRef]);
  return React.useMemo(() => {
    const baseTheme = systemColorScheme === "dark" ? darkTheme : lightTheme;
    const filteredTheme = Object.fromEntries(
      Object.entries(cssTheme).filter(([, value]) => value !== undefined),
    );
    const resultTheme = { ...baseTheme, ...filteredTheme };
    return resultTheme;
  }, [cssTheme, systemColorScheme]);
}
export default useTheme;
