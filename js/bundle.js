function clearinput() {
  editor.session.setValue("");
  updateOutput();
}

function copyToClipboard(element) {
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $(".htmlOutputContainer").fadeOut("swing");
}

function convertinput() {
  $("body").removeClass("loaded");
  $(".htmlOutputContainer").fadeIn("swing");
  val = editor.session.getValue();
  document.getElementById("output").innerHTML = marked(val);
  mermaid.init();
  renderMathInElement(document.body);
  prefix =
    '<!DOCTYPE html>\n<html lang="en" dir="ltr">\n<head>\n<title>MD Editor | Abdhesh Nayak</title>' +
    '   <link rel="stylesheet"' +
    '          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/default.min.css">' +
    '    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/highlight.min.js"><' +
    "/script>" +
    '\n<meta name=viewport content="width=device-width" scale=1.0>\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta http-equiv=content-type content="text/html; charset=utf-8">\n<link rel="stylesheet" href="https://cdn.progman.in/css/readme.css" />\n</head>\n<body class="stackedit">\n<div class="stackedit__html">\n';
  postfix =
    "\n</div>\n" +
    "<script>hljs.initHighlightingOnLoad();</" +
    "script>" +
    "</body>\n</html>";

  document.getElementById("htmlOutput").innerHTML =
    prefix + document.getElementById("output").innerHTML + postfix;
  $("body").addClass("loaded");
}
function updateOutput() {
  val = editor.session.getValue();
  document.getElementById("output").innerHTML = marked(val);

  mermaid.init();
  renderMathInElement(document.body);

  // hljs.initHighlighting()
}

function showOutput(str) {
  if ($("#livecb").prop("checked") == true) {
    if (str.length == 0) {
      document.getElementById("output").innerHTML = "";
      return;
    } else {
      updateOutput();
    }
  }
}

function LoadDiagrams() {
  $("body").removeClass("loaded");
  $.post(
    "https://raw.githubusercontent.com/abdheshnayak/mdeditor/master/src/examples/diagrams.txt",
    function (data) {
      // $("textarea#input").val(data);
      editor.session.setValue(data);
      updateOutput();
      $("body").addClass("loaded");
    }
  );
}
function Loadmain() {
  $("body").removeClass("loaded");
  $.post(
    "https://raw.githubusercontent.com/abdheshnayak/mdeditor/master/src/examples/main.txt",
    function (data) {
      editor.session.setValue(data);
      // $("textarea#input").val(data);
      updateOutput();
      $("body").addClass("loaded");
    }
  );
}

function runupdateOutput() {
  $("body").removeClass("loaded");
  updateOutput();
  $("body").addClass("loaded");
}
