import { useInsertionEffect, useMemo } from "react";
import { nanoid } from "nanoid";
import styleToCss from "style-object-to-css-string";

export const useStyles = (stylesCreator, props = {}) => {
  const [styles, styleRules] = useMemo(() => {
    const styles = {};
    const stylesConfig = stylesCreator(props);
    const styleRules = [];
    for (const styleProperty in stylesConfig) {
      const styleValue = stylesConfig[styleProperty];
      const hashedClassName = `${styleProperty}_${nanoid()}`;

      styles[styleProperty] = hashedClassName;

      const rule = `.${hashedClassName} {${styleToCss(styleValue)}}`;
      styleRules.push(rule);
    }

    return [styles, styleRules];
  }, [stylesCreator, props]);

  useInsertionEffect(() => {
    const stylesheet = document.createElement("style");
    document.head.appendChild(stylesheet);

    for (const rule of styleRules) {
      stylesheet.sheet.insertRule(rule);
    }

    return () => {
      document.head.removeChild(stylesheet);
    };
  }, [styles, styleRules]);
  return styles;
};
