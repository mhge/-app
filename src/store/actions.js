<<<<<<< HEAD
var action={
  
}

export default action;
=======
var actions = {
	jian({commit}){
		setTimeout(function(){
			commit('jian')
		},2000)
	},
	onClickLogin({commit},name){
		setTimeout(function(){
			commit('onClickLogin',name)
		},100)
	}
}
export default actions;
>>>>>>> cc210c6abc987026d522ba1b6dd64e8a435cb434
