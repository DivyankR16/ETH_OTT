# ETH_OTT


# Watch Flow
Team : ETH Biscuits



















Introduction :

Welcome to WatchFlow, a revolutionary decentralized application (DApp) powered by blockchain technology that is set to redefine the way we consume and pay for video content. In a world inundated with subscription-based models, WatchFlow introduces a groundbreaking "Pay as You Watch" paradigm, bringing transparency, fairness, and efficiency to the video streaming industry.
This provide edge over subscription based model where user even has to pay for videos that they don't even watches. Provide a breif Introduction for this project and also provide some stats in favour of the idea
This reduces the redundant middleman in the system which buys liscense from Video creators and sell subscriptions to watchers making a profit in between the process. In this a Smart COntract will governt the Distribution of price to producers and Taking charges from user thus reducing the redundant Layer.

 
![image](https://github.com/DivyankR16/ETH_OTT/assets/94189081/9c0b3252-8977-4d42-aae8-271e3f8bb9ad)

 
![image](https://github.com/DivyankR16/ETH_OTT/assets/94189081/d9760848-abf9-4626-9dd5-09a4ea288066)





Problem Statement:

Traditional subscription models often leave users frustrated, as they are forced to pay a fixed fee for a plethora of content, much of which goes unwatched. This not only results in financial waste but also limits the user's control over their viewing preferences. WatchFlow addresses this issue by introducing a dynamic pricing mechanism based on watch time and popularity, ensuring users only pay for what they consume.

1) Financial Waste in Subscriptions:
Traditional subscription models require users to pay a fixed fee, often monthly, regardless of how much content they actually consume.

2) Lack of Personalization:
Subscription models typically provide a one-size-fits-all approach, offering a bundle of content irrespective of individual preferences.

3) Limited Control Over Spending:
Users have limited control over their spending in subscription models, as they are committed to a fixed fee regardless of actual usage.

4) Unfair Compensation for Content Creators:
Content creators often receive a flat rate or a share of the subscription revenue, irrespective of the popularity or engagement of their specific content piece.

5) Need for Transparency:
Users and content creators often lack transparency in how subscription fees are distributed among various content providers or how revenue is allocated based on individual content popularity.



Challenges :

Existing Market Challenges :

Users end up paying for a vast array of content, a significant portion of which may go unwatched.
Users may feel frustrated by the lack of personalization, as they are forced to pay for content that does not align with their interests or viewing habits.
Lack of control can lead to dissatisfaction, especially when users realize they are paying for content they rarely or never watch.
This model fails to reward creators adequately for the popularity of their content, discouraging the production of high-quality and engaging videos.
Lack of transparency can lead to mistrust and dissatisfaction within the content creation and consumption ecosystem.


Challenges While Making the new Model :

1) Popularity Factor: 
We had to come up with a popularity factor to decide the popularity of the video. Currenty the formula we came with is as follows :

Popularity = 1 + (Likes/Views)

However some other factor can also be included in this formula such as Time Period from Upload Date.

2) Liquidity Pool // DeEx
Currently the model uses custom tokens that can be minted infinitely as and when required by the user. However intitial plan was to create a Liquidity pool of tokens with other crypto Currency. Then Exchange the Token for other crypto as payment. However, this was not possible because of lack for mainnet tokens.



Architecture :

 
![image](https://github.com/DivyankR16/ETH_OTT/assets/94189081/6a1b1737-0d96-41ab-8433-47823fe46998)




Solution :

1) User Registration and Wallet Creation:
Users start by registering on the WatchFlow platform, creating a secure and personalized account. On Registration they get free some Free Initial Tokens as Joining Bonus.
A blockchain-based digital wallet is associated with each user account, providing a secure and transparent means for transactions.

2) Deposit Funds:
Users deposit funds into their digital wallets. This can be done using various cryptocurrencies or traditional payment methods, all of which are securely processed on the blockchain.

3) Content Discovery:
Users explore a diverse range of content available on the platform, including videos, films, series, and more.
The platform employs a recommendation system based on user preferences, watch history, and trending content. This recomendation system is Powered by Graph QL.

4) Pay As you Watch Model :
Users pay a nominal fee per second of content consumed, offering a fair and personalized pricing structure. The more popular a video becomes, the higher its price per second, rewarding content creators for their engaging and sought-after productions. Pay as you Watch Model currently uses Watch Time and Popularity Factor to Calculate the Price per Second.

Popularity = 1 + (Likes/Views)

Price = WatchTime * Popularity * BaseFare

