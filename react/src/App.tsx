import { useState } from "react";

const Title = () => {
  return (
    <>
      <h1>element.innerHTMLとテンプレートリテラルで掴むReactの動き方</h1>
      <p>こんにちは世界。</p>
    </>
  );
};

const ListItem = (props: { title: string; text: string }) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </li>
  );
};

const List = () => {
  //itemListをフィルタリングするかどうかのフラグ
  const [filterlingFlag, setFilterlingFlag] = useState(true);

  const itemList = [
    { title: "タイトル1", text: "テキスト1", flag: true },
    { title: "タイトル2", text: "テキスト2", flag: false },
    { title: "タイトル3", text: "テキスト3", flag: true },
    { title: "タイトル4", text: "テキスト4", flag: false },
    { title: "タイトル5", text: "テキスト5", flag: true },
    { title: "タイトル6", text: "テキスト6", flag: false },
  ];

  //flagによってフィルタリングする
  const filteredItemList = itemList.filter((item) => {
    return item.flag === filterlingFlag;
  });

  return (
    <>
      <ul className="list">{filteredItemList.map((item) => ListItem(item))}</ul>
      <span>{filterlingFlag ? "true" : "false"}</span>
    </>
  );
};

const Layout = () => {
  return (
    <div className="layout">
      <Title />
      <List />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
