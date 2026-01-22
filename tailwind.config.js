/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("franken-ui/shadcn-ui/preset-quick")],
  content: ["./*.html"],
  safelist: [
    {
      pattern: /^uk-/
    }
  ]
};
