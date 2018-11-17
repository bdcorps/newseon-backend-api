var playlistImages = [
  "https://images.unsplash.com/photo-1538675274373-3a056523b602?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b33d86c9c58dc31bdf59d4b34aed5ca7&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1538678219180-f423794aa26c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b85ea6fdc6203a08240f6e565760a765&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1538739204988-d0b7904aba5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=560e7d1782dd0a416feb6b1277812083&auto=format&fit=crop&w=1355&q=80",
  "https://images.unsplash.com/photo-1538666829705-df0aef1c13d1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1723448915d07de2e50372f28d9a1cdf&auto=format&fit=crop&w=1367&q=80",
  "https://images.unsplash.com/photo-1538652116325-8f5fa30fefff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d13ce3021db6e91ab2c19d9f3d5c69f3&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1538666986359-7be4d223e7de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35971b042c65645c77a1f9052a52fdca&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1501769214405-5e5ee5125a02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c87488878484ebc97d63b884ef804e1&auto=format&fit=crop&w=698&q=80",
  "https://images.unsplash.com/photo-1492760864391-753aaae87234?ixlib=rb-0.3.5&s=cec3cccec2ea05e8e1a0ef55f68e98ee&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1517854219002-4bd23a0c4ee7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ab25c23793ca80965107bb00dbea065&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a83d180fb19b8367250ab64751ade1ce&auto=format&fit=crop&w=648&q=80",
  "https://images.unsplash.com/photo-1511882085048-714ac60a555e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68017c48760a4c52d5398cccb0717304&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b71591bef8e4fc139f699a923725e32a&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1515606174663-ad8323c6895e?ixlib=rb-0.3.5&s=ba2ef81b13ccb3489cbc028cf2d4e643&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff847011350ec77032071202bc45a4b1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1502809701328-25d749719304?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b560c8b51abee392d17ac36b4e144ce&auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c44fe92456c78cd9fc4df04e65a7b84&auto=format&fit=crop&w=1336&q=80",
  "https://images.unsplash.com/photo-1513872398723-3e73f1205647?ixlib=rb-0.3.5&s=e2186298a4a202bfd424b127392e7d66&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1484875917039-ef5456f29257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f18a51122fabfa3e30cedd477005d32c&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1515857090479-6a2d61847629?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09241641ea4109d35c17864c3a0b8f2a&auto=format&fit=crop&w=1267&q=80"
];

var articleImages = {
  business: [
    "https://images.unsplash.com/photo-1521020773588-3b28297b1e70?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0973395dd1655ea3b8fb83fa95c02c2&auto=format&fit=crop&w=1469&q=80",
    "https://images.unsplash.com/photo-1509130298739-651801c76e96?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5faa5895582a0b8ae5f7429b59e8488&auto=format&fit=crop&w=1950&q=80"
  ],
  technology: [
    "https://images.unsplash.com/photo-1478432780021-b8d273730d8c?ixlib=rb-0.3.5&s=99f410919a74f2d18945ea7f62c5d4c3&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1dcfcaa6dafa547aa5381b603296c94&auto=format&fit=crop&w=1350&q=80"
  ],
  sports: [
    "https://images.unsplash.com/photo-1521138054413-5a47d349b7af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8cf0ea657ec9f4beb43f2cd6a6d54a6&auto=format&fit=crop&w=676&q=80",
    "https://images.unsplash.com/photo-1529281322535-245b0a3257ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6425f2048c84111b3c8f92febcaaa2ac&auto=format&fit=crop&w=1350&q=80"
  ],
  entertainment: [
    "https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=309fe659f0d0e2a5b7408b7a756613c2&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1515469826971-68d3550b0110?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f3cd3d496e02df256ff3b3aba9d2eee&auto=format&fit=crop&w=634&q=80"
  ],
  health: [
    "https://images.unsplash.com/photo-1503810473512-f64b56827964?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb44a21c4469e257a39f30949c81931d&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1493409137604-0901c55e4456?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=608c673db36723a60ea11d6ffdbc4e48&auto=format&fit=crop&w=1350&q=80"
  ]
};

var getPlaylistSplashMedia = function() {
  return playlistImages[Math.floor(Math.random() * playlistImages.length)];
};

var getArticleSplashMedia = function(category) {
  console.log(category);
  return articleImages[category][Math.floor(Math.random() * 2)];
};

module.exports = { getPlaylistSplashMedia, getArticleSplashMedia };
