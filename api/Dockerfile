
# 基にするDockerイメージ
# 現在のNode.jsの推奨バージョンがインストールされている
FROM node:10.15.1-stretch-slim

# パッケージ群のインストール

# Webフレームワーク
RUN npm install -g express

# Node.jsでCouchDBを扱うための公式ライブラリ
RUN npm install -g nano

# HTTPリクエストのボディをパースするためのミドルウェア
RUN npm install -g body-parser

# テストフレームワーク
RUN npm install -g mocha

# オブジェクトや関数をディープコピーするためのパッケージ
RUN npm install -g deepcopy

# 日付や時間を簡単に扱うことができるパッケージ
RUN npm install -g date-utils

# コンテナがTCP80ポートでlistenすることをDockerに通知
EXPOSE 80
