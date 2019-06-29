<<<<<<< HEAD
import router from "../router"
var mutation={

}

export default mutation;
=======
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
>>>>>>> cc210c6abc987026d522ba1b6dd64e8a435cb434
