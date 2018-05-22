export function printA4(className) {
  return new Promise((resolve, reject) => {
    try {
      const printContent = document.getElementsByClassName("paper")[0]
        .innerHTML;
      const head = document.getElementsByTagName("head")[0].innerHTML;
      const popupWin = window.open(
        "",
        "_blank",
        `fullscreen=yes, scrollbars=auto`
      );
      const printables = `<html><head>${head}</head><body class="books" onload="window.print();window.close();"><div class="${className} paper">${printContent}</div></body></html>`;
      popupWin.document.open();
      popupWin.document.write(printables);
      popupWin.document.close();
      popupWin.onafterprint = () => {
        resolve("printed");
      };
      popupWin.onbeforeunload = () => {
        resolve("printed");
      };
    } catch (err) {
      reject(err);
    }
  });
}


export function printWithQuantity(className, numberToPrint) {
  return new Promise((resolve, reject) => {
    try {
      const printContent = document.getElementsByClassName("paper")[0]
        .innerHTML;
      const head = document.getElementsByTagName("head")[0].innerHTML;
      let printContainer = "<div class=\"${className} paper\">";
      for (let i = 0; i < numberToPrint; i++) {
        printContainer += printContent;
      }
      printContainer += "</div>";
      const popupWin = window.open(
        "",
        "_blank",
        `fullscreen=yes, scrollbars=auto`
      );
      const printable = `<html><head>${head}</head><body class="books" onload="window.print();window.close();"><div class="${className} paper paper-printing">${printContainer}</div></body></html>`;
      popupWin.document.open();
      popupWin.document.write(printable);
      popupWin.document.close();
      popupWin.onafterprint = () => {
        resolve("printed");
      };
      popupWin.onbeforeunload = () => {
        resolve("printed");
      };
    } catch (err) {
      reject(err);
    }
  });
}
