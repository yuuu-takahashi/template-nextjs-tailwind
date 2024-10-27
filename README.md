# template-nextjs-tailwind

## Next.js テンプレート

このリポジトリは Next.js のテンプレートプロジェクトです。

## 開発環境のセットアップ

### 前提条件

- Node.js 20.12.0
- Yarn 1.22+

### セットアップ手順

```bash
git clone git@github.com:yuuu-takahashi/template-nextjs-tailwind.git
cd template-nextjs-tailwind
yarn
```

### 開発サーバーの起動

以下のコマンドを実行して開発サーバーを起動します。

```bash
yarn dev
```

開発サーバーは <http://localhost:3000> で確認できます。

### ビルドコマンド

- `yarn build:local` ローカル開発用のビルド
- `yarn build:dev` 開発環境用のビルド
- `yarn build:prod` 本番環境用のビルド

### その他のコマンド

- `yarn lint` ESLint の実行

参考: <https://nextjs-ja-translation-docs.vercel.app/docs/getting-started>

## テスト方法

### パフォーマンス分析

以下のコマンドを実行すると、自動でブラウザが立ち上がりバンドルサイズ等の確認ができます。

```bash
yarn analyze
```

参考: <https://fwywd.com/tech/next-bundle-analyzer>

## デプロイ、リリース方法

TODO: デプロイ手順を記載

## 設計資料・コーディング規約等のリンク

TODO: 設計資料やコーディング規約のリンクを記載

## 開発プロセス

TODO: 開発プロセスを記載

## 目次

- [docs/README.md](docs/README.md)
