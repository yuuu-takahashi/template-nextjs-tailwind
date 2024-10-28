# template-nextjs-tailwind

## Next.jsテンプレート

このリポジトリはNext.jsのテンプレートプロジェクトです

### 技術スタック

このプロジェクトは、以下の技術を使用して構築されています

- **Next.js**: 静的サイトジェネレーター(SSG)として使用
- **Tailwind CSS**: スタイリングに使用
- **Jest**: テストフレームワークとして使用
- **ESLint**: コード品質のための静的解析ツールとして使用
- **Prettier**: コードフォーマッターとして使用し、一貫したコードスタイルを保つ
- **Sharp**: 画像圧縮ツールとして使用し、プロジェクト内の画像の最適化を行う

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

以下のコマンドを実行して開発サーバーを起動します

```bash
yarn dev
```

開発サーバーは <http://localhost:3000> で確認できます

### ビルドコマンド

以下のコマンドは、プロジェクトのビルドと静的ファイルの確認に使用します

- `yarn build`: プロジェクトを開発用にビルドします、このコマンドでは、以下の処理が実行されます
  - コードの品質をチェックするために `yarn lint` が実行されます
  - コードをフォーマットするために `yarn format` が実行されます
  - ビルド先の `out/` ディレクトリ内の画像を圧縮・最適化するために `yarn imagemin` が実行されます
- `yarn build:prod`: プロジェクトを本番用にビルドします。このコマンドでは、以下の処理が実行されます
- `yarn serve`: 開発用ビルドを実行し、ビルドされた静的ファイルを確認するためのサーバーを起動します
- `yarn serve:prod`: 本番環境用ビルドを実行し、ビルドされた静的ファイルを確認するためのサーバーを起動します

## テスト方法

### テストの実行

以下のコマンドを実行してテストを実行します

```bash
yarn test
```

### スナップショットの更新

以下のコマンドを実行してスナップショットを更新します

```bash
yarn test:update
```

### テストのウォッチモード

以下のコマンドを実行してウォッチモードでテストを実行します

```bash
yarn test:watch
```

ウォッチモードでは、ファイルの変更を監視し、自動的にテストが再実行されます

### パフォーマンス分析

以下のコマンドを実行すると、自動でブラウザが立ち上がりバンドルサイズ等の確認ができます

```bash
yarn analyze
```

参考: <https://fwywd.com/tech/next-bundle-analyzer>

## デプロイ、リリース方法

### デプロイ手順

1. ビルドコマンドを実行して静的ファイルを生成します

  ```bash
  yarn build:prod
  ```

1. `out/` ディレクトリに生成されたファイルをウェブサーバーにアップロードします

## 参考

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jest Documentation](https://jestjs.io/docs/en/getting-started)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
