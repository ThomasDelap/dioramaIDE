
export default {

    addTab: function(tab){
        return {
            type: 'TAB_CREATED',
            data: tab
        }
    },

    removeTab: function(tabID){
        return {
            type: 'TAB_REMOVED',
            data: tabID
        }
    },

    activeTab: function(tabID){
        return {
            type: 'TAB_ACTIVE',
            data: tabID
        }
    },

    fetchTab: function(){
        return {
            type: 'TAB_FETCH'
        }
    }

}
