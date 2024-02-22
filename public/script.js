/*["Key Code", "Key", "Code", "Unicode", "Description"]*/

function unidentifiedKeyPressed() {
  const unidentifiedKey = [
    "",
    "Unidentified",
    "Unidentified",
    "",
    "These keys do not have a key code",
  ];
  let x = unidentifiedKey;
  document.getElementById("keyCodeJSText").innerHTML = x[0];
  document.getElementById("keyNameText").innerHTML = x[1];
  document.getElementById("keyCodeText").innerHTML = x[2];
  document.getElementById("keyUnicodeText").innerHTML = x[3];
  document.getElementById("keyDescriptionText").innerHTML = x[4];
}

window.addEventListener("keydown", function (event) {
  if (event.code === "Backspace") {
    console.log("Backspace key is pressed");
    function backspaceKeyPressed() {
      const backspaceKey = [
        "8",
        "Backspace",
        "Backspace",
        "⌫",
        "backspace / delete",
      ];
      let x = backspaceKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    backspaceKeyPressed();
  }
  if (event.code === "Escape") {
    console.log("Escape key is pressed");
    function escKeyPressed() {
      const escKey = ["27", "Escape", "Escape", "⎋", "escape"];
      let x = escKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    escKeyPressed();
  }
  if (event.code === "F1") {
    console.log("F1 key is pressed");
    function f1KeyPressed() {
      const f1Key = ["112", "F1", "F1", "", "f1"];
      let x = f1Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f1KeyPressed();
  }
  if (event.code === "NumLock") {
    console.log("F1 key is pressed");
    function numlockKeyPressed() {
      const numlockKey = ["144", "NumLock", "NumLock", "⇭", "num lock"];
      let x = numlockKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numLockKeyPressed();
  }
  if (event.code === "F2") {
    console.log("F2 key is pressed");
    function f2KeyPressed() {
      const f2Key = ["113", "F2", "F2", "", "f2"];
      let x = f2Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f2KeyPressed();
  }
  if (event.code === "F3") {
    console.log("F3 key is pressed");
    function f3KeyPressed() {
      const f3Key = ["114", "F3", "F3", "", "f3"];
      let x = f3Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f3KeyPressed();
  }
  if (event.code === "F4") {
    console.log("F4 key is pressed");
    function f4KeyPressed() {
      const f4Key = ["115", "F4", "F4", "", "f4"];
      let x = f4Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f4KeyPressed();
  }
  if (event.code === "F5") {
    console.log("F5 key is pressed");
    function f5KeyPressed() {
      const f5Key = ["116", "F5", "F5", "", "f5"];
      let x = f5Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f5KeyPressed();
  }
  if (event.code === "F6") {
    console.log("F6 key is pressed");
    function f6KeyPressed() {
      const f6Key = ["117", "F6", "F6", "", "f6"];
      let x = f6Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f6KeyPressed();
  }
  if (event.code === "F7") {
    console.log("F7 key is pressed");
    function f7KeyPressed() {
      const f7Key = ["118", "F7", "F7", "", "f7"];
      let x = f7Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f7KeyPressed();
  }
  if (event.code === "F8") {
    console.log("F8q key is pressed");
    function f8KeyPressed() {
      const f8Key = ["119", "F8", "F8", "", "f8"];
      let x = f8Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f8KeyPressed();
  }
  if (event.code === "F9") {
    console.log("F9 key is pressed");
    function f9KeyPressed() {
      const f9Key = ["120", "F9", "F9", "", "f9"];
      let x = f9Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f9KeyPressed();
  }
  if (event.code === "F10") {
    console.log("F2 key is pressed");
    function f10KeyPressed() {
      const f10Key = ["121", "F10", "F10", "", "f10"];
      let x = f10Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f10KeyPressed();
  }
  if (event.code === "F11") {
    console.log("F11 key is pressed");
    function f11KeyPressed() {
      const f11Key = ["122", "F11", "F11", "", "f11"];
      let x = f11Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f11KeyPressed();
  }
  if (event.code === "F12") {
    console.log("F12 key is pressed");
    function f12KeyPressed() {
      const f12Key = ["123", "F12", "F12", "", "f12"];
      let x = f12Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    f12KeyPressed();
  }
  if (event.code === "Pause") {
    console.log("Pause key is pressed");
    function pausebrakeKeyPressed() {
      const pausebreakKey = ["19", "Pause", "Pause", "", "pause/break"];
      let x = pausebreakKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    pausebrakeKeyPressed();
  }
  if (event.code === "Print") {
    console.log("Print Screen key is pressed");
    function printscreenKeyPressed() {
      const printscreenKey = ["42", "Print", "", "", "print"];
      let x = printscreenKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    printscreenKeyPressed();
  }
  if (event.code === "Delete") {
    console.log("Delete key is pressed");
    function deleteKeyPressed() {
      const deleteKey = ["46", "Delete", "NumpadDecimal", "⌦", "delete"];
      let x = deleteKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    deleteKeyPressed();
  }
  if (event.code === "NumpadDivide") {
    console.log("Numpad Divide key is pressed");
    function numpaddivideKeyPressed() {
      const numpaddivideKey = ["111", "/", "NumpadDivide", "÷", "divide"];
      let x = numpaddivideKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpaddivideKeyPressed();
  }
  if (event.code === "NumpadMultiply") {
    console.log("Numpad Multiply key is pressed");
    function numpadmultiplyKeyPressed() {
      const numpadmultiplyKey = ["106", "*", "NumpadMultiply", "×", "multiply"];
      let x = numpadmultiplyKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpadmultiplyKeyPressed();
  }
  if (event.code === "Backquote") {
    console.log("Backquote key is pressed");
    function backquoteKeyPressed() {
      const backquoteKey = ["223", "`", "Backquote", "", "`"];
      let x = backquoteKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    backquoteKeyPressed();
  }
  if (event.code === "Digit1") {
    console.log("One key is pressed");
    function oneKeyPressed() {
      const oneKey = ["49", "1", "Digit1", "①", "1 Key"];
      let x = oneKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    oneKeyPressed();
  }
  if (event.code === "Digit1" && event.shiftKey) {
    console.log("Exclamation key is pressed");
    function exclamationKeyPressed() {
      const exclamationKey = ["49", "!", "Digit1", "!", "exclamation mark"];
      let x = exclamationKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    exclamationKeyPressed();
  }
  if (event.code === "Digit2") {
    console.log("Two key is pressed");
    function twoKeyPressed() {
      const twoKey = ["50", "2", "Digit2", "②", "2 Key"];
      let x = twoKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    twoKeyPressed();
  }
  if (event.code === "Digit2" && event.shiftKey) {
    console.log("@ key is pressed");
    function atKeyPressed() {
      const atKey = ["50", "@", "Digit2", "@", "at sign"];
      let x = atKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    atKeyPressed();
  }
  if (event.code === "Digit3") {
    console.log("Three key is pressed");
    function threeKeyPressed() {
      const threeKey = ["51", "3", "Digit3", "③", "3 Key"];
      let x = threeKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    threeKeyPressed();
  }
  if (event.code === "Digit3" && event.shiftKey) {
    console.log("Octothorpe key is pressed");
    function octothorpeKeyPressed() {
      const octothorpeKey = ["51", "#", "Digit3", "#", "hash"];
      let x = octothorpeKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    octothorpeKeyPressed();
  }
  if (event.code === "Digit4") {
    console.log("FOur key is pressed");
    function fourKeyPressed() {
      const fourKey = ["52", "4", "Digit4", "④", "4 Key"];
      let x = fourKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    fourKeyPressed();
  }
  if (event.code === "Digit4" && event.shiftKey) {
    console.log("Dollar key is pressed");
    function dollarKeyPressed() {
      const dollarKey = ["52", "$", "Digit4", "$", "currency"];
      let x = dollarKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    dollarKeyPressed();
  }
  if (event.code === "Digit5") {
    console.log("Five key is pressed");
    function fiveKeyPressed() {
      const fiveKey = ["53", "5", "Digit5", "⑤", "5 Key"];
      let x = fiveKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    fiveKeyPressed();
  }
  if (event.code === "Digit5" && event.shiftKey) {
    console.log("Percentage Key is pressed");
    function percentageKeyPressed() {
      const percentageKey = ["53", "%", "Digit5", "%", "percent"];
      let x = percentageKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    percentageKeyPressed();
  }
  if (event.code === "Digit6") {
    console.log("Six key is pressed");
    function sixKeyPressed() {
      const sixKey = ["54", "6", "Digit6", "⑥", "6 Key"];
      let x = sixKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    sixKeyPressed();
  }
  if (event.code === "Digit6" && event.shiftKey) {
    console.log("Power to key is pressed");
    function powertoPressed() {
      const powertoKey = ["54", "^", "Digit6", "^", "power to"];
      let x = powertoKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    powertoPressed();
  }
  if (event.code === "Digit7") {
    console.log("Seven 7 is pressed");
    function sevenKeyPressed() {
      const sevenKey = ["55", "7", "Digit7", "⑦", "7 Key"];
      let x = sevenKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    sevenKeyPressed();
  }
  if (event.code === "Digit7" && event.shiftKey) {
    console.log("And key is pressed");
    function andKeyPressed() {
      const andKey = ["55", "&", "Digit7", "&", "and"];
      let x = andKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    andKeyPressed();
  }
  if (event.code === "Digit8") {
    console.log("Eight key is pressed");
    function eightKeyPressed() {
      const eightKey = ["56", "8", "Digit8", "⑧", "8 Key"];
      let x = eightKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    eightKeyPressed();
  }
  if (event.code === "Digit8" && event.shiftKey) {
    console.log("Asterisks key is pressed");

    function asterisksKeyPressed() {
      const asterisksKey = ["56", "*", "Digit8", "*", "asterisk"];
      let x = asterisksKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    asterisksKeyPressed();
  }
  if (event.code === "Digit9") {
    console.log("Nine key is pressed");
    function nineKeyPressed() {
      const nineKey = ["57", "9", "Digit9", "⑨", "9 Key"];
      let x = nineKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    nineKeyPressed();
  }
  if (event.code === "Digit9" && event.shiftKey) {
    console.log("Paranthesesleft key is pressed");
    function paranthesesleftKeyPressed() {
      const paranthesesleftKey = ["57", "(", "Digit9", "(", "parentheses left"];
      let x = paranthesesleftKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    paranthesesleftKeyPressed();
  }
  if (event.code === "Digit0") {
    console.log("Zero key is pressed");
    function zeroKeyPressed() {
      const zeroKey = ["48", "0", "Digit0", "⓪", "0"];
      let x = zeroKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    zeroKeyPressed();
  }
  if (event.code === "Digit0" && event.shiftKey) {
    console.log("Parantheses right key is pressed");
    function paranthesesrightKeyPressed() {
      const paranthesesrightKey = [
        "48",
        ")",
        "Digit0",
        ")",
        "parantheses right",
      ];
      let x = paranthesesrightKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    paranthesesrightKeyPressed();
  }
  if (event.code === "Minus") {
    console.log("Minus key is pressed");
    function minusKeyPressed() {
      const minusKey = ["189", "-", "Minus", "", "dash"];
      let x = minusKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    minusKeyPressed();
  }
  if (event.code === "Minus" && event.shiftKey) {
    console.log("Minus Long key is pressed");
    function minuslongKeyPressed() {
      const minuslongKey = ["189", "-", "Minus", "–", "dash"];
      let x = minuslongKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    minuslongKeyPressed();
  }
  if (event.code === "Pause") {
    console.log("Cancel key is pressed");
    function cancelKeyPressed() {
      const cancelKey = ["3", "Cancel", "Pause", "", "break"];
      let x = cancelKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    cancelKeyPressed();
  }
  if (event.code === "Tab") {
    console.log("Tab key is pressed");
    function tabKeyPressed() {
      const tabKey = ["9", "Tab", "Tab", "↹", "tab"];
      let x = tabKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    tabKeyPressed();
  }
  if (event.code === "NumLock") {
    console.log("NumLock key is pressed");
    function numLockKeyPressed() {
      const numLockKey = ["12", "Clear", "NumLock", "⌧", "clear"];
      let x = numLockKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numlockKeyPressed();
  }
  if (event.code === "Enter") {
    console.log("Enter key is pressed");
    function enterKeyPressed() {
      const enterKey = ["13", "Enter", "Enter", "↵", "Enter / Return"];
      let x = enterKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    enterKeyPressed();
  }
  if (event.code === "ShiftLeft") {
    console.log("Left Shift key is pressed");
    function shiftLeftsKeyPressed() {
      const shiftLeftKey = ["16", "Shift", "ShiftLeft", "⇧", "shift"];
      let x = shiftLeftKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    shiftLeftsKeyPressed();
  }
  if (event.code === "ShiftRight") {
    console.log("Shift Right key pressed");
    function shiftRightKeyPressed() {
      const shiftRightKey = ["16", "Shift", "ShiftRight", "⇧", "shift"];
      let x = shiftRightKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    shiftRightKeyPressed();
  }
  if (event.code === "ControlLeft") {
    console.log("CTRL Left key pressed");
    function controlLeftKeyPressed() {
      const controlLeftKey = ["17", "Control", "ControlLeft", "^", "ctrl"];
      let x = controlLeftKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    controlLeftKeyPressed();
  }
  if (event.code === "ControlRight") {
    console.log("CTRL Right key pressed");
    function controlRightKeyPressed() {
      const controlRightKey = ["17", "Control", "ControlRight", "^", "ctrl"];
      let x = controlRightKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    controlRightKeyPressed();
  }
  if (event.code === "AltLeft") {
    console.log("Alt Left key pressed");
    function altLeftKeyPressed() {
      const altLeftKey = ["18", "Alt", "AltLeft", "⎇ / ⌥", "Alt / Option"];
      let x = altLeftKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    altLeftKeyPressed();
  }

  if (event.code === "AltRight") {
    console.log("Alt Right key pressed");
    function altRightKeyPressed() {
      const altRightKey = ["18", "Alt", "AltRight", "⎇ / ⌥", "Alt / Option"];
      let x = altRightKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    altRightKeyPressed();
  }

  if (event.code === "CapsLock") {
    console.log("Caps Lock key pressed");
    function capsLockKeyPressed() {
      const capsLockKey = ["20", "CapsLock", "CapsLock", "⇪", "caps lock"];
      let x = capsLockKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    capsLockKeyPressed();
  }

  if (event.code === "Space") {
    console.log("Spacebar key pressed");
    function spacebarKeyPressed() {
      const spacebarKey = ["32", "(blank space)", "Space", "", "spacebar"];
      let x = spacebarKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    spacebarKeyPressed();
  }

  if (event.code === "ArrowLeft") {
    console.log("Arrow Left key pressed");
    function arrowLeftKeyPressed() {
      const arrowLeftKey = ["37", "ArrowLeft", "ArrowLeft", "←", "left arrow"];
      let x = arrowLeftKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    arrowLeftKeyPressed();
  }

  if (event.code === "ArrowUp") {
    console.log("Arrow Up key pressed");
    function arrowUpKeyPressed() {
      const arrowUpKey = ["38", "ArrowUp", "ArrowUp", "↑", "up arrow"];
      let x = arrowUpKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    arrowUpKeyPressed();
  }

  if (event.code === "ArrowRight") {
    console.log("Arrow Right key pressed");
    function arrowRightKeyPressed() {
      const arrowRightKey = [
        "39",
        "ArrowRight",
        "ArrowRight",
        "→",
        "right arrow",
      ];
      let x = arrowRightKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    arrowRightKeyPressed();
  }

  if (event.code === "ArrowDown") {
    console.log("Arrow Down key pressed");
    function arrowDownKeyPressed() {
      const arrowDownKey = ["40", "ArrowDown", "ArrowDown", "↓", "down arrow"];
      let x = arrowDownKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    arrowDownKeyPressed();
  }

  if (event.code === "Select") {
    console.log("Select key pressed");
    function selectKeyPressed() {
      const selectKey = ["41", "Select", "", "", "select"];
      let x = selectKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    selectKeyPressed();
  }

  if (event.code === "Execute") {
    console.log("Execute key pressed");
    function executeKeyPressed() {
      const executeKey = ["43", "Execute", "", "", "execute"];
      let x = executeKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    executeKeyPressed();
  }

  if (event.code === "Minus") {
    console.log("Minus key is pressed");
    function minussignKeyPressed() {
      const minussignKey = ["63", "-", "Minus", "", "-"];
      let x = minussignKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    minussignKeyPressed();
  }

  if (event.code === "Numpad0") {
    console.log("Insert key is pressed");
    function insertKeyPressed() {
      const insertKey = ["45", "Insert", "Numpad0", "x", "insert"];
      let x = insertKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    insertKeyPressed();
  }

  if (event.code === "Help") {
    console.log("Help key is pressed");
    function helpKeyPressed() {
      const helpKey = ["47", "Help", "", "⍰", "help"];
      let x = helpKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    helpKeyPressed();
  }

  if (event.code === "Period") {
    console.log("Double Dot key is pressed");
    function doubledotKeyPressed() {
      const doubledotKey = ["58", ":", "Period", "", ":"];
      let x = doubledotKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    doubledotKeyPressed();
  }

  if (event.code === "KeyA") {
    console.log("A key pressed");
    function aKeyPressed() {
      const aKey = ["65", "a", "KeyA", "", "a"];
      let x = helpKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    aKeyPressed();
  }

  if (event.code === "KeyB") {
    console.log("B key pressed");
    function bKeyPressed() {
      const bKey = ["66", "b", "KeyB", "", "b"];
      let x = bKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    bKeyPressed();
  }

  if (event.code === "KeyC") {
    console.log("C key pressed");
    function cKeyPressed() {
      const cKey = ["67", "c", "KeyC", "", "c"];
      let x = cKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    cKeyPressed();
  }

  if (event.code === "KeyD") {
    console.log("D key pressed");
    function dKeyPressed() {
      const dKey = ["68", "d", "KeyD", "", "d"];
      let x = dKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    dKeyPressed();
  }

  if (event.code === "KeyE") {
    console.log("E key pressed");
    function eKeyPressed() {
      const eKey = ["69", "e", "KeyE", "", "e"];
      let x = eKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    eKeyPressed();
  }

  if (event.code === "KeyF") {
    console.log("F key pressed");
    function fKeyPressed() {
      const fKey = ["70", "f", "KeyF", "", "f"];
      let x = fKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    fKeyPressed();
  }

  if (event.code === "KeyG") {
    console.log("G key is pressed");
    function gKeyPressed() {
      const gKey = ["71", "g", "KeyG", "", "g"];
      let x = gKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    gKeyPressed();
  }

  if (event.code === "KeyH") {
    console.log("H key is pressed");
    function hKeyPressed() {
      const hKey = ["72", "h", "KeyH", "", "h"];
      let x = hKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    hKeyPressed();
  }

  if (event.code === "KeyI") {
    console.log("I key is pressed");
    function iKeyPressed() {
      const iKey = ["73", "i", "KeyI", "", "i"];
      let x = iKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    iKeyPressed();
  }

  if (event.code === "KeyJ") {
    console.log("J key is pressed");
    function jKeyPressed() {
      const jKey = ["74", "j", "KeyJ", "", "j"];
      let x = jKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    jKeyPressed();
  }

  if (event.code === "KeyK") {
    console.log("K key is pressed");
    function kKeyPressed() {
      const kKey = ["75", "k", "KeyK", "", "k"];
      let x = kKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    kKeyPressed();
  }

  if (event.code === "KeyL") {
    console.log("L key is pressed");
    function lKeyPressed() {
      const lKey = ["76", "l", "KeyL", "", "l"];
      let x = lKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    lKeyPressed();
  }

  if (event.code === "KeyM") {
    console.log("M key is pressed");
    function mKeyPressed() {
      const mKey = ["77", "m", "KeyM", "", "m"];
      let x = mKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    mKeyPressed();
  }

  if (event.code === "KeyN") {
    console.log("N key is pressed");
    function nKeyPressed() {
      const nKey = ["78", "n", "KeyN", "", "n"];
      let x = nKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    nKeyPressed();
  }

  if (event.code === "KeyO") {
    console.log("O key is pressed");
    function oKeyPressed() {
      const oKey = ["79", "0", "KeyO", "", "o"];
      let x = oKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    oKeyPressed();
  }

  if (event.code === "KeyP") {
    console.log("P key is pressed");
    function pKeyPressed() {
      const pKey = ["80", "p", "KeyP", "", "p"];
      let x = pKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    pKeyPressed();
  }

  if (event.code === "KeyQ") {
    console.log("Q key is pressed");
    function qKeyPressed() {
      const qKey = ["81", "q", "KeyQ", "", "q"];
      let x = qKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    qKeyPressed();
  }

  if (event.code === "KeyR") {
    console.log("R key is pressed");
    function rKeyPressed() {
      const rKey = ["82", "r", "KeyR", "", "r"];
      let x = rKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    rKeyPressed();
  }

  if (event.code === "KeyS") {
    console.log("S key is pressed");
    function sKeyPressed() {
      const sKey = ["83", "s", "KeyS", "", "s"];
      let x = sKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    sKeyPressed();
  }

  if (event.code === "KeyT") {
    console.log("T key is pressed");
    function tKeyPressed() {
      const tKey = ["84", "t", "KeyT", "", "t"];
      let x = tKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    tKeyPressed();
  }

  if (event.code === "KeyU") {
    console.log("U key is pressed");
    function uKeyPressed() {
      const uKey = ["85", "u", "KeyU", "", "u"];
      let x = uKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    uKeyPressed();
  }

  if (event.code === "KeyV") {
    console.log("V key is pressed");
    function vKeyPressed() {
      const vKey = ["86", "v", "KeyV", "", "v"];
      let x = vKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    vKeyPressed();
  }

  if (event.code === "KeyW") {
    console.log("W key is pressed");
    function wKeyPressed() {
      const wKey = ["87", "w", "KeyW", "", "w"];
      let x = wKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    wKeyPressed();
  }

  if (event.code === "KeyX") {
    console.log("X key is pressed");
    function xKeyPressed() {
      const xKey = ["88", "x", "KeyX", "", "x"];
      let x = xKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    xKeyPressed();
  }

  if (event.code === "KeyY") {
    console.log("Y key is pressed");
    function yKeyPressed() {
      const yKey = ["89", "y", "KeyY", "", "y"];
      let x = yKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    yKeyPressed();
  }

  if (event.code === "KeyZ") {
    console.log("Z key is pressed");
    function zKeyPressed() {
      const zKey = ["90", "z", "KeyZ", "", "z"];
      let x = zKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    zKeyPressed();
  }

  if (event.code === "MetaLeft") {
    console.log("Meta Left key is pressed");
    function metaleftKeyPressed() {
      const metaleftKey = [
        "91",
        "Meta",
        "MetaLeft",
        "⌘ ⊞",
        "Windows Key / Left ⌘ / Chromebook Search key",
      ];
      let x = metaleftKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    metaleftKeyPressed();
  }

  if (event.code === "MetaRight") {
    console.log("Meta Right key is pressed");
    function metarightKeyPressed() {
      const metarightKey = ["92", "Meta", "MetaRight", "⌘ ⊞", "Right Windows"];
      let x = metarightKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    metarightKeyPressed();
  }

  if (event.code === "ContextMenu") {
    console.log("Context Menu is pressed");
    function contextKeyPressed() {
      const contextKey = [
        "93",
        "ContextMenu",
        "ContextMenu",
        "▤",
        "Windows Menu / Right ⌘",
      ];
      let x = contextKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    contextKeyPressed();
  }

  if (event.code === "Standby") {
    console.log("Standby key is pressed");
    function sleepKeyPressed() {
      const sleepKey = ["95", "Standby", "", "☾", "sleep"];
      let x = sleepKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    sleepKeyPressed();
  }

  if (event.code === "Numpad0") {
    console.log("Numpad 0 key is pressed");
    function numpad0KeyPressed() {
      const numpad0Key = ["96", "0", "Numpad0", "⓪", "Number Pad 0"];
      let x = numpad0Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad0KeyPressed();
  }

  if (event.code === "Numpad1") {
    console.log("Numpad 1 key is pressed");
    function numpad1KeyPressed() {
      const numpad1Key = ["97", "1", "Numpad1", "①", "Number Pad 1"];
      let x = numpad1Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad1KeyPressed();
  }

  if (event.code === "Numpad1" && event.shiftKey) {
    console.log("End key pressed");
    function endKeyPressed() {
      const endKey = ["35", "End", "Numpad1", "", "end"];
      let x = endKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    endKeyPressed();
  }

  if (event.code === "Numpad2") {
    console.log("Numpad 2 key is pressed");
    function numpad2KeyPressed() {
      const numpad2Key = ["98", "2", "Numpad2", "②", "Number Pad 2"];
      let x = numpad2Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad2KeyPressed();
  }

  if (event.key === "Numpad3") {
    console.log("Numpad 3 key is pressed");
    function numpad3KeyPressed() {
      const numpad3Key = ["99", "3", "Numpad3", "③", "Number Pad 3"];
      let x = numpad3Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad3KeyPressed;
  }

  if (event.code === "Numpad3" && event.shiftKey) {
    console.log("Page Down key pressed");
    function pageDownKeyPressed() {
      const pageDownKey = ["34", "PageDown", "Numpad3", "⇟", "page down"];
      let x = pageDownKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    pageDownKeyPressed();
  }

  if (event.code === "Numpad4") {
    console.log("Numpad 4 key is pressed");
    function numpad4KeyPressed() {
      const numpad4Key = ["100", "4", "Numpad4", "④", "Number Pad 4"];
      let x = numpad4Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad4KeyPressed();
  }

  if (event.code === "Numpad5") {
    console.log("Numpad 5 key is pressed");
    function numpad5KeyPressed() {
      const numpad5Key = ["101", "5", "Numpad5", "⑤", "Number Pad 5"];
      let x = numpad5Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad5KeyPressed();
  }

  if (event.code === "Numpad6") {
    console.log("Numpad 6 key is pressed");
    function numpad6KeyPressed() {
      const numpad6Key = ["102", "6", "Numpad6", "⑥", "Number Pad 6"];
      let x = numpad6Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad6KeyPressed();
  }

  if (event.code === "Numpad7") {
    console.log("Numpad 7 key is pressed");
    function numpad7KeyPressed() {
      const numpad7Key = ["103", "7", "Numpad7", "⑦", "Number Pad 7"];
      let x = numpad7Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad7KeyPressed();
  }

  if (event.code === "Numpad7" && event.shiftKey) {
    console.log("Home key pressed");
    function homeKeyPressed() {
      const homeKey = ["36", "Home", "Numpad7", "⌂", "home"];
      let x = homeKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    homeKeyPressed();
  }

  if (event.code === "Numpad8") {
    console.log("Numpad 8 key is pressed");
    function numpad8KeyPressed() {
      const numpad8Key = ["104", "8", "Numpad8", "⑧", "Number Pad 8"];
      let x = numpad8Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad8KeyPressed();
  }

  if (event.code === "Numpad9") {
    console.log("Numpad 9 key is pressed");
    function numpad9KeyPressed() {
      const numpad9Key = ["105", "9", "Numpad9", "⑨", "Number Pad 9"];
      let x = numpad9Key;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpad9KeyPressed();
  }

  if (event.code === "Numpad9" && event.shiftKey) {
    console.log("Page Up key pressed");
    function pageUpKeyPressed() {
      const pageUpKey = ["33", "PageUp", "Numpad9", "⇞", "page up"];
      let x = pageUpKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    pageUpKeyPressed();
  }

  if (event.code === "NumpadAdd") {
    console.log("Numpad add key is pressed");
    function numpadAddKeyPressed() {
      const numpadAddKey = ["107", "+", "NumpadAdd", "", "add"];
      let x = numpadAddKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpadAddKeyPressed();
  }

  if (event.code === "NumpadSubtract") {
    console.log("Numpad subtract key is pressed");
    function numpadSubtractKeyPressed() {
      const numpadSubtractKey = ["109", "-", "NumpadSubtract", "", "subtract"];
      let x = numpadSubtractKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpadSubtractKeyPressed();
  }

  if (event.code === "NumpadDecimal") {
    console.log("Numpad decimal key is pressed");
    function numpadDecimalKeyPressed() {
      const numpadDecimalKey = [
        "110",
        ".",
        "NumpadDecimal",
        "",
        "decimal point",
      ];
      let x = numpadDecimalKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpadDecimalKeyPressed();
  }

  if (event.code === "ScrollLock") {
    console.log("sScroll lock is pressed");
    function scrolllockKeyPressed() {
      const scrolllockKey = [
        "145",
        "ScrollLock",
        "ScrollLock",
        "⤓",
        "scroll lock",
      ];
      let x = scrolllockKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    scrolllockKeyPressed();
  }

  if (event.code === "AudioVolumeDown") {
    console.log("Audio volume down key is pressed");
    function volumedownKeyPressed() {
      const volumedownKey = [
        "174",
        "AudioVolumeDown",
        "",
        "",
        "decrease volume level",
      ];
      let x = volumedownKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    volumedownKeyPressed();
  }

  if (event.code === "AudioVolumeUp") {
    console.log("Audio volume up key is pressed");
    function volumeupKeyPressed() {
      const volumeupKey = [
        "175",
        "AudioVolumeUp",
        "",
        "",
        "increase volume level",
      ];
      let x = volumeupKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    volumeupKeyPressed();
  }

  if (event.code === "MediaTrackNext") {
    console.log("Media track next key is pressed");
    function nextKeyPressed() {
      const nextKey = ["176", "MediaTrackNext", "MediaTrackNext", "", "next"];
      let x = nextKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    nextKeyPressed();
  }

  if (event.code === "MediaTrackPrevious") {
    console.log("Media track previous key is pressed");
    function previousKeyPressed() {
      const previousKey = [
        "177",
        "MediaTrackPrevious",
        "MediaTrackPrevious",
        "",
        "previous",
      ];
      let x = previousKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    previousKeyPressed();
  }

  if (event.code === "MediaStop") {
    console.log("Media Stop key is pressed");
    function stopKeyPressed() {
      const stopKey = ["178", "MediaStop", "", "", "stop"];
      let x = stopKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    stopKeyPressed();
  }

  if (event.code === "MediaPlayPause") {
    console.log("Media Pause key is pressed");
    function pauseKeyPressed() {
      const pauseKey = ["179", "MediaPlayPause", "", "", "play/pause"];
      let x = pauseKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    pauseKeyPressed();
  }

  if (event.code === "VolumeMute") {
    console.log("Volume Mute key is pressed");
    function muteKeyPressed() {
      const muteKey = [
        "181",
        "AudioVolumeMute",
        "VolumeMute",
        "",
        "mute/unmute (firefox)",
      ];
      let x = muteKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    muteKeyPressed();
  }

  if (event.code === "NumpadDecimal") {
    console.log("Numpad decimal key is pressed");
    function numpadDecimalKeyPressed() {
      const numpadDecimalKey = [
        "110",
        ".",
        "NumpadDecimal",
        "",
        "decimal point",
      ];
      let x = numpadDecimalKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    numpadDecimalKeyPressed();
  }

  if (event.code === "Comma") {
    console.log("Comma key is pressed");
    function commaKeyPressed() {
      const commaKey = ["188", ",", "Comma", "", "comma"];
      let x = commaKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    commaKeyPressed();
  }

  if (event.code === "Comma" && event.shiftKey) {
    console.log("Less than key is pressed");
    function lessthanKeyPressed() {
      const lessthanKey = ["188", "<", "Less than", "", "comma"];
      let x = lessthanKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    lessthanKeyPressed();
  }

  if (event.code === "Minus") {
    console.log("Underscore key is pressed");
    function underscoreKeyPressed() {
      const underscoreKey = ["189", "_", "Minus", "_", "underscore"];
      let x = underscoreKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    underscoreKeyPressed();
  }

  if (event.code === "Period") {
    console.log("Period key is pressed");
    function periodKeyPressed() {
      const periodKey = ["190", ".", "Period", "", "period"];
      let x = periodKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    periodKeyPressed();
  }

  if (event.code === "Period" && event.shiftKey) {
    console.log("greater than key is pressed");
    function greaterthanKeyPressed() {
      const greaterthanKey = ["190", ">", "Period", ">", "greater than"];
      let x = greaterthanKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    greaterthanKeyPressed();
  }

  if (event.code === "Slash") {
    console.log("Forward slash key is pressed");
    function forwardslashKeyPressed() {
      const forwardslashKey = ["191", "/", "Slash", "", "forward slash / ç"];
      let x = forwardslashKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    forwardslashKeyPressed();
  }

  if (event.code === "Slash" && event.shiftKey) {
    console.log("Question key pressed");
    function questionmarkKeyPressed() {
      const questionmarkKey = ["191", "?", "Slash", "?", "question mark"];
      let x = questionmarkKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    questionmarkKeyPressed();
  }

  if (event.code === "BracketLeft") {
    console.log("Open Bracket key pressed");
    function openbracketKeyPressed() {
      const openbracketKey = ["219", "[", "BracketLeft", "", "open bracket"];
      let x = openbracketKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    openbracketKeyPressed();
  }

  if (event.code === "BracketLeft" && event.shiftKey) {
    console.log("Braacket Left key pressed");
    function bracesleftKeyPressed() {
      const bracesleftKey = ["219", "{", "BracketLeft", "{", "braces left"];
      let x = bracesleftKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    bracesleftKeyPressed();
  }

  if (event.code === "Backslash") {
    console.log("Backslash key pressed");
    function backslashKeyPressed() {
      const backslashKey = ["220", "", "Backslash", "", "back slash"];
      let x = backslashKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    backslashKeyPressed();
  }

  if (event.code === "BracketRight") {
    console.log("Close Bracket key pressed");
    function closebracketKeyPressed() {
      const closebracketKey = [
        "221",
        "]",
        "BracketRight",
        "",
        "close bracket / å",
      ];
      let x = closebracketKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    closebracketKeyPressed();
  }

  if (event.code === "BracketRight" && event.shiftKey) {
    console.log("Braces Right key pressed");
    function bracesrightKeyPressed() {
      const bracesrightKey = ["221", "}", "BracketRight", "}", "braces right"];
      let x = bracesrightKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    bracesrightKeyPressed();
  }

  if (event.code === "Quote") {
    console.log("Single Quote key pressed");
    function singlequoteKeyPressed() {
      const singlequoteKey = ["222", "'", "Quote", "", "single quote"];
      let x = singlequoteKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    singlequoteKeyPressed();
  }

  if (event.code === "Quote" && event.shiftKey) {
    console.log("Double quote key pressed");
    function singlequoteKeyPressed() {
      const singlequoteKey = ["222", "", "Quote", "", "double quote"];
      let x = singlequoteKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    singlequoteKeyPressed();
  }

  if (event.code === "Backquote") {
    console.log("Backquote key pressed");
    function backquoteKeyPressed() {
      const backquoteKey = ["192", "`", "Backquote", "", "`"];
      let x = backquoteKey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    backquoteKeyPressed();
  }

  if (event.code === "Semicolon") {
    console.log("Semicolon key pressed");
    function semicolonKeyPressed() {
      const semicolonkey = ["186", ";", "Semicolon", "", "semi-colon"];
      let x = semicolonkey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    semicolonKeyPressed();
  }

  if (event.code === "Semicolon" && event.shiftKey) {
    console.log("Period key pressed");
    function periodKeyPressed() {
      const periodkey = ["58", ":", "Period", "", ":"];
      let x = periodkey;
      document.getElementById("keyCodeJSText").innerHTML = x[0];
      document.getElementById("keyNameText").innerHTML = x[1];
      document.getElementById("keyCodeText").innerHTML = x[2];
      document.getElementById("keyUnicodeText").innerHTML = x[3];
      document.getElementById("keyDescriptionText").innerHTML = x[4];
    }
    periodKeyPressed();
  }
});

/* const f13Key = ["124", "F13", "F13", "", "f13"];
const f14Key = ["125", "F14", "F14", "", "f14"];
const f15Key = ["126", "F15", "F15", "", "f15"];
const f16Key = ["127", "F16", "F16", "", "f16"];
const f17Key = ["128", "F17", "F17", "", "f17"];
const f18Key = ["129", "F18", "F18", "", "f18"];
const f19Key = ["130", "F19", "F19", "", "f19"];
const f20Key = ["131", "F20", "F20", "", "F20"];
const f21Key = ["132", "F21", "F21", "", "F21"];
const f22Key = ["133", "F22", "F22", "", "F22"];
const f23Key = ["134", "F23", "F23", "", "F23"];
const f24Key = ["135", "F24", "F24", "", "F24"];
const f25Key = ["136", "F25", "F25", "", "F25"];
const f26Key = ["137", "F26", "F26", "", "F26"];
const f27Key = ["138", "F27", "F27", "", "F27"];
const f28Key = ["139", "F28", "F28", "", "F28"];
const f29Key = ["140", "F29", "F29", "", "F29"];
const f30Key = ["141", "F30", "F30", "", "F30"];
const f31Key = ["142", "F31", "F31", "", "F31"];
const f32Key = ["143", "F32", "F32", "", "F32"]; */
