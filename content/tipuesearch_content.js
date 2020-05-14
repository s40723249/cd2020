var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'WEEK', 'text': '', 'tags': '', 'url': 'WEEK.html'}, {'title': 'WEEK1-5', 'text': '', 'tags': '', 'url': 'WEEK1-5.html'}, {'title': 'week2', 'text': '建立自己倉儲 \n 將2019fall可攜式套件載入自己隨身碟裡 \n git\xa0 clone倉儲網址 \n \xa0git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add\xa0 git commit\xa0 git push 將內容推到遠端. \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '直播並分組完成 \n \n 更新python3.8.2 \n 到\xa0 https://www.python.org/downloads/release/python-382/ https://www.python.org/downloads/release/python-382/ 下載\xa0 Windows x86-64 executable installer，載完後執行 python-3.8.2-amd64.exe \n 選modify \n 取消pip，選next \n 點選 Install 來安裝 \n \n \n \n \n \n \n \n 8. 下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 \n 9. 下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0 portablegit下。 \n 10 .安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 \n 11.執行指令 ，將python3.8.2版本缺少的模組下載下來。 \n \n 參考網站 \n http://mde.tw/cd2020/content/KMOL2020.html \n http://mde.tw/cp2019/content/Mac%20Notebook.html \n \n 第三周抽點任務回報 \n \n', 'tags': '', 'url': 'week3.html'}, {'title': 'WEEK6-10', 'text': '', 'tags': '', 'url': 'WEEK6-10.html'}, {'title': 'WEEK6', 'text': '第二次小組會議 \n \n WEEK6 \n 直播教學 \n 1.首先下載OBS軟體 \n 2.將YOUTUBE金鑰複製到OBS上 \n 3.開始串流 \n 4.進行直播 \n \n', 'tags': '', 'url': 'WEEK6.html'}, {'title': 'WEEK7', 'text': "V-REP四輪車 \n 1.首先新增車體 輪子 馬達 \n 2.調整方位 \n 3.將左右馬達改名子 \n 4.確定車體沒問題 \n 5.將程式碼輸入 \n 6.開始控制 \n \n \n 程式 \n \n \n \n \n \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n \n \n \n function sysCall_init() \n \xa0\xa0\xa0\xa0 left_front_handle = \xa0 sim.getObjectHandle( 'left_motor' ) \n \xa0\xa0\xa0\xa0 left_back_handle = \xa0 sim.getObjectHandle( 'left_motor' ) \n \xa0\xa0\xa0\xa0 right_back_handle = \xa0 sim.getObjectHandle( 'right_motor' ) \n \xa0\xa0\xa0\xa0 right_front_handle = \xa0 sim.getObjectHandle( 'right_motor' ) \n \xa0\xa0\xa0\xa0 MaxVel = 2 \n \xa0\xa0\xa0\xa0 leftvelocity = 0 \n \xa0\xa0\xa0\xa0 rightvelocity = 0 \n \xa0\xa0\xa0\xa0 dVel = 0.5 ; \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(left_front_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(left_back_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(right_back_handle,rightvelocity) \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(right_front_handle,rightvelocity) \n end \n \xa0 \n function sysCall_actuation() \n \xa0\xa0\xa0\xa0 message,auxiliaryData = sim.getSimulatorMessage() \n \xa0\xa0\xa0\xa0 while \xa0 message~ = - 1 \xa0 do \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (message = = sim.message_keypress) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 32 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 right key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = 0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = 0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(left_front_handle, \xa0 0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(left_back_handle, \xa0 0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(right_back_handle, \xa0 0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(right_front_handle, \xa0 0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 break \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 else \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - sim.setJointForce(left_front_handle, \xa0 10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(left_back_handle, \xa0 10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(right_back_handle, \xa0 10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - sim.setJointForce(right_front_handle, \xa0 10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 2007 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 up key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = (leftvelocity + rightvelocity) / 2 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = leftvelocity \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 2008 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 down key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = (leftvelocity + rightvelocity) / 2 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = leftvelocity \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 2009 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 left key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 2010 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 right key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 message,auxiliaryData = sim.getSimulatorMessage() \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 if \xa0 leftvelocity>MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 if \xa0 leftvelocity< - MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = - MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 if \xa0 rightvelocity>MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 if \xa0 rightvelocity< - MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = - MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(left_front_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(left_back_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(right_back_handle,rightvelocity) \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(right_front_handle,rightvelocity) \n \xa0\xa0\xa0\xa0 \xa0 \n end \n \n \n \n \n \n \n \n WEEK8\n 第八周老師示範並抽點 \n 老師操作示範: https://s40723219.github.io/cd2020/content/week6~9.html \n \n \n", 'tags': '', 'url': 'WEEK7.html'}, {'title': 'WEEK9', 'text': '第九週為段考週，每個人皆須上船影片 \n 示範影片:https://drive.google.com/open?id=1Wepc028C7mwb0AY3bxHQ7QVcDswX8nb- \n', 'tags': '', 'url': 'WEEK9.html'}]};