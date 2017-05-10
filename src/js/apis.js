/**
 * Created by zhudm on 2017/4/24.
 */

angular.module('ctApp').value('$apis', {
	userBind: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "userWxService.bindingUser",
		method: 'POST'
	},
	userInfo: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "userWxService.getPyUserInfoDetail",
		method: 'POST'
	},
	getCarShopList: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "merchantWxService.getMerchantListForBespeakItem",
		method: 'POST'
	},
	applyOrder: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "bespeakWxService.applyBespeak",
		method: 'POST'
	},
	applyPtxzOrder: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "bespeakWxService.applyBespeakPtxz",
		method: 'POST'
	},
	getOrderList: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "bespeakWxService.myBespeakList",
		method: 'POST'
	},
	getOrderDetail: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "bespeakWxService.getBespeakInfoDetails",
		method: 'POST'
	},
	getCode: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "userWxService.sendPhoneSms",
		method: 'POST'
	},
	verifyPhone: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "userWxService.verifyPhone",
		method: 'POST'
	},
	bindingPhone: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "userWxService.bindingPhone",
		method: 'POST'
	},
	getCarNoList: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "carWxService.myCarInfoList",
		method: 'POST'
	},
	addCarNo: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "carWxService.addMyCarInfo",
		method: 'POST'
	},
	editCarNo: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "carWxService.updateMyCarInfo",
		method: 'POST'
	},
	delCarNo: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "carWxService.deleteMyCarInfo",
		method: 'POST'
	},
	cancelOrder: {
		url: '/ct-proxy-api/wx/gateWay.do',
		serviceName: "bespeakWxService.cancelBespeak",
		method: 'POST'
	},
	getSDKSign: {
		url: '/ct-proxy-api/wechat/getJsSdkSign.do',
		method: 'POST'
	}
});