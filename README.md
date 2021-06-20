# jestを用いたユニットテスト

1. package.json作成
```
yarn init
```
2. 開発環境を指定してjestをインストール
```
yarn add --dev jest
```
4. package.jsonのscriptの部分など編集。
```（例）
"scripts": {
    "test": "jest",
  }
```
4. コードを書く
5. I/Oとロジックを分離（リファクタリング）
6. テストする
```
yarn run test
```
7.カバレッジを調査
```
yarn run test --coverage
```

<img width="1433" alt="スクリーンショット 2021-06-20 18 42 51" src="https://user-images.githubusercontent.com/63830279/122669783-e7be4380-d1f9-11eb-9d75-e1d2d6ee19d2.png">


- 参考
https://qiita.com/jintz/items/61af86a12b53b24ef121
