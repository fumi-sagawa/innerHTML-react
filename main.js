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
  return `
  <ul class="list">
    ${ListItem({ title: "タイトル1", text: "テキスト1" })}
    ${ListItem({ title: "タイトル2", text: "テキスト2" })}
    ${ListItem({ title: "タイトル3", text: "テキスト3" })}
    ${ListItem({ title: "タイトル4", text: "テキスト4" })}
    ${ListItem({ title: "タイトル5", text: "テキスト5" })}
    ${ListItem({ title: "タイトル6", text: "テキスト6" })}
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
