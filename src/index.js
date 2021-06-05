import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list_row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //Button作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了から削除
    deleteFromIncompleteList(completeButton.parentNode);
    // const completeTarget = completeButton.parentNode;
    // document.getElementById("incomplete_list").removeChild(completeTarget);

    //完了リストに追加する
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //戻すボタン押したときに、未完了リストに戻すようにする。
    backButton.addEventListener("click", () => {
      const BackDeleteTarget = backButton.parentNode;
      document.getElementById("complete_list").removeChild(BackDeleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了のリストに追加
    document.getElementById("complete_list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    //const deleteTarget = deleteButton.parentNode;
    //document.getElementById("incomplete_list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete_list").appendChild(div);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
