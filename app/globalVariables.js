var apiBaseUrl = "http://185.208.181.61:8080";
var apis = {
    'agencies': apiBaseUrl + "/ui/agency/list",
    'newsInformation': apiBaseUrl + "/ui/kpi/homepage",
    'search': apiBaseUrl + "/ui/news/search",

    'recentNews': apiBaseUrl + "/ui/news/recent",    
    'getArticleData': apiBaseUrl + "/ui/news/article",
    'getTopicsData': '/api/dashboard/topics.json',//apiBaseUrl + "/ui/news/topics",

    'login': '/api/auth/login',
    'getCloudWord': '/api/dashboard/cloudWord.json',
    'getListNews': '/api/dashboard/listNews.json',
    'getListNewsBySearch': '/api/dashboard/listNews.json',
    'getSocialInfo': '/api/social/getSocialInfo.json',
    'getProfileData': '/api/profile/profileData.json',
    'searchProfile': '/api/profile/searchProfile.json',
    'searchForMap': '/api/map/searchForMap.json',
    'getBulletinSet': '/api/bulletin/getBulletinSet.json',
    'update': '/api/bulletin/update',
    'deleteBulletin': '/api/bulletin/deleteBulletin',
    'searchBulletin': '/api/bulletin/searchBulletin.json',
    'getAgencyData': '/api/bulletin/agency.json',
    'getCategoryList': '/api/bulletin/category.json',
    'sendTicket': '/api/support/sendTicket'

};
var agencies = [];

