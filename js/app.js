angular.module('myApp',['infinite-scroll'])
.controller('DemoController',['$scope','$element','$rootScope',function($scope, $element, $rootScope){
    $scope.repeatimages=[];
    $scope.loadMore = function() {    
       populateimages();  
    };
    function populateimages(){
        angular.forEach($scope.imagedetails, function(value, key){
            $scope.repeatimages.push(value);
    
        });
    }
    
    $scope.imagedetails = [
                    {
                        userpic: 'img/images1.jpeg',
                        name: 'Aisha',
                        title:'Updated new photo',
                        profilepic: 'img/Nature.jpg'
                    },
                    {
                        userpic: 'img/truck.jpg',
                        title:'Updated Profile Picture',
                        name: 'Chethan',
                        profilepic: 'img/bmw_vision_future_luxury_car-2560x1440.jpg'
                    },
                    {
                        userpic: 'img/image2.jpg',
                        name: 'Lekha',
                        title:'Updated new photo',
                        profilepic: 'img/image5.jpeg'
                    },
                    {
                        userpic: 'img/photo1.jpg',
                        name: 'Fayaz',
                        title:'Updated Profile Picture',
                        profilepic: 'img/image3.jpg'
                    },
                    {
                        userpic: 'img/image3.jpg',
                        name: 'Shikha',
                        title:'Updated new photo',
                        profilepic: 'img/watch.jpg'
                    },
                    {
                        userpic: 'img/image4.jpg',
                        name: 'Riya',
                        title:'Shared new photo',
                        profilepic: 'img/bride.jpg'
                    },
                    {
                        userpic: 'img/naturepic.jpg',
                        name: 'Reethu',
                        title:'Shared new photo',
                        profilepic: 'img/dress.jpg'
                    }
     ];
      
      
   
    populateimages();
    console.log($scope.imagedetails);
    $scope.restorefeed=[];
    $scope.news = function() {    
       feedimages();  
    };
    function feedimages(){
        angular.forEach($scope.newfeeds, function(value, key){
            $scope.restorefeed.push(value);
    
        });
    }
    
    feedimages();
    console.log($scope.newfeeds);
    $rootScope.scrollposition = 0;
    $scope.getoffset = function(){
        var element = $element;
        return element.offset().top;
    };
     $scope.newfeeds = [
         {
    pic:'img/truck.jpg',
    name:'Arjun',
    feeds:'Replied to his own comment '
        },
          {
    pic:'img/image2.jpg',
    name:'Likith',
    feeds:'replied to arjuns comment'
        },
          {
    pic:'img/image3.jpg',
    name:'Skanda',
    feeds:'likes Niranths photo'
        },
          {
    pic:'img/image4.jpg',
    name:'Fiyaz',
    feeds:'commented on Skndas photo'
        },
          {
    pic:'img/image5.jpeg',
    name:'Chethan',
    feeds:'Shared Manjith singhs post'
        }
     ]  
     $scope.chats = [
         {
         pic : 'img/Nature.jpg',
         name : 'Diya'
         
     },
         {
         pic : 'img/images1.jpeg',
         name : 'Lekha'
         
     },
         {
         pic : 'img/image2.jpg',
         name : 'Chaman'
         
     },
         {
         pic : 'img/image3.jpg',
         name : 'Shreya'
         
     },
         {
         pic : 'img/image4.jpg',
         name : 'Shika'
         
     },
         {
         pic : 'img/image5.jpeg',
         name : 'Rahul'
         
     },
         {
         pic : 'img/Nature.jpg',
         name : 'Shayan'
         
     },
         {
         pic : 'img/images1.jpeg',
         name : 'Seema'
         
     },
         {
         pic : 'img/image2.jpg',
         name : 'Arjun'
         
     },
         {
         pic : 'img/image3.jpg',
         name : 'Likith'
         
     },
         {
         pic : 'img/image4.jpg',
         name : 'Skanda'
         
     }
     ]
} ]);