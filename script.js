p1 = "<h3>Web</h3><p>Web content is the text, visual or audio content that is made available online and user encountered as part of the online usage and experience on websites. It may include text, images, sounds and audio, online videos, among other items placed within web pages.</p><p>웹 콘텐츠는 온라인으로 제공되고 사용자가 웹사이트에서 온라인 사용 및 경험의 일부로 접하게 되는 텍스트, 시각 또는 오디오 콘텐츠입니다. 여기에는 텍스트, 이미지, 사운드 및 오디오, 온라인 비디오, 웹 페이지 내에 배치된 기타 항목이 포함될 수 있습니다.</p>"
p2 = "<h3>HTML</h3><p>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.</p>";
p3 = "<h3>CSS</h3><p>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p><p>종속형 시트 또는 캐스케이딩 스타일 시트는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이고, 레이아웃과 스타일을 정의할 때의 자유도가 높다. 기본 파일명은 style.css이다.</p>"
p4 = "<h3>JavaScript</h3><p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.</p><p>자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용되며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다.</p>"

function clear_all(){
    document.getElementById("m1").style.borderBottom = "0px";
    document.getElementById("m2").style.borderBottom = "0px";
    document.getElementById("m3").style.borderBottom = "0px";
    document.getElementById("m4").style.borderBottom = "0px";
}
function menu_web(){
    document.getElementById('text').innerHTML = p1;
    clear_all();
    document.getElementById("m1").style.borderBottom = "3px solid yellow";
}
function menu_html(){
    document.getElementById('text').innerHTML = p2;
    clear_all();
    document.getElementById("m2").style.borderBottom = "3px solid yellow";
}
function menu_css(){
    document.getElementById('text').innerHTML = p3;
    clear_all();
    document.getElementById("m3").style.borderBottom = "3px solid yellow";
}
function menu_js(){
    document.getElementById('text').innerHTML = p4;
    clear_all();
    document.getElementById("m4").style.borderBottom = "3px solid yellow";
}