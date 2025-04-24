import request from "./tools/request";
import renderPage from "./render/page";
import { URL } from "./tools/constants";

request(URL).then((data) => renderPage(data));
