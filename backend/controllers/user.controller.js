import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
      try{
        const loggedInUserId=req.user._id;
        const users=await User.find({_id:{$ne:loggedInUserId}}).select("-password -__v");
        res.status(200).json({message:"Users fetched successfully",data:users});
      }
      catch(error){
        console.log("Error in getUsersForSidebar:",error.message);
        res.status(500).json({message:"Server error",error:error.message});
      }
}