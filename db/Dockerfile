
# 基にするDockerイメージ
FROM couchdb:2.3.0

# CouchDBの設定ファイルを書き換え、
# データベースファイルの保存場所を/db/dataに変更
RUN sed -i -e '8i database_dir = /db/data' /opt/couchdb/etc/local.ini

# コンテナがTCP5984ポートでlistenすることをDockerに通知
EXPOSE 5984
