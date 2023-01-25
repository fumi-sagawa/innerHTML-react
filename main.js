//要素の取得
const target = document.getElementById("app");

//HTMLの挿入
const Title = () => {
  return `
    <h1>element.innerHTMLとテンプレートリテラルで掴むReactの動き方</h1>
  `;
};

const List = () => {
  return `
  <ul class="list">
    <li class="listItem">
      <h2>見出し</h2>
      <p>サンプルテキストサンプルテキストサンプルテキスト</p>
    </li>
    <li>
      <h2>見出し</h2>
      <p>サンプルテキストサンプルテキストサンプルテキスト</p>
    </li>
    <li>
      <h2>見出し</h2>
      <p>サンプルテキストサンプルテキストサンプルテキスト</p>
    </li>
    <li>
      <h2>見出し</h2>
      <p>サンプルテキストサンプルテキストサンプルテキスト</p>
    </li>
    <li>
      <h2>見出し</h2>
      <p>サンプルテキストサンプルテキストサンプルテキスト</p>
    </li>
    <li>
      <h2>見出し</h2>
      <p>サンプルテキストサンプルテキストサンプルテキスト</p>
    </li>
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
