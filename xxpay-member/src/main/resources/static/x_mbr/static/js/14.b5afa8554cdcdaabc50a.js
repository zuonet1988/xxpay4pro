webpackJsonp([14],{"4qJb":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("CJJO"),n=i("s0MJ").dateUtils,o={data:function(){return{htmlProportion:"",htmlWidth:"",htmlheight:"",page:1,limit:20,member:{},background:"#FF9000",color:"#FFFFFF",historyList:[],refreshing:!1,loading:!1,loadedAll:!1,isGetMore:!0}},created:function(){this.htmlWidth=document.documentElement.clientWidth||document.body.clientWidth,this.htmlheight=document.documentElement.clientHeight||document.body.clientHeight,this.htmlProportion=this.htmlWidth/750,this.getList(),this.getMemberDetails()},methods:{getMemberDetails:function(){var t=this;Object(s.o)().then(function(e){t.member=e.data}).catch(function(t){console.log(t)})},getList:function(){var t=this;Object(s.t)(t.page,t.limit).then(function(e){t.loading=!1;var i=t.setColumns(e.data);t.historyList=t.refreshing?i:t.historyList.concat(i),i.length<t.limit?(t.isGetMore=!1,t.loadedAll=!0):t.loadedAll=!1,t.refreshing=!1}).catch(function(e){t.refreshing=!1,console.log(e)})},setColumns:function(t){var e=[];return t.forEach(function(t){e.push({pointsHistoryId:t.pointsHistoryId,memberNo:t.memberNo,changePoints:t.changePoints,bizOrderId:null==t.bizOrderId?"":t.bizOrderId,bizType:1==t.bizType?"积分商品兑换":2==t.bizType?"充值赠送":3==t.bizType?"消费":4==t.bizType?"退款":5==t.bizType?"开卡赠送":6==t.bizType?"导入":"",createTime:n.format2Datetime(t.createTime)})}),e},refresh:function(){this.refreshing=!0,this.isGetMore=!0,this.$refs.container.scrollTop=0,this.page=1,this.getList(),this.getMemberDetails()},load:function(){this.loading=!0,this.page=Math.floor(this.list.length/this.limit)+1,this.isGetMore?this.getList():this.loadedAll=!0},getDetail:function(t){this.$router.push({path:"/user/pointsHistory/detail",query:{pointsHistoryId:t.pointsHistoryId}})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-white",style:{height:t.htmlheight+"px"}},[i("div",{staticClass:"center_top",style:{height:160*t.htmlProportion+"px",background:t.background,color:t.color}},[i("div",{staticClass:"user-body-center"},[i("span",{staticClass:"user-body-top"},[t._v("积分 : "+t._s(t.member.points))])])]),t._v(" "),i("mu-container",{ref:"container"},[i("mu-load-more",{attrs:{refreshing:t.refreshing,loading:t.loading,"loaded-all":t.loadedAll},on:{refresh:t.refresh,load:t.load}},[i("mu-list",[t._l(t.historyList,function(e,s){return[i("div",{key:s,staticClass:"uni-list-cell",on:{click:function(i){return t.getDetail(e)}}},[i("div",{staticClass:"uni-list-cell-navigate uni-navigate-right uni-media-list"},[i("div",{staticClass:"uni-media-list-body"},[i("div",{staticClass:"list-body-column"},[i("div",{staticClass:"uni-media-list-text-top"},[i("span",[t._v("变动积分: "+t._s(e.changePoints))]),t._v(" "),i("span",{staticClass:"text-B text-small text-orange"},[t._v(t._s(e.bizType))])]),t._v(" "),i("div",{staticClass:"uni-media-list-text-bottom"},[i("span",[t._v("交易时间:"+t._s(e.createTime))])])])])])])]})],2)],1)],1)],1)},staticRenderFns:[]};var l=i("C7Lr")(o,r,!1,function(t){i("NqvG")},null,null);e.default=l.exports},NqvG:function(t,e){}});