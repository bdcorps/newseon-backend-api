var sampleArticle = {
  content: {
    status: "ok",
    totalResults: 20,
    articles: [
      {
        source: { id: "cnn", name: "CNN" },
        author: "Tal Kopan, CNN",
        title:
          "Judge slams Trump admin for suggesting ACLU, others should find deported parents",
        description:
          'A federal judge called the Trump administration\'s slowness to track down migrant parents it had separated from their children and then deported "unacceptable," saying the responsibility is "100%" on the government.',
        url:
          "https://www.cnn.com/2018/08/03/politics/trump-administration-aclu-deported-parents/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/180725180200-reunited-father-daughter-0724-super-tease.jpg",
        publishedAt: "2018-08-03T21:37:00Z"
      },
      {
        source: { id: null, name: "Usnews.com" },
        author: null,
        title: "New York Seeks Dismissal of NRA Suit Claiming 'Blacklisting'",
        description: null,
        url:
          "https://www.usnews.com/news/us/articles/2018-08-03/nra-sues-new-york-officials-for-hurting-ability-to-operate",
        urlToImage: null,
        publishedAt: "2018-08-03T21:24:00Z"
      },
      {
        source: { id: null, name: "Espn.com" },
        author: null,
        title: "Urban Meyer says he didn't handle Zach Smith questions right",
        description:
          'Ohio State coach Urban Meyer has issued a statement saying that he "failed" when he said he didn\'t know about a series of domestic violence cases involving his ex-assistant coach Zach Smith.',
        url:
          "http://www.espn.com/college-football/story/_/id/24277713/urban-meyer-says-failed-media-day-dealing-zach-smith",
        urlToImage:
          "http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0802%2Fr409314_1296x729_16%2D9.jpg",
        publishedAt: "2018-08-03T20:58:49Z"
      },
      {
        source: { id: "abc-news", name: "ABC News" },
        author: "The Associated Press",
        title: "Northern California wildfire created destructive tornado",
        description:
          "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
        url:
          "https://abcnews.go.com/US/wireStory/rising-winds-forecast-northern-california-wildfire-zones-57011859",
        urlToImage:
          "https://s.abcnews.com/images/US/WireAP_76a73daf54124ac5b05307bbd15b404e_16x9_992.jpg",
        publishedAt: "2018-08-03T20:57:00Z"
      },
      {
        source: { id: "the-washington-post", name: "The Washington Post" },
        author: "http://www.facebook.com/dana.hedgpeth",
        title:
          "After evacuations and fears of collapse, Lynchburg, Va., officials say dam is 'stable and safe'",
        description:
          "The National Weather Service said College Lake Dam was at risk after days of heavy rain.",
        url:
          "https://www.washingtonpost.com/local/evacuations-ordered-near-lynchburg-va-after-warnings-of-possible-dam-collapse/2018/08/03/cfb16d02-9715-11e8-80e1-00e80e1fdf43_story.html",
        urlToImage:
          "https://www.washingtonpost.com/resizer/p-6TJBwVEEZuO2lJaKGFYPvcSX0=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BLKDQZEXJYI6RAML5G3TJDGYPU.jpg",
        publishedAt: "2018-08-03T20:55:18Z"
      },
      {
        source: { id: "fox-news", name: "Fox News" },
        author: "Associated Press",
        title: "The Latest: Relatives paint inconsistent picture of gunman",
        description:
          "The Latest on the final report into the Oct. 1 mass shooting in Las Vegas that killed 58 people (all times local): 10:05 a.m.",
        url:
          "http://www.foxnews.com/us/2018/08/03/latest-brother-vegas-shooter-says-was-delusional.html",
        urlToImage:
          "http://a57.foxnews.com/images.foxnews.com/content/fox-news/us/2018/08/03/latest-brother-vegas-shooter-says-was-delusional/_jcr_content/par/featured-media/media-0.img.png/0/0/1533319090154.png?ve=1",
        publishedAt: "2018-08-03T20:48:45Z"
      },
      {
        source: { id: "usa-today", name: "USA Today" },
        author: "Hawa Konte and Arielle Buchmann",
        title:
          "12-year-old girl at center of Amber Alert found safe in New York City",
        description:
          "JinJing Ma was thought to be in danger after she was last seen Thursday leaving Reagan Washington National Airport. She was in the U.S. from China.",
        url:
          "https://www.usatoday.com/story/news/nation-now/2018/08/03/amber-alert-girl-12-abducted-reagan-national-airport/896659002/",
        urlToImage:
          "https://www.gannett-cdn.com/-mm-/0fb854c5fc292bf8e9ea056c9dc3928ca198d7bf/c=0-62-2000-1192/local/-/media/2018/08/03/USATODAY/USATODAY/636688801695140638-airport-abduction-080318.JPG?width=3200&height=1680&fit=crop",
        publishedAt: "2018-08-03T20:17:43Z"
      },
      {
        source: { id: "fox-news", name: "Fox News" },
        author: "Associated Press",
        title: "Cops: Man stabs, runs over estranged girlfriend, killing her",
        description:
          "A man stabbed and then repeatedly drove over his estranged girlfriend, crushing her in a fatal attack as her suburban Philadelphia co-workers tried to help her early Friday morning, authorities said.",
        url:
          "http://www.foxnews.com/us/2018/08/03/cops-man-stabs-runs-over-estranged-girlfriend-killing-her.html",
        urlToImage:
          "http://global.fncstatic.com/static/orion/styles/img/fox-news/og/og-fox-news.png",
        publishedAt: "2018-08-03T19:59:26Z"
      },
      {
        source: { id: "politico", name: "Politico" },
        author: "https://www.facebook.com/darrensamuelsohn",
        title:
          "Manafort trial day 4: Accountant concedes possible wrongdoing, Manafort's double life",
        description:
          "“They never told us about any income deposited in foreign accounts,“ Manafort's accountant told jurors.",
        url:
          "https://www.politico.com/story/2018/08/03/paul-manafort-trial-2018-761300",
        urlToImage:
          "https://static.politico.com/76/40/ee5a4b49444f9376c641959dd467/180803-courthouse.jpg",
        publishedAt: "2018-08-03T19:57:45Z"
      },
      {
        source: { id: "nbc-news", name: "NBC News" },
        author: "David Wasserman",
        title:
          "65 races will decide the House. Here's how Democrats could take control.",
        description:
          "Trump's low approval ratings, Democrats' enthusiasm edge and a historic number of GOP open seats make Democrats the slight favorites to take control in the lower chamber.",
        url:
          "https://www.nbcnews.com/politics/elections/65-races-will-likely-decide-house-here-s-how-democrats-n897366",
        urlToImage:
          "https://media3.s-nbcnews.com/j/newscms/2018_31/2519351/180803-pelosi-ryan-mn-1255_22b0f785e750f51b22e40d79e7d90aab.1200;630;7;70;5.jpg",
        publishedAt: "2018-08-03T19:32:55Z"
      },
      {
        source: { id: "the-new-york-times", name: "The New York Times" },
        author: "https://www.nytimes.com/by/matthew-haag",
        title:
          "2 Workers at Arizona Migrant Children Centers Are Charged With Sexual Abuse",
        description:
          "The authorities recently detailed the charges against the men, Fernando Magaz Negrete and Levian D. Pacheco, who worked at centers operated by Southwest Key Programs.",
        url:
          "https://www.nytimes.com/2018/08/03/us/sexual-abuse-arizona-migrant-children.html",
        urlToImage:
          "https://static01.nyt.com/images/2018/08/04/business/04xp-southwest/04xp-southwest-facebookJumbo.jpg",
        publishedAt: "2018-08-03T19:24:42Z"
      },
      {
        source: { id: "the-huffington-post", name: "The Huffington Post" },
        author: "Christopher Mathias",
        title:
          "Portland's Patriot Prayer Rally Could Be Most Violent Since Charlottesville, Activists Say",
        description:
          'The last far-right rally by Proud Boys and Patriot Prayer was declared a riot. Experts think this weekend could be even worse than 2017\'s deadly "Unite the Right" event.',
        url:
          "https://www.huffingtonpost.com/entry/portland-patriot-prayer-proud-boys-rally_us_5b646217e4b0de86f4a0ba04",
        urlToImage:
          "https://img.huffingtonpost.com/asset/5b64693d19000016035010ba.jpeg?ops=1200_630",
        publishedAt: "2018-08-03T19:03:32Z"
      },
      {
        source: { id: "fox-news", name: "Fox News" },
        author: "Kaitlyn Schallhorn",
        title:
          "What is QAnon, the conspiracy theory group showing up to Trump rallies?",
        description:
          "As President Trump has traveled across the country this week, a number of spectators have been spotted holding up giant cutouts of the letter Q and wearing T-shirts with the hashtag, #WeAreQ.",
        url:
          "http://www.foxnews.com/politics/2018/08/03/what-is-qanon-conspiracy-theory-group-showing-up-to-trump-rallies.html",
        urlToImage:
          "http://a57.foxnews.com/images.foxnews.com/content/fox-news/politics/2018/08/03/what-is-qanon-conspiracy-theory-group-showing-up-to-trump-rallies/_jcr_content/par/featured_image/media-0.img.jpg/0/0/1533316647392.jpg?ve=1",
        publishedAt: "2018-08-03T18:51:59Z"
      },
      {
        source: { id: "nbc-news", name: "NBC News" },
        author: "Carmen Sesin, Anthony Terrell, Erik Ortiz, Jesse North",
        title:
          "Iraq War veteran's wife deported to Mexico after wanting Trump to intervene",
        description:
          "Alejandra Juarez, 39, who had been living in Davenport, Florida, had an emotional goodbye with her family Friday, her attorney said.",
        url:
          "https://www.nbcnews.com/news/latino/iraq-war-veteran-s-wife-faces-deportation-friday-family-asks-n897031",
        urlToImage:
          "https://media2.s-nbcnews.com/j/MSNBC/Components/Video/201808/f_tov_juarez_180801_wip.1200;630;7;70;5.jpg",
        publishedAt: "2018-08-03T18:41:37Z"
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Jason Hanna, CNN",
        title:
          "Suspect in Houston doctor's killing commits suicide as police confront him, chief says",
        description:
          "The man suspected of killing a prominent Houston doctor in broad daylight two weeks ago fatally shot himself in the head as two police officers confronted him on Friday morning, Police Chief Art Acevedo said.",
        url:
          "https://www.cnn.com/2018/08/03/us/mark-hausknecht-houston-doctor-suspect/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/180801152146-joseph-james-pappas-houston-suspect-screengrab-super-tease.jpg",
        publishedAt: "2018-08-03T16:18:08Z"
      },
      {
        source: { id: "the-washington-post", name: "The Washington Post" },
        author: "https://www.facebook.com/karin.jacobsonbrulliard",
        title:
          "Dozens of professional goats briefly took over a neighborhood in Boise",
        description:
          "A large herd of goats decided to do overtime in a residential neighborhood.",
        url:
          "https://www.washingtonpost.com/news/animalia/wp/2018/08/03/dozens-of-professional-goats-briefly-took-over-a-neighborhood-in-boise/",
        urlToImage:
          "https://www.washingtonpost.com/resizer/PmZvxXV9gqe3jAHZyePLKqFOwxE=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WYZVA2VORQYABCGHBPE6NSUGNE.png",
        publishedAt: "2018-08-03T16:08:05Z"
      },
      {
        source: { id: "fox-news", name: "Fox News" },
        author: "Chris Ciaccia",
        title:
          "WARNING GRAPHIC IMAGES: Dead fish, turtles, manatees wash up on southwest Florida beaches",
        description:
          "It may be interesting to look at, but an explosion of red tide algae off the coast of southwestern Florida is killing off marine animals in record numbers, decimating the population of creatures such as fish, sea turtles, manatees and more.",
        url:
          "http://www.foxnews.com/science/2018/08/03/warning-graphic-images-dead-fish-turtles-manatees-wash-up-on-southwest-florida-beaches.html",
        urlToImage:
          "http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2018/08/03/0/0/694940094001_5817710220001_5817705738001-vs.jpg?ve=1",
        publishedAt: "2018-08-03T15:58:33Z"
      },
      {
        source: { id: "the-washington-post", name: "The Washington Post" },
        author: "https://www.facebook.com/emilyrauhala?fref=ts",
        title:
          "China warns it could fire back with tariffs on $60 billion in US goods",
        description:
          "Beijing said the duties are a response to a U.S. threat to raise the proposed tariff rate on $200 billion worth of Chinese goods.",
        url:
          "https://www.washingtonpost.com/world/asia_pacific/china-warns-it-could-fire-back-with-tariffs-of-60-billion-in-us-goods/2018/08/03/57ffbf56-9716-11e8-8ffb-5de6d5e49ada_story.html",
        urlToImage:
          "https://www.washingtonpost.com/resizer/AqLdigRII9psxis8707q99k3p5I=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EWWX5KEXDMI6RAIML6TQLET5KQ.jpg",
        publishedAt: "2018-08-03T15:51:26Z"
      },
      {
        source: { id: "abc-news", name: "ABC News" },
        author: "Morgan Winsor and Kelly McCarthy",
        title:
          "Missing University of Iowa student's boyfriend speaks out: 'Just imagine if somebody had taken your Mollie'",
        description:
          "It's been more than two weeks since Dalton Jack last saw or heard from his girlfriend, 20-year-old Mollie Tibbetts, before she mysteriously vanished in a rural Iowa town.",
        url:
          "https://abcnews.go.com/GMA/News/missing-university-iowa-students-boyfriend-speaks-imagine-mollie/story?id=57008629",
        urlToImage:
          "https://s.abcnews.com/images/US/missing-iowa-mollie-tibbetts-ht-mem-180723_hpMain_7_v2x1_16x9_992.jpg",
        publishedAt: "2018-08-03T12:53:07Z"
      },
      {
        source: { id: "the-washington-post", name: "The Washington Post" },
        author: "https://www.facebook.com/FactChecker",
        title:
          "The zombie claim that won't die: The media exposed bin Laden's phone.",
        description: "Hey, we debunked this back in 2005.",
        url:
          "https://www.washingtonpost.com/news/fact-checker/wp/2018/08/02/the-zombie-claim-that-wont-die-the-media-exposed-bin-ladens-phone/",
        urlToImage:
          "https://www.washingtonpost.com/resizer/Kj1pCg-p-YdDEpJieQZeb32u5Vg=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AB3GDQBSP4ZZVFSMBJKPJIZTQ4.jpg",
        publishedAt: "2018-08-02T07:46:11Z"
      }
    ]
  }
};

module.exports = sampleArticle;
