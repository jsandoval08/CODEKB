document.querySelectorAll(".key").forEach((key) => {
    key.addEventListener(
      "mousedown",
      () => {
        key.classList.add("pressed");
      },
      { passive: true }
    );
    key.addEventListener(
      "mouseup",
      () => {
        key.classList.remove("pressed");
      },
      { passive: true }
    );
    key.addEventListener(
      "mouseleave",
      () => {
        key.classList.remove("pressed");
      },
      { passive: true }
    );
  });
  
  const keyMap = {
    Escape: "ESC",
    F1: "F1",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    Backspace: "DEL",
    Tab: "CTRL",
    CapsLock: "SHIFT LOCK",
    Enter: "RETURN",
    ShiftLeft: "SHIFT",
    ShiftRight: "SHIFT",
    Space: "",
    Home: "HOME",
    Control: "CTRL",
    ArrowLeft: "←",
    ArrowRight: "→",
    ArrowUp: "↑",
    ArrowDown: "↓",
    Digit1: "1",
    Digit2: "2",
    Digit3: "3",
    Digit4: "4",
    Digit5: "5",
    Digit6: "6",
    Digit7: "7",
    Digit8: "8",
    Digit9: "9",
    Digit0: "0",
    Minus: "-",
    Equal: "=",
    KeyQ: "Q",
    KeyW: "W",
    KeyE: "E",
    KeyR: "R",
    KeyT: "T",
    KeyY: "Y",
    KeyU: "U",
    KeyI: "I",
    KeyO: "O",
    KeyP: "P",
    KeyA: "A",
    KeyS: "S",
    KeyD: "D",
    KeyF: "F",
    KeyG: "G",
    KeyH: "H",
    KeyJ: "J",
    KeyK: "K",
    KeyL: "L",
    KeyZ: "Z",
    KeyX: "X",
    KeyC: "C",
    KeyV: "V",
    KeyB: "B",
    KeyN: "N",
    KeyM: "M",
    Semicolon: ";",
    Quote: "@",
    Comma: ",",
    Period: ".",
    Slash: "/",
    BracketLeft: "[",
    BracketRight: "]"
  };
  
  function findKeyElement(code) {
    if (code === "Space") {
      return document.querySelector(".key.space");
    }
    let keyToFind = keyMap[code];
    if (!keyToFind && code.startsWith("Key")) {
      keyToFind = code.slice(-1);
    }
    if (!keyToFind) return null;
    const element = Array.from(document.querySelectorAll(".key")).find((el) => {
      const primaryText = el.querySelector(".primary")?.textContent || "";
      const fullText = el.textContent.trim();
      return primaryText === keyToFind || fullText === keyToFind;
    });
    return element;
  }
  
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    const keyElement = findKeyElement(e.code);
    if (keyElement) {
      keyElement.classList.add("pressed");
    }
  });
  
  document.addEventListener("keyup", (e) => {
    e.preventDefault();
    const keyElement = findKeyElement(e.code);
    if (keyElement) {
      keyElement.classList.remove("pressed");
    }
  });
  
  let ticking = false;
  document.addEventListener(
    "mousemove",
    (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const keyboard = document.querySelector(".keyboard");
          const rect = keyboard.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const rotateY = (e.clientX - centerX) * 0.015;
          const rotateX = (e.clientY - centerY) * -0.015;
          keyboard.style.transform = `rotateX(${
            10 + rotateX
          }deg) rotateY(${rotateY}deg)`;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
  