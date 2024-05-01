module.exports = {
  // 何をコンパイルしますか
  entry : {
    bundle : "./src/index.ts",
  },
  // どこに出力しますか
  output : {
    path : `${__dirname}/dist`,
    filename : "[name].js",
  },
  // developモード？productionモード？
  mode : "development",

  // 自動的に.tsや.jsを認識してくれる
  resolve : {
    extensions : [".ts", ".js"],
  },

  // ローカルサーバーを立ち上げる時、どこをみに行きますか
  // →コンパイルし終わったtsフォルダをみにいってくださいね
  devServer : {
    static : {
      directory : `${__dirname}/dist`,
    },
    open : true,
  },

  // ファイルのルールの設定
  module : {
    rules : [{
        // 拡張子が.tsのファイルをコンパイル
        test : /\.ts$/,
        // どうやって？
        loader : "ts-loader",
      }],
  },
};  