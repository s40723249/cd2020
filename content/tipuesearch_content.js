var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'WEEK', 'text': '', 'tags': '', 'url': 'WEEK.html'}, {'title': 'WEEK1-5', 'text': 'week2 \n 建立自己倉儲 \n 將2019fall可攜式套件載入自己隨身碟裡 \n git\xa0 clone倉儲網址 \n \xa0git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add\xa0 git commit\xa0 git push 將內容推到遠端. \n \n week3 \n 直播並分組完成 \n \n 更新python3.8.2 \n 到\xa0 https://www.python.org/downloads/release/python-382/ https://www.python.org/downloads/release/python-382/ 下載\xa0 Windows x86-64 executable installer，載完後執行 python-3.8.2-amd64.exe \n 選modify \n 取消pip，選next \n 點選 Install 來安裝 \n \n \n \n \n \n \n \n 8. 下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 \n 9. 下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0 portablegit下。 \n 10 .安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 \n 11.執行指令 ，將python3.8.2版本缺少的模組下載下來。 \n \n 參考網站 \n http://mde.tw/cd2020/content/KMOL2020.html \n http://mde.tw/cp2019/content/Mac%20Notebook.html \n \n 第三周抽點任務回報 \n \n', 'tags': '', 'url': 'WEEK1-5.html'}, {'title': 'WEEK6-9', 'text': "WEEK5 \n 第二次小組會議 \n \n WEEK6 \n 直播教學 \n 1.首先下載OBS軟體 \n 2.將YOUTUBE金鑰複製到OBS上 \n 3.開始串流 \n 4.進行直播 \n \n WEEK7 \n V-REP四輪車 \n 1.首先新增車體 輪子 馬達 \n 2.調整方位 \n 3.將左右馬達改名子 \n 4.確定車體沒問題 \n 5.將程式碼輸入 \n 6.開始控制 \n \n \n 程式 \n \n \n \n \n \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n \n \n \n function sysCall_init() \n \xa0\xa0\xa0\xa0 left_front_handle = \xa0 sim.getObjectHandle( 'left_motor' ) \n \xa0\xa0\xa0\xa0 left_back_handle = \xa0 sim.getObjectHandle( 'left_motor' ) \n \xa0\xa0\xa0\xa0 right_back_handle = \xa0 sim.getObjectHandle( 'right_motor' ) \n \xa0\xa0\xa0\xa0 right_front_handle = \xa0 sim.getObjectHandle( 'right_motor' ) \n \xa0\xa0\xa0\xa0 MaxVel = 2 \n \xa0\xa0\xa0\xa0 leftvelocity = 0 \n \xa0\xa0\xa0\xa0 rightvelocity = 0 \n \xa0\xa0\xa0\xa0 dVel = 0.5 ; \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(left_front_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(left_back_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(right_back_handle,rightvelocity) \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(right_front_handle,rightvelocity) \n end \n \xa0 \n function sysCall_actuation() \n \xa0\xa0\xa0\xa0 message,auxiliaryData = sim.getSimulatorMessage() \n \xa0\xa0\xa0\xa0 while \xa0 message~ = - 1 \xa0 do \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (message = = sim.message_keypress) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 32 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 right key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = 0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = 0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(left_front_handle, \xa0 0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(left_back_handle, \xa0 0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(right_back_handle, \xa0 0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(right_front_handle, \xa0 0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 break \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 else \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - sim.setJointForce(left_front_handle, \xa0 10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(left_back_handle, \xa0 10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setJointForce(right_back_handle, \xa0 10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - sim.setJointForce(right_front_handle, \xa0 10000 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 2007 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 up key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = (leftvelocity + rightvelocity) / 2 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = leftvelocity \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 2008 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 down key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = (leftvelocity + rightvelocity) / 2 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = leftvelocity \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 2009 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 left key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 (auxiliaryData[ 1 ] = = 2010 ) then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - - \xa0 right key \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = leftvelocity + dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = rightvelocity - dVel \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 message,auxiliaryData = sim.getSimulatorMessage() \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 if \xa0 leftvelocity>MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 if \xa0 leftvelocity< - MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 leftvelocity = - MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 if \xa0 rightvelocity>MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 if \xa0 rightvelocity< - MaxVel then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 rightvelocity = - MaxVel \n \xa0\xa0\xa0\xa0 end \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(left_front_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(left_back_handle,leftvelocity) \n \xa0\xa0\xa0\xa0 sim.setJointTargetVelocity(right_back_handle,rightvelocity) \n \xa0\xa0\xa0\xa0 - - sim.setJointTargetVelocity(right_front_handle,rightvelocity) \n \xa0\xa0\xa0\xa0 \xa0 \n end \n \n \n \n \n \n \n WEEK8 \n 第八周老師示範並抽點 \n 老師操作示範: https://s40723219.github.io/cd2020/content/week6~9.html \n \n \nWEEK9\n 第九週為段考週，每個人皆須上船影片 \n 示範影片:https://drive.google.com/open?id=1Wepc028C7mwb0AY3bxHQ7QVcDswX8nb- \n \n", 'tags': '', 'url': 'WEEK6-9.html'}, {'title': 'WEEK10-14', 'text': 'week10 \n 1.登錄自己的Gmail，到 https://console.developers.google.com/projectselector2/apis/dashboard?supportedpurview=project \n 2.建立專案，名字隨意 \n 3.去老師的 cd2020pj1 ，git clone到tmp下 \n 4.啟用Google的API服務，選Google Domain API啟用 \n 5.憑證-設定同意畫面 \n 6.在API 的服務 ，點開憑證 建立 客戶端ID類型 \n 7.把帳號密碼存到tmp底下 \n 8.開啟leo，將cd2020pj1.leo拉進去，編輯自己設定的路徑和名稱 \n 9.儲存後按darwROC ，再輸入 pip install authomatic \n 10.進入cd2020pj1，打開python wsgi.py即可 \n \n week10 \n coppeliasim:40723221 \n MSModelingAndTFApproaches.pdf. 207頁:7人 40723249 40623117 40723221 40723228 40723236 40723237 40723243 \n MechatronicDesignCases.pdf. 46頁:2人 40723222 40723244 \n topic3: \n MechaFutureAndChallenges.pdf. 38頁:2人 40623252 40523253 \n MechaEducFutureNeed.pdf . 20頁:1人 40723240 \n 開會影片: https://www.youtube.com/watch?v=jr4IxIwdHLk&feature=emb_title \n \n \n week12 \n V-rep虛擬主機 \n 1.先下載VirtualBoxrtualBox跟Ubuntu \n 2.將Ubuntu匯入 \n 3.設定網路 Host-Only -Only 啟動Ubuntu主機 \n 4.輸入密碼kmol2020登入，開啟LXTermial \n 5.輸入xterm& \n 6.用ls來顯示，在用cd進入資料夾內 \n 7.輸入./coppeliaSim.sh來開啟Vrep \n \n week13 \n IPv4 Ubuntu對外連線設定操作 \n 1. 先開啟VirtualBox並用上次的cd2020pj1，喜好設定-->網路-->新增-->連接阜轉送 \n 2.\xa0主機IP打127.0.0.1，客體IP 10.0.2.15 主機連接阜分別為19999、22、17443、18443客體連接阜分別為19999、22、7443、8443 \n 3.設定-->網路-->改成NAT網路 \n 4.啟動虛擬主機 \n 5.輸入密碼kmol2020，點選LXTerminal \n 6.輸入-->iconfig-->sudo apt net-tools -->輸入密碼kmol2020 \n \n 7.打cd tmp -->ls -->輸入ping 127.0.0.1測試 \n 8.進入cd2020pj1-->git pull-->sudo vi wsgi.py \n 9.把host的地方改成10.0.2.4 -->按ESC-->輸入wq儲存 \n 10.開啟LEO-->打開cd2020pj1.leo-->點選NAV尋找allowExt \n 11.點fileuploadfrom，第10行新增一個ttt檔，完成後存儲並關閉leo \n 12.在tmp新增oauth_scrum.txt，打sudo vi oauth_scrum.txt \n 13.按i編輯，內容先都可以，接著按Esc並輸入:wq存儲 \n 14.輸入python3 wsgi.py \n 15.帳號及密碼都為admin，點fileuploadform，選要上傳的ttt檔 \n 16.點選download list檢查檔案是否上傳完成 \n \n \n week14 \n Bridged IPv6 遠端控制設定 \n 1.設定IPV6內容 \n 2.開啟喜好設定設定IPV6的參數 \n 3.開啟虛擬主機輸入密碼 \n \n 4.cd tmp ->cd cd2020pj1 ->git pull -> ls ->cd docs -> cd cmsimde -> vi wsgi.py \n 5.把host改成自己主機IP \n 6.把PUTTY改為自己要連線的IP \n 7.打開並輸入kmol2020 \n 8.開起XLaunch \n 9.輸入xterm& \n 10.cd tmp ->cd cd2020pj1 ->git pull -> ls ->cd docs -> cd cmsimde -> vi wsgi.py 即可 \n \n \n \n \nweek14\n \n 上課抽點 \n \n 倉儲: https://github.com/mdecourse/cdbw14-2 \n 網站: http://mde.tw/cdbw14-2/content/40723249.html \n', 'tags': '', 'url': 'WEEK10-14.html'}, {'title': 'WEEK15-18', 'text': 'week16 \n IPv6 連個人倉儲 \n 1.設定IPV6網路以及虛擬主機網路 \n 2.啟動虛擬主機 \n 3.打開Lxterminal \n 4.git clone自己 倉儲 \n 5.查詢IPv6的地址 \n 6.輸入指令 sudo vi wsgi.py把ipv6地址輸入進host \n 7.輸入python3 wsgi.py啟動 \n 8.輸入網址https://[2001:288:6004:17:2020:2:0:7247]:18443 \n \n Final project: \n 期末報告影片 \n \n \n \n \n', 'tags': '', 'url': 'WEEK15-18.html'}]};