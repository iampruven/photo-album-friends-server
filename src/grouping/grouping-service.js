const GroupingService = {
    getGroupName(db){
        return db 
            .select('*')
            .from('grouping')
    },
    insertNewGroupName(db,newName){
        return db
            .insert(newName)
            .into('grouping')
            .returning('*')
            .then((row)=>{
                return row[0]
            })
    },

}

module.exports = GroupingService;