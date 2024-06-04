campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "2008 Hong Kong legislative election",
            "summary": "Residents within the Hong Kong Special Administrative Region will have the chance to elect 60 members of the 4th Legislative Council, with 30 members being elected by geographical constituencies through direct elections, and 30 members by functional constituencies. Rising inflation, a deteriorating economy, and controversies relating to minster appointments, are all expected to be key issues in the minds of voters. The two so called camps of Hong Kong politics the Pro Beijing and Pan Democracy camps will also duke it out. The Pro Beijing camp is expected to maintain its grip over Hong Kong Politics, although nothing can be certain.<br><br>- The Pro Bejing Camp consists of the DAB, Liberal, and FTU parties.<br><br>- While the Pan Democracy Camp consists of the DP, Civic, and LSD parties, along with several smaller ones.",
            "image_url": "https://eguide.s3.amazonaws.com/flags/hongkong.gif",
            "winning_electoral_vote_number": 270,
            "advisor_url": "123",
            "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "2008 Hong Kong legislative election"
    }
]

campaignTrail_temp.credits = "Ohas"

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 25,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 1001,
        "fields": {
            "first_name": "",
            "last_name": " 公民黨 (CP)",
            "election": 20,
            "party": "Civic Party",
            "state": "Region Wide",
            "priority": 1,
            "description": "The Civic Party (CP) was founded in 2006, growing out of the  Basic Law Article 23 Concern Group, a group founded to protest the introduction of Article 23 of the Basic Law of Hong Kong, an article that if passed would have forbade so called \"treasonous\" actions against the CCP. The Law was faced with huge street protests, which succeeded in stoping the article from being passed. The CP is a Pan Democracy Party, standing for Universal Suffrage for the election of Chief Executive, the implementation of a minimum wage law, and the implementation of consumer protection laws. The 2008 election will be the first legislative election that the CP will field candidates in. In the context of a waining DP, many have high hopes that the CP will eclipse it to become the largest Pan Democracy party.",
            "color_hex": "#9929bd",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/Kpns8Bl.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1002,
        "fields": {
            "first_name": "Paul",
            "last_name": " Zimmerman (司馬文)",
            "election": 20,
            "party": "Civic",
            "state": "Pokfulam ",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.paulzimmerman.hk/uploads/2/7/2/0/27207069/published/pz_1.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "Paul Zimmerman (司馬文) was born on the fifth of November 1958 in the Netherlands. As a young man he did in fact have blonde hair, albeit dirty blonde hair, which still counts, so I don't wanna hear anything about how he's not blonde. Got that? Great. In 1984 he moved to Hong Kong to pursue a career in Banking, eventually choosing to instead pursue business, founding his own Graphic Design Company as well as co-founding Designing Hong Kong Harbourfront District, a organization devoted to improving Hong Kong's waterfronts. In 2006 he we would join the Civic Party as one of its original founders along with lawmakers Audrey Eu Yuet-mee, Albert Lai Kwong-tak and Ronny Tong Ka-wah. In 2007 he  ran against Wong Wang-tai in Stubbs Road in Wan Chai District Council loosing by a margin of 129 votes.  In 2008 he is contesting the election in the  Tourism functional constituency. While Zimmerman has impressive credentials, he's not yet been elected to the Legislative Council, hoping to be elected this election cycle. This puts him at a disadvantage with other party leaders who have extensive political experience. Despite this the CP is a new party so Zimmerman being a newcomer himself might reinforce the parties \"outsider\" image.",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50000,
        "fields": {
            "first_name": " 轻拍",
            "last_name": "(DAB)",
            "election": 20,
            "party": "Democratic Alliance for the Betterment and Progress of Hong Kong",
            "state": "NationWide",
            "priority": 1,
            "description": "Bro Beijing - <b> Not Playable</b>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/LE4834C.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50001,
        "fields": {
            "first_name": "自由黨",
            "last_name": "(LP)",
            "election": 20,
            "party": "Liberal Party",
            "state": "NationWide",
            "priority": 1,
            "description": "Pro Beijing -<b>Not Playable</b>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/LiberalParty_HK.svg/240px-LiberalParty_HK.svg.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50002,
        "fields": {
            "first_name": "工聯會",
            "last_name": "(HKFTU)",
            "election": 20,
            "party": "Hong Kong Federation of Trade Unions",
            "state": "NationWide",
            "priority": 1,
            "description": "<p>Pro Beijing -<b>Not Playable</b></p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/SHFqJIX.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50003,
        "fields": {
            "first_name": "迷幻剂",
            "last_name": "(LSD)",
            "election": 20,
            "party": "League of Social Democrats",
            "state": "Nationwide",
            "priority": 1,
            "description": "<p>Pan-democracy -<b>Not Playable</b></p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/League_of_Social_Democrats_Logo.svg/360px-League_of_Social_Democrats_Logo.svg.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50004,
        "fields": {
            "first_name": "西北世",
            "last_name": "(NWSC)",
            "election": 20,
            "party": "Neighbourhood and Worker's Service Centre",
            "state": "Nationwide",
            "priority": 1,
            "description": "<p>Pan-democracy -<b>Not Playable</b></p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Logo_of_the_Neighbourhood_and_Worker%27s_Service_Centre.svg/360px-Logo_of_the_Neighbourhood_and_Worker%27s_Service_Centre.svg.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50005,
        "fields": {
            "first_name": "香港工",
            "last_name": "(HKCTU)",
            "election": 20,
            "party": "Hong Kong Confederation of Trade Unions",
            "state": "Nationwide",
            "priority": 1,
            "description": "<p>Pan-democracy -<b>Not Playable</b></p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HKCTU_Logo.svg/300px-HKCTU_Logo.svg.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50006,
        "fields": {
            "first_name": "阿德莱德",
            "last_name": "(ADPL) ",
            "election": 20,
            "party": "Hong Kong Association for Democracy and People's Livelihood",
            "state": "Nationwide",
            "priority": 1,
            "description": "<p>Pan-democracy -<b>Not Playable</b></p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Logo_of_the_Hong_Kong_Association_for_Democracy_and_People%27s_Livelihood.svg/400px-Logo_of_the_Hong_Kong_Association_for_Democracy_and_People%27s_Livelihood.svg.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50007,
        "fields": {
            "first_name": "民主黨",
            "last_name": "(DP)",
            "election": 20,
            "party": "Democratic Party",
            "state": "Nationwide",
            "priority": 1,
            "description": "<p>Pan-democracy -<b>Not Playable</b></p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Democratic_Party_%28Hong_Kong%29_logo.svg/500px-Democratic_Party_%28Hong_Kong%29_logo.svg.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 109261,
        "fields": {
            "candidate": 1001,
            "running_mate": 1002
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            50000,
            50001,
            50002,
            50003,
            50004,
            50005,
            50006,
            50007
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            50000,
            50001,
            50002,
            50003,
            50004,
            50005,
            50006,
            50007
        ]
    }
]

jet_data = {
    "headerColor": "#b51a00",
    "windowColor": "#ffffff",
    "containerColor": "#669c35",
    "innerWindowColor": "#ffffff",
    "bannerImageUrl": "https://i.imgur.com/iz8sPEl.png",
    "backgroundImageUrl": "https://www.news.cn/english/2021-09/20/1310198480_16321021408371n.jpg",
    "endingTextColor": "#000000",
    "customQuote": "",
    "gameTitle": "召喚性訓練。"
}

//#startcode


corrr = '\n              <h2>召喚性訓練。</h2>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#b51a00";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#ffffff";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#669c35";

document.getElementById("header").src = "https://i.imgur.com/iz8sPEl.png";

document.body.background = "https://www.news.cn/english/2021-09/20/1310198480_16321021408371n.jpg";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#ffffff!important;}</style>";

//#endcode
