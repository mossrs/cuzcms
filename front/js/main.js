var stringToHTML = function (str) {
    var dom = document.createElement('tr');
    dom.innerHTML = str;
    return dom;
}
var stringToHTMLDIV = function (str) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;
}
///////////////////////
//  变量定义区域
//////////////////////
var messageWindowIN = document.getElementsByClassName('messageWindowIN')[0]
messageWindowIN.style.height = window.innerHeight - 90 + 'px'
var messageWindow = document.getElementsByClassName('messageWindow')[0]
var userId = decodeURI(location.search).replace('?', '').split('&')[0].split('=')[1]
var userPermission = decodeURI(location.search).replace('?', '').split('&')[1].split('=')[1]
var messageBtnBit = document.getElementsByClassName('messageBtnBit')[0]
var userName = ''
if (userPermission == 'student') {
    axios({
        method: 'GET',
        url: 'http://1.117.80.52:8022/cuzcms/student/getStudentInfo/' + userId
    })
        .then(res => {
            // console.log(res.data)
            userName = res.data.data.name
        })
    setInterval(function () {
        axios({
            method: 'GET',
            url: 'http://1.117.80.52:8022/cuzcms/message/getMessage',
            params: {
                name: userName
            }
        })
            .then(res => {
                // console.log('////////////////消息盒子')
                // console.log(res.data.data)
                for (var i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].state == false && res.data.data[i].sendName == '教务办') {
                        messageBtnBit.style.display = 'block'
                        break
                    }
                    if (i == res.data.data.length - 1) {
                        messageBtnBit.style.display = 'none'
                    }
                }
            })
    }, 1500)
}
if (userPermission == 'head-teacher') {
    setInterval(function () {
        axios({
            method: 'GET',
            url: 'http://1.117.80.52:8022/cuzcms/message/getMessage',
            params: {
                name: '教务办'
            }
        })
            .then(res => {
                // console.log('////////////////消息盒子')
                // console.log(res.data.data)
                for (var i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].state == false && res.data.data[i].sendName != '教务办') {
                        messageBtnBit.style.display = 'block'
                        break
                    }
                    if (i == res.data.data.length - 1) {
                        messageBtnBit.style.display = 'none'
                    }
                }
            })
    }, 1500)
}
var headerCircleS = document.getElementsByClassName('headerCircle')
var body = document.getElementsByTagName('body')[0]
var firstCircle = document.getElementsByClassName('firstCircle')[0]
var secondCircle = document.getElementsByClassName('secondCircle')[0]
var thirdCircle = document.getElementsByClassName('thirdCircle')[0]
var welcomeSlogen = document.getElementsByClassName('welcomeSlogen')[0]
var firstChoise = document.getElementsByClassName('firstChoise')[0]
var secondChoise = document.getElementsByClassName('secondChoise')[0]
var thirdChoise = document.getElementsByClassName('thirdChoise')[0]
var choiseKind = document.getElementsByClassName('choiseKind')
var iconCircle = document.getElementsByClassName('iconCircle')
var bottomYellow = document.getElementsByClassName('bottomYellow')[0]
var bottomBlue = document.getElementsByClassName('bottomBlue')[0]
var bottomRed = document.getElementsByClassName('bottomRed')[0]
var bottomBlueLink = document.getElementsByClassName('bottomBlueLink')
var bottomYellowLink = document.getElementsByClassName('bottomYellowLink')
var bottomRedLink = document.getElementsByClassName('bottomRedLink')
var messageBtn = document.getElementsByClassName('messageBtn')[0]
var shawdleBlue = document.getElementsByClassName('shawdleBlue')[0]
var shawdleYellow = document.getElementsByClassName('shawdleYellow')[0]
var shawdleRed = document.getElementsByClassName('shawdleRed')[0]
var afterShawdleTitle_Text = document.getElementsByClassName('afterShawdleTitle_Text')
var shawdleDIVmessageShow01 = document.getElementById('shawdleDIVmessageShow01')
var shawdleDIVmessageShow02 = document.getElementById('shawdleDIVmessageShow02')
var studentName = document.getElementById('studentName')
var studentSex = document.getElementById('studentSex')
var studentAge = document.getElementById('studentAge')
var studentCollege = document.getElementById('studentCollege')
var studentSpecialty = document.getElementById('studentSpecialty')
var studentClassName = document.getElementById('studentClassName')
var shawdleDIVALLpointShow = document.getElementById('shawdleDIVALLpointShow')
var shawdleDIVmessageShowBtn = document.getElementsByClassName('shawdleDIVmessageShowBtn')
var shawdleDIVmessageShowText = document.getElementsByClassName('shawdleDIVmessageShowText')[0]
var allStudentChangeWindow = document
    .getElementsByClassName('allStudentChangeWindow')[0]
var studentView = document.getElementsByClassName('studentView')[0]
var allStudentMessageBlank = document.getElementById('allStudentMessageBlank')
var allStudentMessageLine = document.getElementById('allStudentMessageLine')
var allStudentMessageBtn = document.getElementsByClassName('allStudentMessageBtn')
var allStudentMessageChangeWindow = document.getElementsByClassName('allStudentMessageChangeWindow')[0]
var allStudentMessageShowText = document.getElementsByClassName('allStudentMessageShowText')[0]
var allStudentMessageShowTextMax = document.getElementsByClassName('allStudentMessageShowTextMax')[0]

var allStudentRoomBlank = document.getElementById('allStudentRoomBlank')
var allStudentRoomLine = document.getElementById('allStudentRoomLine')
var allStudentRoomText = document.getElementById('allStudentRoomText')
var allStudenRoomBtn = document.getElementsByClassName('allStudenRoomBtn')
var allStudentRoomShowText = document.getElementsByClassName('allStudentRoomShowText')[0]
var allStudentRoomShowTextMax = document.getElementsByClassName('allStudentRoomShowTextMax')[0]
var allRoomChangeWindow = document.getElementsByClassName('allRoomChangeWindow')[0]

var studentRoomSelf = document.getElementsByClassName('studentRoomSelf')

var allStudentClassTextAndMax = document.getElementsByClassName('allStudentClassTextAndMax')[0]
var allStudentClassShowText = document.getElementsByClassName('allStudentClassShowText')[0]
var allStudentClassText = document.getElementById('allStudentClassText')
var allStudentClassBtn = document.getElementsByClassName('allStudentClassBtn')
var allStudentClassLine = document.getElementById('allStudentClassLine')
var allStudentClassBlank = document.getElementById('allStudentClassBlank')

var allStudentClassChangeWindow = document.getElementsByClassName('allStudentClassChangeWindow')[0]

var studentSelfClassBlank = document.getElementById('studentSelfClassBlank')
var studentSelfClassBlankText = document.getElementsByClassName('studentSelfClassBlankText')
var studentSelfClassBlankChangeWindow = document.getElementsByClassName('studentSelfClassBlankChangeWindow')[0]

var whichOnclick = -1
var messageOrNot = 0
var shawdleOrNot = 0
var allStudentMessagePage = 0 //学生信息 记录当前页数
var allStudentMessagePageeMax = 1
var allStudentPage = 0 //记录当前页数 学生成绩
var allStudentPageMax = 1 //最大页数
var allRoomPage = 0
var allRoomPageMax = 1
var RoomdormitoryNum = -1 //记录寝室号码
var RoomroomNum = -1
var allStudentClassPage = 0//学生考勤
var allStudentClassPageMax = -1
var imgstring = ''//学生考勤是否正常的图片地址

