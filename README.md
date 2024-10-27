# temp-nextjs

- Nextjs のテンプレートです。

## 開発環境のセットアップ

前提:

- Node 18
- Yarn 1.22+

```bash
git clone git@github.com:yu-takahashi-314/temp-nextjs.git
cd temp-nextjs
yarn
```

`yarn dev` を実行して <http://localhost:3000> の開発サーバーを立ち上げます

アプリケーションは <http://localhost:3000> で確認できます

`yarn build:local` はローカル開発用の設定でアプリケーションをビルドします。

`yarn build:dev` 開発環境用の設定でアプリケーションをビルドします。

`yarn build:stg` ステージング環境用の設定でアプリケーションをビルドします。

`yarn build:prod` は本番環境用の設定でアプリケーションをビルドします。

`yarn lint` は Next.js に組み込まれた ESLint の設定をします。

参考: <https://nextjs-ja-translation-docs.vercel.app/docs/getting-started>

## テスト方法

### パフォーマンス分析

`yarn analyze` 自動でブラウザが立ち上がるので、バンドルサイズ等の確認を行う

参考: <https://fwywd.com/tech/next-bundle-analyzer>

## デプロイ、リリース方法

TODO:

## 設計資料・コーディング規約等のリンク

TODO:

## 開発プロセス

TODO:

## 目次

- [docs/README.md](docs/README.md)
