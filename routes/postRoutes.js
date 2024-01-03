import express from "express"
import { getAllPosts, addPosts, updatePost, getPostById, deletePost, getUserPostById, likeThePost, bookmarkPost, removeBookmarkPost, addCommentOnPost }
    from "../controllers/postControler.js"

const postRouter = express.Router()

postRouter.get("/", getAllPosts)
postRouter.get("/:id", getPostById)
postRouter.post("/", addPosts)
postRouter.patch("/:id", updatePost)
postRouter.delete("/:id", deletePost)
postRouter.get("user/:id", getUserPostById)
postRouter.put("/:id", likeThePost)
postRouter.put("/bookmark/:id", bookmarkPost)
postRouter.put("/removebookmark/:id", removeBookmarkPost)

postRouter.post("/comment/:id", addCommentOnPost)


export default postRouter