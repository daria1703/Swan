const express = require('express');
const { execMap } = require('nodemon/lib/config/defaults');
const router = express.Router();
// importowanie schematów
const Post = require('../models/Post');


// zwraca wszystkie posty
router.get('/', async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
       res.json({message: err}); 
    }
});

// uzywamy post bo chcemy coś wrzucić do bazy danych

router.post('/', async (req, res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

// zapisywanie w bazie danych
    try{
    const saveedPost = await post.save();
    res.json(saveedPost);
    } catch (err){
        res.json({message: err});
    }
});

//Zwraca jeden, konkretny post

router.get('/:postId', async (req, res)=>{
    try{
    const post = await Post.findById(req.params.postId)
    res.json(post)
    } catch(err){
        res.json({message: err});
    }
});

//Usuwanie

router.delete('/:postId', async (req,res)=>{
    try{
    const removePost =  await Post.remove({_id: req.params.postId});
    res.json(removePost);    
    } catch(err){
        res.json({message: err});
    }
});

//Aktualizacja

router.patch('/:postId',async (req,res)=>{
    try{
        const updateedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        );
        res.json(updateedPost);
    } catch(err){
        res.json({message: err});
    }
})

module.exports = router;