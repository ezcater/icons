// import copyToClipboard from "./helpers/copyToClipboard"
import React from 'react';

// safari doesn't support navigator.clipboard
// see: https://josephkhan.me/javascript-copy-clipboard-safari/
function copyToClipboard(textToCopy) {
  var textArea;

  function isOS() {
    //can use a better detection logic here
    return navigator.userAgent.match(/ipad|iphone/i);
  }

  function createTextArea(text) {
    textArea = document.createElement('textArea');
    textArea.readOnly = true;
    textArea.contentEditable = true;
    textArea.value = text;
    document.body.appendChild(textArea);
  }

  function selectText() {
    var range, selection;

    if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  }

  function copyTo() {
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  createTextArea(textToCopy);
  selectText();
  copyTo();
}

const IconCard = ({ Icon, name }) => {
  const ref = React.useRef();

  const [text, setText] = React.useState(name);

  const handleClick = async e => {
    const { innerHTML } = ref.current;
    if (!navigator.clipboard) {
      copyToClipboard(outerHTML);
      setText('copied!');
      setTimeout(() => {
        setText(name);
      }, 1e3);
    } else {
      try {
        await navigator.clipboard.writeText(innerHTML);
      } catch (error) {
        console.error(error);
        return;
      }
    }
    setText('copied!');
    setTimeout(() => {
      setText(name);
    }, 1e3);
  };

  return (
    <div className="pb-1/1 relative">
      <div className="absolute inset-0">
        <button
          className="flex flex-row justify-center items-center w-full h-full text-white hover:text-gray-100 bg-green-900 hover:bg-ez-green rounded-lg focus:outline-none shadow focus:shadow-outline"
          onPointerDown={e => e.preventDefault()}
          title={text}
          onClick={handleClick}
        >
          <div ref={ref}>
            <Icon className="w-8 h-8 fill-current text-white" />
          </div>
          <div className="m-3 absolute inset-x-0 bottom-0">
            <p className="text-center font-semibold text-sm leading-snug truncate">{text}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

const IconGrid = React.memo(({ icons }) => (
  <div
    style={{
      minHeight: 'calc(100vh - 6rem - 5.5rem - 1.5rem)'
    }}
  >
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 gap-3">
      {icons.map(icon => (
        <IconCard key={icon.componentName} name={icon.componentName} Icon={icon} />
      ))}
    </div>
  </div>
));

export default IconGrid;
