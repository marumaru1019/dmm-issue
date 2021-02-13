// Bootstrapのスタイルシート側の機能を読み込む
// webpack.config.jsでcssを読み取れるようにへんこうを加える
import "bootstrap/dist/css/bootstrap.min.css";

// BootstrapのJavaScript側の機能を読み込む
import "bootstrap";

// fontawesomeを使う設定
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/css/all.css";

// aosを使用する設定
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// tailswindcssを使えるようにする設定
import "tailwindcss/tailwind.css";

import "./scss/style.scss";

import "./js/style.js";