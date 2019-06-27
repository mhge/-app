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
		router.push('/my')
	}
}

export default mutations;