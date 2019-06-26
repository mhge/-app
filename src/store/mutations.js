import router from '../router'
var mutations = {
	add:function(state){
		state.count++
	},
	jian(state){
		state.count--
	},
	onClickLogin(state,name){
		state.name = name
		router.push('/wode')
	}
}

export default mutations;