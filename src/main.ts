import p5 from "p5";

// Entrypoint code
const rootEl = document.getElementById("p5-root");
if (!rootEl) {
  throw new Error("Cannot find element root #p5-root");
}
main(rootEl);

function myP5(p: p5) {
  let font: p5.Font;
  let helloWorldTextRotation = 0;

  // user code goes here
  Object.assign(p, {
    preload() {
      // can preload assets here...
      font = p.loadFont(
        new URL("/public/fonts/inconsolata.otf", import.meta.url).href
      );
    },
    setup() {
      p.createCanvas(800, 600, p.WEBGL);
      p.background("skyblue");
      // setup some basic default text + font size
      p.textFont(font);
      p.textSize(36);
      // ...
    },
    draw() {
      // clear screen with background color
      p.background("skyblue");

      // Hello P5.js!
      p.push();
      p.textAlign(p.CENTER, p.CENTER);
      if (p.frameCount % 3 === 0) {
        helloWorldTextRotation += 0.03125;
      }
      p.rotateY(p.PI * helloWorldTextRotation);
      p.text("Hello P5.js!", 0, 0);
      p.pop();
      // ...
    },
  } satisfies Pick<typeof p, "preload" | "setup" | "draw">);
}

function main(rootElement: HTMLElement) {
  new p5(myP5, rootElement);
}
