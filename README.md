## YoutubeMP3変換アプリ

Youtubeの動画をMP3形式に変換するためのシンプルなコンバーターです。<br>
RapidAPIに登録されているYoutube MP3 APIを利用しています。<br>
無料枠で1日当たり50件まで変換できます。<br>

### インストール

1. リポジトリをクローン
```
git clone https://github.com/glkt3912/YoutubeToMp3.git
```
2. パッケージをインストール
```
yarn install
```
3. [RapidAPI](https://rapidapi.com/)でアカウント登録
  - 提携する数千以上のAPIを登録するだけで利用できるサイト
  - 今回利用するYoutubeMP3APIは無料枠で利用可能
4. [Youtube Mp3](https://rapidapi.com/ytjar/api/youtube-mp36/)から`API_KEY`と`API_HOST`を取得し、`.env` ファイルに記述

### 利用方法

1. ローカルサーバーを起動
```
yarn dev
```
2. ダウンロードしたいYoutubeのビデオIDを入力フォームに入力
3. `Convert` ボタンを押し、変換終了まで待機
4. 変換が問題なく完了出来次第、`Download`ボタンが表示されるので押して MP3ファイルをダウンロード

### 使用パッケージ

* express
* nodemon
* node-fetch
* dotenv
* ejs
* font-awesome ※CDN