# menu-icon

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A zero-dependency, animated menu icon (hamburger icon) as a customizable Web Component.

## Live Demo

See the component in action at the live demo site:
[https://fukuno.jig.jp/2833](https://fukuno.jig.jp/2833)

## Features

- **Zero-dependency:** A lightweight, standalone Web Component.
- **Multiple Animations:** Includes 3 built-in animation styles:
    - A 3-bar icon that animates into an 'X'.
    - A 4-bar icon that animates into a rotated 'X'.
    - A 4-bar icon where outer bars fade and inner bars form an 'X' (default).
- **Simple Toggle:** Animates on click by toggling a `.change` class.

## Usage

1.  **Add the script to your HTML file.**

    ```html
    <script type="module" src="./menu-icon.js"></script>
    ```

2.  **Use the custom element in your HTML.**

    ```html
    <menu-icon></menu-icon>
    ```

This will render the default menu icon in the bottom-right corner of the page.

## Customization

All customization is done by editing the `menu-icon.js` file directly.

### Changing the Animation Style

The component includes three animation styles, indexed `0`, `1`, and `2`. The default is `2`. To change it, modify the `changetype` default value in the constructor:

```javascript
// In menu-icon.js
export class MenuIcon extends HTMLElement {
  constructor(changetype = 2) { // Change '2' to '0' or '1' for a different style
    super();
    // ...
  }
}
```

### Changing Appearance (Colors, Size, Position)

-   To change the icon's **position, background, or padding**, edit the `cssmenu` constant at the top of `menu-icon.js`.
-   To change the **bars' color, size, or animation properties**, edit the CSS within the `barchanges` array for the corresponding style.

## Attribution

The CSS animation for the 3-bar icon is based on the example from [W3Schools](https://www.w3schools.com/howto/howto_css_menu_icon.asp).

## License

MIT License — see [LICENSE](LICENSE).