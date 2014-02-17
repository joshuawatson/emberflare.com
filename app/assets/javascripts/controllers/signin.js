EmberFlare.SigninController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
  signinFailed: false,

  actions: {
    sessionAuthenticationFailed: function() {
      this.set("signinFailed", true);
    },

    clearWarning: function() {
      this.set("signinFailed", false);
    }
  }
});