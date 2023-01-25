//要素の取得
const target = document.getElementById("app");

//HTMLの挿入
const Title = () => {
  return `
    <h1>element.innerHTMLとテンプレートリテラルで掴むReactの動き方</h1>
    <p>こんにちは世界。</p>
  `;
};

// propps : {title: string, text: string}
const ListItem = (props) => {
  return `
  <li>
    <h2>${props.title}</h2>
    <p>${props.text}</p>
  </li>
  `;
};

const List = () => {
  const itemList = [
    { title: "タイトル1", text: "テキスト1" },
    { title: "タイトル2", text: "テキスト2" },
    { title: "タイトル3", text: "テキスト3" },
    { title: "タイトル4", text: "テキスト4" },
    { title: "タイトル5", text: "テキスト5" },
    { title: "タイトル6", text: "テキスト6" },
  ];

  return `
  <ul class="list">
    ${itemList.map((item) => ListItem(item)).join("")}
  </ul>
  `;
};

const Layout = () => {
  return `
  <div class="layout">
    ${Title()}
    ${List()}
  </div>`;
};

target.innerHTML = Layout();
