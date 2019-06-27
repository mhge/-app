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