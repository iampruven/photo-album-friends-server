const postService = {
  getPost(db, group_id) {
    return db.select("*").from("post").where("group_id", group_id);
  },
  insertPost(db, img_url, description, group_id, user_id){
      return db
        .insert(img_url, description, group_id, user_id)
        .into('post')
        .returning('*')
        .then((row)=>{
            console.log('row 0', row[0])
            return row[0]
        })
  },

};

module.exports = postService;
