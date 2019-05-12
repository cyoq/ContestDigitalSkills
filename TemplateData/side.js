var btn = document.getElementsByClassName("btn")[0]; 

btn.onclick = () => {
    var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Build_WebGL.json", {onProgress: UnityProgress});
    btn.classList.add("hidden");
};