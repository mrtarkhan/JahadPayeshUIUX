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
                    'Content-Type': 'application/json'
                },
                data: {}
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
                url: window.location.origin + apis.login,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.getNewsInformation,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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

    function getCloudWord(cloudType) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: window.location.origin + apis.getCloudWord,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.getRecentlyNews ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.getListNews,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.getArticleData ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.getListNewsBySearch ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.getSocialInfo ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.getProfileData ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.searchProfile ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
    function search(keyword) {
        var defer = $q.defer();
        try {
            var req = {
                method: 'GET',
                url: window.location.origin + apis.search ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "keyword": keyword
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
                url: window.location.origin + apis.searchForMap,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.getBulletinSet,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.update,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.deleteBulletin ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.searchBulletin ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.getAgencyData,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {}
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
                url: window.location.origin + apis.getCategoryList ,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {}
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
                url: window.location.origin + apis.sendTicket,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
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
                url: window.location.origin + apis.agencies,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {}
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