export function BMap(ak) {
  return new Promise(function (resolve, reject) {
    window.onload = function () {
      resolve(BMap)
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=OVgMJWD3i5EulKzpwYMdinhVu33BX91v&callback=init";
    script.onerror = reject;
    document.head.appendChild(script);
  })
}
