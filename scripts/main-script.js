import { initDesktop } from "./desktop-script.js";
import { initMobile } from "./mobile-script.js";
if (window.innerWidth > 768) {
   initDesktop();
}else{
    initMobile();
}