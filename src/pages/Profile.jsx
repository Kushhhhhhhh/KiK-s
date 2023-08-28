import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FriendsCard, Loading, PostCard, ProfileCard, TopBar } from "../components";

  const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(null);
  const { posts } = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(false);
const handleDelete = () => {}
const handleLikePost = () => {}

  return <>
    <div className="home w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:">
      <TopBar />
      <div className="w-full flex gap-2 lg:gap-4 md:pl-4 pt-5 pb-10 h-full">
        <div className="hidden w-1/3 lg:w-1/4 md:flex flex-col gap-6 overflow-hidden">
       <ProfileCard user={userInfo} />
       <div className="block lg:hidden">
        <FriendsCard friends={userInfo?.friends} />
        </div>
       </div>
      </div>

       <div className="hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-hidden">
       <FriendsCard friends={user?.friends} />
       </div>
      </div>
    
     <div className="flex-1 h-full bg-primary px-4 flex flex-col gap-6 overflow-y-auto">
     {loading ? (
       <Loading />
     ) : posts?.length > 0 ? ( 
       posts?.map((post) => (
         <PostCard 
           post={post}
           key={post?._id}
           user={user}
           deletePost={handleDelete}
           likePost={handleLikePost}
         />
       ))
     ) : (
       <div className="flex w-full h-full items-center justify-center">
         <p className="text-lg text-ascent-2">No Post Available</p>
       </div>
     )}
     </div>
     <div className="hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-hidden">
    <FriendsCard friends={userInfo?.friends} />
     </div>
    </>;
};

export default Profile;
