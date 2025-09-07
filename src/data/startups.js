const startups = [
    {
      "name": "Urban Company",
      "industry": "Home Services",
      "location": "Gurugram, Haryana",
      "founded": 2014,
      "funding": "Series E",
      "logo": "https://play-lh.googleusercontent.com/axx68Ova4QcYBxfuXy5MQQpW2WUd_XbQtqkHLZewNn4II1Imkr8yc5UL9HwP80XS35o",
      "website": "https://www.urbancompany.com"
    },
    {
      "name": "FirstClub",
      "industry": "Quick Commerce",
      "location": "Bengaluru, Karnataka",
      "founded": 2025,
      "funding": "Series A",
      "logo": "https://media.licdn.com/dms/image/v2/D560BAQF03vnJ1gnB2g/company-logo_200_200/B56ZbuF3peHUAI-/0/1747751238701/firstclub_private_limited_logo?e=2147483647&v=beta&t=GwMMzntY0vi5VJg8VHug6Ey-nuMAudsDTGETxNsv8vw",
      "website": "https://www.firstclub.site/"
    },
    {
      "name": "Cluely",
      "industry": "AI / Productivity",
      "location": "Global",
      "founded": 2023,
      "funding": "Seed",
      "logo": "https://www.startuphub.ai/wp-content/uploads/cluely-logo-6867e966cd7ec.jpg",
      "website": "https://cluely.com/",
      "description": "An AI-powered productivity assistant that helps teams manage tasks and workflows efficiently."
    },
    {
      "name": "Pointhound",
      "industry": "Fintech / Travel",
      "location": "San Francisco, CA",
      "founded": 2023,
      "funding": "Seed",
      "logo": "https://www.pointhound.com/apple-touch-icon.png",
      "website": "https://www.pointhound.com",
      "description": "An AI-powered platform that helps users earn and redeem credit card points for free flights."
    },
    {
      "name": "Intuned",
      "industry": "Fintech / AI",
      "location": "Kirkland, WA",
      "founded": 2022,
      "funding": "Seed",
      "logo": "https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/logo_template_img_16641764504950.png",
      "website": "https://intunedhq.com/",
      "description": "Developing AI-driven tools for consumer underwriting automation."
    },
    {
      "name": "Zepto",
      "industry": "Quick Commerce",
      "location": "Mumbai, Maharashtra",
      "founded": 2021,
      "funding": "Series C",
      "logo": "https://upload.wikimedia.org/wikipedia/en/7/7d/Logo_of_Zepto.png",
      "website": "https://www.zeptonow.com/"
    },
    
    {
      "name": "Ditto Insurance",
      "industry": "InsurTech",
      "location": "Bengaluru, Karnataka",
      "founded": 2020,
      "funding": "Seed",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-P835DwtAY_FqGnpV2ob1kIT5puy7q51X0VwhnUDwICLuDx9R8vsH2BuRETFKSs2t48&usqp=CAU",
      "website": "https://www.joinditto.in/"
    },
    {
      "name": "CRED",
      "industry": "Fintech",
      "location": "Bengaluru, Karnataka",
      "founded": 2018,
      "funding": "Series D",
      "logo": "https://upload.wikimedia.org/wikipedia/en/7/7c/CRED_%28FinTech_company%29_logo.png",
      "website": "https://cred.club/"
    },

    {
      "name": "CityMall",
      "industry": "E-commerce",
      "location": "Gurugram, Haryana",
      "founded": 2019,
      "funding": "Series C",
      "logo": "https://i.pinimg.com/736x/e3/84/03/e38403db486a75a2b1e43779545c2bb5.jpg",
      "website": "https://www.citymall.live/"
    },
    {
      "name": "Skyroot Aerospace",
      "industry": "Aerospace",
      "location": "Hyderabad, Telangana",
      "founded": 2018,
      "funding": "Series B",
      "logo": "https://media.licdn.com/dms/image/v2/C4D1BAQFNO0vQlQYuVw/company-background_10000/company-background_10000/0/1652155564647/skyroot_aerospace_cover?e=2147483647&v=beta&t=2RNdMksBgthQzGbmBncPVVg4t1tZv8XwFq1-uS0leXE",
      "website": "https://www.skyroot.in/"
    },
    {
      "name": "Rupeek",
      "industry": "Fintech",
      "location": "Bengaluru, Karnataka",
      "founded": 2015,
      "funding": "Series E",
      "logo": "https://avatars.githubusercontent.com/u/12999326?s=200&v=4",
      "website": "https://rupeek.com/"
    },
    
    
    {
      "name": "PharmEasy",
      "industry": "HealthTech",
      "location": "Mumbai, Maharashtra",
      "founded": 2015,
      "funding": "Series E",
      "logo": "https://images.seeklogo.com/logo-png/47/2/pharmeasy-logo-png_seeklogo-471933.png",
      "website": "https://pharmeasy.in/"
    },
    {
      "name": "Meesho",
      "industry": "E-commerce",
      "location": "Bengaluru, Karnataka",
      "founded": 2015,
      "funding": "Series F",
      "logo": "https://images.moneycontrol.com/static-mcnews/2023/06/Meesho-682x435.jpg",
      "website": "https://www.meesho.com/"
    },
    {
      "name": "Digit Insurance",
      "industry": "InsurTech",
      "location": "Mumbai, Maharashtra",
      "founded": 2016,
      "funding": "Series D",
      "logo": "https://images.seeklogo.com/logo-png/46/2/digit-insurance-logo-png_seeklogo-465810.png",
      "website": "https://www.godigit.com/"
    },
    
    {
      "name": "Cuemath",
      "industry": "EdTech",
      "location": "Bengaluru, Karnataka",
      "founded": 2011,
      "funding": "Series D",
      "logo": "https://cdn-1.webcatalog.io/catalog/cuemath/cuemath-social-preview.png?v=1714777598644g",
      "website": "https://www.cuemath.com/"
    },
    {
      "name": "Apna",
      "industry": "HRTech",
      "location": "Bengaluru, Karnataka",
      "founded": 2019,
      "funding": "Series D",
      "logo": "https://static-asset.inc42.com/logo/apna.png",
      "website": "https://www.apna.co/"
    },
    {
      "name": "Slice",
      "industry": "Fintech",
      "location": "Bengaluru, Karnataka",
      "founded": 2018,
      "funding": "Series D",
      "logo": "https://res.cloudinary.com/slicepay/image/upload/v1681372011/website/sliceit-v2/metadata/android-chrome-192x192.png",
      "website": "https://www.sliceit.com/"
    },
    {
      "name": "Byju's",
      "industry": "EdTech",
      "location": "Bengaluru, Karnataka",
      "founded": 2011,
      "funding": "Series F",
      "logo": "https://play-lh.googleusercontent.com/7Ce16xDkZW-GmTSjvcfhBFQwe67Uu79Hzr-M4JAfvvq7qX_cTPsl7TcbhFZeW3MdpUGm",
      "website": "https://www.byjus.com/"
    },
    {
      "name": "Tata 1mg",
      "industry": "HealthTech",
      "location": "Gurugram, Haryana",
      "founded": 2015,
      "funding": "Series E",
      "logo": "https://play-lh.googleusercontent.com/yjbAu08_Ahes38IEMV8slP91zgjh2mdh5xpZefvcbYuZxR8O7FZFderRn2Ivaz0uR2Lw",
      "website": "https://www.1mg.com/"
    },
    {
      "name": "Licious",
      "industry": "FoodTech",
      "location": "Bengaluru, Karnataka",
      "founded": 2015,
      "funding": "Series F",
      "logo": "https://etimg.etb2bimg.com/photo/91981434.cms",
      "website": "https://www.licious.in/"
    },
    {
      "name": "BoAt",
      "industry": "Consumer Electronics",
      "location": "New Delhi, Delhi",
      "founded": 2016,
      "funding": "Series C",
      "logo": "https://images.seeklogo.com/logo-png/37/1/boat-logo-png_seeklogo-379185.png",
      "website": "https://www.boat-lifestyle.com/"
    },
    
    {
      "name": "LivSpace",
      "industry": "Interior Design",
      "location": "Bengaluru, Karnataka",
      "founded": 2014,
      "funding": "Series F",
      "logo": "https://play-lh.googleusercontent.com/o-E9Y3zbwIWiWvqqIOgD51_NOLN2D6v7ZYX0n8sPFh4kthYUm7y0ZcRZagBCPbeChLs",
      "website": "https://www.livspace.com/"
    }
  ];

export default startups;