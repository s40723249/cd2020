<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20180902120538.1"><vh>@settings</vh>
<v t="leo.20180902120538.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20180902120538.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20180902120523.1"><vh>編輯 reveal</vh>
<v t="leo.20180902120523.2"><vh>@path ./../reveal</vh>
<v t="leo.20180902120523.3"><vh>@clean index.html</vh>
<v t="leo.20180902120523.4"><vh>html</vh>
<v t="leo.20180902120523.5"><vh>head</vh></v>
<v t="leo.20180902120523.6"><vh>body</vh>
<v t="leo.20180902120523.7"><vh>reveal div</vh>
<v t="leo.20180902120523.8"><vh>slides div</vh>
<v t="leo.20180902120523.9"><vh>封面投影片</vh>
<v t="leo.20180902120523.10"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624105719.1"><vh>封面投影片</vh>
<v t="leo.20200624105719.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624105723.1"><vh>W3</vh>
<v t="leo.20200624105723.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624105721.1"><vh>W2</vh>
<v t="leo.20200624105721.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20180902120523.11"><vh>W5</vh>
<v t="leo.20180902120523.12"><vh>投影片快捷鍵</vh></v>
</v>
<v t="leo.20200624111447.1"><vh>W7</vh>
<v t="leo.20200624111447.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624111449.1"><vh>W9</vh>
<v t="leo.20200624111449.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624111456.1"><vh>W10</vh>
<v t="leo.20200624111456.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624111452.1"><vh>W12</vh>
<v t="leo.20200624111452.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624111454.1"><vh>W13</vh>
<v t="leo.20200624111454.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624111451.1"><vh>W14</vh>
<v t="leo.20200624111451.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200624111534.1"><vh>W16</vh>
<v t="leo.20200624111534.2"><vh>封面投影片內容</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20180902120523.1"></t>
<t tx="leo.20180902120523.10">## CMSimfly 40723249

### KMOLab

&lt;small&gt;
Created by [40723249](http://lab.kmol.info/)
&lt;/small&gt;

[CMSimfly 網誌](./../blog/index.html)


</t>
<t tx="leo.20180902120523.11"></t>
<t tx="leo.20180902120523.12">## Assignment2





</t>
<t tx="leo.20180902120523.2"></t>
<t tx="leo.20180902120523.3">@language xml
@tabwidth -4
@others

</t>
<t tx="leo.20180902120523.4">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="leo.20180902120523.5">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;
CMSimfly 網際內容管理
&lt;/title&gt;
    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;
    
    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
    
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
    
    &lt;link rel="stylesheet" href="css/reveal.css"&gt;
    &lt;link rel="stylesheet" href="css/theme/black.css" id="theme"&gt;
    
    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="lib/css/zenburn.css"&gt;

    &lt;!-- Printing and PDF exports --&gt;
    &lt;script&gt;
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    &lt;/script&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="lib/js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;

</t>
<t tx="leo.20180902120523.6">&lt;body&gt;
@others
&lt;script src="lib/js/head.min.js"&gt;&lt;/script&gt;
&lt;script src="js/reveal.js"&gt;&lt;/script&gt;
&lt;script&gt;
        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'plugin/zoom-js/zoom.js', async: true },
                { src: 'plugin/notes/notes.js', async: true },
                { src: 'plugin/math/math.js', async: true }
            ]
        });
&lt;/script&gt;
&lt;/body&gt;

</t>
<t tx="leo.20180902120523.7">&lt;div class="reveal"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.8">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.9">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120538.1"></t>
<t tx="leo.20180902120538.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20180902120538.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20200624105719.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624105719.2">## CD2020 課程簡介 W2-7

** W2-先建立github倉儲，在clone到自己的隨身系統及分組
** W3-更新Python為3.8.2版本並直播分配工作
** W5-第二次直播 並完成任務1
** W6-學習直播串流
** W7-V-rep四輪車並用程式控制
</t>
<t tx="leo.20200624105721.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624105721.2">## CD2020 課程簡介 W9-16

** W9-段考周，並用OBS錄影直播串流拍攝期中影片，並完成任務2
** W10-啟用Google API
** W12-V-rep虛擬主機
** W13-IPv4 Ubuntu對外連線設定操作
** W14-Bridged IPv6 遠端控制設定
** W16-IPv6 IPv6 連個人倉儲</t>
<t tx="leo.20200624105723.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624105723.2">## Assignment1





</t>
<t tx="leo.20200624111447.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624111447.2">## Final project





</t>
<t tx="leo.20200624111449.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624111449.2">## CMSimfly 40723249

### KMOLab

&lt;small&gt;
Created by [40723249](http://lab.kmol.info/)
&lt;/small&gt;

[CMSimfly 網誌](./../blog/index.html)


</t>
<t tx="leo.20200624111451.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624111451.2">## CMSimfly 40723249

### KMOLab

&lt;small&gt;
Created by [40723249](http://lab.kmol.info/)
&lt;/small&gt;

[CMSimfly 網誌](./../blog/index.html)


</t>
<t tx="leo.20200624111452.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624111452.2">## CMSimfly 40723249

### KMOLab

&lt;small&gt;
Created by [40723249](http://lab.kmol.info/)
&lt;/small&gt;

[CMSimfly 網誌](./../blog/index.html)


</t>
<t tx="leo.20200624111454.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624111454.2">## CMSimfly 40723249

### KMOLab

&lt;small&gt;
Created by [40723249](http://lab.kmol.info/)
&lt;/small&gt;

[CMSimfly 網誌](./../blog/index.html)


</t>
<t tx="leo.20200624111456.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624111456.2">## CMSimfly 40723249

### KMOLab

&lt;small&gt;
Created by [40723249](http://lab.kmol.info/)
&lt;/small&gt;

[CMSimfly 網誌](./../blog/index.html)


</t>
<t tx="leo.20200624111534.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200624111534.2">## CMSimfly 40723249

### KMOLab

&lt;small&gt;
Created by [40723249](http://lab.kmol.info/)
&lt;/small&gt;

[CMSimfly 網誌](./../blog/index.html)


</t>
</tnodes>
</leo_file>
