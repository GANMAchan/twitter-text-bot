'use strict';
const Twit = require('twit');
const cron = require('cron').CronJob;

const twitter = new Twit({
    //環境変数のAPIを読み込み
    consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
    access_token: process.env.TWITTER_API_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET
});


// ツイートの内容を含んだ配列の作成
let TweetContent = [
    "https://www.google.com/search?q=%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3&rlz=1C1CHZL_jaJP768JP768&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiDwLvJlaDkAhUsK6YKHfVYDPQQ_AUIEygC&biw=1920&bih=937"
    , "https://www.google.com/search?rlz=1C1CHZL_jaJP768JP768&biw=1920&bih=937&tbm=isch&sa=1&ei=Bp9jXdvxNM2g-QbdmJL4CQ&q=%E5%AF%BF%E5%8F%B8&oq=%E5%AF%BF%E5%8F%B8&gs_l=img.3..0l10.11704.12720..13037...0.0..0.100.382.4j1......0....1..gws-wiz-img.......0i4.I_VWTuPh5Uk&ved=0ahUKEwjbjLrKlaDkAhVNUN4KHV2MBJ8Q4dUDCAY&uact=5"
    , "https://www.google.com/search?rlz=1C1CHZL_jaJP768JP768&biw=1920&bih=937&tbm=isch&sa=1&ei=FJ9jXcrhJ5Xh-AaezKiQCA&q=%E3%83%8F%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B0&oq=%E3%83%8F%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B0&gs_l=img.3...0.0..138...0.0..0.0.0.......0......gws-wiz-img.PvA8aHZ2FAk&ved=0ahUKEwjKu4PRlaDkAhWVMN4KHR4mCoIQ4dUDCAY&uact=5"
    , "https://www.google.com/search?rlz=1C1CHZL_jaJP768JP768&biw=1920&bih=937&tbm=isch&sa=1&ei=JZ9jXePVIdii-Qb79Jq4BA&q=%E7%84%BC%E8%82%89&oq=%E7%84%BC%E8%82%89&gs_l=img.3..0l9j0i4i37.1565.2772..3289...0.0..0.106.738.9j1......0....1..gws-wiz-img.......0i4.TmX2CmixPLI&ved=0ahUKEwij_IrZlaDkAhVYUd4KHXu6BkcQ4dUDCAY&uact=5"
    , "https://www.google.com/search?rlz=1C1CHZL_jaJP768JP768&biw=1920&bih=937&tbm=isch&sa=1&ei=KZ9jXaGSHYzrwQODoK6YAg&q=%E3%82%B9%E3%83%86%E3%83%BC%E3%82%AD&oq=%E3%82%B9%E3%83%86%E3%83%BC%E3%82%AD&gs_l=img.3..0l10.8875.10105..10326...0.0..0.72.546.8......0....1..gws-wiz-img.......0i4.SMr9NtGqu-I&ved=0ahUKEwjhyvralaDkAhWMdXAKHQOQCyMQ4dUDCAY&uact=5"
];
// 配列の要素をランダムに指定
let random = [Math.floor(Math.random() * TweetContent.length)];

function post(){
    twitter.post('statuses/update', { status: TweetContent[random] }, (err, tweets, res) => {
        console.log(tweets);
    })
};

const cronJob = new cron({
    cronTime: '1 0 * * * *', //毎日1時に実行
    start: true, // newした後即時実行するかどうか
    onTick: function(){
        post();
    }
});
post();