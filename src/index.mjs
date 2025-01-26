import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの内容を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // liタグの子要素に各要素を追加
  div.appendChild(p);
  li.appendChild(div);

  //  未完了リストへの追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
