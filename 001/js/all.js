//-- 指定 dom
var listTo = document.querySelector('.listTo');   //事件列表
var sendData = document.querySelector('.btn-addNew');   //新增事件按鈕
var data = JSON.parse(localStorage.getItem('listData')) || [];   //將事件從轉JSON資料轉成陣列


//-- 綁定監聽事件
sendData.addEventListener('click', addlistTo);   //點擊新增按鈕的事件監聽
listTo.addEventListener('click', listCancel);    //點擊刪除按鈕的事件監聽
listTo.addEventListener('click', listDone);     //點擊完成按鈕的事件監聽
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
        str += '<a class="btn-done"></a>';
        str += '<i class="material-icons btn-cancel" data-listnum=' + i + '>cancel</i>';
        str += '<span>' + items[i].content + '</span>';
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


//-- 點下完成按鈕事件
function listDone(e) {
    e.preventDefault();  //避免原本的動作執行
    console.log(e.target.nodeName);  //確認點到的元素
    if (e.target.nodeName !== 'A') { return };  //若沒有點到 完成按鈕 的話，則中斷function

    // var listdone = document.querySelector('.btn-done');  //定義選到的待辦事項


    //更新網頁內容
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
}



function checkStatus(event) {
    //將目前頁面中的所有 <label> 元素選出來
    let allLable = document.querySelectorAll('label');
    //將前一步中的 Nodelist 轉為陣列
    labelArray = Array.from(allLable);
    //取得觸發事件元素的 index
    let getIndex = labelArray.indexOf(event.target);
    //將資料庫中的陣列資料叫出來
    let arrayJason = JSON.parse(localStorage.getItem('item'));
    //當 click 事件觸發時，將 done 的屬性布林值改為相反
    arrayJason[getIndex]['done'] = !arrayJason[getIndex]['done'];
    //將新的資料陣列轉成 JSON string 結構
    stringJson = JSON.stringify(arrayJason);
    //將新的 JSON string 丟到資料庫中
    localStorage.setItem(`item`, stringJson);
    //重新將資料呈現在頁面上
    createlist();
};
