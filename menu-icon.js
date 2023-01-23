import { style } from "https://js.sabae.cc/css.js";

const cssmenu = `
menu-icon {
  display: inline-block;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: .5em;
  background-color: #333;
  x-opacity: .8;
  z-index: 2;
  border-top-left-radius: 1em;
}
`;

const barchanges = [
  {
    nbars: 3,
    css: `
      .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #f00;
        margin: 6px 0;
        transition: 0.4s;
      }
      .change .bar1 {
        transform: translate(0, 11px) rotate(-45deg);
      }
      .change .bar2 {
        opacity: 0;
      }
      .change .bar3 {
        transform: translate(0, -11px) rotate(45deg);
      }
    `,
  },
  {
    nbars: 4,
    css: `
      .bar1, .bar2, .bar3, .bar4 {
        width: 35px;
        height: 5px;
        background-color: #fff;
        margin: 6px 0;
        transition: 0.4s;
      }
      .bar4 {
        position: absolute;
        top: 19px;
      }
      .change .bar1 {
        transform: translate(0, 11px) rotate(-45deg);
      }
      .change .bar2 {
        transform: translate(0px, 0px) rotate(45deg);
      }
      .change .bar3 {
        transform: translate(0, -11px) rotate(45deg);
      }
      .change .bar4 {
        transform: translate(0px, 0px) rotate(-45deg);
      }
    `,
    },
    {
      nbars: 4,
      css: `
        .bar1, .bar2, .bar3, .bar4 {
          width: 35px;
          height: 5px;
          background-color: #fff;
          margin: 6px 0;
          transition: 0.4s;
        }
        .bar4 {
          position: absolute;
          top: 19px;
        }
        .change .bar1 {
          opacity: 0;
        }
        .change .bar2 {
          transform: translate(0px, 0px) rotate(45deg);
        }
        .change .bar3 {
          opacity: 0;
        }
        .change .bar4 {
          transform: translate(0px, 0px) rotate(-45deg);
        }
      `,
    }
];

export class MenuIcon extends HTMLElement {
  constructor(changetype = 2) {
    super();
    const change = barchanges[changetype];
    for (let i = 0; i < change.nbars; i++) {
      const div = document.createElement("div");
      div.className = "bar" + (i + 1);
      this.appendChild(div);
    }
    style(cssmenu);
    style(change.css);
    this.addEventListener("click", () => this.classList.toggle("change"));
  }
};

customElements.define("menu-icon", MenuIcon);
