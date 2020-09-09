const postService = {
    getData(db, user_id){
        return db  
            .select('*')
            .from('post')
            .where('user_id',user_id)
    },

}

module.exports = postService;