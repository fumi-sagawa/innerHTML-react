//要素の取得
const target = document.getElementById("app");

//HTMLの挿入
const Title = () => {
  return `
    <h1>element.innerHTMLとテンプレートリテラルで掴むReactの動き方</h1>
    <p>こんにちは世界。</p>
  `;
};

const ListItem = () => {
  return `
  <li>
    <h2>見出し</h2>
    <p>サンプルテキストサンプルテキストサンプルテキスト</p>
  </li>
  `;
};

const List = () => {
  return `
  <ul class="list">
    ${ListItem()}
    ${ListItem()}
    ${ListItem()}
    ${ListItem()}
    ${ListItem()}
    ${ListItem()}
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
