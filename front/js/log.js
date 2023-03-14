document.getElementsByClassName('btnRight')[0].onmousedown = function () {
    this.style.backgroundColor = '#3682ce'
}
document.getElementsByClassName('btnRight')[0].onmouseup = function () {
    this.style.backgroundColor = '#409ffd'
    if (document.getElementsByClassName('inputText')[0].value == '' || document.getElementsByClassName('inputText')[1].value == '') {
        alert('请输入完整信息！')
    }
    else {
        if (document.getElementById('yes').checked == false) {
            alert('您未勾选同意协议！')
            return
        }
        axios({
            method: 'POST',
            url: 'http://1.117.80.52:8022/cuzcms/user/login',
            data: {
                username: document.getElementsByClassName('inputText')[0].value,
                password: document.getElementsByClassName('inputText')[1].value
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => {
                if (res.data.code != 200) {
                    alert('用户名或密码输入错误！')
                    return
                }
                window.location.href = "html/main.html?user=" + res.data.data.userId + '&permission=' + res.data.data.roles[0]
            })
    }
}