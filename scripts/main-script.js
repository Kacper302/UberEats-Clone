import { initDesktop } from "./desktop-script.js";
import { initMobile } from "./mobile-script.js";

if (window.innerWidth > 1024) {
   initDesktop();
}else{
    initMobile();
}