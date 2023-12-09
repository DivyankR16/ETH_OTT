// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract EthBiscuits is ERC1155{

    // Variables :

    // Structure and mapping for User

    struct User{
        string name;
        address useraddress;
        uint256 subscribe;
        uint256[] videoID;
    }
    mapping(address => User) users;
    

    // Structure and mapping for Videos

    uint256 private id=1;

    struct Video{
        string VideoURI;
        address owner;
        uint256 views;
        uint256 likes;
        uint256 dislikes;
        string Type;
        uint256 duration;
    }
    mapping(uint256 => Video) videos;

    // Constructor :

    constructor() ERC1155("") {
        _mint(msg.sender,1,10000000000*10**6,"");
    }


    // Functions :

    // Upload Video Function    
    function uploadVideo(string memory _VideoURI, string memory _type, uint256 _duration) external {
        id +=1;
        videos[id].VideoURI = _VideoURI;
        videos[id].owner = msg.sender;
        videos[id].views = 0;
        videos[id].likes = 0;
        videos[id].dislikes = 0;
        videos[id].Type = _type;
        videos[id].duration = _duration;

        _mint(msg.sender,id,1,bytes(""));

        users[msg.sender].videoID.push(id);
    }

    // Function to get users video
    function getUserVideo(address user) external view returns (Video[] memory){
        uint256[] memory vid = users[user].videoID;
        Video[] memory VideoList = new Video[](vid.length);
        for (uint256 i = 0; i <= vid.length-1; i++) {          
            VideoList[i]=Video(videos[vid[i]].VideoURI,videos[vid[i]].owner,videos[vid[i]].views,videos[vid[i]].likes,videos[vid[i]].dislikes,videos[vid[i]].Type, videos[vid[i]].duration);
        }

        return VideoList;
    }
    
    // Function to get all the videos
    function getALLVideos() external view returns (Video[] memory){
        Video[] memory VideoList = new Video[](id-1);

        for (uint256 i = 2; i <= id; i++) {
            VideoList[i-2]=Video(videos[i].VideoURI,videos[i].owner,videos[i].views,videos[i].likes,videos[i].dislikes,videos[i].Type,videos[i].duration);
        }

        return VideoList;
    }

    // Function to Change Authority
    function authorityChange(address newowner, uint256 videoId ) external {
        require(videos[videoId].owner == msg.sender, "You are not the owner of this video");
        require(balanceOf(msg.sender,videoId)>0,"You do not have video nft");
        safeTransferFrom(msg.sender, newowner, videoId, 1, bytes(""));
        videos[videoId].owner = newowner;
        uint256[] memory vididuser = new uint256[](users[msg.sender].videoID.length);
        for(uint256 i=0;i<users[msg.sender].videoID.length;i++){
            if(videoId!=users[msg.sender].videoID[i]){
                vididuser[i]=users[msg.sender].videoID[i];
            }
            else{
                vididuser[i]=0;
            }
        }
        // removed from previous user
        users[msg.sender].videoID = vididuser;

        // assigned to new user
        users[newowner].videoID.push(videoId);
    }

    // Like Fucntion
    function like(uint256 _VideoId) external{
        videos[_VideoId].likes++;
    }

    // Dislike Function
    function disLike(uint256 _VideoId) external{
        videos[_VideoId].dislikes++;
    }

    // Popukarity Checker Function
    function popularity(uint256 _VideoId) public view returns (uint256){
        // Vaibhav-Pandey-Khajuriya Equation
        uint256 popu = (10**6 +videos[_VideoId].likes);
        return popu;
    }

    // Automated Popularity Maker
    function automatedPopularityMaker(uint256 _VideoId) public view returns (uint256){
        uint256 price = videos[_VideoId].duration * popularity(_VideoId);
        return price;
    }

    // Fucntion to View Video
    function viewUpdate(uint256 _VideoId) external{
        uint256 price = automatedPopularityMaker(_VideoId);
        console.log(price);
        videos[_VideoId].views++;
        safeTransferFrom(msg.sender, videos[_VideoId].owner, 1, price, "");
    }

    // Function to Subscribe
    function subscribe(address to) external{
        users[to].subscribe++;
    }

    // Function to Register NEw User
    function registerUSer(string memory _name) external{
        users[msg.sender].name = _name;
        users[msg.sender].useraddress = msg.sender;
        users[msg.sender].subscribe = 0;
        _mint(msg.sender,1,20000*(10**6),"");
    }

    // View User Function
    function viewUser(address user) external view returns (User memory){
        return users[user];
    }

    // View Video Function
    function viewVideo(uint256 _id) external view returns (Video memory){
        return videos[_id];
    }

    function checkbalance(address user) external view returns (uint256){
        uint256 balance = balanceOf(user, 1);
        return balance;
    }
}