/////////////////////////
//  消息框弹出
//////////////////////////
var clickTimes = 0
if (userPermission == 'student') {
    messageBtn.onclick = function () {
        if (messageOrNot == 0) {
            messageBtn.style.transform = 'rotate(90deg)'
            messageOrNot = 1
            messageWindow.style.right = '0px'
            axios({
                method: 'GET',
                url: 'http://1.117.80.52:8022/cuzcms/message/getMessage',
                params: {
                    name: userName
                }
            })
                .then(res => {
                    clickTimes = 0
                    messageWindowIN.innerHTML = ''
                    for (var i = 0; i < res.data.data.length; i++) {
                        if (res.data.data[i].state == false && res.data.data[i].sendName == '教务办') {
                            var windowBlock = document.createElement('div')
                            windowBlock.innerHTML = '<div style="height: 130px; width: 200px; border: #dadada solid 1px; border-radius: 8px; margin: 12px 22px;"><h3 style="color: #ffffff; font-size: 14px; margin-left: 15px; margin-top: 13px; display: inline-block;">' + res.data.data[i].title + '</h3><span style="float: right; margin-right: 12px; margin-top: 8px; font-size: 18px; font-weight: 600; color: #dadada; cursor: pointer; user-select: none;" class="closeWindow">×</span><p style="color: #ffffff; font-size: 12px; font-weight: 300; width: 170px; display: inline-block; height: 48px; margin: 10px 15px 0; overflow: hidden; text-overflow: ellipsis; border-bottom: #ffffff solid 2px; padding-bottom: 10px;">' + res.data.data[i].content + '</p><p style="color: #ffffff; font-weight: 300; float: left; margin-left: 15px; font-size: 8px;">' + res.data.data[i].sendName + '</p><p style="color: #ffffff; font-weight: 300; float: right; margin-right: 15px; font-size: 8px;">' + res.data.data[i].createTime + '</p><p style="display: none;" class="zzz">' + res.data.data[i].id + '</p></div>'
                            messageWindowIN.appendChild(windowBlock)

                            document.getElementsByClassName('closeWindow')[clickTimes++].onclick = function () {
                                axios({
                                    method: 'PUT',
                                    url: 'http://1.117.80.52:8022/cuzcms/message/updateMessage/' + this.parentElement.getElementsByClassName('zzz')[0].innerText
                                })
                                    .then(res => {
                                        // console.log(res.data)
                                        this.parentElement.style.display = 'none'
                                    })
                            }
                        }
                    }
                    if (clickTimes == 0) {
                        messageWindowIN.innerHTML = '<h2 style="text-align: center; margin-top: 50px; color: #ffffff; font-weight: 400; font-size: 20px;">暂无消息</h2>'
                    }
                })
        }
        else {
            messageBtn.style.transform = 'rotate(0deg)'
            messageOrNot = 0
            messageWindow.style.right = '-250px'
        }
    }
}
if (userPermission == 'head-teacher') {
    messageBtn.onclick = function () {
        if (messageOrNot == 0) {
            messageBtn.style.transform = 'rotate(90deg)'
            messageOrNot = 1
            messageWindow.style.right = '0px'
            axios({
                method: 'GET',
                url: 'http://1.117.80.52:8022/cuzcms/message/getMessage',
                params: {
                    name: '教务办'
                }
            })
                .then(res => {
                    clickTimes = 0
                    messageWindowIN.innerHTML = ''
                    for (var i = 0; i < res.data.data.length; i++) {
                        if (res.data.data[i].state == false && res.data.data[i].sendName != '教务办') {
                            var windowBlock = document.createElement('div')
                            windowBlock.innerHTML = '<div style="height: 130px; width: 200px; border: #dadada solid 1px; border-radius: 8px; margin: 12px 22px;"><h3 style="color: #ffffff; font-size: 14px; margin-left: 15px; margin-top: 13px; display: inline-block;">' + res.data.data[i].title + '</h3><span style="float: right; margin-right: 12px; margin-top: 8px; font-size: 18px; font-weight: 600; color: #dadada; cursor: pointer; user-select: none;" class="closeWindow">×</span><p style="color: #ffffff; font-size: 12px; font-weight: 300; width: 170px; display: inline-block; height: 48px; margin: 10px 15px 0; overflow: hidden; text-overflow: ellipsis; border-bottom: #ffffff solid 2px; padding-bottom: 10px;">' + res.data.data[i].content + '</p><p style="color: #ffffff; font-weight: 300; float: left; margin-left: 15px; font-size: 8px;">' + res.data.data[i].sendName + '</p><p style="color: #ffffff; font-weight: 300; float: right; margin-right: 15px; font-size: 8px;">' + res.data.data[i].createTime + '</p><p style="display: none;" class="zzz">' + res.data.data[i].id + '</p></div>'
                            messageWindowIN.appendChild(windowBlock)

                            document.getElementsByClassName('closeWindow')[clickTimes++].onclick = function () {
                                axios({
                                    method: 'PUT',
                                    url: 'http://1.117.80.52:8022/cuzcms/message/updateMessage/' + this.parentElement.getElementsByClassName('zzz')[0].innerText
                                })
                                    .then(res => {
                                        // console.log(res.data)
                                        this.parentElement.style.display = 'none'
                                    })
                            }
                        }
                    }
                    if (clickTimes == 0) {
                        messageWindowIN.innerHTML = '<h2 style="text-align: center; margin-top: 50px; color: #ffffff; font-weight: 400; font-size: 20px;">暂无消息</h2>'
                    }
                })
        }
        else {
            messageBtn.style.transform = 'rotate(0deg)'
            messageOrNot = 0
            messageWindow.style.right = '-250px'
        }
    }
}
///////////////////////
//  碟片上下滑
////////////////////////
headerCircleS[0].onmouseover = function () {
    if (whichOnclick == -1) {
        body.style.backgroundColor = '#fbf7f0'
        this.style.top = '-40px'
        welcomeSlogen.style.color = '#00000033'
        firstChoise.style.marginTop = '60px'
        firstChoise.style.opacity = '1'
        for (var i = 0; i < 4; i++) {
            iconCircle[i].style.transform = 'rotate(765deg)'
        }
        bottomYellow.style.marginBottom = '-900px'
    }
}
headerCircleS[0].onmouseout = function () {
    if (whichOnclick == -1) {
        body.style.backgroundColor = '#fbfbfb'
        this.style.top = '-60px'
        welcomeSlogen.style.color = '#252625'
        firstChoise.style.marginTop = '70px'
        firstChoise.style.opacity = '0'
        for (var i = 0; i < 4; i++) {
            iconCircle[i].style.transform = 'rotate(-45deg)'
        }
        bottomYellow.style.marginBottom = '-990px'
    }
}
headerCircleS[1].onmouseover = function () {
    if (whichOnclick == -1) {
        body.style.backgroundColor = '#ebf9fe'
        this.style.top = '-40px'
        welcomeSlogen.style.color = '#00000033'
        secondChoise.style.marginTop = '60px'
        secondChoise.style.opacity = '1'
        for (var i = 0; i < 4; i++) {
            iconCircle[i].style.transform = 'rotate(855deg)'
        }
        bottomBlue.style.marginBottom = '-900px'
    }
}
headerCircleS[1].onmouseout = function () {
    if (whichOnclick == -1) {
        body.style.backgroundColor = '#fbfbfb'
        this.style.top = '-60px'
        welcomeSlogen.style.color = '#252625'
        secondChoise.style.marginTop = '70px'
        secondChoise.style.opacity = '0'
        for (var i = 0; i < 4; i++) {
            iconCircle[i].style.transform = 'rotate(-45deg)'
        }
        bottomBlue.style.marginBottom = '-990px'
    }
}
headerCircleS[2].onmouseover = function () {
    if (whichOnclick == -1) {
        body.style.backgroundColor = '#fff1f7'
        this.style.top = '-40px'
        welcomeSlogen.style.color = '#00000033'
        thirdChoise.style.marginTop = '60px'
        thirdChoise.style.opacity = '1'
        for (var i = 0; i < 4; i++) {
            iconCircle[i].style.transform = 'rotate(945deg)'
        }
        bottomRed.style.marginBottom = '-900px'
    }
}
headerCircleS[2].onmouseout = function () {
    if (whichOnclick == -1) {
        body.style.backgroundColor = '#fbfbfb'
        this.style.top = '-60px'
        welcomeSlogen.style.color = '#252625'
        thirdChoise.style.marginTop = '70px'
        thirdChoise.style.opacity = '0'
        for (var i = 0; i < 4; i++) {
            iconCircle[i].style.transform = 'rotate(-45deg)'
        }
        bottomRed.style.marginBottom = '-990px'
    }
}
////////////////////////////
////  碟片点击
////////////////////////////
for (var i = 0; i < 3; i++) {
    headerCircleS[i].onmousedown = function () {
        if (whichOnclick == -1) {
            this.style.transition = '0.2s linear'
            this.style.width = '108px'
            this.style.height = '108px'
            this.style.border = '#070f04 solid 59px'
            this.style.marginLeft = '-113.5px'
        }
    }
    headerCircleS[i].onmouseup = function () {
        this.style.transition = '0.5s ease'
        this.style.width = '110px'
        this.style.height = '110px'
        this.style.border = '#070f04 solid 60px'
        this.style.marginLeft = '-115px'
    }
}
headerCircleS[0].onclick = function () {
    if (shawdleOrNot == 0) {
        if (whichOnclick == -1) {
            body.style.backgroundColor = '#fbf7f0'
            this.style.top = '-25px'
            whichOnclick = 0
            headerCircleS[1].style.pointerEvents = 'none'
            headerCircleS[1].style.cursor = 'not-allowed'
            headerCircleS[2].style.pointerEvents = 'none'
            headerCircleS[2].style.cursor = 'not-allowed'
            welcomeSlogen.style.color = '#00000033'
            firstChoise.style.marginTop = '60px'
            firstChoise.style.opacity = '1'
            choiseKind[0].style.backgroundColor = '#112a30'
            choiseKind[0].style.color = '#fbfbfb'
            bottomYellow.style.marginBottom = '-734px'
            for (var i = 0; i < 4; i++) {
                bottomYellowLink[i].style.opacity = '1'
                bottomYellowLink[i].onmouseover = function () {
                    this.style.transition = '0.1s'
                    this.style.color = '#361911'
                    this.style.borderLeft = '#361911 solid 5px'
                }
                bottomYellowLink[i].onmouseout = function () {
                    this.style.transition = '0.1s'
                    this.style.color = '#fbfbfb'
                    this.style.borderLeft = '#fbfbfb solid 5px'
                }
            }
        }
        else if (whichOnclick == 0) {
            body.style.backgroundColor = '#fbfbfb'
            this.style.top = '-60px'
            whichOnclick = -1
            headerCircleS[1].style.pointerEvents = 'auto'
            headerCircleS[2].style.pointerEvents = 'auto'
            headerCircleS[1].style.cursor = 'pointer'
            headerCircleS[2].style.cursor = 'pointer'
            welcomeSlogen.style.color = '#252625'
            firstChoise.style.marginTop = '70px'
            firstChoise.style.opacity = '0'
            choiseKind[0].style.backgroundColor = ''
            choiseKind[0].style.color = '#7a3826'
            bottomYellow.style.marginBottom = '-990px'
            for (var i = 0; i < 4; i++) {
                bottomYellowLink[i].style.transition = '0.3s linear 0.' + (i + 2) + 's'
                bottomYellowLink[i].style.opacity = '0'
            }
        }
    }
    else {
        allStudentChangeWindow.style.display = 'none'
        document.getElementById('allStudentTextAndMax').style.opacity = 0
        document.getElementById('allStudentClassText').style.opacity = 0
        shawdleDIVmessageShowBtn[0].style.opacity = 0
        shawdleDIVmessageShowBtn[1].style.opacity = 0
        allStudentClassBtn[0].style.opacity = 0
        allStudentClassBtn[1].style.opacity = 0
        shawdleDIVALLpointShow.style.opacity = 0
        shawdleDIVALLpointShow.style.top = '270px'
        allStudentClassBlank.style.opacity = 0
        allStudentClassBlank.style.top = '270px'
        setTimeout(function () {
            shawdleDIVALLpointShow.style.display = 'none'
            allStudentClassBlank.style.display = 'none'
            document.getElementById('allStudentTextAndMax').style.display = 'none'
            document.getElementById('allStudentClassText').style.display = 'none'
            shawdleDIVmessageShowBtn[0].style.display = 'none'
            shawdleDIVmessageShowBtn[1].style.display = 'none'
            allStudentClassBtn[0].style.display = 'none'
            allStudentClassBtn[1].style.display = 'none'
        }, 300)

        studentView.getElementsByTagName('div')[0].style.opacity = 0
        studentView.getElementsByTagName('div')[1].style.opacity = 0
        studentView.getElementsByTagName('div')[2].style.opacity = 0
        studentView.getElementsByTagName('div')[3].style.opacity = 0
        studentView.getElementsByTagName('div')[4].style.opacity = 0
        // studentView.style.display = ''
        setTimeout(function () {
            studentView.getElementsByTagName('div')[0].style.display = 'none'
            studentView.getElementsByTagName('div')[1].style.display = 'none'
            studentView.getElementsByTagName('div')[2].style.display = 'none'
            studentView.getElementsByTagName('div')[3].style.display = 'none'
            studentView.getElementsByTagName('div')[4].style.display = 'none'
        }, 300)
        studentSelfClassBlank.style.opacity = 0
        setTimeout(function () {
            studentSelfClassBlank.style.display = 'none'
        }, 200)
        studentSelfClassBlankChangeWindow.style.opacity = 0
        studentSelfClassBlankChangeWindow.style.top = '52%'
        setTimeout(function () {
            studentSelfClassBlankChangeWindow.style.display = 'none'
        }, 200)
        shawdleYellow.style.transform = 'rotate(0deg)'
        shawdleYellow.style.opacity = '0'
        shawdleOrNot = 0
        afterShawdleTitle_Text[0].style.opacity = '0'
        afterShawdleTitle_Text[0].style.top = '220px'
    }
}
headerCircleS[1].onclick = function () {
    if (shawdleOrNot == 0) {
        if (whichOnclick == -1) {
            body.style.backgroundColor = '#ebf9fe'
            this.style.top = '-25px'
            whichOnclick = 1
            headerCircleS[0].style.cursor = 'not-allowed'
            headerCircleS[0].style.pointerEvents = 'none'
            headerCircleS[2].style.cursor = 'not-allowed'
            headerCircleS[2].style.pointerEvents = 'none'
            welcomeSlogen.style.color = '#00000033'
            secondChoise.style.marginTop = '60px'
            secondChoise.style.opacity = '1'
            choiseKind[1].style.backgroundColor = '#112a30'
            choiseKind[1].style.color = '#fbfbfb'
            bottomBlue.style.marginBottom = '-734px'
            for (var i = 0; i < 4; i++) {
                bottomBlueLink[i].style.opacity = '1'
                bottomBlueLink[i].onmouseover = function () {
                    this.style.transition = '0.1s'
                    this.style.color = '#2e3f42'
                    this.style.borderLeft = '#2e3f42 solid 5px'
                }
                bottomBlueLink[i].onmouseout = function () {
                    this.style.transition = '0.1s'
                    this.style.color = '#fbfbfb'
                    this.style.borderLeft = '#fbfbfb solid 5px'
                }
            }
        }
        else if (whichOnclick == 1) {
            body.style.backgroundColor = '#fbfbfb'
            this.style.top = '-60px'
            whichOnclick = -1
            headerCircleS[0].style.cursor = 'pointer'
            headerCircleS[2].style.cursor = 'pointer'
            headerCircleS[0].style.pointerEvents = 'auto'
            headerCircleS[2].style.pointerEvents = 'auto'
            welcomeSlogen.style.color = '#252625'
            secondChoise.style.marginTop = '70px'
            secondChoise.style.opacity = '0'
            choiseKind[1].style.backgroundColor = ''
            choiseKind[1].style.color = '#7098a0'
            bottomBlue.style.marginBottom = '-990px'
            bottomBlue.style.marginBottom = '-990px'
            for (var i = 0; i < 4; i++) {
                bottomBlueLink[i].style.transition = '0.3s linear 0.' + (i + 2) + 's'
                bottomBlueLink[i].style.opacity = '0'
            }
        }
    }
    else {
        allStudentMessageChangeWindow.style.display = 'none'
        document.getElementById('allStudentMessageText').style.opacity = 0
        allStudentMessageBtn[0].style.opacity = 0
        allStudentMessageBtn[1].style.opacity = 0
        allStudentMessageBlank.style.opacity = 0
        allStudentMessageBlank.style.top = '270px'
        setTimeout(function () {
            allStudentMessageBlank.style.display = 'none'
            document.getElementById('allStudentMessageText').style.display = 'none'
            allStudentMessageBtn[0].style.display = 'none'
            allStudentMessageBtn[1].style.display = 'none'
        }, 300)

        shawdleDIVmessageShow02.style.opacity = 0
        shawdleDIVmessageShow01.style.opacity = 0
        shawdleDIVmessageShow01.style.left = '47%'
        shawdleDIVmessageShow02.style.left = '47%'
        setTimeout(function () {
            shawdleDIVmessageShow01.style.display = 'none'
            shawdleDIVmessageShow02.style.display = 'none'
        }, 300)
        shawdleBlue.style.transform = 'rotate(0deg)'
        shawdleBlue.style.opacity = '0'
        shawdleOrNot = 0
        afterShawdleTitle_Text[1].style.opacity = '0'
        afterShawdleTitle_Text[1].style.top = '220px'
    }
}
headerCircleS[2].onclick = function () {
    if (shawdleOrNot == 0) {
        if (whichOnclick == -1) {
            body.style.backgroundColor = '#fff1f7'
            this.style.top = '-25px'
            whichOnclick = 2
            headerCircleS[0].style.cursor = 'not-allowed'
            headerCircleS[1].style.cursor = 'not-allowed'
            headerCircleS[0].style.pointerEvents = 'none'
            headerCircleS[1].style.pointerEvents = 'none'
            welcomeSlogen.style.color = '#00000033'
            thirdChoise.style.marginTop = '60px'
            thirdChoise.style.opacity = '1'
            choiseKind[2].style.backgroundColor = '#112a30'
            choiseKind[2].style.color = '#fbfbfb'
            bottomRed.style.marginBottom = '-734px'
            for (var i = 0; i < 4; i++) {
                bottomRedLink[i].style.opacity = '1'
                bottomRedLink[i].onmouseover = function () {
                    this.style.transition = '0.1s'
                    this.style.color = '#4d1f36'
                    this.style.borderLeft = '#4d1f36 solid 5px'
                }
                bottomRedLink[i].onmouseout = function () {
                    this.style.transition = '0.1s'
                    this.style.color = '#fbfbfb'
                    this.style.borderLeft = '#fbfbfb solid 5px'
                }
            }
        }
        else if (whichOnclick == 2) {
            body.style.backgroundColor = '#fbfbfb'
            this.style.top = '-60px'
            whichOnclick = -1
            headerCircleS[0].style.cursor = 'pointer'
            headerCircleS[1].style.cursor = 'pointer'
            headerCircleS[0].style.pointerEvents = 'auto'
            headerCircleS[1].style.pointerEvents = 'auto'
            welcomeSlogen.style.color = '#252625'
            thirdChoise.style.marginTop = '70px'
            thirdChoise.style.opacity = '0'
            choiseKind[2].style.backgroundColor = ''
            choiseKind[2].style.color = '#ca508b'
            bottomRed.style.marginBottom = '-990px'
            for (var i = 0; i < 4; i++) {
                bottomRedLink[i].style.transition = '0.3s linear 0.' + (i + 2) + 's'
                bottomRedLink[i].style.opacity = '0'
            }
        }
    }
    else {
        allRoomChangeWindow.style.display = 'none'
        allStudentRoomText.style.opacity = 0
        allStudenRoomBtn[0].style.opacity = 0
        allStudenRoomBtn[1].style.opacity = 0
        allStudentRoomBlank.style.opacity = 0
        allStudentRoomBlank.style.top = '270px'
        setTimeout(function () {
            allStudentRoomText.style.display = 'none'
            allStudentRoomBlank.style.display = 'none'
            allStudenRoomBtn[0].style.display = 'none'
            allStudenRoomBtn[1].style.display = 'none'
        }, 300)

        shawdleRed.style.transform = 'rotate(0deg)'
        shawdleRed.style.opacity = '0'
        shawdleOrNot = 0
        afterShawdleTitle_Text[2].style.opacity = '0'
        afterShawdleTitle_Text[2].style.top = '220px'


        studentRoomSelf[1].style.left = '20%'
        studentRoomSelf[2].style.left = '20%'
        studentRoomSelf[3].style.left = '20%'
        studentRoomSelf[1].style.opacity = 0
        studentRoomSelf[2].style.opacity = 0
        studentRoomSelf[3].style.opacity = 0
        setTimeout(function () {
            for (var i = 0; i < 4; i++) {
                studentRoomSelf[i].style.bottom = '-10%'
                studentRoomSelf[0].style.opacity = 0
                studentRoomSelf[i].style.left = '5%'
                studentRoomSelf[i].style.transform = 'rotate(-90deg)'
            }
        }, 100)
        setTimeout(function () {
            document.getElementsByClassName('circle')[0].style.opacity = 0
        }, 200)
        setTimeout(function () {
            document.getElementsByClassName('circle')[0].style.display = 'none'
        }, 800);
    }
}

