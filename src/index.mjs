import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの内容を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // 未完了リストに追加
  createIncompleteTodo(inputText);
};

// 渡された引数を元にTODOを作成する関数
const createIncompleteTodo = (todo) => {
  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  // buttonタグ生成（完了）
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const moveTarget = deleteButton.closest("li");
    // 完了ボタンと削除ボタン削除
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    // 戻すボタンを追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // TODOの内容を取得し、未完了リストへ追加
      const todoText = backButton.previousElementSibling.innerHTML;
      createIncompleteTodo(todoText);
      // 完了のTODOから削除
      backButton.closest("li").remove();
    });
    // 戻すボタンの追加
    moveTarget.firstElementChild.appendChild(backButton);
    // 完了のTODOへ移動
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  // buttonタグ生成（削除）
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //  未完了リストへの追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