5) Dynamic Pricing:
Each video on WatchFlow is priced dynamically based on two key factors: watch time and popularity.
The longer a user watches a particular video, the more they are charged per minute.
Popular content, determined by views, likes, and other engagement metrics, commands a higher per-minute price.

6) Fair Compensation for Content Creators:
Content creators receive direct compensation based on the watch time and popularity of their videos.
Blockchain ensures secure and transparent revenue distribution, avoiding intermediaries and ensuring creators are fairly rewarded for their contributions.

7) Rating and Feedback System:
Users can provide ratings and feedback on the content they watch, contributing to the popularity factor.
The feedback system helps the platform continually refine recommendations and ensures a high-quality content catalog.

Objectives :

Fair Compensation for Creators:
Objective: Establish a system that fairly compensates content creators based on the popularity and watch time of their content.
Key Result: Encourage high-quality content creation by providing creators with a direct and transparent correlation between engagement and earnings.

Personalized User Experience:
Objective: Implement advanced recommendation algorithms to deliver a personalized content discovery experience.
Key Result: Increase user engagement and satisfaction by offering relevant and appealing content tailored to individual preferences.

Incentivize Engagement:
Objective: Encourage user engagement through a dynamic pricing model that rewards longer viewing durations and popular content.
Key Result: Foster a more interactive and engaging community, boosting the popularity of content and overall platform retention.

Continuous Improvement through Feedback:
Objective: Implement a comprehensive feedback system for users to rate and review content.
Key Result: Enhance content quality and user satisfaction by collecting valuable feedback to inform improvements and recommendations.
Automation and Efficiency:



Features :

1) Video Uploading :
This is one of the basic features of website which includes uploading the video to IPFS lighthouse. Then the obtained hash is used to create a NFT under the name of the user who uploaded the video. THen as people view and interact with the video there are chance of price increassing.

2) Video Watching :
This is one of the basic features of the website as well. All the uploaded videos are available to the user and can be accessed anytime. User must have Token more than (Video Duration * Current Price of Video) to watch the video. This amount will be deducted from the users account before watching the video as stake and when he watches the video then based on his watch time the pprice left will be given back to the user. this ensures that users pay for the video ethically.

3) Video Recomendor and Filter :
The Home page recommends the Video to the User based on their Popularity on their Landing/ Home Page. There is also functionality of Searching and Filtering Videos based on differennt categories. This feature is powered by Graph QL which uses a Graph subnet to implement the feature.

4) Subscription :
The User can subscribe to other Users to get periodically notified of the activities of other Users. This will ping all the subscribed Users whenever the uploader User uploades the Video.

5) Trandfer Video Ownership :
The Videos are stored with the owner in the form of NFT. However, ownership of these video can be easily transfered from one user to other. After transfership of video the revenue that the video will generate will be debited to the new user and it will fully belong to the new owner.

6) Automated Price Maker :
This feature is called everytime a user views a video. As soon as the user clicks on video this function is called which then calls popularity function to get popularity, to finality calculate the price per second. Then it multiplies it by watch time to take charges from user. This amount deducted from users to watch is given to the Uploader. In this way Uploader generate revenue and watchers pay for only what they watch.



Future Scope :

1) Updating Popularity Factor :
We had to come up with a popularity factor to decide the popularity of the video. Currenty the formula we came with is as follows :

Popularity = 1 + (Likes/Views)

However some other factor can also be included in this formula such as Time Period from Upload Date.

One such Formula can be demonstrated as follows :

Popularity = k1 * k2
where k1 =  Likes / Views
and k2 = log(Views)/Time Period (From Upload Date)

This method will also ensure that the popularity of a video can go down the base fare if it performs below the standard, however it will also give more benefits to the popular videos.

2) Liquidity Pool Inclusion :
Currently the model uses custom tokens that can be minted infinitely as and when required by the user. However intitial plan was to create a Liquidity pool of tokens with other crypto Currency. Then Exchange the Token for other crypto as payment. However, this was not possible because of lack for mainnet tokens.
But we plan to create many Liquidity Pools with our Tokens so that our tokens can be exchanged with many tokens which will be used for payment charges by users. These tokens then can be cashed out for Other token by uploaders to get their reward money.

3) Optimization :
The code could have been much more faster than it's current state. Due to lack of knowledge of different tools of the developer, the system takes more time consuming methods. Video is Extraccted in fomrs of block to be played at the player, which makes it a rather slow process. However, a smart and better choice for storing and playing video could have been taken.

Other than that due tp lack of time at our end, the frontend is lacking its' asthetics that it should have. So we plan to change the front end components as well for future case.





Team EthBiscuits
