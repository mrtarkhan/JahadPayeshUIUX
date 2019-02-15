let serviceFunction = ['$http', '$q', function ($http, $q) {

    var urls = {};
    var username = '';



    function getApiURLs() {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: window.location.origin + '/api/shell/urls.json',
                headers: {

                },
                params: {}
            }
            $http(req)
                .then(function (result) {
                    urls = result.data;
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }





    //auth
    function login(user, pass) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.login,
                headers: {

                },
                params: {
                    "username": user,
                    "password": pass
                }
            }
            $http(req)
                .then(function (result) {
                    username = user;
                    defer.resolve(result);
                }, function (error) {
                    username = '';
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }





    //dashboard
    function getNewsInformation() {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.newsInformation,
                headers: {

                },
                params: {
                }
            };
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function getCloudWord(cloudType) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.getCloudWord,
                headers: {

                },
                params: {
                    type: cloudType
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function getRecentlyNews() {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.recentNews,
                headers: {

                },
                params: {
                    //test: 'test'
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function getListNews() {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.getListNews,
                headers: {

                },
                params: {
                    //test: 'test'
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }





    //article
    function getArticleData(id) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.getArticleData ,
                headers: {

                },
                params: {
                    "id": id
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }





    function getListNewsBySearch(keyword) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.getListNewsBySearch ,
                headers: {

                },
                params: {
                    keyword: keyword
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function getSocialInfo(data) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.getSocialInfo ,
                headers: {

                },
                params: {
                    social: data
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }





    //profile
    function getProfileData(id) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.getProfileData ,
                headers: {

                },
                params: {
                    "id": id
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function searchProfile (word) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.searchProfile ,
                headers: {

                },
                params: {
                    "keyword": word
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }



    //search
    function search(keyword, agency, startDate, endDate, category) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.search ,
                headers: {

                },
                params: {
                    "keyword": keyword,
                    "agencies":agency, 
                    "datemin":startDate, 
                    "datemax": endDate, 
                    "topic":category
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }





    //map
    function searchForMap(agency, category) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.searchForMap,
                headers: {

                },
                params: {
                    "agency": agency,
                    "category": category
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }






    //bulletin
    function getBulletinSet(username) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.getBulletinSet,
                headers: {

                },
                params: {
                    "username": username
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function update(username, data) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'POST',
                url:  apis.update,
                headers: {

                },
                params: {
                    "username": username,
                    "data": data
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function deleteBulletin(username, data) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'POST',
                url:  apis.deleteBulletin ,
                headers: {

                },
                params: {
                    "username": username,
                    "data": data
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function searchBulletin(username, data) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url:  apis.searchBulletin ,
                headers: {

                },
                params: {
                    "username": username,
                    "data": data
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function getAgencyData() {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url:  apis.getAgencyData,
                headers: {

                },
                params: {}
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }

    function getCategoryList() {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url:  apis.getCategoryList ,
                headers: {

                },
                params: {}
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }





    //ticket
    function sendTicket(ticket) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'POST',
                url:  apis.sendTicket,
                headers: {

                },
                params: {
                    "title": ticket.title,
                    "description": ticket.description,
                    "place": ticket.place
                }
            }
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }





    //agencies
    function getAgencies() {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: apis.agencies,
                headers: {

                },
                params: {}
            };
            $http(req)
                .then(function (result) {
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
        } catch (e) {
            defer.reject(e);
        } finally {
            return defer.promise;
        }
    }





    return {

        username: username,
        getApiURLs: getApiURLs,
        

        //auth
        login: login,


        //article
        getArticleData: getArticleData,
        
        
        //dashboard
        getNewsInformation: getNewsInformation,
        getCloudWord: getCloudWord,
        getRecentlyNews: getRecentlyNews,
        getListNews: getListNews,


        getListNewsBySearch: getListNewsBySearch,
        getSocialInfo: getSocialInfo,


        //profile
        getProfileData: getProfileData,
        searchProfile: searchProfile,

        //search
        search: search,


        //map
        searchForMap: searchForMap,


        //bulletin
        getBulletinSet: getBulletinSet,
        update: update,
        deleteBulletin: deleteBulletin,
        getAgencyData: getAgencyData,
        getCategoryList: getCategoryList,
        searchBulletin: searchBulletin,


        //ticket
        sendTicket: sendTicket,


        
        getAgencies:getAgencies
    }

}];

let DataService = serviceFunction;

export {
    DataService
}