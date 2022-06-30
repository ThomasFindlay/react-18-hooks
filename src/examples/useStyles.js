import { useInsertionEffect, useMemo } from "react";
import { nanoid } from "nanoid";
import styleToCss from "style-object-to-css-string";

export const useStyles = (stylesCreator, props = {}) => {
  /**
   * Create a styles object with classes that will be passed to elements and the styleRules which will be inserted into a  stylesheet
   */
  const [styles, styleRules] = useMemo(() => {
    // styles for the className prop
    const styles = {};
    // style rules for a stylesheet
    const styleRules = [];
    for (const [styleProperty, styleValue] of Object.entries(
      stylesCreator(props)
    )) {
      // Generate a unique hashed class name
      const hashedClassName = `${styleProperty}_${nanoid()}`;
      styles[styleProperty] = hashedClassName;
      // Create formatted rule that will be inserted into a stylesheet in the useInsertionEffect
      const rule = `.${hashedClassName} {${styleToCss(styleValue)}}`;
      styleRules.push(rule);
    }

    return [styles, styleRules];
  }, [stylesCreator, props]);

  useInsertionEffect(() => {
    /**
     * Create a new stylsheet, insert it into the DOM and add style rules
     */
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
