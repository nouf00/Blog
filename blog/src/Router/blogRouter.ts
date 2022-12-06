import express from 'express';
import { deletBlog, getallblog, NewBlog, Updatablog } from '../Contllor/blogC';
import { auth } from '../Middalwaer/auth';
import { valdation } from '../Middalwaer/valdation';
import { addBolg, BlogDelet, UpdataBolg } from '../Zod/blogZod';

const router =express.Router()

router.post("/add", auth, valdation(addBolg), NewBlog )
router.post("/updata/:id", auth, valdation(UpdataBolg), Updatablog )
router.delete("/updata/:id", auth, valdation(BlogDelet), deletBlog)
router.get("/", auth, getallblog )
