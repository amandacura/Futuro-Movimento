if (self.CavalryLogger) { CavalryLogger.start_js(["8sBE8"]); }

__d("ChatSidebarComposeLink.react",["fbt","ChatOpenTabEventLogger","CurrentUser","FantaTabActions","Link.react","MessengerState.bs","React","TooltipData"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){return a.call(this,b)||this}var d=c.prototype;d.render=function(){var a=g._("Nova mensagem");return b("React").createElement(b("Link.react"),babelHelpers["extends"]({label:a,className:this.props.className,href:"#",onClick:this.$1},b("TooltipData").propsFor(a,"below")))};d.$1=function(a){var c=b("MessengerState.bs").createNewLocalThreadGenerateID(b("CurrentUser").getID());b("FantaTabActions").openNewMessageTab(c,"compose_link");b("ChatOpenTabEventLogger").logClickOpen("sidebar",c);a.preventDefault()};return c}(b("React").Component);e.exports=a}),null);