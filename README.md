
# MD Editor
This is a editor and designer for the markdown file and also it converts markdown into html file.
**Example**

[
![viewsCount](https://img.shields.io/badge/-Open%20Editor-blueviolet)
](https://abdheshnayak.github.io/mdeditor/)

## Built With
* **PHP**
* **MySql**
* **HTML**
* **CSS**
* **JQuery**

## LICENSE

This project is licensed under the Apache License 2.0 - see the [LICENSE](https://github.com/abdheshnayak/mdeditor/blob/master/LICENSE) file for details

## Authors
>**Abdhesh Nayak**

[![Icon](https://img.shields.io/badge/Github-lightgrey)](https://github.com/abdheshnayak) [![Icon](https://img.shields.io/badge/LinkedIn-blue)](https://www.linkedin.com/in/abdhesh-nayak/)

## Render MD To HTML
This is hint, how you can get your HTML code from MarkDown code.
```
$.post("https://pageviewcounter.000webhostapp.com/mdtohtml/",
        {
          val: $('#input').val(),
        },
        function(data, status){
	      document.getElementById("output").innerHTML = data;
          mermaid.init();
          renderMathInElement(document.body);
          document.getElementById("htmlOutput").innerHTML = document.getElementById("output").innerHTML;
        });
```

**See also the list of [Contributors](https://github.com/abdheshnayak/mdeditor/contributors) who participated in this project.**
