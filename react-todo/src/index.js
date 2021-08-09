const createMikanryoItem = (todoText) => {
    // liタグ生成
    const li = document.createElement("li");

    // spanタグ生成
    const span = document.createElement("span");
    span.innerText = todoText;

    // OKボタン生成
    const okbutton = document.createElement("button");
    okbutton.innerText = "ＯＫ";
    okbutton.addEventListener("click", () => {
        //未完了エリアから削除
        const deleteItem = hakibutton.parentNode;
        document.getElementById("mikanryo-ul").removeChild(deleteItem);

        // liタグ生成
        const li = document.createElement("li");

        // spanタグ生成
        const span = document.createElement("span");
        span.innerText = todoText;

        // 未完了へ戻すボタン生成
        const modosubutton = document.createElement("button");
        modosubutton.innerText = "未完了へ戻す";
        modosubutton.addEventListener("click", () => {
            // 完了エリアから削除
            const deleteItem = modosubutton.parentNode;
            document.getElementById("kanryo-ul").removeChild(deleteItem);

            // 未完了エリアへ追加
            createMikanryoItem(todoText);
        });

        // liタグへ追加
        li.appendChild(span)
        li.appendChild(modosubutton)

        // 完了エリアへ追加
        const kanryoList = document.getElementById("kanryo-ul");
        kanryoList.appendChild(li);
    });

    // 破棄ボタン生成
    const hakibutton = document.createElement("button");
    hakibutton.innerText = "破棄";
    hakibutton.addEventListener("click", () => {
        // 未完了エリアから削除
        const deleteItem = hakibutton.parentNode;
        document.getElementById("mikanryo-ul").removeChild(deleteItem);
    });

    // liタグへ追加
    li.appendChild(span);
    li.appendChild(okbutton);
    li.appendChild(hakibutton);

    // 未完了エリアへ追加
    const mikanryoList = document.getElementById("mikanryo-ul");
    mikanryoList.appendChild(li);
};

const onClickAdd = () => {
  const todoText = document.getElementById("input-add").value;
  document.getElementById("input-add").value = "";

  createMikanryoItem(todoText);
};

// 追加ボタンへクリックイベントを付与
document
  .getElementById("btn-add")
  .addEventListener("click", () => onClickAdd());