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
    { title: "タイトル1", text: "テキスト1", flag: true },
    { title: "タイトル2", text: "テキスト2", flag: false },
    { title: "タイトル3", text: "テキスト3", flag: true },
    { title: "タイトル4", text: "テキスト4", flag: false },
    { title: "タイトル5", text: "テキスト5", flag: true },
    { title: "タイトル6", text: "テキスト6", flag: false },
  ];

  //itemListをフィルタリングするかどうかのフラグ
  const filterlingFlag = true;

  //flagによってフィルタリングする
  const filteredItemList = itemList.filter((item) => {
    return item.flag === filterlingFlag;
  });

  return `
  <ul class="list">
    ${filteredItemList.map((item) => ListItem(item)).join("")}
  </ul>
  <span>${filterlingFlag ? "true" : "false"}<span>
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
