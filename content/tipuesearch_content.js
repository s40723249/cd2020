var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'WEEK1-5', 'text': '\n', 'tags': '', 'url': 'WEEK1-5.html'}, {'title': 'week2', 'text': '建立自己倉儲 \n 將2019fall可攜式套件載入自己隨身碟裡 \n git\xa0 clone倉儲網址 \n \xa0git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add\xa0 git commit\xa0 git push 將內容推到遠端. \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '直播並分組完成 \n \n 更新python3.8.2 \n 到\xa0 https://www.python.org/downloads/release/python-382/ https://www.python.org/downloads/release/python-382/ 下載\xa0 Windows x86-64 executable installer，載完後執行 python-3.8.2-amd64.exe \n 選modify \n 取消pip，選next \n 點選 Install 來安裝 \n \n \n \n \n \n \n \n 8. 下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 \n 9. 下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0 portablegit下。 \n 10 .安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 \n 11.執行指令 ，將python3.8.2版本缺少的模組下載下來。 \n \n 參考網站 \n http://mde.tw/cd2020/content/KMOL2020.html \n http://mde.tw/cp2019/content/Mac%20Notebook.html \n \n', 'tags': '', 'url': 'week3.html'}]};