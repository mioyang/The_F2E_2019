//-- 指定 dom
var listTo = document.querySelector('.listTo');   //事件列表
var sendData = document.querySelector('.btn-addNew');   //新增事件按鈕
var data = JSON.parse(localStorage.getItem('listData')) || [];   //將事件從轉JSON資料轉成陣列


//-- 綁定監聽事件
sendData.addEventListener('click', addlistTo);   //點擊新增按鈕的事件監聽
listTo.addEventListener('click', listCancel);    //點擊刪除按鈕的事件監聽
// listTo.addEventListener('click', listDone);     //點擊完成按鈕的事件監聽
updateList(data);   //更新事件


//-- 加入待辦事件，並同步更新網頁與 localstorage
function addlistTo(e) {
    e.preventDefault();  //避免原本的動作執行

    var text = document.querySelector('.event').value;  //取得輸入在input的值
    var todo = {
        content: text  //定義todo物件
    };
    data.push(todo);  //增加入待辦事件到陣列中
    // console.log(todo);

    document.querySelector('.event').value = ''; //新增事件後清空inputˇ的值

    updateList(data);  //更新網頁內容
    localStorage.setItem('listData', JSON.stringify(data));  //將待辦事件轉化成 JSON 字串 
    console.log(data);
};


//-- 更新網頁內容
function updateList(items) {
    str = '';
    var len = items.length;

    for (var i = 0; len > i; i++) {
        str += '<li>';
        // str += '<input type="checkbox" id="checkStatus" >';
        str += '<i class="material-icons btn-cancel" data-listnum=' + i + '>cancel</i>';
        str += '<span class="listTxt">' + items[i].content + '</span>';
        str += '<i class="material-icons btn-start">play_circle_filled</i>';
        str += '</li>';
    }
    listTo.innerHTML = str;
};


//-- 刪除待辦事項
function listCancel(e) {
    e.preventDefault();  //避免原本的動作執行
    // console.log(e.target.nodeName);  //確認點到的元素
    if (e.target.nodeName !== 'I') { return };  //若沒有點到 刪除icon 的話，則中斷function

    var listnum = e.target.dataset.listnum;  //定義選到的待辦事項
    data.splice(listnum, 1);  //刪除事項

    //更新網頁內容
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
};


//--點下完成按鈕事件----待完成
// function listDone(e) {
//     e.preventDefault();  //避免原本的動作執行
//     console.log(e.target.nodeName);  //確認點到的元素
//     if (e.target.nodeName !== 'INPUT') { return };  //若沒有點到 完成按鈕 的話，則中斷function


// }



//--頁籤切換
$('.tab-list ul li').on('click', function () {
    $('.tab-list ul li').removeClass('active');
    $(this).addClass('active');

    $('.tab-body .tab-body-content').hide();
    var tab = $(this).data('tab');
    $('.tab-body .tab-body-content[data-tabcontent=' + tab + ']').show();
});

//-圖表

new Chart(document.getElementById("datesChart"), {
    "type": "bar",
    "data": {
        "labels": ["07.08", "07.09", "07.10", "07.11", "07.12", "07.13", "07.14"],
        "datasets": [{
            "label": "My Weekly Pomodoro",
            "data": [17, 12, 15, 10, 16, 23, 8],
            "fill": true,
            "backgroundColor": ["#AFB3B6", "#AFB3B6", "#AFB3B6", "#AFB3B6", "#AFB3B6", "#AFB3B6", "#E9473F"],
            "borderColor": ["#AFB3B6", "#AFB3B6", "#AFB3B6", "#AFB3B6", "#AFB3B6", "#AFB3B6", "#E9473F"],
            "borderWidth": 1
        }]
    },
    "options": { "scales": { "yAxes": [{ "ticks": { "beginAtZero": true } }] } }
});