function showshawdleBlue(e) {
    switch (e) {
        case 1:
            if (userPermission == 'student') {
                var TTstudentName = ''
                var TTstudentSex = ''
                var TTstudentAge = ''
                var TTstudentCollege = ''
                var TTstudentSpecialty = ''
                var TTstudentClassName = ''
                afterShawdleTitle_Text[1].innerHTML = '学工管理 · 信息查看'
                function getStudentMessage() {
                    axios({
                        method: 'GET',
                        url: 'http://1.117.80.52:8022/cuzcms/student/getStudentInfo/' + userId
                    })
                        .then(res => {
                            studentName.innerText = res.data.data.name
                            studentSex.innerText = res.data.data.sex
                            studentAge.innerText = res.data.data.age
                            studentCollege.innerText = res.data.data.college
                            studentSpecialty.innerText = res.data.data.specialty
                            studentClassName.innerText = res.data.data.className

                            TTstudentName = res.data.data.name
                            TTstudentSex = res.data.data.sex
                            TTstudentAge = res.data.data.age
                            TTstudentCollege = res.data.data.college
                            TTstudentSpecialty = res.data.data.specialty
                            TTstudentClassName = res.data.data.className
                        })
                }
                getStudentMessage()
                document.getElementsByClassName('messageChange')[0].onclick = function () {
                    studentName.innerHTML = '<input type="text" style="height: 18px; text-align: center; outline-color: #7198a1; color: #537279;" value="' + studentName.innerText + '">'
                    studentSex.innerHTML = '<input type="text" style="height: 18px; text-align: center; outline-color: #7198a1; color: #537279;" value="' + studentSex.innerText + '">'
                    studentAge.innerHTML = '<input type="text" style="height: 18px; text-align: center; outline-color: #7198a1; color: #537279;" value="' + studentAge.innerText + '">'
                    document.getElementsByClassName('messageChange')[0].style.display = 'none'
                    document.getElementsByClassName('messageChangeBtnCancel')[0].style.display = 'block'
                    document.getElementsByClassName('messageChangeBtnUpload')[0].style.display = 'block'
                    document.getElementsByClassName('messageChangeBtnCancel')[0].onclick = function () {
                        document.getElementsByClassName('messageChange')[0].style.display = 'block'
                        document.getElementsByClassName('messageChangeBtnCancel')[0].style.display = 'none'
                        document.getElementsByClassName('messageChangeBtnUpload')[0].style.display = 'none'
                        studentName.innerHTML = '<h2 id="studentName">' + TTstudentName + '</h2>'
                        studentSex.innerHTML = '<h2 id="studentSex">' + TTstudentSex + '</h2>'
                        studentAge.innerHTML = '<h2 id="studentAge">' + TTstudentAge + '</h2>'
                    }
                    document.getElementsByClassName('messageChangeBtnUpload')[0].onclick = function () {
                        axios({
                            method: 'PUT',
                            url: 'http://1.117.80.52:8022/cuzcms/stuTea/updateStudentInfo',
                            data: {
                                userId: userId,
                                name: studentName.getElementsByTagName('input')[0].value,
                                sex: studentSex.getElementsByTagName('input')[0].value,
                                age: studentAge.getElementsByTagName('input')[0].value
                            }
                        })
                            .then(res => {
                                getStudentMessage()
                                document.getElementsByClassName('messageChange')[0].style.display = 'block'
                                document.getElementsByClassName('messageChangeBtnCancel')[0].style.display = 'none'
                                document.getElementsByClassName('messageChangeBtnUpload')[0].style.display = 'none'
                            })
                    }
                }
                document.getElementsByClassName('messageChange')[1].onclick = function () {
                    studentCollege.innerHTML = '<input type="text" style="height: 18px; text-align: center; outline-color: #7198a1; color: #537279;" value="' + studentCollege.innerText + '">'
                    studentSpecialty.innerHTML = '<input type="text" style="height: 18px; text-align: center; outline-color: #7198a1; color: #537279;" value="' + studentSpecialty.innerText + '">'
                    studentClassName.innerHTML = '<input type="text" style="height: 18px; text-align: center; outline-color: #7198a1; color: #537279;" value="' + studentClassName.innerText + '">'
                    document.getElementsByClassName('messageChange')[1].style.display = 'none'
                    document.getElementsByClassName('messageChangeBtnCancel')[1].style.display = 'block'
                    document.getElementsByClassName('messageChangeBtnUpload')[1].style.display = 'block'
                    document.getElementsByClassName('messageChangeBtnCancel')[1].onclick = function () {
                        document.getElementsByClassName('messageChange')[1].style.display = 'block'
                        document.getElementsByClassName('messageChangeBtnCancel')[1].style.display = 'none'
                        document.getElementsByClassName('messageChangeBtnUpload')[1].style.display = 'none'
                        studentCollege.innerHTML = '<h2 id="studentCollege">' + TTstudentCollege + '</h2>'
                        studentSpecialty.innerHTML = '<h2 id="studentSpecialty">' + TTstudentSpecialty + '</h2>'
                        studentClassName.innerHTML = '<h2 id="studentClassName">' + TTstudentClassName + '</h2>'
                    }
                }
                document.getElementsByClassName('messageChangeBtnUpload')[1].onclick = function () {
                    axios({
                        method: 'PUT',
                        url: 'http://1.117.80.52:8022/cuzcms/stuTea/updateStudentInfo',
                        data: {
                            userId: userId,
                            college: studentCollege.getElementsByTagName('input')[0].value,
                            specialty: studentSpecialty.getElementsByTagName('input')[0].value,
                            className: studentClassName.getElementsByTagName('input')[0].value
                        }
                    })
                        .then(res => {
                            getStudentMessage()
                            document.getElementsByClassName('messageChange')[1].style.display = 'block'
                            document.getElementsByClassName('messageChangeBtnCancel')[1].style.display = 'none'
                            document.getElementsByClassName('messageChangeBtnUpload')[1].style.display = 'none'
                        })
                }
                shawdleDIVmessageShow01.style.display = 'block'
                shawdleDIVmessageShow02.style.display = 'block'
                setTimeout(function () {
                    shawdleDIVmessageShow01.style.opacity = 1
                    shawdleDIVmessageShow02.style.opacity = 1
                    shawdleDIVmessageShow01.style.left = '50%'
                    shawdleDIVmessageShow02.style.left = '50%'
                }, 300)
                shawdleBlue.style.transform = 'rotate(90deg)'
                shawdleBlue.style.opacity = '1'
                shawdleOrNot = 1
                afterShawdleTitle_Text[1].style.opacity = '1'
                afterShawdleTitle_Text[1].style.top = '210px'
            }
            else {
                alert('该功能学生才可使用！')
            }
            break;
        case 2:
            if (userPermission == 'head-counselor') {
                shawdleBlue.style.transform = 'rotate(90deg)'
                shawdleBlue.style.opacity = '1'
                shawdleOrNot = 1
                afterShawdleTitle_Text[1].style.opacity = '1'
                afterShawdleTitle_Text[1].style.top = '210px'
                allStudentMessagePage = 0
                allStudentMessageChangePage(1)
                allStudentMessageShowText.onblur = function () {
                    if (0 < allStudentMessageShowText.value && allStudentMessageShowText.value < allStudentMessagePageeMax) {
                        allStudentMessageChangePage(allStudentMessageShowText.value - allStudentMessagePage)
                    }
                    else {
                        allStudentMessageChangePage(0)
                    }
                }
                allStudentMessageBtn[0].onclick = function () {
                    allStudentMessageChangePage(-1)
                }
                allStudentMessageBtn[1].onclick = function () {
                    allStudentMessageChangePage(1)
                }
                function allStudentMessageChangePage(goToPage) {
                    allStudentMessagePageeMax = parseInt(allStudentMessagePageeMax)
                    allStudentMessagePage += goToPage
                    if (allStudentMessagePage < 1) allStudentMessagePage = 1
                    if (allStudentMessagePage > allStudentMessagePageeMax) allStudentMessagePage = allStudentMessagePageeMax
                    // console.log(allStudentMessagePage)
                    axios({
                        method: 'GET',
                        url: 'http://1.117.80.52:8022/cuzcms/counselor/getStudentInfoPageList/' + allStudentMessagePage + '/10'
                    })
                        .then(res => {
                            console.log(res.data)
                            allStudentMessagePageeMax = res.data.data.totalPage
                            allStudentMessageShowTextMax.innerText = '/ ' + allStudentMessagePageeMax
                            allStudentMessageShowText.value = res.data.data.currentPage
                            allStudentMessageLine.innerHTML = ''
                            for (var i = 0; i < res.data.data.items.length; i++) {
                                allStudentMessageLine.appendChild(stringToHTML('<td style="width: 80px;">' + res.data.data.items[i].name + '<td style="width: 80px;">' + res.data.data.items[i].userId + '</td></td><td style="width: 40px;">' + res.data.data.items[i].sex + '</td><td style="width: 80px;">' + res.data.data.items[i].age + '</td><td style="width: 120px;">' + res.data.data.items[i].college + '<td style="width: 120px;">' + res.data.data.items[i].specialty + '</td></td><td style="width: 120px;">' + res.data.data.items[i].className + '</td><td style="width: 40px;"><img src="../img/main/change.png" class="allStudentMessageChangeImg"></td>'))

                                document.getElementsByClassName('allStudentMessageChangeImg')[i].onclick = function () {
                                    var studentMessageID = this.parentElement.parentElement.getElementsByTagName('td')[1].innerText
                                    allStudentMessageChangeWindow.style.display = 'block'
                                    allStudentMessageChangeWindow.getElementsByTagName('h2')[0].innerText = this.parentElement.parentElement.getElementsByTagName('td')[0].innerText + '的信息'
                                    for (var ii = 0; ii < 4; ii++) {
                                        //             // console.log(this.parentElement.parentElement.getElementsByTagName('td')[ii+2].innerText)
                                        allStudentMessageChangeWindow.getElementsByTagName('input')[ii].value = this.parentElement.parentElement.getElementsByTagName('td')[ii + 3].innerText
                                    }
                                    allStudentMessageChangeWindow.getElementsByTagName('img')[0].onclick = function () {
                                        allStudentMessageChangeWindow.style.display = 'none'
                                    }
                                    allStudentMessageChangeWindow.getElementsByTagName('img')[1].onclick = function () {
                                        axios({
                                            method: 'PUT',
                                            url: 'http://1.117.80.52:8022/cuzcms/stuTea/updateStudentInfo',
                                            data: {
                                                // sex: allStudentMessageChangeWindow.getElementsByTagName('input')[0].value,
                                                age: allStudentMessageChangeWindow.getElementsByTagName('input')[0].value,
                                                college: allStudentMessageChangeWindow.getElementsByTagName('input')[1].value,
                                                specialty: allStudentMessageChangeWindow.getElementsByTagName('input')[2].value,
                                                className: allStudentMessageChangeWindow.getElementsByTagName('input')[3].value,
                                                userId: studentMessageID
                                            }
                                        })
                                            .then(res => {
                                                // console.log(res.data)
                                                allStudentMessageChangeWindow.style.display = 'none'
                                                allStudentMessageChangePage(0)
                                            })
                                    }
                                }
                            }
                        })
                }
                document.getElementById('allStudentMessageText').style.display = 'block'
                afterShawdleTitle_Text[1].innerHTML = '学工管理 · 信息管理'
                allStudentMessageBlank.style.display = 'block'
                allStudentMessageBtn[0].style.display = 'block'
                allStudentMessageBtn[1].style.display = 'block'
                setTimeout(function () {
                    document.getElementById('allStudentMessageText').style.opacity = 1
                    allStudentMessageBtn[0].style.opacity = 1
                    allStudentMessageBtn[1].style.opacity = 1
                    allStudentMessageBlank.style.opacity = 1
                    allStudentMessageBlank.style.top = '220px'
                }, 200)
            }
            else {
                alert('该功能学工办主任才可使用！')
            }
            break;
        case 3:
            afterShawdleTitle_Text[1].innerHTML = '学工管理 · 奖学金审批'
            break;
        case 4:
            afterShawdleTitle_Text[1].innerHTML = '学工管理 · 奖学金审批'
            break;
    }
}
function showshawdleYellow(e) {
    switch (e) {
        case 1:
            if (userPermission == 'student') {
                afterShawdleTitle_Text[0].innerHTML = '教务管理 · 成绩查询'
                axios({
                    method: 'GET',
                    url: 'http://1.117.80.52:8022/cuzcms/student/getStudentScore/' + userId
                })
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.data.mathScore >= 70) {
                            studentView.getElementsByTagName('div')[0].getElementsByTagName('h1')[0].innerHTML = '<h1>' + res.data.data.mathScore + '<b>分</b></h1>'
                        }
                        else if (res.data.data.mathScore >= 60 && res.data.data.mathScore < 70) {
                            studentView.getElementsByTagName('div')[0].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#6a4e08;">' + res.data.data.mathScore + '<b>分</b></h1>'
                        }
                        else {
                            studentView.getElementsByTagName('div')[0].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#9d0a0a;">' + res.data.data.mathScore + '<b>分</b></h1>'
                        }
                        if (res.data.data.englishScore >= 70) {
                            studentView.getElementsByTagName('div')[1].getElementsByTagName('h1')[0].innerHTML = '<h1>' + res.data.data.englishScore + '<b>分</b></h1>'
                        }
                        else if (res.data.data.englishScore >= 60 && res.data.data.englishScore < 70) {
                            studentView.getElementsByTagName('div')[1].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#6a4e08;">' + res.data.data.englishScore + '<b>分</b></h1>'
                        }
                        else {
                            studentView.getElementsByTagName('div')[1].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#9d0a0a;">' + res.data.data.englishScore + '<b>分</b></h1>'
                        }
                        if (res.data.data.javaScore >= 70) {
                            studentView.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerHTML = '<h1>' + res.data.data.javaScore + '<b>分</b></h1>'
                        }
                        else if (res.data.data.javaScore >= 60 && res.data.data.javaScore < 70) {
                            studentView.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#6a4e08;">' + res.data.data.javaScore + '<b>分</b></h1>'
                        }
                        else {
                            studentView.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#9d0a0a;">' + res.data.data.javaScore + '<b>分</b></h1>'
                        }
                        if (res.data.data.pythonScore >= 70) {
                            studentView.getElementsByTagName('div')[3].getElementsByTagName('h1')[0].innerHTML = '<h1>' + res.data.data.pythonScore + '<b>分</b></h1>'
                        }
                        else if (res.data.data.pythonScore >= 60 && res.data.data.pythonScore < 70) {
                            studentView.getElementsByTagName('div')[3].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#6a4e08;">' + res.data.data.pythonScore + '<b>分</b></h1>'
                        }
                        else {
                            studentView.getElementsByTagName('div')[3].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#9d0a0a;">' + res.data.data.pythonScore + '<b>分</b></h1>'
                        }
                        if (res.data.data.cppScore >= 70) {
                            studentView.getElementsByTagName('div')[4].getElementsByTagName('h1')[0].innerHTML = '<h1>' + res.data.data.cppScore + '<b>分</b></h1>'
                        }
                        else if (res.data.data.cppScore >= 60 && res.data.data.cppScore < 70) {
                            studentView.getElementsByTagName('div')[4].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#6a4e08;">' + res.data.data.cppScore + '<b>分</b></h1>'
                        }
                        else {
                            studentView.getElementsByTagName('div')[4].getElementsByTagName('h1')[0].innerHTML = '<h1 style="color:#9d0a0a;">' + res.data.data.cppScore + '<b>分</b></h1>'
                        }

                        document.getElementById('scoreline01').style.marginLeft = parseInt(res.data.data.mathScore) / 100 * 190 - 190 + 'px'
                        document.getElementById('scoreline02').style.marginLeft = parseInt(res.data.data.englishScore) / 100 * 190 - 190 + 'px'
                        document.getElementById('scoreline03').style.marginLeft = parseInt(res.data.data.javaScore) / 100 * 190 - 190 + 'px'
                        document.getElementById('scoreline04').style.marginLeft = parseInt(res.data.data.pythonScore) / 100 * 190 - 190 + 'px'
                        document.getElementById('scoreline05').style.marginLeft = parseInt(res.data.data.cppScore) / 100 * 190 - 190 + 'px'

                        studentView.getElementsByTagName('div')[0].style.display = ''
                        studentView.getElementsByTagName('div')[1].style.display = ''
                        studentView.getElementsByTagName('div')[2].style.display = ''
                        studentView.getElementsByTagName('div')[3].style.display = ''
                        studentView.getElementsByTagName('div')[4].style.display = ''
                        // studentView.style.display = ''
                        setTimeout(function () {
                            studentView.getElementsByTagName('div')[0].style.opacity = 1
                            studentView.getElementsByTagName('div')[1].style.opacity = 1
                            studentView.getElementsByTagName('div')[2].style.opacity = 1
                            studentView.getElementsByTagName('div')[3].style.opacity = 1
                            studentView.getElementsByTagName('div')[4].style.opacity = 1
                        }, 200)
                        shawdleYellow.style.transform = 'rotate(90deg)'
                        shawdleYellow.style.opacity = '1'
                        shawdleOrNot = 1
                        afterShawdleTitle_Text[0].style.opacity = '1'
                        afterShawdleTitle_Text[0].style.top = '210px'
                    })
            }
            else {
                alert('该功能学生才可使用！')
            }
            break;
        case 2:
            if (userPermission == 'head-teacher') {
                allStudentPage = 0
                allStudentScoreChangePage(1)
                shawdleDIVmessageShowText.onblur = function () {
                    if (0 < shawdleDIVmessageShowText.value && shawdleDIVmessageShowText.value <= allStudentPageMax) {
                        allStudentScoreChangePage(shawdleDIVmessageShowText.value - allStudentPage)
                    }
                    else {
                        allStudentScoreChangePage(0)
                    }
                }
                shawdleDIVmessageShowBtn[0].onclick = function () {
                    allStudentScoreChangePage(-1)
                }
                shawdleDIVmessageShowBtn[1].onclick = function () {
                    allStudentScoreChangePage(1)
                }
                function allStudentScoreChangePage(goToPage) {
                    allStudentPageMax = parseInt(allStudentPageMax)
                    allStudentPage += goToPage
                    if (allStudentPage < 1) allStudentPage = 1
                    if (allStudentPage > allStudentPageMax) allStudentPage = allStudentPageMax
                    // console.log(allStudentPage)
                    axios({
                        method: 'GET',
                        url: 'http://1.117.80.52:8022/cuzcms/teacher/getScorePageList/' + allStudentPage + '/10'
                    })
                        .then(res => {
                            allStudentPageMax = res.data.data.totalPage
                            document.getElementsByClassName('shawdleDIVmessageShowTextMax')[0].innerText = '/ ' + allStudentPageMax
                            shawdleDIVmessageShowText.value = res.data.data.currentPage
                            document.getElementById('allStudentPointBlank').innerHTML = ''
                            for (var i = 0; i < res.data.data.items.length; i++) {
                                document.getElementById('allStudentPointBlank').appendChild(stringToHTML('<td style="width: 120px;">' + res.data.data.items[i].stuName + '<td style="width: 80px;">' + res.data.data.items[i].userId + '</td></td><td style="width: 80px;">' + parseInt(res.data.data.items[i].mathScore) + '</td><td style="width: 80px;">' + parseInt(res.data.data.items[i].englishScore) + '</td><td style="width: 80px;">' + parseInt(res.data.data.items[i].javaScore) + '<td style="width: 80px;">' + parseInt(res.data.data.items[i].cppScore) + '</td></td><td style="width: 80px;">' + parseInt(res.data.data.items[i].pythonScore) + '</td><td style="width: 40px;"><img src="../img/main/change.png" class="allStudentChangeImg"></td>'))

                                document.getElementsByClassName('allStudentChangeImg')[i].onclick = function () {
                                    var studentID = this.parentElement.parentElement.getElementsByTagName('td')[1].innerText
                                    allStudentChangeWindow.style.display = 'block'
                                    allStudentChangeWindow.getElementsByTagName('h2')[0].innerText = this.parentElement.parentElement.getElementsByTagName('td')[0].innerText + '的成绩'
                                    for (var ii = 0; ii < 5; ii++) {
                                        // console.log(this.parentElement.parentElement.getElementsByTagName('td')[ii+2].innerText)
                                        allStudentChangeWindow.getElementsByTagName('input')[ii].value = this.parentElement.parentElement.getElementsByTagName('td')[ii + 2].innerText
                                    }
                                    allStudentChangeWindow.getElementsByTagName('img')[0].onclick = function () {
                                        allStudentChangeWindow.style.display = 'none'
                                    }
                                    allStudentChangeWindow.getElementsByTagName('img')[1].onclick = function () {
                                        // console.log(studentID)
                                        // console.log(allStudentChangeWindow.getElementsByTagName('input')[0].value)
                                        // console.log(allStudentChangeWindow.getElementsByTagName('input')[1].value)
                                        // console.log(allStudentChangeWindow.getElementsByTagName('input')[2].value)
                                        // console.log(allStudentChangeWindow.getElementsByTagName('input')[3].value)
                                        // console.log(allStudentChangeWindow.getElementsByTagName('input')[4].value)
                                        axios({
                                            method: 'PUT',
                                            url: 'http://1.117.80.52:8022/cuzcms/teacher/updateScore',
                                            data: {
                                                mathScore: allStudentChangeWindow.getElementsByTagName('input')[0].value,
                                                englishScore: allStudentChangeWindow.getElementsByTagName('input')[1].value,
                                                javaScore: allStudentChangeWindow.getElementsByTagName('input')[2].value,
                                                pythonScore: allStudentChangeWindow.getElementsByTagName('input')[4].value,
                                                cppScore: allStudentChangeWindow.getElementsByTagName('input')[3].value,
                                                userId: studentID
                                            }
                                        })
                                            .then(res => {
                                                // console.log(res.data)
                                                allStudentChangeWindow.style.display = 'none'
                                                allStudentScoreChangePage(0)
                                            })
                                    }
                                }
                            }
                        })
                }
                afterShawdleTitle_Text[0].innerHTML = '教务管理 · 成绩管理'
                document.getElementById('allStudentTextAndMax').style.display = 'block'
                shawdleDIVALLpointShow.style.display = 'block'
                shawdleDIVmessageShowBtn[0].style.display = 'block'
                shawdleDIVmessageShowBtn[1].style.display = 'block'
                setTimeout(function () {
                    document.getElementById('allStudentTextAndMax').style.opacity = 1
                    shawdleDIVmessageShowBtn[0].style.opacity = 1
                    shawdleDIVmessageShowBtn[1].style.opacity = 1
                    shawdleDIVALLpointShow.style.opacity = 1
                    shawdleDIVALLpointShow.style.top = '220px'
                }, 200)
                shawdleYellow.style.transform = 'rotate(90deg)'
                shawdleYellow.style.opacity = '1'
                shawdleOrNot = 1
                afterShawdleTitle_Text[0].style.opacity = '1'
                afterShawdleTitle_Text[0].style.top = '210px'
            }
            else {
                alert('该功能教务办主任才可使用！')
            }
            break;
        case 4:
            afterShawdleTitle_Text[0].innerHTML = '教务管理 · 考勤管理'
            if (userPermission == 'head-teacher') {
                allStudentClassPage = 0
                allStudentClassChangePage(1)
                allStudentClassShowText.onblur = function () {
                    if (0 < allStudentClassShowText.value && allStudentClassShowText.value <= allStudentClassPageMax) {
                        allStudentClassChangePage(allStudentClassShowText.value - allStudentClassPage)
                    }
                    else {
                        allStudentClassChangePage(0)
                    }
                }
                allStudentClassBtn[0].onclick = function () {
                    allStudentClassChangePage(-1)
                }
                allStudentClassBtn[1].onclick = function () {
                    allStudentClassChangePage(1)
                }
                function allStudentClassChangePage(goToPage) {
                    allStudentClassPageMax = parseInt(allStudentClassPageMax)
                    allStudentClassPage += goToPage
                    if (allStudentClassPage < 1) allStudentClassPage = 1
                    if (allStudentClassPage > allStudentClassPageMax) allStudentClassPage = allStudentClassPageMax
                    // console.log(allStudentClassPage)
                    axios({
                        method: 'GET',
                        url: 'http://1.117.80.52:8022/cuzcms/teacher/getAttendancePageList/' + allStudentClassPage + '/10'
                    })
                        .then(res => {
                            allStudentClassPageMax = res.data.data.totalPage
                            allStudentClassTextAndMax.innerText = '/ ' + allStudentClassPageMax
                            allStudentClassShowText.value = res.data.data.currentPage
                            allStudentClassLine.innerHTML = ''
                            for (var i = 0; i < res.data.data.items.length; i++) {
                                if (res.data.data.items[i].state == false) {
                                    imgstring = '<p style="color: #369044;">正常</p>'
                                }
                                else {
                                    imgstring = '<p style="color: #951c1c;">异常</p>'
                                }
                                allStudentClassLine.appendChild(stringToHTML('<td style="width: 100px;">' + res.data.data.items[i].stuName + '<td style="width: 30px;">' + res.data.data.items[i].stuSex + '</td></td><td style="width: 60px;">' + res.data.data.items[i].userId + '</td><td style="width: 120px;">' + res.data.data.items[i].stuCollege + '</td><td style="width: 120px;">' + res.data.data.items[i].stuSpecialty + '<td style="width: 120px;">' + res.data.data.items[i].stuClassName + '</td></td><td style="width: 120px;">' + res.data.data.items[i].subject + '</td><td style="width: 80px;">' + imgstring + '</td><td style="width: 240px;">' + res.data.data.items[i].updateTime + '</td><td style="width: 40px;"><img src="../img/main/change.png" class="allStudentClassChangeImg"></td>'))

                                document.getElementsByClassName('allStudentClassChangeImg')[i].onclick = function () {
                                    var studentID = this.parentElement.parentElement.getElementsByTagName('td')[2].innerText
                                    var subject = this.parentElement.parentElement.getElementsByTagName('td')[6].innerText
                                    allStudentClassChangeWindow.style.display = 'block'
                                    allStudentClassChangeWindow.getElementsByTagName('h2')[0].innerText = this.parentElement.parentElement.getElementsByTagName('td')[0].innerText + '的考勤'
                                    if (this.parentElement.parentElement.getElementsByTagName('td')[7].getElementsByTagName('p')[0].innerText == '正常') {
                                        allStudentClassChangeWindow.getElementsByTagName('input')[0].checked = 'true'
                                    } else {
                                        allStudentClassChangeWindow.getElementsByTagName('input')[1].checked = 'true'
                                    }
                                    allStudentClassChangeWindow.getElementsByTagName('img')[0].onclick = function () {
                                        allStudentClassChangeWindow.style.display = 'none'
                                    }
                                    allStudentClassChangeWindow.getElementsByTagName('img')[1].onclick = function () {
                                        if (this.parentElement.getElementsByTagName('input')[0].checked == true) {
                                            var state = false
                                        }
                                        if (this.parentElement.getElementsByTagName('input')[0].checked == false) {
                                            var state = true
                                        }
                                        //         // console.log(studentID)
                                        //         // console.log(allStudentClassChangeWindow.getElementsByTagName('input')[0].value)
                                        //         // console.log(allStudentClassChangeWindow.getElementsByTagName('input')[1].value)
                                        //         // console.log(allStudentClassChangeWindow.getElementsByTagName('input')[2].value)
                                        //         // console.log(allStudentClassChangeWindow.getElementsByTagName('input')[3].value)
                                        //         // console.log(allStudentClassChangeWindow.getElementsByTagName('input')[4].value)
                                        axios({
                                            method: 'PUT',
                                            url: 'http://1.117.80.52:8022/cuzcms/teacher/updateAttendance',
                                            data: {
                                                subject: subject,
                                                state: state,
                                                userId: studentID
                                            }
                                        })
                                            .then(res => {
                                                console.log(state)
                                                allStudentClassChangeWindow.style.display = 'none'
                                                allStudentClassChangePage(0)
                                            })
                                    }
                                }
                            }
                        })
                }
                allStudentClassText.style.display = 'block'
                allStudentClassBlank.style.display = 'block'
                allStudentClassBtn[0].style.display = 'block'
                allStudentClassBtn[1].style.display = 'block'
                setTimeout(function () {
                    allStudentClassText.style.opacity = 1
                    allStudentClassBtn[0].style.opacity = 1
                    allStudentClassBtn[1].style.opacity = 1
                    allStudentClassBlank.style.opacity = 1
                    allStudentClassBlank.style.top = '220px'
                }, 200)
                shawdleYellow.style.transform = 'rotate(90deg)'
                shawdleYellow.style.opacity = '1'
                shawdleOrNot = 1
                afterShawdleTitle_Text[0].style.opacity = '1'
                afterShawdleTitle_Text[0].style.top = '210px'
            }
            else {
                alert('该功能教务办主任才可使用！')
            }
            break;
        case 3:
            if (userPermission == 'student') {
                for (var i = 0; i < 5; i++) {
                    document.getElementsByClassName('studentSelfClassBlankItem')[i].onmouseover = function () {
                        this.style.opacity = 0
                    }
                    document.getElementsByClassName('studentSelfClassBlankItem')[i].onmouseout = function () {
                        this.style.opacity = 1
                    }
                }
                axios({
                    method: 'GET',
                    url: 'http://1.117.80.52:8022/cuzcms/student/getStudentAttendanceList/' + userId
                })
                    .then(res => {
                        for (var i = 0; i < 5; i++) {
                            if (res.data.data[i].state == false) {
                                studentSelfClassBlankText[i].getElementsByTagName('h3')[1].innerText = '正常'
                            }
                            else {
                                studentSelfClassBlankText[i].getElementsByTagName('h3')[1].innerText = '异常'
                                studentSelfClassBlankText[i].getElementsByTagName('h3')[1].style.color = 'red'
                            }
                            studentSelfClassBlankText[i].getElementsByTagName('h3')[3].innerText = res.data.data[i].updateTime

                            document.getElementsByClassName('studentSelfClassBlankItem')[i].onclick = function () {
                                studentSelfClassBlankChangeWindow.getElementsByTagName('input')[0].value = '关于' + this.getElementsByTagName('h1')[0].innerText + '的考勤申诉'
                                studentSelfClassBlankChangeWindow.getElementsByTagName('textarea')[0].value = '在此填入申诉依凭与概述...'
                                studentSelfClassBlankChangeWindow.style.display = 'block'
                                setTimeout(function () {
                                    studentSelfClassBlankChangeWindow.style.opacity = 1
                                    studentSelfClassBlankChangeWindow.style.top = '50%'
                                }, 50)
                                studentSelfClassBlankChangeWindow.getElementsByTagName('img')[0].onclick = function () {
                                    studentSelfClassBlankChangeWindow.style.opacity = 0
                                    studentSelfClassBlankChangeWindow.style.top = '52%'
                                    setTimeout(function () {
                                        studentSelfClassBlankChangeWindow.style.display = 'none'
                                    }, 200)
                                }
                                studentSelfClassBlankChangeWindow.getElementsByTagName('img')[1].onclick = function () {
                                    axios({
                                        method: 'POST',
                                        url: 'http://1.117.80.52:8022/cuzcms/message/saveMessage',
                                        data: {
                                            title: this.parentElement.getElementsByTagName('input')[0].value,
                                            content: this.parentElement.getElementsByTagName('textarea')[0].value,
                                            sendName: userName,
                                            receiveName: '教务办'
                                        }
                                    })
                                        .then(res => {
                                            // console.log(userName)
                                            studentSelfClassBlankChangeWindow.style.opacity = 0
                                            studentSelfClassBlankChangeWindow.style.top = '52%'
                                            setTimeout(function () {
                                                studentSelfClassBlankChangeWindow.style.display = 'none'
                                            }, 200)
                                        })
                                }
                            }
                        }
                    })
                studentSelfClassBlank.style.display = 'block'
                setTimeout(function () {
                    studentSelfClassBlank.style.opacity = 1
                }, 200)
                afterShawdleTitle_Text[0].innerHTML = '教务管理 · 考勤查询'
                shawdleYellow.style.transform = 'rotate(90deg)'
                shawdleYellow.style.opacity = '1'
                shawdleOrNot = 1
                afterShawdleTitle_Text[0].style.opacity = '1'
                afterShawdleTitle_Text[0].style.top = '210px'
            }
            else {
                alert('该功能学生才可使用！')
            }
            break;
    }
}
function showshawdleRed(e) {
    switch (e) {
        case 1:
            afterShawdleTitle_Text[2].innerHTML = '寝室管理 · 维修申请'
            break;
        case 2:
            afterShawdleTitle_Text[2].innerHTML = '寝室管理 · 维修审批'
            break;
        case 3:
            if (userPermission == 'student') {
                axios({
                    method: 'GET',
                    url: 'http://1.117.80.52:8022/cuzcms/student/getStudentDormitory/' + userId
                })
                    .then(res => {
                        RoomdormitoryNum = res.data.data.dormitoryNum
                        roomNum = res.data.data.roomNum
                        studentRoomSelf[0].getElementsByTagName('h3')[0].innerText = res.data.data.roomNum
                        studentRoomSelf[0].getElementsByTagName('h4')[0].innerText = res.data.data.dormitoryNum
                        studentRoomSelf[0].getElementsByTagName('h4')[1].innerText = res.data.data.bedNum
                    })
                setTimeout(function () {
                    axios({
                        method: 'GET',
                        url: 'http://1.117.80.52:8022/cuzcms/student/getStudentRoommateDormitory',
                        params: {
                            dormitoryNum: RoomdormitoryNum,
                            roomNum: roomNum,
                            userId: userId
                        }
                    })
                        .then(res => {
                            console.log(res.data)
                            for (var i = 1; i < 4; i++) {
                                studentRoomSelf[i].getElementsByTagName('h3')[0].innerText = res.data.data[i - 1]['roommateName']
                                studentRoomSelf[i].getElementsByTagName('h4')[0].innerText = res.data.data[i - 1]['roommateClassName']
                                studentRoomSelf[i].getElementsByTagName('h4')[1].innerText = res.data.data[i - 1]['roommateBedNum']
                                studentRoomSelf[i].getElementsByTagName('h3')[0].style.fontSize = '48px'
                            }
                        })
                    afterShawdleTitle_Text[2].innerHTML = '寝室管理 · 寝室查询'
                    document.getElementsByClassName('circle')[0].style.display = 'block'
                    for (var i = 0; i < 4; i++) {
                        studentRoomSelf[i].style.bottom = '22%'
                        studentRoomSelf[0].style.opacity = 1
                        studentRoomSelf[i].style.left = '20%'
                        studentRoomSelf[i].style.transform = 'rotate(0deg)'
                    }
                    setTimeout(function () {
                        document.getElementsByClassName('circle')[0].style.opacity = 1
                    }, 200)
                    setTimeout(function () {
                        studentRoomSelf[1].style.left = '38%'
                        studentRoomSelf[2].style.left = '53%'
                        studentRoomSelf[3].style.left = '68%'
                        studentRoomSelf[1].style.opacity = 1
                        studentRoomSelf[2].style.opacity = 1
                        studentRoomSelf[3].style.opacity = 1
                    }, 300)
                }, 100)

                shawdleRed.style.transform = 'rotate(90deg)'
                shawdleRed.style.opacity = '1'
                shawdleOrNot = 1
                afterShawdleTitle_Text[2].style.opacity = '1'
                afterShawdleTitle_Text[2].style.top = '210px'
            }
            else {
                alert('该功能学生才可使用！')
            }
            break;
        case 4:
            if (userPermission == 'head-auntie') {
                allRoomPage = 0
                allRoomChangePage(1)
                allStudentRoomShowText.onblur = function () {
                    if (0 < allStudentRoomShowText.value && allStudentRoomShowText.value < allRoomPageMax) {
                        allRoomChangePage(allStudentRoomShowText.value - allRoomPage)
                    }
                    else {
                        allRoomChangePage(0)
                    }
                }
                allStudenRoomBtn[0].onclick = function () {
                    allRoomChangePage(-1)
                }
                allStudenRoomBtn[1].onclick = function () {
                    allRoomChangePage(1)
                }
                function allRoomChangePage(goToPage) {
                    allRoomPageMax = parseInt(allRoomPageMax)
                    allRoomPage += goToPage
                    if (allRoomPage < 1) allRoomPage = 1
                    if (allRoomPage > allRoomPageMax) allRoomPage = allRoomPageMax
                    // console.log(allRoomPage)
                    axios({
                        method: 'GET',
                        url: 'http://1.117.80.52:8022/cuzcms/anutie/getAnutieDormitoryPageList/' + allRoomPage + '/10'
                    })
                        .then(res => {
                            allRoomPageMax = res.data.data.totalPage
                            allStudentRoomShowTextMax.innerText = '/ ' + allRoomPageMax
                            allStudentRoomShowText.value = res.data.data.currentPage
                            allStudentRoomLine.innerHTML = ''
                            for (var i = 0; i < res.data.data.items.length; i++) {
                                document.getElementById('allStudentRoomLine').appendChild(stringToHTML('<td style="width: 40px;">' + res.data.data.items[i].dormitoryNum + '<td style="width: 40px;">' + res.data.data.items[i].dormitoryRoomNum + '</td></td><td style="width: 30px;">' + res.data.data.items[i].dormitoryBedNum + '</td><td style="width: 80px;">' + res.data.data.items[i].dormitoryName + '</td><td style="width: 30px;">' + res.data.data.items[i].dormitorySex + '<td style="width: 80px;">' + res.data.data.items[i].userId + '</td></td><td style="width: 120px;">' + res.data.data.items[i].dormitoryCollege + '</td><td style="width: 120px;">' + res.data.data.items[i].dormitorySpecialty + '</td><td style="width: 120px; height: 30px;">' + res.data.data.items[i].dormitoryClassName + '</td><td style="width: 40px;"><img src="../img/main/change.png" class="allRoomChangeImg"></td>'))
                                document.getElementsByClassName('allRoomChangeImg')[i].onclick = function () {
                                    var RoomstudentID = this.parentElement.parentElement.getElementsByTagName('td')[5].innerText
                                    allRoomChangeWindow.style.display = 'block'
                                    allRoomChangeWindow.getElementsByTagName('h2')[0].innerText = this.parentElement.parentElement.getElementsByTagName('td')[3].innerText + '的寝室信息'
                                    for (var ii = 0; ii < 3; ii++) {
                                        // console.log(this.parentElement.parentElement.getElementsByTagName('td')[ii+2].innerText)
                                        allRoomChangeWindow.getElementsByTagName('input')[ii].value = this.parentElement.parentElement.getElementsByTagName('td')[ii].innerText
                                    }
                                    allRoomChangeWindow.getElementsByTagName('img')[0].onclick = function () {
                                        allRoomChangeWindow.style.display = 'none'
                                    }
                                    allRoomChangeWindow.getElementsByTagName('img')[1].onclick = function () {
                                        // console.log(studentID)
                                        // console.log(allRoomChangeWindow.getElementsByTagName('input')[0].value)
                                        // console.log(allRoomChangeWindow.getElementsByTagName('input')[1].value)
                                        // console.log(allRoomChangeWindow.getElementsByTagName('input')[2].value)
                                        // console.log(allRoomChangeWindow.getElementsByTagName('input')[3].value)
                                        // console.log(allRoomChangeWindow.getElementsByTagName('input')[4].value)
                                        axios({
                                            method: 'PUT',
                                            url: 'http://1.117.80.52:8022/cuzcms/anutie/updateAnutieDormitory',
                                            data: {
                                                dormitoryNum: allRoomChangeWindow.getElementsByTagName('input')[0].value,
                                                roomNum: allRoomChangeWindow.getElementsByTagName('input')[1].value,
                                                bedNum: allRoomChangeWindow.getElementsByTagName('input')[2].value,
                                                userId: RoomstudentID
                                            }
                                        })
                                            .then(res => {
                                                // console.log(res.data)
                                                allRoomChangeWindow.style.display = 'none'
                                                allRoomChangePage(0)
                                            })
                                    }
                                }
                            }
                        })
                }
                afterShawdleTitle_Text[2].innerHTML = '寝室管理 · 寝室管理'
                allStudentRoomText.style.display = 'block'
                allStudentRoomBlank.style.display = 'block'
                allStudenRoomBtn[0].style.display = 'block'
                allStudenRoomBtn[1].style.display = 'block'
                setTimeout(function () {
                    allStudentRoomText.style.opacity = 1
                    allStudenRoomBtn[0].style.opacity = 1
                    allStudenRoomBtn[1].style.opacity = 1
                    allStudentRoomBlank.style.opacity = 1
                    allStudentRoomBlank.style.top = '220px'
                }, 200)
                shawdleRed.style.transform = 'rotate(90deg)'
                shawdleRed.style.opacity = '1'
                shawdleOrNot = 1
                afterShawdleTitle_Text[2].style.opacity = '1'
                afterShawdleTitle_Text[2].style.top = '210px'
            }
            else {
                alert('该功能后勤办主任才可使用！')
            }
            break;
    }
}