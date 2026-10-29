# yeoman

Angular 22 で作られたシンプルなアプリケーションです。もとは [yo angular generator](https://github.com/yeoman/generator-angular) v0.16.0 で生成した AngularJS 1.x の雛形でしたが、Angular 22 に移行しました。

## 技術スタック

| 用途 | 使用技術 |
|---|---|
| フレームワーク | Angular 22（スタンドアロンコンポーネント、`@angular/router`） |
| 言語 | TypeScript 6.0 |
| スタイル | Bootstrap 5、SCSS |
| ビルド・開発サーバー | Angular CLI（`@angular/build`） |
| テスト | Vitest + jsdom |
| Lint | ESLint（angular-eslint） |
| CI・公開 | GitHub Actions、GitHub Pages |
| 依存の更新 | Dependabot |

## 必要な環境

Node.js 22.22.3 以上、24.15.0 以上、または 26 以上（Angular CLI 22 の要件）。

## ディレクトリ構成

```
.github/
  workflows/deploy.yml     CI と GitHub Pages への公開
  dependabot.yml           Dependabot の設定
src/
  index.html               エントリーポイント
  main.ts                  アプリの起動処理
  styles.scss              グローバルなスタイル
  app/
    app.ts, app.html       ルートコンポーネント（ナビゲーションとフッター）
    app.config.ts          アプリの設定（ルーターなど）
    app.routes.ts          ルーティング設定
    main/                  トップページのコンポーネント
    about/                 About ページのコンポーネント
public/                    そのまま配信される静的ファイル（画像、favicon など）
angular.json               Angular CLI の設定
eslint.config.js           ESLint の設定
```

## ルーティング

| パス | コンポーネント |
|---|---|
| `/` | `Main` |
| `/about` | `About` |

URL は従来と同じ `#/about` のようなハッシュ形式です。上記以外のパスは `/` にリダイレクトします。

## セットアップ

```sh
npm install
```

## 開発

| コマンド | 内容 |
|---|---|
| `npm start` | 開発サーバーを起動します（http://localhost:4200 ）。ファイルを変更するとブラウザが自動で再読み込みされます |
| `npm run build` | 本番用にビルドし、`dist/yeoman/browser/` に出力します |
| `npm run watch` | 開発用の設定でビルドし続けます |
| `npm test` | Vitest でユニットテストを実行します |
| `npm run lint` | ESLint を実行します |

## CI と公開

GitHub Actions のワークフロー `Build and Deploy`（`.github/workflows/deploy.yml`）で、lint・テスト・ビルドを実行します。

| きっかけ | 内容 |
|---|---|
| `master` 向けの PR | lint・テスト・ビルドだけを実行します |
| `master` への push | ビルドしたものを GitHub Pages に公開します |
| 手動実行（`workflow_dispatch`） | `master` への push と同じです |

公開先は https://maangie.github.io/yeoman/ です。

`master` にはルールセットを設定していて、`build` ジョブが成功していない PR はマージできません。`master` への直接の push も、`build` が成功していないコミットは拒否されます。変更は PR から入れてください。

## 依存の更新

Dependabot が npm と GitHub Actions の依存を週に 1 回確認し、更新の PR を作ります。

- `@angular/*` と `angular-eslint` は、バージョンをそろえるため 1 つの PR にまとめます。
- TypeScript 7.0 系への更新は見送っています。Angular 22.2 が TypeScript 6.0 にしか対応していないためです。7.1 の正式版が出たら、Angular の対応を確かめて一緒に上げます。

## 移行前の構成との違い

- Grunt、Bower、Karma、PhantomJS、JSHint、JSCS は使わなくなりました。
- AngularJS のコントローラーとビューは、Angular のコンポーネントに書き換えました。
- Bootstrap 3 から 5 に上げました。`jumbotron` と `glyphicon` は Bootstrap 5 にないため、スタイルと文字で置き換えています。
- 使われていなかった Google Analytics（ユニバーサル アナリティクス）のスニペットは削除しました。
