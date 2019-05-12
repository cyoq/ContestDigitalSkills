var gameInstance;
var btn = document.getElementsByClassName("btn")[0]; 


btn.onclick = () => {
    gameInstance = UnityLoader.instantiate("gameContainer", "Build/Build_WebGL.json", {onProgress: UnityProgress});
};