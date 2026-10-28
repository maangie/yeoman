# yeoman

[yo angular generator](https://github.com/yeoman/generator-angular) v0.16.0 で生成した AngularJS 1.x アプリケーションの雛形です。

## 技術スタック

| 用途 | 使用技術 |
|---|---|
| フレームワーク | AngularJS 1.4 系（`ngRoute` / `ngAnimate` / `ngCookies` / `ngResource` / `ngSanitize` / `ngTouch`） |
| UI / スタイル | Bootstrap 3（`bootstrap-sass-official`）、SCSS（Compass） |
| フロントエンドのパッケージ管理 | Bower |
| ビルド | Grunt |
| テスト | Karma + Jasmine + PhantomJS |
| Lint | JSHint、JSCS |

## ディレクトリ構成

```
app/
  index.html               エントリーポイント
  scripts/app.js           メインモジュール yeomanApp とルーティング設定
  scripts/controllers/     コントローラー（MainCtrl / AboutCtrl）
  views/                   ビューテンプレート（main.html / about.html）
  styles/main.scss         スタイルシート
  images/                  画像
test/
  karma.conf.js            Karma の設定
  spec/controllers/        コントローラーのユニットテスト
Gruntfile.js               Grunt のタスク定義
bower.json                 フロントエンドの依存パッケージ
package.json               開発用の依存パッケージ
```

## ルーティング

| パス | コントローラー | テンプレート |
|---|---|---|
| `/` | `MainCtrl` | `views/main.html` |
| `/about` | `AboutCtrl` | `views/about.html` |

上記以外のパスは `/` にリダイレクトします。

## セットアップ

```sh
npm install
bower install
```

## ビルドと開発

| コマンド | 内容 |
|---|---|
| `grunt` | Lint・テスト・ビルドをまとめて実行します |
| `grunt build` | 本番用にビルドし、`dist/` に出力します |
| `grunt serve` | 開発サーバーを起動します。ファイルを変更するとブラウザが自動で再読み込みされます |
| `grunt serve:dist` | ビルドしたうえで `dist/` を配信してプレビューします |

## テスト

```sh
npm test
```

Karma でユニットテストを実行します。

`grunt test` でも実行できるように定義されていますが、Karma を Grunt から呼ぶための `grunt-karma` が `package.json` に入っていません。使う場合は別途インストールしてください（`grunt` の既定タスクも `test` を含むため同様です）。

## 注意事項

依存パッケージ（Grunt 0.4 系のプラグイン、Bower、PhantomJS など）が古いため、最近の Node.js ではインストールやビルドが失敗することがあります。
