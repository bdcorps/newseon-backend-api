var playlistImages = [
  "https://images.unsplash.com/photo-1538675274373-3a056523b602?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b33d86c9c58dc31bdf59d4b34aed5ca7&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1538678219180-f423794aa26c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b85ea6fdc6203a08240f6e565760a765&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1538739204988-d0b7904aba5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=560e7d1782dd0a416feb6b1277812083&auto=format&fit=crop&w=1355&q=80",
  "https://images.unsplash.com/photo-1538666829705-df0aef1c13d1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1723448915d07de2e50372f28d9a1cdf&auto=format&fit=crop&w=1367&q=80",
  "https://images.unsplash.com/photo-1538652116325-8f5fa30fefff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d13ce3021db6e91ab2c19d9f3d5c69f3&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1538666986359-7be4d223e7de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35971b042c65645c77a1f9052a52fdca&auto=format&fit=crop&w=634&q=80"
];

var getMedia = function() {
  return playlistImages[Math.floor(Math.random() * playlistImages.length)];
}

module.exports = {getMedia};
