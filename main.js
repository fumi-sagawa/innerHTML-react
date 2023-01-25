//要素の取得
const target = document.getElementById("app");

//HTMLの挿入
target.innerHTML = `
<div class="layout">
<h1>element.innerHTMLとテンプレートリテラルで掴むReactの動き方</h1>
<p>こんにちは世界。</p>
<ul class="list">
  <li class="listItem">
    <h2>サムネイル</h2>
    <p>サンプルテキストサンプルテキストサンプルテキスト</p>
  </li>
  <li>
    <h2>サムネイル</h2>
    <p>サンプルテキストサンプルテキストサンプルテキスト</p>
  </li>
  <li>
    <h2>サムネイル</h2>
    <p>サンプルテキストサンプルテキストサンプルテキスト</p>
  </li>
  <li>
    <h2>サムネイル</h2>
    <p>サンプルテキストサンプルテキストサンプルテキスト</p>
  </li>
  <li>
    <h2>サムネイル</h2>
    <p>サンプルテキストサンプルテキストサンプルテキスト</p>
  </li>
  <li>
    <h2>サムネイル</h2>
    <p>サンプルテキストサンプルテキストサンプルテキスト</p>
  </li>
</ul>
</div>
`;
