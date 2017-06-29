angular.module('imageApp',[])
.controller('ImageDataCtrlr',['$scope',function($scope){
    
    
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
}
]);